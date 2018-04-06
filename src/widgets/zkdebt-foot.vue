<template>
  <section class="zkuidebt-foot">
    <div class="placeholder"></div>
    <div class="zkfoot footer">
      <ul class="clear">
        <router-link to="/default" tag="li" class="footer_li">
          <div class="li_img">
            <img src="../../static/images/foot/1.png" alt="">
          </div>
          <section class="li_text" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' ">首页</section>
        </router-link>
        <router-link to="" tag="li" class="footer_li" @click="ceshi">
          <section class="li_img">
            <img src="../../static/images/foot/2.png" alt="">
          </section>
          <section class="li_text" :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' ">债事管理</section>

        </router-link>
        <router-link to="" tag="li" class="footer_li footer_li-center" @click="ceshi">
          <div class="center-box">
            <section class="li_img">
              <img src="../../static/images/foot/3.png" alt="">
            </section>
            <section class="li_text" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' ">债事公告</section>
          </div>
        </router-link>
        <router-link to="" tag="li" class="footer_li" @click="ceshi">
          <section class="li_img">
            <img src="../../static/images/foot/4.png" alt="">
          </section>
          <section class="li_text" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' ">咨询中心</section>
        </router-link>
        <router-link to="/user/index" tag="li" class="footer_li">
          <section class="li_img">
            <img src="../../static/images/foot/5.png" alt="">
          </section>
          <section class="li_text" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' ">我</section>
        </router-link>
      </ul>
    </div>
  </section>
</template>
<script>
  import { MIcon } from 'zkui'
  export default {
    components: {
      MIcon
    },
    mounted () {
    },
    methods: {
      ceshi () {
        this.$vux.toast.show('敬请期待')
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped  lang="less">
  @import '../assets/css/zkui/theme';
  .zkuidebt-foot {
    .placeholder {
      width: 100%;
      height: 75*@rem;
    }
    .footer {
      position: fixed;
      z-index: 999;
      bottom: 0;
      width: 100%;
      height: 50*@rem;
      background: rgba(255, 255, 255, 0.9);
      z-index: 9999;
      // border-top: 1px solid rgba(229, 229, 229, 0.4);
      ul {
        width: 100%;
        height: 50*@rem;
        box-sizing: border-box;
        .footer_li {
          float: left;
          width: 20%;
          height: 50*@rem;
          text-align: center;
          position: relative;
          border-top: 1px solid @gray-500;

          z-index: 9999;
          .li_img {
            margin: 0 auto;
            margin-top: 2*@rem;
            width: 25*@rem;
            height: 25*@rem;
            img {
              width: 100%;
              height: 100%;
            }
            svg {
              width: 25*@rem;
              height: 25*@rem;
            }
          }
          .li_text {
            text-align: center;
            font-size: @h6-font-size;
            margin-top: 3*@rem;
            color: @black !important;
          }
        }
        .footer_li-center {
          position: relative;
          z-index: 9999;
          border-top: none;
          .center-box {
            width: 105%;
            min-height: 50*@rem;
            top: 53%;
            left: 50%;
            background: @white;
            transform: translate(-50%, -52%);
            position: absolute;
            z-index: 9999;
            // border-top: 1px solid @gray-500;
            .li_img {
              width: 45*@rem;
              height: 45*@rem;
              margin: 0;
              position: absolute;
              top: 12%;
              left: 50%;
              transform: translate(-50%, -50%);
              svg {
                width: 100%;
                height: 100%;
              }
            }
            .li_text {
              margin-top: 2.5rem;
              font-size: 0.8rem;
            }
          }
        }
        .footer_li-center:before {
          content: '';
          position: absolute;
          top: -23*@rem;
          left: -1*@rem;
          border-radius: 50%;
          width: 100%;
          height: 50*@rem;
          border: 1px solid @gray-500;
          z-index: 9998;
          background: @white;
        }
      }
    }
  }
</style>




