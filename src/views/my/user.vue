<template>
  <div class="user">
    <MMNavBar class="title" title="我的资料"></MMNavBar>
    <div class="mid">
      <van-cell-group>
        <MMCell title="头像" class="avatar" :src="userInfo.avatar"></MMCell>
        <MMCell title="昵称" :value="userInfo.nickname">{{
          userInfo.nickname
        }}</MMCell>
        <MMCell title="性别" :value="userInfo.position"></MMCell>
        <MMCell title="地区" :value="userInfo.nickname"></MMCell>
        <MMCell title="个人介绍" :value="userInfo.intro"></MMCell>
      </van-cell-group>
    </div>
    <div class="bottom">
      <van-button type="default" size="large">退出</van-button>
    </div>
  </div>
</template>

<script>
import MMCell from './MMCell'
import { mapState } from 'vuex'
import MMNavBar from '../../components/MMNavBar'

export default {
  name: 'user',
  components: {
    MMCell,
    MMNavBar
  },
  computed: {
    // 获取用户信息
    ...mapState(['userInfo'])
  }
}
</script>
<style lang="less">
.user {
  padding: 44px 15px 10px;
  .avatar {
    margin-top: 10px;
  }
  .bottom {
    margin-top: 10px;
    color: #eb476e;
  }
}
</style>
