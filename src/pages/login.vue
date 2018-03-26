<template>
  <div>
    <div class="zkui-pc_login">
      <div class="login-head auto">
        <router-link to="">
          <img src="../assets/images/icon/about.png" alt="logo">
        </router-link>
      </div>
      <div class="login-content">
        <div class="login-box">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="login=true">普通登陆</el-menu-item>
            <el-menu-item index="2" @click="login=false">手机登陆</el-menu-item>
          </el-menu>
          <div class="login-form">
            <div class="login-first" v-if="login">
              <div class="login-name">
                <!-- <input type="text" placeholder="用户名"> -->
                <el-input v-model="input" placeholder="用户名" maxlength="20" minlength="6"></el-input>
              </div>
              <div class="login-name">
                <el-input v-model="password" placeholder="密码" maxlength="20" minlength="6"></el-input>
              </div>
            </div>
            <div class="login-first" v-if="!login">
              <div class="login-name">
                <el-input v-model="phone" placeholder="手机号码" maxlength="11" minlength="6"></el-input>
              </div>
              <div class="login-name">
                <el-input v-model="verification" placeholder="验证码" maxlength="6" minlength="6"></el-input>
              </div>
            </div>
            <div class="login-button">
              <el-button type="primary">主要按钮</el-button>
            </div>
            <div class="login-reg">
              <router-link to="">
                忘记密码
              </router-link>
              <router-link to="" class="regist">
                免费注册
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import { } from 'zkui'
  // import { ZkPcFoot } from 'src/pages/widgets/zk-pc-foot'
  // import apiService from 'src/service/api/product.api'
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    data () {
      return {
        activeIndex: '1',
        login: true
      }
    },
    watch: {
    }
  }
</script>
<style lang="less">
  .auto {
    margin: 0 auto;
    width: 1200px;
  }
  .zkui-pc_login {
    .login-head {
      padding: 20px 0;
      a {
        display: block;
        width: 220px;
        height: 52px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
    }
    .login-content {
      height: 600px;
      background: url('../assets//images/bg/1.jpg')no-repeat;
      background-size: 100% 100%;
      padding-left: 60%;
      padding-top: 80px;
      .login-box {
        width: 356px;
        min-height: 200px;
        border: 1px solid #ddd;
        background: rgba(255, 255, 255, 0.8);
        .el-menu--horizontal {
          padding-left: 67px;
          background: transparent;
          border-bottom: 1px solid @gray-400;
        }
        .el-menu--horizontal > .el-menu-item {
          margin-right: 30px;
        }
        .el-menu--horizontal > .el-menu-item {
          height: 50px;
          font-weight: @font-weight-bold;
          background: transparent;
        }
        .el-menu--horizontal > .el-menu-item.is-active {
          color: @brand;
          background: transparent;
        }
      }
      .login-form {
        padding: 20px 40px;
        min-height: 200px;
        .login-first {
          .login-name {
            height: 40px;
            .el-input {
              display: block;
            }
            input {
              width: 100%;
              background: transparent;
              height: 40px;
              border: 1px solid #ccc;
              padding: 0 6px;
              vertical-align: top;
              font-size: 13px;
            }
            margin-bottom: 15px;
          }
        }
        .login-button {
          padding-top: 10px;
          button {
            display: inline;
            float: left;
            border: none;
            width: 100%;
            height: 40px;
            background: @brand;
            border-radius: 2px;
            cursor: pointer;
            color: #fff;
            span {
              font-size: 13px;
            }
          }
        }
      }
      .login-reg {
        padding-top: 20px;
        text-align: right;
        a {
          color: @tab-text-default-color;
          font-size: 13px;
          text-decoration: underline;
          margin-left: 20px;
        }
        a.regist {
          color: @brand;
        }
      }
    }
  }
</style>
