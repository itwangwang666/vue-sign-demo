<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">收货人信息</template>
              <el-menu-item index="1-1">所有收货人信息</el-menu-item>
              <el-menu-item index="1-2">武汉收货人信息</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户安全">
              <el-menu-item index="1-3">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="loginOut">
          <span>昵称:{{userInfo.nickname}}</span>
          <el-button type="danger" @click="signUp">退出登录</el-button>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      userInfo : JSON.parse(localStorage.getItem('userInfo') || '{}')
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
      switch (key) {
        case "1-1":
          this.$router.push("/home/table");
          break;

        case "1-2":
          this.$router.push("/home/wuhanTable");
          break;
      }
    },
    signUp(){
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      this.$router.push('/')
      this.$message({
        type:'success',
        message:'退出成功'
      })
    }
  }
};
</script>
<style lang="less" scoped>
.loginOut{
  display: flex;
  align-items: center;
  margin-left:30px;
  margin-top:10px;
  span{
    margin-right: 20px;
  }
}
</style>
