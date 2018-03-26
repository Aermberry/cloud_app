<template>
  <!-- 底部 -->
  <div class="zkui-pc_foot">
    <div class="auto">
      <div class="foot-top">
        <div class="foot-top-left">
          <el-row>
            <el-col :span="6">
              <div>
                <h4 class="foot-top-left-title">
                  买家帮助
                </h4>
                <ul class="foot-top-left-content">
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <h4 class="foot-top-left-title">
                  买家帮助
                </h4>
                <ul class="foot-top-left-content">
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <h4 class="foot-top-left-title">
                  买家帮助
                </h4>
                <ul class="foot-top-left-content">
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <h4 class="foot-top-left-title">
                  买家帮助
                </h4>
                <ul class="foot-top-left-content">
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      新手指南
                    </router-link>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="foot-top-right">
          <el-row>
            <el-col :span="12">
              <div>
                <h4>刘成恩</h4>
                <img src="" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <h4>刘成恩</h4>
                <img src="" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="foot-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam magnam fugit at officiis dolor dolorum facilis veritatis quod quam! Modi commodi rem dolor incidunt aliquid itaque cumque veritatis libero.
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .auto {
    margin: 0 auto;
    width: 1200px;
  }
  .zkui-pc_foot {
    margin-top: 15px;
    padding-top: 30px;
    min-height: 150px;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    font-size: 12px;
    color: #666;
    .foot-top {
      display: flex;
      .foot-top-left {
        width: 70%;
        .foot-top-left-title {
          font-size: 18px;
          font-weight: @font-weight-bold;
          margin-bottom: 10px;
        }
        .foot-top-left-content {
          li {
            margin-bottom: 10px;
            a {
              display: block;
              font-size: 14px;
              color: @tab-text-default-color;
            }
            a:hover {
              color: @brand;
            }
          }
        }
      }
      .foot-top-right {
        width: 40%;
        h4 {
          font-size: 18px;
          font-weight: @font-weight-bold;
          margin-bottom: 10px;
          text-align: center;
        }
        img {
          display: block;
          width: 150px;
          height: 150px;
          margin: 0 auto;
        }
      }
    }
    .foot-bottom {
      border-top: 1px solid #e6e6e6;
      line-height: 22px;
      padding: 12px 192px;
      text-align: center;
      font-size: 13px;
    }
  }
</style>
