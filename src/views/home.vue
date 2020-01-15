<template>
  <div class="container">
      <div class="head-box">
        <van-tabs v-model="active" type="none" swipeable :swipe-threshold="num">
            <van-tab title="" disabled>
            <div slot="title">
              <van-icon name="more-o" />
            </div>
          </van-tab>
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index" line-height="0px">
            <div class="tab-content">
              <!-- <div></div>
              <div></div> -->
            </div>
          </van-tab>
          <van-tab title="" disabled>
            <div slot="title" >
              <van-icon name="more-o" />
            </div>
          </van-tab>
        </van-tabs>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      num: 7,
      active: 0,
      tabs: {
        tab1: '我的',
        tab2: '发现',
        tab3: '云村',
        tab4: '视频'
        // tab5: ''
      }
    }
  }
}
</script>

<style rel='stylesheaet/scss' lang='scss' scoped>
  .container {
    height: 100%;
    width: 100%;
    .head-box {
      width: 100%;
      padding: 10px 0;
      float: left;

      .tab-content {
        width: 100%;
        height: 1000px;
      }
    }
  }
</style>
