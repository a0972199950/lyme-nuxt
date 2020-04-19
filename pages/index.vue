<template>
  <section class="entry">
    <!-- Info Modal -->
    <div class="entry__modal" :class="{ hidden: !modal.show }">
      <!-- 說明卡片 -->
      <wired-card
        ref="INFO"
        fill="rgba(223, 223, 141)"
        class="entry__info"
        style="display: none"
      >
        <wired-icon-button
          class="close-btn"
          @click="modal.show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </wired-icon-button>

        Lyme是一個唸起來很像LINE，但功能卻只有一點點像的應用 <br>
        它是一個完全匿名的多人聊天室 <br>
        為什麼匿名呢？<strike>因為做會員很麻煩</strike> <br>
        <br>
        你只要輸入任何喜歡的暱稱，就能以該暱稱來聊天 <br>
        暱稱用膩了，隨時都能重新輸入 <br>
        聊天室只有一個，大家都能和彼此聊天 <br>
        為什麼聊天室只有一個呢？<strike>因為做太多個很麻煩</strike> <br>
        <strike>我只想隨便弄一個應用來練習PWA而已...</strike> <br>
        <br>
        總之，快來玩玩看吧~
      </wired-card>

      <!-- 設定卡片 -->
      <wired-card
        ref="SETTING"
        fill="#ffffff"
        class="entry__setting"
        style="display: none"
      >
        <wired-icon-button
          class="close-btn"
          @click="modal.show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </wired-icon-button>

        <div class="entry__radio-group">
          <wired-toggle />
          <label>開啟通知</label>
        </div>

        <div class="entry__radio-group">
          <wired-toggle />
          <label>記住身分</label>
        </div>
        
      </wired-card>
    </div>


    <!-- 主要部分 -->
    <div 
      v-if="!modal.show"
      class="entry__content"
    >
      <div class="entry__control">
        <font-awesome-icon
          :icon="['far', 'question-circle']"
          @click="showModal('INFO')"
        />
  
        <font-awesome-icon
          :icon="['fas', 'bars']"
          @click="showModal('SETTING')"
        />
      </div>

      <div>
        <img src="/icon-192.png"/>
        <h1 class="entry__title">LYME</h1>
      </div>
      
      <div v-show="!openAsPWA">
        <wired-button
          elevation="5"
          class="animated infinite heartBeat delay-3s entry__install-btn"
          @click="installApp"
        >
          INSTALL
        </wired-button>
      </div>

      <div v-show="openAsPWA" class="entry__submit-box">
        <wired-input
          :value="username" 
          @input="username = $event.target.value" 
          placeholder="請輸入暱稱"
        />
        <wired-button @click="onSubmit">START</wired-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

interface IModal {
  show: boolean
  type: 'INFO' | 'SETTING'
}

const modalAnimate: any = {
  INFO: {
    in: ['fadeInUp', 'faster'],
    out: ['hinge', 'slow']
  },

  SETTING: {
    in: ['slideInRight', 'faster'],
    out: ['slideOutRight', 'faster']
  }
}

@Component
export default class PIndex extends Vue {
  modal: IModal = {
    show: false,
    type: null
  }

  installPromptEvent: any = null
  username: string = null

  get openAsPWA() {
    return true
    // return matchMedia('(display-mode: standalone)').matches
  }

  @Watch('modal.show')
  onModalShowChange(val: boolean) {
    const modalType = this.modal.type
    const target = (this.$refs[modalType] as HTMLElement)

    if(val === true) {
      target.style.display = 'block'
      this.animateCSS(target, modalAnimate[modalType].in)
    }

    if(val === false) {
      this.animateCSS(target, modalAnimate[modalType].out, () => {
        target.style.display = 'none'
      })
    }
  }

  mounted() {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault()
      this.installPromptEvent = e
    })
  }

  async installApp() {
    const installPromptEvent = this.installPromptEvent

    if(!installPromptEvent) {
      alert('installPromptEvent不存在，無法安裝應用程式')
    } else {
      installPromptEvent.prompt()
      const userAns = await installPromptEvent.userChoice

      console.log(userAns)
    }
  }

  showModal(type: 'INFO' | 'SETTING') {
    this.modal.type = type
    this.modal.show = true
  }

  animateCSS(node: Element, animationName: string[], callback?: () => void) {
    node.classList.add('animated', ...animationName)

    function handleAnimationEnd() {
      node.classList.remove('animated', ...animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }

  onSubmit() {
    if(!this.username) {
      alert('請輸入一個暱稱')
      return
    }

    this.$store.commit('SET_USERNAME', this.username)

    this.$router.push('/chatroom')
  }
}
</script>
