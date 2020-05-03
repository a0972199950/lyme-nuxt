<template>
  <div class="welcome-desktop">
    <QRCode
      :url="frontendDomain"
      :scale="6"
    />

    <p class="welcome-desktop__desc">請使用手機安裝並操作本APP喔喔喔喔</p>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    QRCode: () => import('~/components/QRCode.vue')
  }
})
export default class CWelcome extends Vue {
  get frontendDomain() {
    return process.env.frontendDomain
  }
}
</script>