<template>
  <div>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm"  class="demo-ruleForm login-container">
    <span class="tool-bar">
    </span>
    <h2 class="title" style="padding-left:22px;" >欢迎登录</h2>
    <el-form-item prop="account" label="用户名">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password" label="密码">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    
    <el-form-item style="width:100%;">
      
      <el-button type="primary" style="width:48%;" @click.native.prevent="submitForm " :loading="loading">登 录</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    
    return {
      loading: false,
      loginForm: {
        account: '',
        password: '',
        src: ''
      },
      fieldRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    submitForm(formName) {
             this.$store.dispatch('asyncUpdateUser',{name:this.loginForm.account});
             this.$router.push({name:'Main'}) ;
      },
    login() {
      this.loading = true
      let userInfo = { account:this.loginForm.account, password:this.loginForm.password, 
        }
      
    },
    reset() {
      this.$refs.loginForm.resetFields()
    }
  },
  mounted() {
   
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
  }
</style>