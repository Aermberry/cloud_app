<template>
  <section class="zkui-user-account-bankcard">

    <zk-head title='我的银行卡' goBack='我的钱包'></zk-head>
    <div class="vux-checker-box">
      <div class="vux-form-preview weui-form-preview" v-for="(item,index) in dataList" :key="index">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">{{item.bankName}}</label>
          <em class="weui-form-preview__value">{{item.bankNumber}}</em>
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars ">
            </span>
          </div>
        </div>
        <div class="weui-form-preview__ft">
          <div class="editor_default">
            <!-- <div class="vux-checker-item vux-tap-active check-icon-item check-icon-item-selected">
              <i class="weui-icon weui_icon_success weui-icon-success"></i> 默认地址</div> -->
            {{item.bankTypeName}}
          </div>
          <div class="editor_delete">
            <a class="editor" @click="operation('编辑',item.id)">
              <m-icon name="zk-editor" size="1rem" class="editor-icon metal"></m-icon>
              <span>编辑</span>
            </a>
            <a class="delete" @click="deleteD(item.id)">
              <m-icon name="zk-remove" size="1rem" class="delete-icon brand"></m-icon>
              <span>删除</span>
            </a>
          </div>
        </div>
        <p class="vux-divider  divider-bg "></p>
      </div>
    </div>
    <div class="add_addressBtn">
      <x-button type="warn" @click.native="operation('添加')">添加银行卡</x-button>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/account.api'
  import { XButton } from 'zkui'
  export default {
    components: {
      XButton
    },
    data () {
      return {
        dataList: ''
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      operation (type, id) {
        this.$router.push({
          name: 'account_addbankcard',
          params: {
            operation: type,
            id: id
          }
        })
      },
      async deleteD (id) {
        var deleteMsg = await apiUser.bankCardDelete(id)
        if (deleteMsg.data.status === 1) {
          this.$vux.toast.success(deleteMsg.data.message)
          this.getData()
        } else {
          this.$vux.toast.warn(deleteMsg.data.message)
        }
      },
      async getData () {
        var response = await apiUser.bankCardList()
        this.dataList = response.data.result
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-bankcard {
    body {
      background: @gray-100;
    }
    .vux-divider {
      display: table;
      white-space: nowrap;
      height: auto;
      overflow: hidden;
      line-height: 1;
      text-align: center;
      padding: 10px 0;
      color: #666;
    }
    .divider-bg {
      background: #f7f7f7;
      height: 0.5rem;
      line-height: 0.5rem;
      display: block;
      padding: 0rem;
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
      padding-left: 1.25rem;
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
    .add_addressBtn {
      position: fixed;
      width: 100%;
      height: 2.5rem;
      overflow-y: auto;
      z-index: 5;
      background-color: white;
      bottom: 6.5rem;
      .weui-btn {
        border-radius: 0;
        height: 2.5rem;
      }
    }
  }
</style>

