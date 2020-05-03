<template>
  <div class="avatar-carousel">
    <h1 class="avatar-carousel__title">選擇一個頭像</h1>

    <v-carousel v-model="selectedAvatarIndex" height="300" :continuous="false" hide-delimiters>
      <v-carousel-item
        v-for="(defaultAvatar , i) in defaultAvatars"
        :key="i"
        transition="fab-transition"
        reverse-transition="fab-transition"
      >
        <div class="avatar-carousel__slide">
          <img :src="defaultAvatar" class="avatar-carousel__image">
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class CAvatarCarousel extends Vue {
  defaultAvatars: string[] = []
  selectedAvatarIndex = 0

  @Watch('selectedAvatarIndex')
  onSelectedAvatarIndexChange(index: number) {
    this.emitSelect(index)
  }

  async created() {
    try {
      const { avatars: defaultAvatars } = await this.$axios.$get('/avatars')
      this.defaultAvatars = defaultAvatars
      this.emitSelect(this.selectedAvatarIndex)
    } catch(e) {
      console.log(e)
      this.$swal.fire('喔喔，出錯了', e.message, 'error')
    }
  }

  emitSelect(index: number) {
    this.$emit('select', this.defaultAvatars[index])
  }
}
</script>
