<template>
  <div id="app">
    <router-view/>
     <!-- <BottomMenu v-if="showBottomMenu"></BottomMenu> -->
  </div>
</template>

<script>
// import BottomMenu from '@/components/global/bottom-menu'
export default {
  name: 'App',
  // components: { BottomMenu },
  computed: {
    showBottomMenu () {
      // console.log(this.$route.matched)
      return this.$route.meta.showBottomMenu
    }
  }
}
</script>

<style lang="scss">
.html,body{
  height: 100vh;
}
body {
  font-size: 16px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  height: 100%;
  // width: 100%;

}
* {
  margin: 0;
  padding: 0;
}
</style>
