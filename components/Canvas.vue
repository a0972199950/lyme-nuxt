<template>
  <div ref="canvasContainer" style="background: white">
    <wired-card elevation="3">
      <canvas
        ref="canvas"
        :width="canvasWidth"
        :height="canvasHeight"
        @mousedown="drawStart('CLICK', $event)"
        @mousemove="drawMove('CLICK', $event)"
        @mouseup="drawEnd"
        @mouseleave="drawEnd"
        @touchstart="drawStart('TOUCH', $event)"
        @touchmove="drawMove('TOUCH', $event)"
        @touchend="drawEnd"
      />
    </wired-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

type TEventType = 'CLICK' | 'TOUCH'
type TDrawStatus = 'START' | 'MOVE' | 'END'

@Component
export default class PCanvas extends Vue {
  canvasWidth: number = 0
  canvasHeight: number = 0
  x: number = 0
  y: number = 0
  ctx!: CanvasRenderingContext2D
  drawStatus: TDrawStatus = 'END'

  mounted() {
    this.canvasWidth = (this.$refs.canvasContainer as HTMLDivElement).clientWidth
    this.canvasHeight = 600
    const ctx = (this.$refs.canvas as HTMLCanvasElement).getContext('2d')
    ctx && (this.ctx = ctx)

    // this.fillCanvasBg()

    setTimeout(this.fillCanvasBg, 200)
  }

  fillCanvasBg() {
    const ctx = this.ctx
    const { canvasWidth, canvasHeight } = this

    ctx.rect(0, 0, canvasWidth, canvasHeight)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
  }

  getCoor(eventType: TEventType, e: MouseEvent | TouchEvent) {
    let x, y
    switch (eventType) {
      case 'CLICK':
        x = (e as MouseEvent).offsetX
        y = (e as MouseEvent).offsetY
        break
      case 'TOUCH':
        x = (e as TouchEvent).targetTouches[0].pageX - 16
        y = (e as TouchEvent).targetTouches[0].pageY - 48
        break
    }
    return { x, y }
  }

  updateCoor(drawStatus: TDrawStatus, x: number, y: number) {
    this.drawStatus = drawStatus
    this.x = x
    this.y = y
  }

  drawStart(eventType: TEventType, e: MouseEvent | TouchEvent) {
    const ctx = this.ctx
    const { x, y } = this.getCoor(eventType, e)
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(x, y)
    this.updateCoor('START', x, y)
  }

  drawMove (eventType: TEventType, e: MouseEvent | TouchEvent) {
    if (this.drawStatus === 'END') { return }
    const ctx = this.ctx
    const { x, y } = this.getCoor(eventType, e)
    ctx.lineTo(x, y)
    ctx.stroke()
    this.updateCoor('MOVE', x, y)
  }

  drawEnd () {
    this.updateCoor('END', 0, 0)
  }

  async exportImage () {
    return new Promise((resolve, reject) => {
      const imageBase64 = (this.$refs.canvas as HTMLCanvasElement).toBlob(async (blob: Blob) => {
        const formData = new FormData()
        formData.append('image', blob)

        try {
          const { url, error, log } = await this.$axios.$post('/image', formData)
          if(error) {
            throw new Error(log)
          }
          resolve(url)
        } catch(e) {
          console.log(e.message)
          reject()
        }
      }, "image/jpeg", 0.95)
    })
    
  }

}
</script>