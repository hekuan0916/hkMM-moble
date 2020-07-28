<template>
  <div class="login">
    <!-- 导航栏 -->
    <MMNavBar @onClickLeft="onClickLeft"></MMNavBar>
    <!-- 主体区域 -->
    <div class="main-box">
      <!-- 标题 -->
      <h2>您好，请登录</h2>
      <!-- 表单 -->
      <van-form @submit="onSubmit" ref="loginForm">
        <!-- 手机号 -->
        <van-row>
          <van-col span="24">
            <van-field
              v-model="mobile"
              name="mobile"
              placeholder="请输入手机号"
              type="tel"
              :rules="[
                {
                  required: true,
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号格式不对'
                }
              ]"
            >
              <!-- 插槽自定义左侧图标 -->
              <template #left-icon>
                <i class="iconfont iconbianzu1"></i>
              </template>
            </van-field>
          </van-col>
        </van-row>

        <!-- 验证码 -->
        <van-row>
          <van-col span="16">
            <van-field
              v-model="code"
              name="code"
              type="digit"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请输入验证码' }]"
            >
              <template #left-icon>
                <i class="iconfont iconyanzhengma"></i>
              </template> </van-field
          ></van-col>
          <van-col class="btn-col" span="8">
            <!-- 获取验证码按钮 -->
            <span @click="getCode" class="code-btn van-hairline--left">{{
              btnText
            }}</span>
          </van-col>
        </van-row>
        <!-- 用户协议 -->
        <p class="deal">
          登录既同意<span>《用户使用协议》</span>和<span>《隐私协议》</span>
        </p>
        <div class="submit-box">
          <van-button round block type="danger" native-type="submit">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 导入api
import { getCode, login } from '@/api/login'
import { setToken } from '@/utils/local.js'
export default {
  name: 'Login',
  data () {
    return {
      // 验证码
      code: '',
      // 手机号
      mobile: '',
      // 按钮的文本
      btnText: '获取验证码',
      // 倒计时时间
      delay: 0
    }
  },
  methods: {
    // 获取验证码
    getCode () {
      if (this.delay !== 0) {
        return
      }
      // 校验 手机号
      this.$refs.loginForm
        .validate('mobile')
        .then(res => {
          // 开启loading
          this.$toast.loading({
            duration: 0
          })
          this.delay = 60
          // 开始倒计时
          const interId = setInterval(() => {
            this.delay--
            // 修改文本
            this.btnText = `${this.delay}S后重试`
            if (this.delay === 0) {
              clearInterval(interId)
              this.btnText = '获取验证码'
            }
          }, 1000)
          getCode({ mobile: this.mobile }).then(res => {
            // 弹出提示框 把验证码显示出来
            // console.log(res)
            // 弹框只有一个 弹出了success 把loading顶掉了
            this.$toast.success(res.data)
          })
        })
        .catch(err => {
          // 写上看不到红色错误提示,移动端不用管也ok
          console.log(err)
        })
    },
    onClickLeft () {
      console.log('onClickLeft')
    },
    // 表单校验成功之后的回调函数
    onSubmit (value) {
      // console.log(value)
      login(value).then(res => {
        console.log(res)
        this.$toast.success('欢迎')
        // 保存 token
        setToken(res.data.jwt)
        // 处理用户头像信息
        res.data.user.avatar = process.env.VUE_APP_URL + res.data.user.avatar
        // 保存用户信息
        this.$store.commit('SETUSERINFO', res.data.user)
      })
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100vh;
  background: @white-color;
  .iconfont {
    font-size: 16px;
  }
  .main-box {
    padding: 0 15px;
    h2 {
      margin: 0;
      margin-top: 50px;
      margin-bottom: 63px;
      font-size: 18px;
      font-weight: 600;
    }
    .btn-col {
      height: 45px;
      display: flex;
      align-items: center;
    }
    .code-btn {
      display: inline-block;
      line-height: 29px;
      height: 29px;
      padding-left: 15px;
      font-size: 16px;
      color: #00b8d4;
    }
    .van-row {
      border-bottom: 1px solid #f7f4f5;
    }
    .deal {
      font-size: 12px;
      margin-top: 15px;
      span {
        color: #00b8d4;
      }
    }
    .submit-box {
      margin-top: 44px;
    }
  }
}
</style>
