<template>
  <wired-card
    fill="#ffffff"
    class="entry__setting"
    style="display: none"
  >
    <wired-icon-button
      class="close-btn"
      @click="$emit('close')"
    >
      <font-awesome-icon :icon="['fas', 'times']" />
    </wired-icon-button>

    <div class="entry__radio-group">
      <wired-toggle
        :key="subToggle.key"
        :checked="subToggle.isSubscribed"
        @change="subscribe"
      />
      <label>開啟通知</label>
    </div>
  </wired-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CSetting extends Vue {
  subToggle = {
    key: 1,
    isSubscribed: false
  }

  mounted() {
    this.checkSubscription()
  }

  async checkSubscription() {
    const sw = await navigator.serviceWorker.ready
    const sub = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.vapidPublicKey
    })
    const auth = sub.toJSON().keys.auth

    try {
      const { sub: subData, error, message } = await this.$axios.$get(`/api/subs/${auth}`)
      if(error) {
        throw new Error(message)
      }

      const permission = Notification.permission

      if(subData && permission === 'granted') {
        this.subToggle.isSubscribed = true
      } else {
        this.subToggle.isSubscribed = false
      }
      this.subToggle.key++
    } catch(e) {
      console.log(e)
      this.$swal.fire('喔喔，出錯了', e.message, 'error')
    }
  }

  async subscribe(e: CustomEvent) {
    if(e.detail.checked === false) {
      this.unsubscribe()
      return
    }
  
    const permission = Notification.permission
    if(permission === 'denied') {
      this.$swal.fire('您已封鎖本站通知，無法進行訂閱', '', 'info')
      this.checkSubscription()
    } else {
      try {
        const sw = await navigator.serviceWorker.ready
        const sub = await sw.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: process.env.vapidPublicKey
        })
        
        const { error, message } = await this.$axios.$post('/api/subs', { sub })
        if(error) {
          throw new Error(message)
        }

        this.$swal.fire('訂閱成功', '', 'success')
        this.checkSubscription()
      } catch(e) {
        console.log(e)
        this.$swal.fire('訂閱失敗', e.message, 'warning')
        this.checkSubscription()
      }
    }
  }

  async unsubscribe() {
    try {
      const sw = await navigator.serviceWorker.ready
      const sub = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.vapidPublicKey
      })
      const auth = sub.toJSON().keys.auth

      const { error, message } = await this.$axios.$delete(`/api/subs/${auth}`)
      if(error) {
        throw new Error(message)
      }

      this.$swal.fire('取消成功', '', 'success')
      this.checkSubscription()
    } catch(e) {
      console.log(e)
      this.$swal.fire('喔喔，出錯了', e.message, 'error')
      this.checkSubscription()
    }
  }
}
</script>