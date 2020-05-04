<template>
  <div class="chat-oppo animated fadeInLeft faster">
    <div
      class="chat-oppo__avatar"
      :style="{ 'background-image': `url(${userAvatar})` }"
    />
  
    <div class="chat-oppo__info">
      <h5 class="chat-oppo__username">{{ username }}</h5>
      <div class="speech-bubble-oppo">
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
      <h5 class="chat-oppo__time">{{ $moment(createdAt).format('MM/DD HH:mm') }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CMsgOpponent extends Vue {
  @Prop({ type: String, default: '匿名' }) username!: string
  @Prop({ type: String, default: '/default-avatar.jpg' }) userAvatar!: string
  @Prop({ type: String }) msg: string
  @Prop({ type: Number }) createdAt: number
  @Prop({ type: String, default: 'TEXT' }) format: 'TEXT' | 'IMAGE'
}
</script>
