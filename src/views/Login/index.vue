<template>
  <div class="login_container">
    <div class="login_content">
      <div class="title">{{ !isLogon ? '登录' : '注册' }}</div>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 手机号 -->
        <el-form-item label="账号" prop="phone">
          <el-input
            v-model="loginForm.phone"
            placeholder="手机号"
            prop="phone"
            oninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item v-if="isLogon" label="确认密码" prop="asPassword">
          <el-input
            v-model="loginForm.asPassword"
            placeholder="确认密码"
            show-password
          />
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login">{{ !isLogon ? '登录' : '注册' }}</el-button>
      <div class="switch" @click="switchType">{{ !isLogon ? '注册' : '登录' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogon: false,
      loginForm: {
        phone: '',
        password: '',
        asPassword: '',
      },
      rules: {
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 11, message: '手机号格式不正确', trigger: 'blur' },
        ],
        password: [
          {}
        ]
      },
    }
  },
  methods: {
    switchType() {
      this.isLogon = !this.isLogon
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dedede;

  .login_content {
    width: 500px;
    height: 600px;
    border-radius: 20px;
    padding: 20px 30px;
    border-radius: 15px;
    box-shadow: 23px 23px 46px #bdbdbd, -23px -23px 46px #ffffff;

    .title {
      font-size: 30px;
      text-align: center;
    }

    .switch {
      float: right;
      cursor: pointer;
    }
  }
}
</style>
