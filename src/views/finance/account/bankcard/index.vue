<template>
  <section class="zkui-user-account-bankcard">

    <zk-head title='我的银行卡' goBack='我的钱包'></zk-head>
    <div class="vux-checker-box">
      <div class="vux-form-preview weui-form-preview">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">老板</label>
          <em class="weui-form-preview__value">18575182888</em>
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars ">
              第三方
            </span>
          </div>
        </div>
        <div class="weui-form-preview__ft">
          <div class="editor_default">
            <div class="vux-checker-item vux-tap-active check-icon-item check-icon-item-selected">
              <i class="weui-icon weui_icon_success weui-icon-success"></i> 默认地址</div>
          </div>
          <div class="editor_delete">
            <a class="editor">
              <svg version="1.1" width="1rem" height="1rem" viewBox="0 0 1024 1024" class="editor-icon metal svg-icon">
                <path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z" stroke="transparent"></path>
              </svg>
              <span>编辑</span>
            </a>
            <a class="delete">
              <svg version="1.1" width="1rem" height="1rem" viewBox="0 0 1024 1024" class="delete-icon brand svg-icon">
                <path d="M580.352 747.648V388.672c0-41.856 65.344-41.856 65.344 0v358.912c0.064 41.856-65.344 41.856-65.344 0.064z m-196.032 0V388.672c0-41.856 65.344-41.856 65.344 0v358.912c0 41.856-65.344 41.856-65.344 0.064z m555.584-522.112h-163.392v-65.28c0-54.08-43.968-97.856-97.088-97.856H351.616a97.92 97.92 0 0 0-98.048 97.856v65.28H90.176c-41.856 0-41.856 65.216 0 65.216h849.664c41.92 0 41.92-65.216 0.064-65.216z m-620.928-65.28c0-17.344 15.296-32.64 32.64-32.64h327.808c17.344 0 31.68 13.312 31.68 32.64v65.28H318.976v-65.28z m424.832 815.744H286.272a97.92 97.92 0 0 1-97.984-97.856V388.672c0-19.392 15.296-32.64 32.64-32.64s32.704 13.248 32.704 32.64v489.408c0 17.344 15.36 32.64 32.64 32.64h457.536a33.6 33.6 0 0 0 32.704-32.64V389.696c0-42.816 65.344-42.816 65.344 0v488.448a97.984 97.984 0 0 1-98.048 97.856z m0 0" stroke="transparent"></path>
              </svg>
              <span>删除</span>
            </a>
          </div>
        </div>
        <p class="vux-divider  divider-bg "></p>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/account.api'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData () {
        var response = await apiUser.bankCardList()
        console.log(response)
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-backcard {
    body {
      background: @gray-100;
      padding-bottom: 50 * @rem;
    }
    .vux-checker-box {
      padding-bottom: 10rem;
    }
    .address_name {
      font-size: 1.2rem;
      color: @black;
      text-align-last: none;
    }
    .address_particulars {
      font-size: 1rem;
      color: @black;
      text-align: left;
    }
    .weui-form-preview:after {
      border-bottom: 0;
    }
    .weui-form-preview__btn {
      height: 3.33333333rem;
      line-height: 3.33333333rem;
    }
    .weui-form-preview__hd {
      padding: 0.2rem 1.25rem 0.2rem 1.25rem;
      line-height: 2em;
      .weui-form-preview__value {
        font-size: @h5-font-size;
      }
    }
    .weui-form-preview__hd:after {
      border-bottom: 0;
    }
    .weui-form-preview__ft {
      line-height: 2.2rem;
    }
    .vux-x-switch {
      height: 3.33333333rem;
      padding: 0;
    }
    .weui-cell__ft {
      height: 3.33333333rem;
      input {
        margin-top: 0.35rem;
      }
    }
    .weui-switch:before,
    .weui-switch-cp__box:before {
      height: 2.66666667rem !important;
    }
    .weui-switch:after,
    .weui-switch-cp__box:after {
      height: 2.66666667rem !important;
      width: 2.66666667rem !important;
    }
    .editor_default {
      width: 70%;
      float: left;
    }
    .editor_delete {
      display: block;
      width: 30%;
      float: right;
      font-size: @h6-font-size;
      .editor {
        span {
          left: 1rem;
        }
        svg {
          top: 0.4rem;
          left: 0rem;
        }
      }
      .delete {
        span {
          left: 3rem;
        }
        svg {
          top: 0.4rem;
          left: 2rem;
        }
      }
    }
    .adress-default {
      font-size: @h6-font-size;
    }
  }
</style>

