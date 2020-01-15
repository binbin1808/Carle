<template>
  <div class="page-header">
    <van-nav-bar v-bind="$attrs" v-on="$listeners" @click-left="back" @click-right="toRightPath">
      <div slot="right" v-if="!$attrs['right-text']">
        <slot name="right"></slot>
      </div>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'page-header',
  inheritAttrs: false,
  props: {
    backPath: {
      type: String,
      default: '',
      required: false
    },
    rightPath: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
      a: 'aaa'
    }
  },
  computed: {},
  created () {},
  methods: {
    back () {
      if (this.backPath === '') {
        this.$router.go(-1)
      } else {
        this.$router.push({
          path: this.backPath
        })
      }
    },
    toRightPath () {
      if (this.rightPath !== '') {
        this.$router.push({
          path: this.rightPath
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .page-header {
    .van-nav-bar {
      height: 80px;
      line-height: 80px;
    }
  }
</style>
