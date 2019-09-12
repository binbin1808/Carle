<template>
  <van-tabbar class="page-bottom-menu" v-model="active" active-color="#22ac38">
    <van-tabbar-item
      :icon="item.icon"
      v-for="(item, index) in menuList"
      :key="index"
      @click.stop="toPath(item.path)">
        {{item.name}}
    </van-tabbar-item>
  </van-tabbar>

</template>

<script>
export default {
  name: 'bottommenu',
  components: {},
  props: {
  },
  data () {
    return {
      active: 0,
      menuList: [
        { id: 1, name: '首页', icon: 'wap-home', path: '/' }, { id: 2, name: '预约', icon: 'wap-nav', path: '/reservation' }, { id: 3, name: '我的', icon: 'star-o', path: '/popularize' }
      ]
    }
  },
  computed: {},
  created () {},
  methods: {
    toPath (path) {
      this.$router.push({ path: path })
    }
  },
  watch: {
    $route (val) {
      this.active = -1
      for (let i = 0; i < this.menuList.length; i++) {
        if (val.path === this.menuList[i].path) {
          this.active = i
          break
        }
      }
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
  .page-bottom-menu {
    padding: 0 0px 0 0px;
    height:180px;
    // overflow: hidden;
    }
</style>
