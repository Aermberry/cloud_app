<template>

  <section class="user">
    <zk-head></zk-head>
    <div class="weui-cells">

      <router-link to="/User/QrCode">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">二维码名片</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Tree">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">组织架构图</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Adduser">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">注册会员</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Recuser">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">我的会员</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Security">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">安全设置</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Info">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">账户信息</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/Order/List">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">我的订单</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/Index">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">钱包</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/Transfer">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">转账</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/TransferBill">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">转账记录</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/Recharge">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">充值</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/RechargeBill">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">充值记录</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/WithDraw">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">提现</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/WithDrawBill">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">提现记录</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/BankCard/Index">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">我的银行卡</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/FinanceBill">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">财务记录</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Reward/FenRun">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">我的分润</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Favorite/Index">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">我的收藏</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/address/Index">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">收货地址</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/order/cart">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">购物车</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/RechargeBillView">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">充值详情</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/TransferBillView">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">转账详情</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Account/WithDrawBillView">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">提现详情</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/order/buyfromproduct">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">提交订单</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/Pay/Index">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">支付订单</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/address/Edit">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">地址编辑</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/userplan/apply">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">债事申请</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/userplan/show">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">债事展示</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

      <router-link to="/User/Identity/Index">
        <div class="weui-cell weui-cell_access">
          <div class="cell-icon">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productline-blue"></use>
            </svg>
          </div>
          <div class="weui-cell__bd">
            <span style="vertical-align: middle">实名认证</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </router-link>

    </div>

    <zk-foot></zk-foot>
  </section>
</template>m-icon/index

<script>

</script>
