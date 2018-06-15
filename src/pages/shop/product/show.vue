<template>
  <div class="zkui-pc-productshow">
    <header class="productshow-top-box">
      <div class="contain">
        <a href="#" class="l-logo ">
          <span class="el-icon-goods"></span>
          <span>匠芯首页</span>
        </a>
        <ul>
          <li>
            <a href="#">
              登陆
            </a>
          </li>
          <li>
            <a href="#">
              <span class="el-icon-tickets"></span>
              <span>我的订单</span>
            </a>
          </li>
          <li>
            <a href="#" class="el-icon-edit">
              购物车
            </a>
          </li>
          <li>
            <a href="#">
              客户服务
            </a>
          </li>
           <li>
            <a href="#">
              <span class="el-icon-loading"></span>
              <el-dropdown>
                <span el-dropdown-link>商家后台</span>
                <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>管理后台</el-dropdown-item>
    <el-dropdown-item>商家社区</el-dropdown-item>
    <el-dropdown-item>商家培训</el-dropdown-item>
    <el-dropdown-item divided>市场入驻</el-dropdown-item>
  </el-dropdown-menu>
              </el-dropdown>

            </a>
          </li>
        </ul>
      </div>
    </header>

    <body>

    </body>
    <footer>

    </footer>

  </div>
</template>
<script>



</script>


<style lang="less" scoped>
  // Public style
  .f_left {
    float: left;
  }

  .f_right {
    float: right;
  }
  .m_r10 {
    margin-left: 10px;
  }

  .m_r10 {
    margin-right: 10px;
  }

  .m_r10 {
    margin-top: 10px;
  }

  .m_r10 {
    margin-bottom: 10px;
  }


  // Private style

  .zkui-pc-productshow {
    header {
      background-color: #f2f2f2;
      .contain {
        background-color: yellowgreen;
        margin: 0 auto;
        position: relative;
        height: 30px;
        max-width: 90%;
        min-width: 60%;
        .l-logo {
          text-align: center;
          line-height: 30px;
          height: 30px;
          width: 100px;
          display: flex; //启用flex布局
          flex-flow: row nowrap; //flex是flex-direction和flex-wrap的缩写
          justify-content: center; //主轴的对齐方式
          align-items: center; //侧轴的对齐方式
          span {
            font-size: 12px;
          }
          span:first-child {
            line-height: 30px;
            flex-basis: 26px; //调整第一个span在flex布局中的占空间的比例
          }
        }
        ul {
          position: absolute;
          // display: block;
          right: 10px;
          top: 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          width: 300px;
          // background-color: green;
          li{
            // padding: 0 10px;
            // border-left: 1px solid #eeeeee;
            border: 0 1px solid #eeeeee;
            height: 30px;
            text-align: center;
            a{
              line-height: 30px;
              height: 30px;
              display: block;
              // background-color: aquamarine;
              font-size: 12px;
              span {
                font-size: 12px!important;
              }
            }
          }

        .dropdown {
          font-size: 12px;
          line-height: 30px;
        }
        }
      }
    }
  }
</style>
