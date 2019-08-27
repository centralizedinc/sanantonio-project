<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
.header {
  position: fixed; 
  z-index: 1;
  width: 100%
}

.content {
height:100vh;
min-height:100vh;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* margin-top:300px; */
  /* background-color: red; */
  /* color: white; */
  z-index: 10;
  text-align: center;
}
</style>
