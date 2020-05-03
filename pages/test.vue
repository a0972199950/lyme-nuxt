<template>
  <div>
    <Alert ref="alert" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Alert from '~/components/Alert.vue'

@Component({
  components: { Alert }
})
export default class PTest extends Vue {
  mounted() {
    setTimeout(() => {
      (this.$refs.alert as Alert).display('error', '有東西出錯了')
    }, 2000)
  }
}
</script>
