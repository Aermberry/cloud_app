<template>
    <div class="zkui-pc-orderbuy">
        <div class="zkui-pc_orderbuy-head">
            <div class="zkui-pc-head-top ">
                <div class="auto">
                    <ul>
                        <li class="gohome">
                            <router-link to="">
                                <i class="el-icon-edit"></i>
                                美丽说首页
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <el-dropdown>
                                    <el-button type="primary">
                                        刘成恩
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </el-button>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i class="el-icon-edit"></i>
                                我的订单
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i class="el-icon-edit"></i>
                                帮助中心
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="zkui-pc-head-center">
                <div class="auto ">
                    <router-link to="">
                        <img src="../assets/images/bg/1.jpg" alt="">
                    </router-link>
                    <div class="center-steps">
                        <el-steps :active="active" finish-status="success">
                            <el-step title="购物车"></el-step>
                            <el-step title="确认订单"></el-step>
                            <el-step title="支付"></el-step>
                            <el-step title="完成"></el-step>
                        </el-steps>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-box auto">
            <div class="cart_page_wrap">
                <div class="cart_page_box-title">
                    <ul class="flex">
                        <li class="cart_c_input">1</li>
                        <li class="flex-one">商品</li>
                        <li class="cart_c_product_message">商品信息</li>
                        <li class="cart_c_price">单价(元)</li>
                        <li class="cart_c_num">数量</li>
                        <li class="cart_c_price">小计(元)</li>
                        <li class="cart_c_price">操作</li>
                    </ul>
                </div>
                <div class="cart-store cart-store-name">
                    <div class="cart_page_box">
                        <ul class="flex">
                            <li class="cart_c_input">全选</li>
                            <li class="flex-one ">
                                <p class="one-name">店铺名称</p>
                            </li>
                        </ul>
                    </div>
                    <div class="cart_page_box cart-store-message">
                        <ul class="flex">
                            <li class="cart_c_input">1</li>
                            <li class="flex-one cart_c_one">
                                <router-link to="" class="one-img">
                                    <img src="" alt="">
                                </router-link>
                                <router-link to="" class="one-title">
                                    春秋新款韩版学生长袖恶魔笑脸夹克两面穿bf宽松棒球服外套女
                                </router-link>
                            </li>
                            <li class="cart_c_product_message">
                                <p>颜色:黑色</p>
                                <p>尺码:S</p>
                            </li>
                            <li class="cart_c_price">
                                <p class="prict-old">112.0</p>
                                <p class="prict-now">79.00</p>
                            </li>
                            <li class="cart_c_num">
                                <p>12</p>
                            </li>
                            <li class="cart_c_price">
                                <h2> 79.00</h2>
                            </li>
                            <li class="cart_c_price">
                                <el-button type="danger" round>删除</el-button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="cart_paybar">
                <router-link to="" class="paybar-btn fr">
                    去付款
                    <i class="el-icon-arrow-right"></i>
                </router-link>
                <div class="total-price fr">
                    79.00
                </div>
                <div class="paybar-info fr">
                    共有
                    <span>0</span> 款商品，总计：
                </div>
            </div>
        </div>
    </div>
</template>

