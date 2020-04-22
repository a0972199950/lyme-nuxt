<template>
  <wired-card
    fill="rgba(223, 223, 141)"
    class="entry__info"
    style="display: none"
  >
    <wired-icon-button
      class="close-btn"
      @click="$emit('close')"
    >
      <font-awesome-icon :icon="['fas', 'times']" />
    </wired-icon-button>

    Lyme是一個唸起來很像LINE，但功能卻只有一點點像的應用 <br>
    它是一個完全匿名的多人聊天室 <br>
    為什麼匿名呢？<strike>因為做會員很麻煩</strike> <br>
    <br>
    你只要輸入任何喜歡的暱稱，就能以該暱稱來聊天 <br>
    暱稱用膩了，隨時都能重新輸入 <br>
    聊天室只有一個，大家都能和彼此聊天 <br>
    為什麼聊天室只有一個呢？<strike>因為做太多個很麻煩</strike> <br>
    <strike>我只想隨便弄一個應用來練習PWA而已...</strike> <br>
    <br>
    總之，快來玩玩看吧~
  </wired-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CInfo extends Vue {
}
</script>