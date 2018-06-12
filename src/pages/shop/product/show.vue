<template>
  <div class="zkui-pc-productshow auto">
    <header class="productshow-top-box">
      世界，你好
      <div class="wrap">
        <a href="#">匠芯首页</a>
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
  .auto {
    margin: 0 auto;
    width: 1200;
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
  a {
    font-size: 10px;
  }
  // Private style

  .zkui-pc-productshow {
    header {
      height: 50px;
      width: 100%;
      background-color: red;
      font-size: 8px;
      .wrap{
        a {
          // font-size: 10px;
        }
      }
    }
  }
</style>
