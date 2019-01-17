<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html{
    position:fixed;
    height:100%;
    width:100%;
  }
  body {
    margin: 0;
    overflow: hidden;
    overflow-x: hidden;
  }
</style>
