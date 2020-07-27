<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    class="MMNavBar"
  >
    <!-- 左侧 -->
    <template #left>
      <!-- <slot name="left"></slot> -->
      <!-- 直接写死 iconfont中的返回按钮即可 -->
      <i class="iconfont iconbtn_nav_back"></i>
    </template>
    <!-- 标题 -->
    <template #title>
      <slot name="title"></slot>
    </template>
    <!-- 右侧 -->
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  // 给组件起个名字
  name: 'MMNavBar',
  props: ['title', 'leftText', 'rightText'],
  methods: {
    // 事件处理
    onClickLeft () {
      this.$emit('onClickLeft')
    },
    onClickRight () {
      this.$emit('onClickRight')
    }
  }
}
</script>

<style lang="less">
.MMNavBar {
  .iconbtn_nav_back {
    font-size: 44px;
    color: @black-color;
  }
}
</style>
