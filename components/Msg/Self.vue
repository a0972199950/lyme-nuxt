<template>
  <div class="chat-self animated fadeInRight faster">
    <div class="chat-self__info">
      <div class="speech-bubble-self">
        <wired-image
          v-if="format === 'IMAGE'"
          elevation="4" 
          :src="msg"
          style="width: 200px;"
        />

        <span v-if="format === 'TEXT'">
          {{ msg }}
        </span>
      </div>
      <h5 class="chat-oppo__time">{{ $moment(createdAt).format('MM月DD日 HH:mm') }}</h5>
    </div>

    <div
      class="chat-self__avatar"
      :style="{ 'background-image': `url(${userAvatar})` }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CMsgSelf extends Vue {
  @Prop({ type: String }) msg!: string
  @Prop({ type: String, default: '/default-avatar.jpg' }) userAvatar!: string
  @Prop({ type: Number }) createdAt: number
  @Prop({ type: String, default: 'TEXT' }) format: 'TEXT' | 'IMAGE'
}
</script>
