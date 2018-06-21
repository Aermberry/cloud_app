
<template>
  <section class="zkui-product_list">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-steps :active="1" align-center finish-status="success">
        <el-step title="查看购物车"></el-step>
        <el-step title="拍下商品"></el-step>
        <el-step title="付款到支付宝"></el-step>
        <el-step title="确认收货"></el-step>
        <el-step title="评价"></el-step>
      </el-steps>
    </el-container>
    <div id="content" class="grid-c">
      <div id="address" class="address" style="margin-top: 20px;" data-spm="2">
        <form name="addrForm" id="addrForm" action="#">
          <h2>选择收货地址</h2>
          <div class="list">
            <div class="addr suggest-address addr-cur addr-def">
              <div class="inner">
                <div class="addr-hd" title="广东 东莞 (邓晓霖收)">
                  <span class="prov">广东</span>
                  <span class="city">东莞</span>
                  <span>（</span>
                  <span class="name">邓晓霖</span>
                  <span> 收）</span>
                </div>
                <div class="addr-bd" title="寮步 力盈商务中心鑫盈百货对面电梯7楼">
                  <span class="dist"></span>
                  <span class="town">寮步</span>
                  <span class="addr4tip"></span>
                  <span class="street">力盈商务中心鑫盈百货对面电梯7楼</span>
                  <span class="phone" style="display:inline;">18476213154</span>
                  <span class="last">&nbsp;</span>
                </div>
                <div class="addr-toolbar">
                  <a title="修改地址" class="modify">修改</a>
                </div>
              </div>
            </div>
            <div class="addr suggest-address">
              <div class="inner">
                <div class="addr-hd" title="广东 东莞 (邓晓霖收)">
                  <span class="prov">广东</span>
                  <span class="city">东莞</span>
                  <span>（</span>
                  <span class="name">邓晓霖</span>
                  <span> 收）</span>
                </div>
                <div class="addr-bd" title="横沥 横沥镇山厦村康乐路 名巨中央">
                  <span class="dist"></span>
                  <span class="town">横沥</span>
                  <span class="addr4tip"></span>
                  <span class="street">横沥镇山厦村康乐路 名巨中央</span>
                  <span class="phone" style="display:inline;">18476213154</span>
                  <span class="last">&nbsp;</span>
                </div>
                <div class="addr-toolbar">
                  <a title="修改地址" class="modify">修改</a>
                </div>
              </div>
            </div>
          </div>
          <div class="control">
            <a class="manageAddr" href="">管理收货地址</a>
            <input class="addAddr" type="button" value="使用新地址">
          </div>
        </form>
      </div>
    </div>
    <div></div>
    <div class="order-orderDesc" id="orderDesc_0">
      <h2 class="buy-th-title">确认订单信息</h2>
      <div class="buy-th buy-th-column-6">
        <div class="buy-td td-0">店铺宝贝</div>
        <div class="buy-td td-1">商品属性</div>
        <div class="buy-td td-2">单价</div>
        <div class="buy-td td-3">数量</div>
        <div class="buy-td td-4">优惠方式</div>
        <div class="buy-td td-5">小计</div>
      </div>
    </div>
    <div id="order_51caec6510a0da1de054f5438cf962c8" class="order-order">
      <div class="order-orderInfo" id="orderInfo_51caec6510a0da1de054f5438cf962c8">
        <span class="shop-name">店铺:&nbsp;</span>
        <a class="shop-url" href="" target="_blank">指韵数码专营店</a>
      </div>
      <div class="order-item order-item-column-4" id="item_e0e360b761d309ca3be0142bb59f3e95">
        <div class="order-itemInfo" id="itemInfo_e0e360b761d309ca3be0142bb59f3e95">
          <div class="info-detail info-cell">
            <div class="info-cell">
              <a class="info-img" href="//detail.tmall.com/item.htm?id=524072059697" target="_blank">
                <img class="info-img" src="//img.alicdn.com/bao/uploaded/i2/2106620341/TB2w59tc3NlpuFjy0FfXXX3CpXa_!!2106620341.jpg_100x100q90.jpg">
              </a>
            </div>
            <div class="info-cell info-msg">
              <a href="//detail.tmall.com/item.htm?id=524072059697" class="info-title" target="_blank">ikbc poker升级版/新版poker2 60%mini机械键盘 樱桃轴红茶青黑轴</a>
            </div>
          </div>
          <div class="info-sku info-cell">
            <p>
              <span class="hd">
                <span>套餐类型</span>
                <span>：</span>
              </span>
              <span class="bd">套餐一</span>
            </p>
            <p>
              <span class="hd">
                <span>颜色分类</span>
                <span>：</span>
              </span>
              <span class="bd">Poker 白茶</span>
            </p>
          </div>
          <div class="info-price info-cell">459.00</div>
        </div>
        <div class="order-quantity" id="quantity_e0e360b761d309ca3be0142bb59f3e95">
          <span>1</span>
          <span></span>
          <span></span>
        </div>
        <div class="order-promotion item-promotion">无优惠</div>
        <div class="order-itemPay" id="itemPay_e0e360b761d309ca3be0142bb59f3e95">
          <span class="simple-price">459.00</span>
        </div>
        <div class="seperator"></div>
      </div>
      <div id="orderExt_order_51caec6510a0da1de054f5438cf962c8" class="order-orderExt">
        <div id="extUser_order_51caec6510a0da1de054f5438cf962c8" class="order-extUser">
          <div class="order-invoice" id="invoice_51caec6510a0da1de054f5438cf962c8">
            <div class="invoice-box">
              <div class="invoice-operate">
                <div class="invoice-info">
                  <label class="title-label">发票抬头类型：</label>
                  <label class="uses-radio-select">
                    <input type="radio" name="uses-radio1529560344401" checked="" value="0">
                    <span>个人</span>
                  </label>
                  <label class="uses-radio-select">
                    <input type="radio" name="uses-radio1529560344401" value="1">
                    <span>企业</span>
                  </label>
                </div>
                <div class="invoice-header">
                  <label class="title-label">发票抬头：</label>
                  <span class="">
                    <span>邓晓霖</span>
                    <a class="edit-header" href="#">修改</a>
                  </span>
                  <span class="header-box">
                    <span class="header-err-message hide">
                      <ins class="icon icon-chucuo"></ins>
                      <span>&nbsp;请填写发票抬头</span>
                      <ins class="arrow-top"></ins>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="order-memo" id="memo_51caec6510a0da1de054f5438cf962c8">
            <label class="memo-name" for="memo_51caec6510a0da1de054f5438cf962c8_1">给卖家留言：</label>
            <div class="memo-hint">
              <a class="hint-title">重要提醒</a>
              <div class="mui-msg mui-msg-normal hint-content">
                <ins class="mui-msg-icon mui-msg-icon-tip"></ins>
                <div class="mui-msg-content">此处所填内容仅限对商家的温馨提醒，若您需改变订单内容或另有特殊需求，请您务必通过旺旺与商家确认一致。否则，该填写内容将视为无效。</div>
                <ins class="mui-msg-arrow mui-msg-arrow-top"></ins>
              </div>
            </div>
            <div class="memo-detail">
              <textarea class="text-area-input memo-input" placeholder="选填:填写内容已和卖家协商确认" id="memo_51caec6510a0da1de054f5438cf962c8_1"></textarea>
              <div></div>
            </div>
          </div>
        </div>
        <div id="extInfo_order_51caec6510a0da1de054f5438cf962c8" class="order-extInfo">
          <div class="order-deliveryMethod" id="deliveryMethod_51caec6510a0da1de054f5438cf962c8">
            <div>
              <div class="delivery-title">运送方式:</div>
              <div class="delivery-select">
                <div>
                  <div class="select-item">
                    <div class="select-info">
                      <div class="delivery-box">
                        <div>
                          <label for="normalDelivery">普通配送</label>
                          <span>快递 免邮</span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div class="select-price">0.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="order-postageInsurance" id="postageInsurance_51caec6510a0da1de054f5438cf962c8">
            <div class="user-title">运费险:</div>
            <div class="user-operate">
              <label>
                <span class="trigger">运费险</span>
                <span class="ins-select">卖家送,确认收货前退货可赔</span>
              </label>
              <span class="widget-tips-box">
                <div class="wtip-msg-box">
                  <div class="wtip-arrow-icon"></div>
                  <ins class="wtip-msg-icon"></ins>
                  <div class="wtip-msg">卖家送,确认收货前退货可赔</div>
                </div>
              </span>
              <a href="https://www.taobao.com/markets/baoxian/thyfx?cp=seller" target="_blank" class="ins-question widget-tips-question"></a>
            </div>
            <div class="user-price checked">0.00</div>
          </div>
        </div>
      </div>
      <div class="orderPay">
        <span>店铺合计</span>
        <span>(含运费)</span>
        <span class="price g_price">
          <span>￥</span>
          <em class="style-middle-bold-red J_ShopTotal">459.00</em>
        </span>
      </div>
    </div>
  </section>
</template>
<script>

</script>
<style lang="less">
  .zkui-product_list {
    font-size: 12px !important;
    width: 990px;
    background-color: transparent;
    margin: auto;

    .el-container {
      height: 92px;
      .el-aside {
        width: 400px !important;
        background-color: #d3dce6;
        color: #333;
      }
      .el-steps {
        margin: auto;
        width: 590px;
      }
    }
    .el-step__title {
      font-size: 12px !important;
      padding: 3px 0 !important;
      font-weight: 700 !important;
      line-height: 10px !important;
    }
    a {
      color: #c97;
      cursor: pointer;
      text-decoration: none;
    }
    img {
      border: 0;
    }
    .address {
      .addr {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 237px;
        margin: 0 14px 14px 0;
        color: #666;
        cursor: pointer;
        .inner {
          z-index: 2;
          position: relative;
          padding: 11px 15px;
          background: url(//img.alicdn.com/tps/i2/T1VPiBXvpeXXbjLKQ7-237-106.png)
            no-repeat;
          overflow: hidden;
        }
        .addr-hd {
          width: 100%;
          border-bottom: 1px solid #f2f2f2;
          padding: 0 0 11px;
          margin-bottom: 5px;
          line-height: 18px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span {
            display: inline-block;
            vertical-align: top;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .city {
          font-weight: 700;
          max-width: 64px;
          margin-right: 10px;
        }
        .name {
          max-width: 64px;
          margin-right: 3px;
        }
      }
      .addr-cur {
        .inner {
          background-image: url(//img.alicdn.com/tfs/TB1OVRCRpXXXXaMXFXXXXXXXXXX-237-106.png);
        }
        .addr-bd {
          height: 36px;
          overflow: hidden;
          word-break: break-all;
          word-wrap: break-word;
          span {
            margin-right: 3px;
            word-break: break-all;
            word-wrap: break-word;
          }
        }
      }
      .control {
        min-height: 25px;
      }
      .manageAddr {
        float: right;
      }
      .addAddr {
        display: inline-block;
        vertical-align: middle;
        padding: 0 10px;
        overflow: hidden;
        border: 1px solid #ccc;
        border-width: 0 1px;
        border-radius: 2px;
        background: url(//img.alicdn.com/tps/TB1kidkLXXXXXb4XVXXXXXXXXXX-1-600.png)
          0 -380px repeat-x #f2f2fe;
        cursor: pointer;
        color: #333;
        height: 25px;
        line-height: 25px;
        font-weight: 700;
        text-decoration: none;
      }
    }
    .order-orderDesc {
      h2 {
        line-height: 25px;
        color: #333;
        font-weight: 700;
        font-size: 14px;
      }
      .buy-th {
        margin-top: 15px;
        color: #6c6c6c;
      }
      .buy-td {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-bottom: 3px solid #b2d1ff;
        font-size: 12px;
        margin-left: 1px;
        vertical-align: bottom;
      }
      .td-0 {
        width: 255px;
        margin-left: 0;
      }
      .td-1 {
        width: 180px;
      }
      .td-2 {
        width: 120px;
      }
      .td-3 {
        width: 120px;
      }
      .td-4 {
        width: 180px;
      }
      .td-5 {
        // width: 130px;
        width: 110px;
      }
    }
    .order-order {
      border-bottom: 1px dotted #80b2ff;
    }
    .order-orderInfo {
      position: relative;
      padding-bottom: 5px;
      margin-top: 25px;
      border-bottom: 1px dotted #80b2ff;
      height: 22px;
      .shop-url {
        color: #3c3c3c;
      }
    }
    .order-item {
      border-bottom: 1px dotted #ddd;
      background-color: #fbfcff;
      .seperator {
        background-color: #fff;
        width: 100%;
        height: 1px;
        float: left;
      }
    }
    .order-itemInfo {
      display: inline-block;
      vertical-align: top;
      .info-detail {
        width: 245px;
        padding: 10px 0 10px 10px;
      }
      .info-cell {
        display: inline-block;
        margin-right: 1px;
      }
      .info-img {
        display: block;
        width: 50px;
        height: 50px;
      }
      .info-msg {
        padding-left: 10px;
        vertical-align: top;
        a {
          color: #666;
        }
      }
      .info-title {
        //width: 180px;
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }
      .info-sku {
        color: #6c6c6c;
        width: 180px;
        display: inline-block;
        vertical-align: top;
        padding: 10px 0;
        p {
          word-break: break-all;
        }
      }
      .info-price {
        color: #3c3c3c;
        width: 120px;
        padding: 10px 0;
        text-align: center;
        display: inline-block;
        vertical-align: top;
      }
    }
    .order-quantity {
      width: 120px;
      padding: 10px 0;
      text-align: center;
      display: inline-block;
      vertical-align: top;
      margin-right: 1px;
    }
    .item-promotion {
      text-align: center;
      display: inline-block;
      vertical-align: top;
      width: 180px;
      padding: 10px 0;
      margin-right: 1px;
    }
    .order-itemPay {
      padding: 10px 0;
      //width: 130px;
      width: 110px;
      vertical-align: top;
      text-align: right;
      display: inline-block;
      .simple-price {
        font-weight: 700;
        color: #ff0036;
        padding-right: 10px;
      }
    }
    .order-orderExt {
      background-color: #f2f7ff;
      border-bottom: 1px solid #fff;
    }
    .order-extUser {
      display: inline-block;
      width: 425px;
      vertical-align: top;
    }
    .invoice-box {
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      padding: 10px;
      .invoice-operate {
        padding-top: 5px;
        div {
          padding: 4px 0;
          vertical-align: top;
          height: 18px;
        }
        .title-label {
          display: inline-block;
          min-width: 85px;
        }
        .uses-radio-select {
          margin-right: 20px;
        }
        input {
          margin-right: 5px;
        }
        .edit-header {
          margin-left: 10px;
        }
      }
    }
  }
</style>

