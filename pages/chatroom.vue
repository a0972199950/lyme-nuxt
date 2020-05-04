<template>
  <section class="chatroom">
    <div v-if="canvasOpen" class="chatroom__canvas">
      <Canvas ref="canvas" />

      <div class="chatroom__canvas-control">
        <wired-button
          elevation="5"
          @click="canvasOpen = false"
        >
          Cancel
        </wired-button>

        <wired-button
          elevation="5"
          @click="sendImage"
        >
          Send
        </wired-button>
      </div>
      
    </div>

    <div class="chatroom__header">
      <font-awesome-icon :icon="['fa', 'chevron-left']" @click="$router.push('/entry')" />
      <h1 class="chatroom__name">Chatroom({{ userAmount }})</h1>
      <span></span>
    </div>

    <div ref="chatroomBody" class="chatroom__body">
      <wired-spinner
        class="chatroom__spinner"
        :style="{ top: loading ? '3rem' : '-3rem' }"
        spinning
        duration="1000"
      />

      <button 
        v-if="!loading"
        class="chatroom__load-more"
        @click="loadMore"
      >
        Load more
      </button>

      <component
        v-for="(msg, index) in msgs"
        :key="`msg-${index}`"
        :is="msg.type === 'OPPO' ? 'MsgOppo' : 'MsgSelf'"
        v-bind="msg"
      />
    </div>

    <div v-if="mode === 'FULL_CONTROL'" class="chatroom__control">
      <font-awesome-icon :icon="['fas', 'camera']" />
      <font-awesome-icon
        :icon="['fas', 'palette']"
        @click="canvasOpen = true"
      />

      <wired-input
        ref="msgInput"
        :value="newMsg"
        placeholder="Aa"
        @input="newMsg = $event.target.value"
        @keypress.enter="sendMsg('TEXT', newMsg)"
      />

      <font-awesome-icon :icon="['fas', 'paper-plane']" @click="sendMsg('TEXT', newMsg)" />
    </div>

    <div v-if="mode === 'READ_ONLY'" class="chatroom__control">
      <wired-button
        class="animated infinite swing"
        @click="$router.push('/entry')"
      >
        加入討論
      </wired-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import SocketHelper from '~/utils/SocketHelper'

interface IMsgPayload {
  format: 'TEXT' | 'IMAGE'
  msg: string
  username: string
  userAvatar: string
}

interface IMsgDocument extends IMsgPayload {
  createdAt: number
  uid: string
}

interface IMsg extends IMsgDocument {
  type: 'OPPO' | 'SELF'
}

const socketHelper = new SocketHelper(process.env.backendDomain)

@Component({
  components: {
    MsgOppo: () => import('~/components/Msg/Oppo.vue'),
    MsgSelf: () => import('~/components/Msg/Self.vue'),
    Canvas: () => import('~/components/Canvas.vue')
  }
})
export default class PChatroom extends Vue {
  newMsg: string = ''
  msgs: IMsg[] = []
  loadMsgAmount = 3
  loading = false
  userAmount = 0
  canvasOpen = false

  get mode() {
    const { username, userAvatar } = this.$store.state

    if(!username || !userAvatar) {
      return 'READ_ONLY'
    } else {
      return 'FULL_CONTROL'
    }
  }

  @Watch('msgs')
  onMsgsChange() {
    const chatroomBody = (this.$refs.chatroomBody as HTMLDivElement)

    const isScrollToBottom = (chatroomBody.scrollTop + chatroomBody.clientHeight) >= (chatroomBody.scrollHeight - 50)
    if(!isScrollToBottom) { return }

    setTimeout(() => {
      chatroomBody.scrollTop = chatroomBody.scrollHeight
    }, 200)
  }

  async created() {
    socketHelper.connect()

    await this.fetchOldMsgs()

    socketHelper.on('broadcast-msg', (msgDocument: IMsgDocument) => {
      const type: 'OPPO' | 'SELF' = msgDocument.uid === socketHelper.socket.id ? 'SELF' : 'OPPO'
      this.msgs.push({
        type,
        ...msgDocument
      })
    })

    socketHelper.on('broadcast-user-amount', (userAmount: number) => {
      this.userAmount = userAmount
    })
  }

  async fetchOldMsgs() {
    let { msgs: oldMsgs } = await this.$axios.$get('/msgs', { params: {
      timestamp: this.msgs[0] ? this.msgs[0].createdAt - 1 : new Date().valueOf(),
      limit: this.loadMsgAmount
    }})

    if(!oldMsgs) {
      this.loading = false
      return
    }

    oldMsgs = oldMsgs.map((oldMsg: IMsgDocument) => {
      const type: 'OPPO' | 'SELF' = oldMsg.uid === socketHelper.socket.id ? 'SELF' : 'OPPO'
      return { type, ...oldMsg }
    })

    this.msgs = oldMsgs.concat(this.msgs)

    this.loading = false
  }

  loadMore() {
    this.loading = true

    setTimeout(this.fetchOldMsgs, 500)
  }

  sendMsg(format: 'TEXT' | 'IMAGE', msg: string) {
    const { newMsg } = this
    const msgPayload: IMsgPayload = {
      username: this.$store.state.username,
      userAvatar: this.$store.state.userAvatar,
      msg, format 
    }

    socketHelper.emit('new-msg', msgPayload)

    this.clearMsg()
  }

  clearMsg() {
    this.newMsg = null;
    (this.$refs.msgInput as HTMLInputElement).value = this.newMsg
  }

  async sendImage() {
    try {
      const url = await (this.$refs.canvas as any).exportImage()
      this.sendMsg('IMAGE', url)
      this.canvasOpen = false
    } catch(e) {
      console.log(e)
    }
  }
}
</script>