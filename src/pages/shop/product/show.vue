<template>
  <div class="zkui-pc-productshow auto">
    <header>
      <div class="wrap">
        <a href="">匠芯首页</a>
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
  // reset css
  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
  }

  zkui-pc-productshow {
    font-size: 0.2rem;
    color: #333;
    /*设备默认的字体*/
    font-family: 'Microsoft YaHei', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #333;
  }

  input,
  textarea {
    border: none;
    outline: none; /*border的外轮廓线，起突出作用*/
    resize: none; /*用户手动调整大小*/
    /*特殊的属性定义 清除浏览器给input自带的样式*/
    -webkit-appearance: none; /*组件默认的样式（外观）为空*/
  }

  // Public style
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

  // Private style

  .zkui-pc-productshow {
    header {
      height: 10px;
      width: 100%;
      background-color: red;

    }
  }
</style>
