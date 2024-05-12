<script>
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { mapActions } from 'pinia'

export default {
  methods: {
    ...mapActions(useAuthStore, ['checkSessionStorage']),
  },
  created() {
    this.checkSessionStorage()
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
