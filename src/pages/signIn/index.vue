<template>
  <div class="form-container">
      <h1>登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" @keyup.native.enter="signIn"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="signIn">登录</el-button>
        <router-link to="/signUp" class="signUp">没有账号?注册一个</router-link>
      </el-form-item>
      
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        username:'',
        password:''
      }
    },
    methods: {
      signIn() {
          if(this.username.trim().length === 0 || this.password.trim().length === 0){
               return this.$message('请输入用户名或密码')
          }
          //发送post请求
        this.$http.post("/users/login",{
          username:this.username,
          password:this.password
        }).then(result=>{
          console.log(result)
          this.$message({
            type:"success",
            message:result.succMsg
          })
          localStorage.setItem('token',result.data.token)
          localStorage.setItem('userInfo',JSON.stringify(result.data))
          this.$router.push('/home')

        }).catch(error=>{
          console.dir(error)
          this.$message({
            type:"error",
            message:error.response.data.errMsg
          })
        })
      }
    }
  }
</script>
<style lang="less" scoped>
.form-container{
    width: 400px;
    margin:200px auto;
    text-align: center;
    h1{
        font-size: 36px;
        color:#0094ff;
        margin-bottom: 20px;
    }
    .el-button{
        margin-right: 80px;
    }
    .signUp{
          text-decoration: none;
          color:#0094ff;
        }
}
</style>
