<template>
  <div v-if="qrcodePath">
    <img :src="qrcodePath" style="width: 100%">
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import QRCode from 'qrcode'

interface IProp {
  url: string | null
  scale: number
}

interface IData {
  qrcodePath: string | null
}

@Component
export default class CQRCode extends Vue {
  @Prop({ type: String }) url!: IProp['url']
  @Prop({ type: Number }) scale!: IProp['scale']

  qrcodePath: string = ''

  @Watch('url')
  async onUrlChange (): Promise<void> {
    await this.mapQRCodePath()
  }

  async created () {
    await this.mapQRCodePath()
  }

  async mapQRCodePath () {
    try {
      if (!this.url) { return }

      this.qrcodePath = await QRCode.toDataURL(this.url, {
        scale: this.scale
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>