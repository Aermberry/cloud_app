
<style lang="less">
  @import '../../../../assets/css/zkui/theme';
   .zkui-product-show {
    padding-bottom: 2rem;
    .zkui-product-show-swiper {
      width: 100%;
      height: auto;
    }
    .zkui-product-show-title {
      background: #fff;
      padding: 0.5rem 10px 0 10*@rem;
      .zkui-product-show-title-left {
        .zkui-product-show-title-price_symbol {
          color: @brand;
          height: 1.3rem;
          padding-top: 10*@rem;
        }
        .zkui-product-show-title-price_now {
          .sizeColor(1rem, @brand);
        }
        .zkui-product-show-title-price_old {
          margin-left: 5*@rem;
          text-decoration: line-through;
          .sizeColor(@h4-font-size, @metal);
        }
      }
      .zkui-product-show-title-right {
        margin-top: 0.2rem;
      }
    }
    .zkui-product-show-title-content {
      background: #fff;
      padding: 0 10px 0.2rem 10*@rem;
      border-bottom: 1px solid #e5e5e5;
      .sizeColor(@h1-font-size, @gray-600);
    }
    .zkui-product-show-serve-box {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      height: 1.5rem;
      li {
        color: @gray-600;
        margin-left: 0.5rem;
        line-height: 1.5rem;
      }
      li.zkui-product-show-serve-item-more {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: right;
        padding-right: 10*@rem;
      }
      .zkui-product-show-serve-item-more_icon {
        display: inline-block;
        font-size: 1rem;
        line-height: 0.5rem;
      }
    }
    .zkui-product-show-parameter {
      div {
        .sizeColor(@h2-font-size, @gray-600);
      }
      div.weui-cell__ft:after {
        border-color: @gray-600;
      }
    }
    .zkui-product-show-size {
      height: 2rem;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      background: #fff;
      padding: 0 10*@rem;
      border-bottom: 1px solid #e5e5e5;
      .zkui-product-show-parameter-left {
        height: 100%;
        line-height: 2rem;
        .sizeColor(@h1-font-size, @gray-600);
      }
      .zkui-product-show-parameter-right {
        text-align: right;
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 100%;
        line-height: 2rem;
        font-weight: bold;
        .sizeColor(@h1-font-size, @gray-600);
      }
    }
    .zkui-product-show-size {
      margin-top: 0.5rem;
    }
    .zkui-product-show-parameter-pop_up {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9999;
      padding-bottom: 0.5rem;
      width: 100%;
      min-height: 70vh;
      background: #fff;
      border-top: 1px solid #e5e5e5;
      .zkui-product-show-parameter-pop_up-box {
        height: 70vh;
        position: relative;
        padding-bottom: 2rem;
      }
      .zkui-product-show-parameter-pop_up-box > h2 {
        text-align: center;
        .sizeColor(@h2-font-size, @gray-600);
        .widthHeight(100%, 2rem);
        line-height: 2rem;
        border-bottom: 1px solid #e5e5e5;
      }
      .zkui-product-show-parameter-pop_up-list {
        margin-top: 0.5rem;
        background: #fff;
        padding: 0 10*@rem;
        .zkui-product-show-parameter-pop_up-list-left {
          float: left;
          .widthHeight(20%, 2rem);
          line-height: 2rem;
          text-align: left;
          font-size: @h3-font-size;
          padding: 5*@rem;
        }
        .zkui-product-show-parameter-pop_up-list-right {
          float: left;
          .widthHeight(75%, 2rem);
          line-height: 2rem;
          text-align: left;
          padding: 5*@rem;
          .sizeColor(@h3-font-size, @gray-600);
        }
      }
      .zkui-product-show-parameter-pop_up-list > li {
        border: 1px solid #e5e5e5;
      }
      .zkui-product-show-parameter-pop_up-close {
        position: absolute;
        top: 10*@rem;
        right: 10*@rem;
      }
      .zkui-product-show-parameter-pop_up-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
      }
      .zkui-product-show-parameter-pop_up-bottom > button {
        width: 100%;
        height: 100%;
        font-size: 0.708rem;
        color: #fff;
        background: @brand;
      }
    }
    .zkui-product-show-size-pop_up {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9999;
      width: 100%;
      min-height: 70vh;
      background: #fff;
      padding: 0.5rem;
      border-top: 1px solid #e5e5e5;
      .zkui-product-show-size-pop_up-box {
        position: relative;
        height: 70vh;
        padding-bottom: 2rem;
      }
      .zkui-product-show-size-pop_up-product {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 4rem;
        .zkui-product-show-size-pop_up-product-left > img {
          width: 4rem;
          height: 4rem;
        }
        .zkui-product-show-size-pop_up-product-right {
          -ms-flex: 1;
          -moz-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          padding-top: 1rem;
          padding-left: 10*@rem;
        }
        .zkui-product-show-size-pop_up-product-right > p {
          .sizeColor(@h2-font-size, @gray-600);
        }
        .zkui-product-show-size-pop_up-product-right > h2 {
          .sizeColor(@h2-font-size, @brand);
        }
      }
      .zkui-product-show-size-pop_up-color,
      .zkui-product-show-size-pop_up-yard {
        margin-top: 0.5rem;
        border-bottom: 1px solid #e5e5e5;
      }
      .zkui-product-show-size-pop_up-color > h2,
      .zkui-product-show-size-pop_up-yard > h2 {
        .sizeColor(@h2-font-size, @gray-600);
      }
      .zkui-product-show-size-pop_up-color > ul,
      .zkui-product-show-size-pop_up-yard > ul {
        margin-top: 10*@rem;
      }
      .zkui-product-show-size-pop_up-color > ul > li,
      .zkui-product-show-size-pop_up-yard > ul > li {
        float: left;
        background: #e5e5e5;
        padding: 5px 8*@rem;
        margin-right: 10*@rem;
        margin-bottom: 10*@rem;
        border-radius: 10*@rem;
        .sizeColor(@h4-font-size, @gray-600);
      }
      .zkui-product-show-size-pop_up-color > ul > li.active,
      .zkui-product-show-size-pop_up-yard > ul > li.active {
        background: @brand;
        color: #fff;
      }
      .zkui-product-show-size-pop_up-quantity {
        height: 2rem;
        border-bottom: 1px solid #e5e5e5;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
      }
      .zkui-product-show-size-pop_up-quantity-title {
        .sizeColor(@h2-font-size, @gray-600);
        height: 100%;
        line-height: 2rem;
      }
      .zkui-product-show-size-pop_up-quantity-control {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: right;
        line-height: 2rem;
      }
      .zkui-product-show-size-pop_up-quantity-control > button {
        .widthHeight(1rem, 1rem);
        background: #e5e5e5;
      }
      .zkui-product-show-size-pop_up-quantity-button {
        position: absolute;
        bottom: 0;
        left: 0;
        .widthHeight(100%, 2rem);
      }
      .zkui-product-show-size-pop_up-quantity-button > button {
        .widthHeight(100%, 100%);
        .sizeColor(@h2-font-size, #fff);
        background: @brand;
      }
      .zkui-product-show-size-pop_up-close {
        position: absolute;
        top: 10*@rem;
        right: 10*@rem;
      }
    }
    .zkui-product-show-store {
      background: #fff;
      margin-top: 0.5rem;
      .zkui-product-show-store-title {
        padding: 10px 10*@rem;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        .zkui-product-show-store-title-img {
          .widthHeight(2rem, 2rem);
        }
        .zkui-product-show-store-title-content {
          margin-left: 10*@rem;
          height: 2rem;
          line-height: 2rem;
          .sizeColor(@h2-font-size, @gray-600);
        }
        .zkui-product-show-store-title-into {
          text-align: right;
          -ms-flex: 1;
          -moz-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          height: 2rem;
          padding-right: 10*@rem;
          .zkui-product-show-store-title-into_text {
            display: inline-block;
            height: 1.2rem;
            position: relative;
            padding: 5px 5*@rem;
            background: @brand;
            .sizeColor(@h4-font-size, #fff);
          }
          .zkui-product-show-store-title-into_text:before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            right: -0.6rem;
            top: 0;
            border-top: 0.6rem solid transparent;
            border-bottom: 0.6rem solid transparent;
            border-left: 0.6rem solid @brand;
          }
        }
      }
      .zkui-product-show-store-evaluate {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
      }
      .zkui-product-show-store-evaluate > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: @h4-font-size;
      }
      .zkui-product-show-store-introduce {
        overflow-x: auto;
        white-space: nowrap;
      }
      .zkui-product-show-store-introduce > li {
        display: inline-block;
        padding: 0 10px 10px 10*@rem;
        width: 5.5rem;
      }
      .zkui-product-show-store-introduce > li > img {
        width: 5.5rem;
        height: 5.5rem;
      }
      .zkui-product-show-store-introduce > li > div {
        text-align: center;
        .sizeColor(@h2-font-size, @brand);
      }
      .zkui-product-show-store-introduce > li > div > span {
        padding-left: 5*@rem;
        text-decoration: line-through;
        .sizeColor(@h4-font-size, #979797);
      }
    }
    .zkui-product-show-images {
      font-size: 0 !important;
      img {
        width: 100%;
      }
    }
    .zkui-product-show-bottom {
      width: 100%;
      height: 2rem;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      .zkui-product-show-bottom-left {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 100%;
        text-align: center;
      }
      .zkui-product-show-bottom-left > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding: 5*@rem;
        background: #fff;
        height: 100%;
      }
      .zkui-product-show-bottom-left > li > a {
        display: block;
      }
      .zkui-product-show-bottom-left > li div {
        margin: 0 auto;
        .widthHeight(1rem, 1rem);
      }
      .zkui-product-show-bottom-left > li p {
        font-size:@font-size-sm;
      }
    }
    .zkui-product-show-bottom > ul {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .zkui-product-show-bottom-left-box {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .zkui-product-show-bottom-right,
    .zkui-product-show-bottom-center {
      .widthHeight(27%, 100%);
      text-align: center;
      line-height: 2rem;
    }
    .zkui-product-show-bottom-right > a,
    .zkui-product-show-bottom-center > a {
      .sizeColor(@h3-font-size, #fff);
    }
    .zkui-product-show-bottom-center {
      background: #ff888e;
    }
    .zkui-product-show-bottom-right {
      background: @brand;
    }
    .zkui-product-show-rolltop {
      opacity: 0;
      transition: all 0.5s linear;
      background: #fff;
      .widthHeight(100%, 2.2rem);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      .zkui-product-show-rolltop-left {
        width: 20%;
        padding-left: 10*@rem;
        font-weight: bold;
        padding-top: 1rem;
        height: 2rem;
        .sizeColor(@h1-font-size, @gray-600);
        .zkui-product-show-rolltop-left-icon {
          width: 0.5rem;
          height: 0.5rem;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
      .zkui-product-show-rolltop-center {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
      .zkui-product-show-rolltop-center > ul {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        line-height: 2.2rem;
      }
      .zkui-product-show-rolltop-center > ul > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
      .zkui-product-show-rolltop-center > ul > li > span {
        .sizeColor(@h3-font-size, @gray-600);
        padding: 5px 0;
      }
      .zkui-product-show-rolltop-center > ul > li.active > span {
        .sizeColor(@h3-font-size, @brand);
        border-bottom: 1px solid @brand;
      }
      .zkui-product-show-rolltop-right {
        width: 20%;
        line-height: 2.2rem;
      }
    }
    .zkui-product-show-rolltop_icon {
      .widthHeight(100%, 2.2rem);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      line-height: 2.2rem;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      div {
        line-height: 2.2rem;
        .icon {
          margin-top: 0.3rem;
          svg {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
          }
          .widthHeight(1rem, 1rem);
        }
      }
      div:nth-child(2) {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
      .zkui-product-show-rolltop_icon-left {
        padding-left: 10*@rem;
      }
      .zkui-product-show-rolltop_icon-right {
        text-align: right;
        ul {
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          height: 100%;
          li {
            -ms-flex: 1;
            -moz-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            padding-right: 0.5rem;
            height: 100%;
            position: relative;
            .icon {
              display: block;
              border-radius: 50%;
              .widthHeight(1rem, 1rem);
              svg {
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
              }
            }
            .zkui-product-show-rolltop_icon-more {
              position: absolute;
              top: 1.6rem;
              right: 5*@rem;
              width: 2.5rem;
              border: 1px solid rgba(255, 255, 255, 0.7);
              a {
                .widthHeight(100%, 1.3rem);
                display: block;
                border: 1px solid rgba(255, 255, 255, 0.7);
                line-height: 1.3rem;
                text-align: center;
                background: rgba(0, 0, 0, 0.7);
                color: @light;
              }
            }
          }
        }
      }
    }
    .zkui-product-show-recommend {
      background: @light;
      p {
        padding: 0 10*@rem;
        .widthHeight(100%, 2rem);
        line-height: 2rem;
        .sizeColor(@h2-font-size, @gray-600);
        border-bottom: 1px solid rgba(229, 229, 229, 0.4);
      }
    }
    .isnone {
      opacity: 1;
    }
    .zkui-product-show-Btitle {
      .widthHeight(100%, 1.5rem);
      font-size: @h4-font-size;
      text-align: center;
      line-height: 1.5rem;
      b {
        display: inline-block;
        .widthHeight(0.6rem, 0.6rem);
      }
    }
    .zkui-product-show-evaluate {
      a {
        display: block;
        background: @light;
        .zkui-product-show-evaluate-sum {
          .zkui-product-show-evaluate-sumTitle {
            label {
              .sizeColor(@h2-font-size, @gray-600);
            }
            div.weui-cell__ft:after {
              border-color: @gray-600;
            }
          }
          ul {
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            li {
              -ms-flex: 1;
              -moz-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              font-size: @font-size-base;
            }
            li:last-child {
              text-align: right;
              .sizeColor(@h1-font-size, @gray-600);
              font-weight: bold;
            }
          }
        }
        .zkui-product-show-evaluate-user {
          padding: 0 10px 10px 10*@rem;
          .zkui-product-show-evaluate-user-msg {
            .widthHeight(100%, 2rem);
            line-height: 2rem;
            ul {
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              li {
                margin-right: 5*@rem;
                height: 2rem;
                .sizeColor(@h4-font-size, @gray-600);
                img {
                  border-radius: 50%;
                  .widthHeight(2rem, 2rem);
                }
              }
            }
          }
          .zkui-product-show-evaluate-content {
            .sizeColor(@h3-font-size, @gray-600);
            margin-top: 10*@rem;
          }
          .zkui-product-show-evaluate-img {
            margin-top: 10*@rem;
            ul {
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              li {
                .widthHeight(3rem, 3rem);
                margin-right: 5*@rem;
                img {
                  .widthHeight(3rem, 3rem);
                }
              }
            }
          }
        }
      }
    }
    // 过度动画
    .bounce-enter-active {
      animation: bounce-in 0.4s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.4s reverse;
    }
    // @keyframes bounce-in {
    //   0% {
    //     opacity: 0;
    //     transform: translateY(70vh);
    //   }
    //   100% {
    //     opacity: 1;
    //     transform: translateY(0vh);
    //   }
    // }
}
</style>

