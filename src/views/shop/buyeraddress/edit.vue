<template>
  <section class="zkui-user-buyeraddress-edit">

    <zk-head title='地址编辑' goBack='收货地址'></zk-head>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">联系人</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="名字">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="11位手机号">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">详细地址</label>
        </div>
        <div class="weui-cell__bd">
          <x-textarea class="weui-textarea" placeholder="街道门牌号" rows="3"></x-textarea>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">邮政编码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="邮政编码">
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn " href="javascript:" id="showTooltips">确定</a>
    </div>

  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {

      }
    }
  }
</script>
