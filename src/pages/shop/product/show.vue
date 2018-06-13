<template>
  <div class="zkui-pc-productshow">
    <header class="productshow-top-box">
      <div class="wrap">
        <a href="#" class="l-logo">匠芯首页</a>
        <ul>
          <li>
            <a href="#" >
              登陆
            </a>
          </li>
          <li>
            <a href="#">
              我的订单
            </a>
          </li>
          <li>
            <a href="#">
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
  *{
    margin: 0;
    padding: 0;
  }
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
  } // Private style
  .zkui-pc-productshow {
    header {
      .wrap {
        // position: relative;
        height: 10px;
        width: 100%;
        background-color: #f2f2f2;
        background-color: black;

        .l-logo {
          // position: absolute;
          left: 0;
          // display:inline-block;
          background-color:pink;
          font-size: 8px;
          color: #000000;
        }
        ul {
          background-color:green;
          // position: absolute;
          right: 0;
          li {
            display: inline;
            a{
              font-size: 10px;
            }
          }
        }
      }
    }
  }
</style>
