<template>
  <section class="zkui-user-identity-index">

    <zk-head title='实名认证' goBack='会员中心'></zk-head>

    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">真实姓名</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="password" pattern="[0-9]*" placeholder="请输入真实姓名" v-model="identity.RealName">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">性别</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1" v-model="identity.Sex">
            <option selected="" value="1">男</option>
            <option value="2">女</option>
          </select>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">证件类型</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1" v-model="identity.IdentityCardType">
            <option selected="" value="1">身份证</option>
            <option value="2">护照</option>
            <option value="3">港澳通行证</option>
            <option value="4">营业执照</option>
          </select>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">证件号码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="password" pattern="[0-9]*" placeholder="请输入证件号码" v-model="identity.IdentityCardNo">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">证件正面照</label>
        </div>
        <div class="weui-cell__bd">
          <div class="weui-cell__bd">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <div class="weui-uploader">
                  <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles">
                      <li class="weui-uploader__file" style="background-image:url(../)"></li>

                    </ul>
                    <div class="weui-uploader__input-box">
                      <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">证件反面照</label>
        </div>
        <div class="weui-cell__bd">
          <div class="weui-cell__bd">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <div class="weui-uploader">
                  <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles">
                      <li class="weui-uploader__file" style="background-image:url(../)"></li>

                    </ul>
                    <div class="weui-uploader__input-box">
                      <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">个人正面照</label>
        </div>
        <div class="weui-cell__bd">
          <div class="weui-cell__bd">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <div class="weui-uploader">
                  <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles">
                      <li class="weui-uploader__file" style="background-image:url(../)"></li>

                    </ul>
                    <div class="weui-uploader__input-box">
                      <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="apipost" href="javascript:" id="showTooltips">确定</a>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {
        identity: {
          IdentityType: 1,
          IdentityCardType: 1,
          IdentityCardName: 'gggg',
          IdentityCardNo: '36220119940217361X',
          IdentityImagefrontUrl: '123456.45646',
          IdentityImageAntiUrl: '123456789',
          IdentitySmallimageUrl: 'ggg145416',
          CheckState: 1,
          RealName: 'ggg',
          Sex: 1
        }
      }
    },
    methods: {
      async apipost () {
        var repsonse = await apiUser.Identity(this.identity)
        console.dir(repsonse)
      }
    }
  }
</script>

