<template>
  <section class="install">
    <Alert ref="alert" />

    <!-- Modal -->
    <div class="install__modal" :class="{ hidden: !modal.show }">
      <!-- 說明卡片 -->
      <Info ref="INFO" @close="modal.show = false" />

      <!-- 設定卡片 -->
      <Setting ref="SETTING" @close="modal.show = false" />
      
    </div>


    <!-- 主要部分 -->
    <div 
      v-if="!modal.show"
      class="install__content"
    >
      <div v-if="openAsMobile" class="install__control">
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
        <WelcomeDesktop v-if="!openAsMobile" />
        <WelcomeMobile v-if="openAsMobile"/>
      </div>
      
      <div 
        class="randomly-move"
        @mouseover="randomlyMoveBtn"
        :style="{
          'left': installBtnPosition.left,
          'top': installBtnPosition.top,
        }"
      >
        <wired-button
          elevation="5"
          class="animated infinite heartBeat delay-3s install__install-btn"
          @click="installApp"
        >
          INSTALL
        </wired-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import Alert from '~/components/Alert.vue'
import WelcomeDesktop from '~/components/Welcome/Desktop.vue'
import WelcomeMobile from '~/components/Welcome/Mobile.vue'

interface IModal {
  show: boolean
  type: 'INFO' | 'SETTING'
}

interface IPosition {
  left: string
  top: string
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

@Component({
  components: {
    Alert, WelcomeDesktop, WelcomeMobile,
    Setting: () => import('~/components/Setting.vue'),
    Info: () => import('~/components/Info.vue')
  }
})
export default class PIndex extends Vue {
  modal: IModal = {
    show: false,
    type: null
  }

  installBtnPosition: IPosition = {
    left: '0%',
    top: '0%'
  }

  installPromptEvent: any = null
  username: string = null

  get openAsMobile() {
    const userAgent = navigator.userAgent
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent)) {
      return true
    } else {
      return false
    }
  }

  @Watch('modal.show')
  onModalShowChange(val: boolean) {
    const modalType = this.modal.type
    const target = ((this.$refs[modalType] as Vue).$el as HTMLElement)

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

  generateRandomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  randomlyMoveBtn() {
    this.installBtnPosition = {
      left: this.generateRandomNum(-40, 40) + '%',
      top: this.generateRandomNum(-90, 10) + '%'
    };

    (this.$refs.alert as Alert).display('error', this.getRandomCannotInstallMsg())
  }

  getRandomCannotInstallMsg() {
    const cannotInstallMsgs = [
      '只能用手機安裝喔',
      '就說只能用手機安裝了= =，你沒有手機嗎',
      '很堅持喔 少年我欣賞你',
      '我家的柴柴說你是牠見過最固執的生物.....而牠已經在公園躺第三天不肯回家了',
      '你484在玩按鈕？',
    ]

    const msgIndex = this.generateRandomNum(0, cannotInstallMsgs.length - 1)
    return cannotInstallMsgs[msgIndex]
  }
}
</script>
