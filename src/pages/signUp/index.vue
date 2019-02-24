<template>
  <div class="signUp-container">
    <h1>注册</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="passwordAgain"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="mobile"></el-input>
      </el-form-item>
      <el-form-item label="验证码" class="vcode">
        <el-input v-model="vCode"></el-input>
        <div v-html="vCodeStr" class="code" @click="changeVCode"></div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="signUp">注册</el-button>
        <router-link to="/signIn" class="signIn">已有账号,去登录</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordAgain: "",
      nickname: "",
      mobile: "",
      vCode: "",
      vCodeStr: ""
    };
  },
  created() {
    this.getVCode();
  },
  methods: {
    getVCode() {
      this.$http.get("/users/getVCode").then(result => {
        // console.log(result);
        this.vCodeStr = result;
      });
    },
    changeVCode() {
      this.getVCode();
    },
    signUp() {
      let {
        username,
        password,
        passwordConfirm,
        nickname,
        mobile,
        vCode
      } = this;
      if (username.trim().length === 0) {
        return this.$message({
          type: "error",
          message: "请输入用户名"
        });
      }
      if (password.trim().length === 0) {
        return this.$message({
          type: "error",
          message: "请输入密码"
        });
      }
      if (password !== this.passwordAgain) {
        return this.$message({
          type: "error",
          message: "请确认密码一致"
        });
      }
      if (nickname.trim().length === 0) {
        return this.$message({
          type: "error",
          message: "请输入昵称"
        });
      }
      if (mobile.trim().length === 0) {
        return this.$message({
          type: "error",
          message: "请输入手机号"
        });
      }
      if (vCode.trim().length === 0) {
        return this.$message({
          type: "error",
          message: "请输入验证码"
        });
      }
      this.$http
        .post("/users/register", {
          username,
          password,
          passwordConfirm,
          nickname,
          mobile,
          vCode
        })
        .then(result => {
            console.log(result);
          if (result.status === 200) {
            this.$message({
              type: "success",
              message: result.succMsg
            });
            localStorage.setItem('token',result.data.token)
            localStorage.setItem('userInfo',JSON.stringify(result.data))
            this.$router.push('/')
          }
        })
        .catch(error => {
          //   console.dir(error.response.data.errMsg);
          this.$message({
            type: "error",
            message: error.response.data.errMsg
          });
        });
    }
  }
};
</script>
<style lang="less">
.signUp-container {
  width: 500px;
  margin: 100px auto;
  text-align: center;
  h1 {
    font-size: 36px;
    color: #0094ff;
    margin-bottom: 20px;
  }
  .el-button {
    margin-right: 80px;
  }
  .signIn {
    text-decoration: none;
    color: #0094ff;
  }
  .vcode {
    .el-form-item__content {
      display: flex;
      .el-input {
        width: 60%;
      }
      .code {
        margin-left: 40px;
      }
    }
  }
}
</style>