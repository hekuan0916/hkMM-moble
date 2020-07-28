<template>
  <van-cell class="mm-cell" @click="clickCell" :title="title" :value="value">
    <template #icon>
      <!-- iconfont 这个类始终都在 动态拼接icon上去 -->
      <i class="iconfont" :class="icon"></i>
    </template>
    <template #right-icon>
      <i class="iconfont iconicon_more"></i>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'MMCell',
  props: ['title', 'value', 'icon'],
  methods: {
    clickCell () {
      // 触发父组件的事件
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
.mm-cell {
  height: 55px;
  line-height: 55px;
  .iconfont {
    font-size: 21px;
  }
  .van-cell__title {
    margin-left: 13px;
  }
  .iconicon_more {
    font-size: 14px;
    margin-left: 9px;
  }
  &::after {
    // 设置线段的颜色为透明
    border-color: transparent;
  }
}
</style>
