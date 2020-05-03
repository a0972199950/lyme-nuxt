<template>
  <div class="entry">

    <!-- Modal -->
    <div class="entry__modal" :class="{ hidden: !modal.show }">
      <!-- 說明卡片 -->
      <Info ref="INFO" @close="modal.show = false" />

      <!-- 設定卡片 -->
      <Setting ref="SETTING" @close="modal.show = false" />
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

      <div class="entry__body">
        <AvatarCarousel @select="userAvatar = $event"/>
      </div>
      
      <div class="entry__submit-box">
        <wired-input
          :value="username" 
          @input="username = $event.target.value" 
          placeholder="請輸入暱稱"
        />
        <wired-button @click="onSubmit">START</wired-button>
      </div>
    </div>

    
  </div>
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

@Component({
  components: {
    Setting: () => import('~/components/Setting.vue'),
    Info: () => import('~/components/Info.vue'),
    AvatarCarousel: () => import('~/components/AvatarCarousel.vue')
  }
})
export default class PEntry extends Vue {
  modal: IModal = {
    show: false,
    type: null
  }
  username: string = null
  userAvatar: string = null

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
      this.$swal.fire('請輸入一個暱稱', '', 'warning')
      return
    }

    this.$store.commit('SET_USERPROFILE', {
      username: this.username,
      userAvatar: this.userAvatar
    })

    this.$router.push('/chatroom')
  }
}
</script>
