<template>
  <div id="app">
    <bv-header />
      <router-view></router-view>
      <!-- <router-link>go</router-link> -->
  </div>
  <!-- footer -->
  <!-- sidebar -->

</template>

<script>
import bvHeader from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    bvHeader
  }
}
</script>

<style>
</style>
