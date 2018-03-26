<template>
  <div class="zkui-pc-orderbuy">
    <div class="zkui-pc_orderbuy-head">
      <div class="zkui-pc-head-top ">
        <div class="auto">
          <ul>
            <li class="gohome">
              <router-link to="">
                <i class="el-icon-edit"></i>
                美丽说首页
              </router-link>
            </li>
            <li>
              <router-link to="">
                <el-dropdown>
                  <el-button type="primary">
                    更多菜单
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                会员中心
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                会员中心
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                登陆
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <el-dropdown>
      <el-button type="primary">
        更多菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
      handleClick () {
        alert('button click')
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style lang="less">
  .auto {
    margin: 0 auto;
    width: 1200px;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }
  .zkui-pc-orderbuy {
    .zkui-pc_orderbuy-head {
      .zkui-pc-head-top {
        height: 30px;
        background-color: #f8f8f8;
        line-height: 30px;
        ul {
          height: 30px;
          text-align: right;
          display: flex;
          li {
            text-align: center;
            height: 100%;
            a {
              height: 20px;
              margin-top: 5px;
              line-height: 20px;
              display: block;
              font-size: 13px;
              padding: 0 18px;
              border-right: 1px dotted #ccc;
              color: @tab-text-default-color;
              i {
                font-size: 13px;
              }
            }
            a:hover {
              color: @brand;
            }
          }
          li:last-child {
            a {
              border: none;
            }
          }
          li.gohome {
            flex: 1;
            text-align: left;
            a {
              border: none;
            }
          }
        }
      }
    }
  }
  .el-dropdown {
    vertical-align: top;
    span {
      font-size: 13px;
      color: #666;
    }
  }
  .el-button--primary:focus,
  .el-button--primary:hover {
    background: transparent;
    border-color: transparent;
  }
  .el-button--primary:focus,
  .el-button--primary:hover span {
    color: @brand;
  }
  .el-button {
    padding: 0;
    background: transparent;
    border-color: transparent;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
