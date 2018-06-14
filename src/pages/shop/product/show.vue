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
              我的订单
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

  .clearfix::after,
  .clearfix::before {
    content: '.';
    line-height: 0;
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  // Private style
  .zkui-pc-productshow {
    header {
      background-color: #f2f2f2;
      .contain {
        background-color: yellowgreen;
        margin: 0 auto;
        position: relative;
        height: 31px;
        max-width: 90%;
        min-width: 60%;

        // background-color: black;
        .el-icon-goods {
        }

        .l-logo {
          background-color: pink;
          text-align: center;
          line-height: 30px;
          height: 30px;
          width: 100px;
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;

          span {
            line-height: 30px;
            font-size: 12px;
            // display: block;
          }
        }
        ul {
          position: absolute;
          display: block;
          right: 10px;
          top: 0;

          // background-color: green;
          // position: absolute;
          right: 0;
          li {
            float: left;
            a {
              display: block;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>
