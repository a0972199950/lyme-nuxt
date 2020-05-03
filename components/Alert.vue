<template>
  <div class="alert__container" :style="{ top }">
    <v-alert 
      class="alert__alert"
      :type="type"
      border="right"
      colored-border
      elevation="2"
    >
      {{ message }}
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CAlert extends Vue {
  displaying = false
  top = '-10rem'
  displayTime = 2000
  animateTime = 300
  type: string = null
  message: string = null

  async display(type: string, message: string) {
    if(this.displaying) { return }

    this.type = type
    this.message = message
    await this.animateIn()

    setTimeout(this.close, this.displayTime)
  }

  async close() {
    await this.animateOut()
    this.type = null
    this.message = null
  }

  async animateIn() {
    this.top = '1rem'
    this.displaying = true

    setTimeout(() => {
      return
    }, this.animateTime)
  }

  animateOut() {
    this.top = '-10rem'
    this.displaying = false

    setTimeout(() => {
      return
    }, this.animateTime)
  }
}
</script>