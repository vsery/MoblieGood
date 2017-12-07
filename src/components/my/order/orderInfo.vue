<!-- 订单详情 -->
<template>
    <div id="orderInfo">
        <div class="headerBg">
            <header-bar :isWhite="false"></header-bar>
        </div>
        <template v-if="order!=null">
            <div class="order-state-box" v-if="orderDesc!=null">
                <div class="icon state">
                    <img :src="orderDesc.icon" alt="">
                </div>
                <div class="state-help">{{orderDesc.state}}</div>
                <div class="state-help-text">{{orderDesc.help}}</div>
            </div>
            <div class="order-box">
                <template v-if="logistics!=null">
                    <div class="order-received" v-if="logisticsView" @click="eveReceived(order)">
                        <div class="cover"><i class="icon iconfont icon-daishouhuo"></i></div>
                        <div class="description" v-if="logistics.state=='end'">
                            <div class="state on">卖家发货</div>
                            <div class="createTime">{{logistics.createTime}}</div>
                        </div>
                        <div class="description" v-else>
                            <div class="state">快递已签收，签收人：{{logistics.userGet.name}}, {{logistics.help}}</div>
                            <div class="createTime">{{logistics.createTime}}</div>
                            <i class="icon right"></i>
                        </div>
                    </div>
                </template>
                <div class="user-address-box" v-if="userInfo!=null">
                    <div class="map">
                        <i class="icon darkred iconfont icon-dizhi1"></i>
                    </div>
                    <div class="desc">
                        <div class="userName">收货人:{{userInfo.name}}</div>
                        <div class="moblie">{{userInfo.moblie}}</div>
                        <div class="address">收货地址:{{userInfo.address}}</div>
                    </div>
                </div>
            </div>
            <div class="order-box">
                <div class="order-title">
                    <div class="shop"><i class="icon iconfont icon-fangzi"></i><span class="name">{{order.shopNmae}}</span></div>
                </div>
                <div class="order-info">
                    <div class="order-cover"><img :src="order.cover" alt=""></div>
                    <div class="order-describe">
                        <div class="order-name">{{order.name}}</div>
                        <p class="order-desc">{{order.desc}}</p>
                        <p class="order-help"><span class="key" v-for="k in order.keys">{{k}}</span></p>
                    </div>
                    <div class="order-price-box">
                        <div class="order-price">￥{{order.price}}</div>
                        <div class="order-price-old">￥{{order.originalPrice}}</div>
                        <div class="order-number">x {{order.number}}</div>
                    </div>
                    <div class="order-system" v-if="order.state=='appraise'">
                        <a href="javascript:;" @click="afterSales(order)" class="order button appraise">申请售后</a>
                        <a href="javascript:;" @click="goAppraise(order)" class="order button active appraise">立即评价</a>
                    </div>
                    <div class="order-system" v-if="order.state=='complete'">
                        <a href="javascript:;" @click="afterSales(order)" class="order button appraise">申请售后</a>
                    </div>
                </div>
                <ul class="order-item">
                    <li class="item"><span class="title">商品总价</span><span class="val">￥{{order.originalPrice}}</span></li>
                    <li class="item"><span class="title">折扣</span><span class="val">-￥{{order.discount}}</span></li>
                    <li class="item"><span class="title">运费(快递)</span><span class="val">+￥{{order.freight}}</span></li>
                    <li class="item"><span class="title">积分抵扣</span><span class="val">-￥{{order.integral}}</span></li>
                    <li class="item"><span class="title strong">订单总价</span><span class="val strong">￥{{order.payPirce}}</span></li>
                    <li class="line"></li>
                    <li class="item"><span class="title active">需付款</span><span class="val active">￥{{order.payPirce}}</span></li>
                </ul>
            </div>
            <div class="order-box">
                <div class="order-Give">
                    <div class="content"><label class="key">积分</label><strong>送<span class="key">{{order.integral}}</span>积分</strong></div>
                    <ul class="description">
                        <li><label class="item">订单编号</label> : <span class="val">{{order.numbering}}</span></li>
                        <li><label class="item">创建时间</label> : <span class="val">{{order.createTime}}</span></li>
                    </ul>
                </div>
                <div class="order-system">
                    <template v-if="order.state=='received'">
                        <a href="javascript:;" @click="eveReceived(order)" class="order button received">查看物流</a>
                        <a href="javascript:;" @click="confirmReceived(order)" class="order button active received">确认收货</a>
                    </template>
                    <template v-else-if="order.state=='paying'">
                        <a href="javascript:;" @click="closeOrder(order)" class="order button paying">取消订单</a>
                        <a href="javascript:;" @click="payOrder(order)" class="order button active paying">立即支付</a>
                    </template>
                    <template v-else-if="order.state=='appraise'">
                        <a href="javascript:;" @click="delOrder(order)" class="order button appraise">删除订单</a>
                        <a href="javascript:;" @click="eveReceived(order)" class="order button received">查看物流</a>
                    </template>
                    <template v-else-if="order.state=='complete'">
                        <a href="javascript:;" @click="againOrder(order)" class="order button complete">再次购买</a>
                        <a href="javascript:;" @click="goAppraise(order, 'new')" class="order button active appraise">追加评价</a>
                    </template>
                    <template v-else-if="order.state=='return'">
                        <a href="javascript:;" @click="delOrder(order)" class="order button return">删除订单</a>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
import { MessageBox } from 'mint-ui';
export default {
    components: {
        'header-bar': headerBar
    },
    name: 'orderInfo',
    data() {
        return {
            pageQuery: null,
            userInfo: null,
            order: null,
            orderDesc: null,
            logistics: null,
            logisticsView: false,
        }
    },
    mounted() {
        console.log(this.logistics);
        this.pageQuery = this.$route.query;
        this.getOrder();
        this.getUser();
    },
    methods: {
        /**
         * 获取订单状态
         * @return {[type]} [description]
         */
        getOrder() {
            switch (this.pageQuery.type) {
                case 'received': // 待收货
                    this.orderDesc = {
                        state: '等待收货',
                        help: '您的商品已经在路上了',
                        icon: './static/img/received.png'
                    }
                    this.getLogistics(); // 获取物流
                    break;
                case 'paying': // 待付款
                    this.orderDesc = {
                        state: '等待付款',
                        help: '还剩24小时自动关闭',
                        icon: './static/img/paying.png'
                    }
                    break;
                case 'appraise': // 交易完成 => 待评价
                    this.orderDesc = {
                        state: '已完成',
                        help: '您的订单已完成',
                        icon: './static/img/complete.png'
                    }
                    this.getLogistics(); // 获取物流
                    break;
                case 'complete': // 已完成 => 已评价
                    this.orderDesc = {
                        state: '已完成',
                        help: '您的订单已完成',
                        icon: './static/img/complete.png'
                    }
                    this.getLogistics(); // 获取物流
                    break;
                case 'return': // 订单已取消
                    this.orderDesc = {
                        state: '已取消',
                        help: '您的订单已取消',
                        icon: './static/img/return.png'
                    }
                    break;
            };
            this.order = JSON.parse(localStorage.getItem('_orderItem'));
            this.order.numbering = '2017091911526547'; //订单编号
            this.order.createTime = '2017-11-20 16:05:22'; // 创建时间
            this.order.discount = this.order.originalPrice - this.order.price; // 折扣
            this.order.freight = 8, // 物流费
            this.order.integral = 10, // 积分抵扣
            this.order.payPirce = this.order.originalPrice - this.order.discount + this.order.freight - this.order.integral; // 订单总价
            this.order.getIntegral = this.order.payPirce; // 支付金额            
        },
        /**
         * 获取用户信息
         * @return {[type]} [description]
         */
        getUser(){
            this.userInfo = {
                name: '黄嘟嘟',
                moblie: '13838384138',
                address: '长沙市 天心区 木莲冲路友谊路 中欣国际22楼2205号',
            }
        },
        /**
         * 获取物流数据
         * @return {[type]} [description]
         */
        getLogistics(){
            this.logisticsView = true;
            this.logistics = {
                state: ((this.pageQuery.type=='appraise'||this.pageQuery.type=='complete')?'start':'end'),
                userGet: {
                    name: '刘先生',
                    moblie: '13838384138'
                },
                help: '感谢您使用中通快递，期待再次为您服务！',
                createTime: '2017-11-20  17:23:55'
            }
        },
        /**
         * 查看物流
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        eveReceived(_orderObj){
            console.log('查看物流', _orderObj);
        },
        /**
         * 确认收货
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        confirmReceived(_orderObj){
            MessageBox.confirm('确定执行此操作[确认收货]?').then(action => {
                console.log('确认收货', _orderObj);
            });
        },
        /**
         * 取消订单
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        closeOrder(_orderObj){
            MessageBox.confirm('确定执行此操作[取消订单]?').then(action => {
                console.log('取消订单', _orderObj);
            });
        },
        /**
         * 删除订单
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        delOrder(_orderObj){
            MessageBox.confirm('确定执行此操作[删除订单]?').then(action => {
                console.log('删除订单', _orderObj);
            });
        },
        /**
         * 支付订单
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        payOrder(_orderObj){
            MessageBox.confirm('确定执行此操作[支付订单]?').then(action => {
                console.log('支付订单', _orderObj);
            });
        },
        /**
         * 售后服务
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        afterSales(_orderObj){
            // console.log('售后服务', _orderObj);
            localStorage.setItem('_orderItem', JSON.stringify(_orderObj));
            this.$router.push({
                name: 'MyAfterSales',
                query: {
                    id: _orderObj.ID,
                    type: _orderObj.state
                }
            });
        },
        /**
         * 去评价
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        goAppraise(_orderObj, _new){
            this.$router.push({
                name: 'MyOrderAppraise',
                query: {
                    id: this.pageQuery.id,
                    type: this.pageQuery.type,
                    new: (_new!=null?false:true),
                    page: 'MyOrderInfo',
                }
            });
        },
        /**
         * 再次购买
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        againOrder(_orderObj){
            console.log('再次购买', _orderObj);
        },
    }
}
</script>
<style scoped>
#orderInfo { background-color: #f4f4f4; }
#orderInfo .order-state-box { width: 100%; height: 8.75rem; overflow: hidden; background-image: -webkit-linear-gradient(left, #ff5d42, #ff4242); background-image: -o-linear-gradient(left, #ff5d42, #ff4242); background-image: linear-gradient(to right, #ff5d42, #ff4242); }
#orderInfo .order-state-box .state-help { margin-top: 2.85rem; margin-left: 3.5rem; color: white; font-size: 1.4rem; display: inline-block; }
#orderInfo .order-state-box .state-help-text { margin-top: .75rem; margin-left: 3.5rem; color: white; font-size: 1.2rem; display: block; }
#orderInfo .order-state-box .icon.state { display: inline-block; float: right; width: 6.75rem; height: 6.75rem; overflow: hidden; margin-right: 4.5rem; margin-top: 1rem; }
#orderInfo .order-state-box .icon.state img { width: 100%; min-height: 100%; height: auto; }
#orderInfo .order-box { background: white; margin-bottom: 1rem; box-sizing: border-box; padding: 0 1rem; }
#orderInfo .order-box > * { box-sizing: border-box; }
#orderInfo .order-box .order-received { min-height: 6rem; border-bottom: 1px double #e5e5e5; }
#orderInfo .order-box .order-received .cover,
#orderInfo .order-box .order-received .description { display: inline-block; vertical-align: top; }
#orderInfo .order-box .order-received .cover { display: inline-block; width: 2.5rem; height: 6rem; line-height: 6rem; text-align: right; -webkit-transform: rotateY(180deg); -ms-transform: rotateY(180deg); -o-transform: rotateY(180deg); transform: rotateY(180deg); }
#orderInfo .order-box .order-received .cover i { font-size: 2rem; }
#orderInfo .order-box .order-received .cover i,
#orderInfo .order-box .order-received .description .state { color: #00b94a; }
#orderInfo .order-box .order-received .description .state.on { margin-top: 1.4rem; }
#orderInfo .order-box .order-received .description { width: calc(100% - 2.8rem); }
#orderInfo .order-box .order-received .description .state { font-size: 1.2rem; line-height: 1.4rem; margin: 1rem auto .5rem; }
#orderInfo .order-box .order-received .description .createTime { font-size: 1.2rem; color: #999999; }
#orderInfo .order-box .user-address-box { width: 100%; min-height: 6.85rem; height: auto; }
#orderInfo .order-box .user-address-box .map,
#orderInfo .order-box .user-address-box .desc,
#orderInfo .order-box .user-address-box .userName,
#orderInfo .order-box .user-address-box .moblie { display: inline-block; }
#orderInfo .order-box .user-address-box .map { width: 2.5rem; height: 100%; line-height: 6.85rem; vertical-align: top; }
#orderInfo .order-box .user-address-box .map i.icon { font-size: 2rem; color: #666; }
#orderInfo .order-box .user-address-box .desc { width: calc(100% - 2.8rem); }
#orderInfo .order-box .user-address-box .userName,
#orderInfo .order-box .user-address-box .moblie { height: 3rem; line-height: 3rem; color: #666; font-size: 1.2rem; }
#orderInfo .order-box .user-address-box .moblie { float: right; }
#orderInfo .order-box .user-address-box .address { height: auto; line-height: 1.6rem; color: #666; font-size: 1.2rem; }
#orderInfo .order-box .order-title { width: 100%; height: 3.75rem; line-height: 3.75rem; border-bottom: 1px double #e5e5e5; }
#orderInfo .order-box .order-title .shop { display: inline-block; }
#orderInfo .order-box .order-title .shop i.icon { color: #b5b4b7; font-size: 2rem; margin-right: .5rem; vertical-align: middle; }
#orderInfo .order-box .order-title .shop span.name { vertical-align: middle; color: #b5b4b7; color: #333333; font-size: 1.19rem; }
#orderInfo .order-box .order-info { min-height: 9.85rem; width: 100%; border-bottom: 1px dotted #dbdbdb; padding: 1rem 0; }
#orderInfo .order-box .order-info .order-cover { display: inline-block; width: 6.65rem; height: 6.65rem; overflow: hidden; box-sizing: border-box; float: left; }
#orderInfo .order-box .order-info .order-cover img { width: 100%; min-height: 100%; height: auto; }
#orderInfo .order-box .order-info .order-describe { display: inline-block; width: calc(100% - 10rem); vertical-align: top; padding: 0 .5rem; box-sizing: border-box; float: left; }
#orderInfo .order-box .order-info .order-describe .order-name { color: #333333; font-size: 1.2rem; line-height: 1.4rem; overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
#orderInfo .order-box .order-info .order-describe .order-desc { font-size: 1rem; color: #999999; margin-top: .5rem; }
#orderInfo .order-box .order-info .order-describe .order-help { margin-top: .75rem; min-height: 1.67rem; }
#orderInfo .order-box .order-info .order-describe .order-help span.key { vertical-align: middle; font-size: .9rem; color: #ff9000; border: .1px double #ff9000; padding: .35rem .25rem .15rem .25rem; margin-right: .75rem; display: inline-block; margin-bottom: .5rem; border-radius: .25rem; }
#orderInfo .order-box .order-info .order-price-box { display: inline-block; width: 3.35rem; vertical-align: top; box-sizing: border-box; float: left; }
#orderInfo .order-box .order-info .order-price-box .order-price { width: 100%; text-align: right; color: #333333; font-size: 1.2rem; line-height: 1.4rem; }
#orderInfo .order-box .order-info .order-price-box .order-price-old { text-decoration: line-through; width: 100%; text-align: right; color: #999999; font-size: 1.2rem; line-height: 1.4rem; }
#orderInfo .order-box .order-info .order-price-box .order-number { width: 100%; text-align: right; color: #999999; font-size: 1rem; line-height: 2.4rem; }
#orderInfo .order-box .order-item { width: 100%; }
#orderInfo .order-box .order-item .item { width: 100%; }
#orderInfo .order-box .order-item .item:first-child { margin-top: .7rem; }
#orderInfo .order-box .order-item .line { width: 100%; height: 1px; border-bottom: 1px dotted #dbdbdb; }
#orderInfo .order-box .order-item .item:after { content: ''; clear: both; display: block; }
#orderInfo .order-box .order-item .item span { font-size: 1.1rem; display: inline-block; line-height: 2rem; }
#orderInfo .order-box .order-item .item span.title { color: #999999; width: calc(100% - 12.5rem); float: left; }
#orderInfo .order-box .order-item .item span.val { color: #999999; width: 12rem; text-align: right; float: right; }
#orderInfo .order-box .order-item .item span.strong { color: #333333; padding-bottom: .7rem; }
#orderInfo .order-box .order-item .item span.strong.val { font-size: 1.2rem; font-weight: 500;  }
#orderInfo .order-box .order-item .item span.active { color: #ff4242; padding: .75rem 0; }
#orderInfo .order-box .order-item .item span.active.val { font-size: 1.2rem; font-weight: 500; }
#orderInfo .order-box .order-Give { width: 100%; }
#orderInfo .order-box .order-Give .content { height: 4rem; line-height: 4rem; border-bottom: .1px double #ddd; }
#orderInfo .order-box .order-Give .content label.key { height: 1rem; line-height: 1.2rem; vertical-align: middle; font-size: .9rem; color: #ff9000; border: .1px double #ff9000; padding: .35rem .25rem .25rem .35rem; margin-right: .75rem; display: inline-block; border-radius: .25rem; }
#orderInfo .order-box .order-Give .content strong { color: #333333; font-size: 1.2rem; letter-spacing: .05rem; vertical-align: middle; }
#orderInfo .order-box .order-Give .content strong span.key { color: #ff4242; }
#orderInfo .order-box .order-Give ul.description { border-bottom: .1px double #ddd; padding: .5rem 0; }
#orderInfo .order-box .order-Give ul.description:after { content: ''; clear: both; display: block; }
#orderInfo .order-box .order-Give ul.description li { float: left; width: 100%; height: 2rem; line-height: 2rem; }
#orderInfo .order-box .order-Give ul.description li label.item { display: inline-block; color: #999999; font-size: 1.1rem; }
#orderInfo .order-box .order-Give ul.description li span.val { color: #999999; font-size: 1.1rem; }
#orderInfo .order-box .order-system { display: block; padding: 1.25rem 0; text-align: right; }
#orderInfo .order-box .order-info .order-system { padding-bottom: 0; float: left; width: 100%; }
#orderInfo .order-box .order-info:after{ content: ''; clear: both; display: block; }
#orderInfo .order-box .order-system a.order.button { font-weight: 300; font-size: 1.19rem; display: inline-block; height: 2.5rem; line-height: 2.5rem; border: .1px double #333; color: #333; padding: 0 1rem; border-radius: .25rem; }
#orderInfo .order-box .order-system a.order.button.active { color: #ff4242; border-color: #ff4242; }
#orderInfo .order-box .order-system a.order.button~a.order.button { margin-left: .75rem; }
</style>
