<template>
  <div class="app">
    <router-view></router-view>
    <van-tabbar
      v-show="$route.meta.showTabbar"
      route
      active-color="#e40137"
      inactive-color="#b4b4bd"
    >
      <van-tabbar-item to="/company"
        ><span>公司</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel"> </i> </template
      ></van-tabbar-item>
      <van-tabbar-item to="/question"
        ><span>刷题</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel">
          </i> </template></van-tabbar-item
      ><van-tabbar-item to="/find"
        ><span>发现</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel">
          </i> </template></van-tabbar-item
      ><van-tabbar-item to="/my"
        ><span>我的</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel"> </i> </template
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actives: 0
    }
  }
}
</script>

<style lang="less">
html {
  height: 100%;
}
.app {
  height: 100%;
  margin: 0 auto;
  background-color: @success-color;
  .fs {
    width: 100%;
    height: 1rem;
  }
}
</style>
