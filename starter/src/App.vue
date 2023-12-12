<template>
  <div id="app">
    <vue-header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vueHeader from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    vueHeader
  }
}
</script>

<style>
</style>
