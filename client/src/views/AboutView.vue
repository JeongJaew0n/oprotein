<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button @click="count++">Click me</Button>
    <span>{{ count }}</span>
  </div>
</template>

<style>

</style>

<script lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import type { Ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    return {
      count
    }
  }
}

</script>
