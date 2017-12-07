<!-- 订单列表 -->
<template>
    <div id="orderList">
        <div class="headerBg">
            <header-bar :isWhite="false"></header-bar>
        </div>
        <mt-navbar v-model="selected" @click.native="selectedTAB">
            <mt-tab-item id="tab-all">全部</mt-tab-item>
            <mt-tab-item id="tab-received">待收货</mt-tab-item>
            <mt-tab-item id="tab-paying">待付款</mt-tab-item>
            <mt-tab-item id="tab-appraise">待评价</mt-tab-item>
            <mt-tab-item id="tab-complete">已完成</mt-tab-item>
            <mt-tab-item id="tab-return">已取消</mt-tab-item>
        </mt-navbar>
        <div class="order-item" v-for="order, index in orderList" :key="index">
            <div class="order-title">
                <div class="shop"><i class="icon iconfont icon-fangzi"></i><span class="name">{{order.shopNmae}}</span></div>
                <div class="order-state">
                    <template v-if="order.state=='received'"><span class="received active">待收货</span></template>
                    <template v-else-if="order.state=='paying'"><span class="paying active">待付款</span></template>
                    <template v-else-if="order.state=='appraise'"><span class="appraise">交易完成</span></template>
                    <template v-else-if="order.state=='complete'"><span class="complete">已完成</span></template>
                    <template v-else-if="order.state=='return'"><span class="return">订单已取消</span></template>
                </div>
            </div>
            <div class="order-info" @click="goOrderInfo(order)">
                <div class="order-cover">
                    <img :src="order.cover" alt="">
                </div>
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
                <div class="order-desc-box">
                    <span class="title">共</span><span class="val">{{order.number}}</span><span class="title">件商品</span>
                    <span class="title strong">合计: </span><span class="val strong">￥{{order.price}}</span>
                </div>
            </div>
            <div class="order-system">
                <template v-if="order.state=='received'">
                    <a href="javascript:;" @click="eveReceived(order)" class="order button received">查看物流</a>
                    <a href="javascript:;" @click="confirmReceived(order)" class="order button active received">确认收货</a>
                </template>
                <template v-else-if="order.state=='paying'">
                    <a href="javascript:;" @click="closeOrder(order)" class="order button paying">取消订单</a>
                    <a href="javascript:;" @click="payOrder(order)" class="order button active paying">去支付</a>
                </template>
                <template v-else-if="order.state=='appraise'">
                    <a href="javascript:;" @click="delOrder(order)" class="order button appraise">删除订单</a>
                    <a href="javascript:;" @click="afterSales(order)" class="order button appraise">申请售后</a>
                    <a href="javascript:;" @click="goAppraise(order)" class="order button active appraise">立即评价</a>
                </template>
                <template v-else-if="order.state=='complete'">
                    <a href="javascript:;" @click="delOrder(order)" class="order button complete">删除订单</a>
                    <a href="javascript:;" @click="eveReceived(order)" class="order button complete">查看物流</a>
                    <a href="javascript:;" @click="againOrder(order)" class="order button active complete">再次购买</a>
                </template>
                <template v-else-if="order.state=='return'">
                    <a href="javascript:;" @click="delOrder(order)" class="order button return">删除订单</a>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
import { MessageBox } from 'mint-ui';
export default {
    components: {
        'header-bar': headerBar
    }, 
    name: 'orderList',
    data() {
        return {
            pageTitle: '我的订单',
            pageQuery: null,
            selected: 'tab-all',
            serverOrderList: [
                { ID: 2489, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, afterState: false, state: 'appraise' },
                { ID: 2490, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good2.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'received' },
                { ID: 2491, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good3.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'paying' },
                { ID: 2492, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good4.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'appraise' },
                { ID: 2493, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'paying' },
                { ID: 2494, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good2.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'appraise' },
                { ID: 2495, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good3.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'complete' },
                { ID: 2496, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good4.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'received' },
                { ID: 2497, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, afterState: false, state: 'appraise' },
                { ID: 2498, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good2.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'received' },
                { ID: 2499, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good3.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'paying' },
                { ID: 2500, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good4.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'appraise' },
                { ID: 2501, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'complete' },
                { ID: 2502, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good2.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'paying' },
                { ID: 2503, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good4.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'received' },
                { ID: 2504, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good5.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'appraise' },
                { ID: 2505, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'received' },
                { ID: 2506, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good2.jpg', price: 100, originalPrice: 130, number: 1, afterState: false, state: 'appraise' },
                { ID: 2507, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good3.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'return' },
                { ID: 2508, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good4.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'paying' },
                { ID: 2509, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色; 尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, afterState: true, state: 'received' },
            ],
            orderList: []
        }
    },
    mounted() {
        this.pageQuery = this.$route.query;
        this.selected = 'tab-'+this.pageQuery.type;
        this.selectedTAB();
    },
    methods: {
        /**
         * 选择 TAB 触发获取数据
         * @return {[type]} [description]
         */
        selectedTAB(){
            this.orderList = [];
            if (this.selected == 'tab-all') {
                this.orderList = this.serverOrderList;
            }else{
                for (var i = 0; i < this.serverOrderList.length; i++) {
                    if (this.serverOrderList[i].state == this.selected.substring(4)) {
                        var _orderObj = this.serverOrderList[i];
                        this.orderList.push(_orderObj);
                    }
                }
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
                    type: _orderObj.state,
                    show: _orderObj.afterState
                }
            });
        },
        /**
         * 去评价
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        goAppraise(_orderObj){
            // console.log(_orderObj);
            this.$router.push({
                name: 'MyOrderAppraise',
                query: {
                    id: _orderObj.ID,
                    type: _orderObj.state,
                    new: true,
                    page: 'MyOrderList',
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
        /**
         * 浏览商品详情
         * @param  {[type]} _orderObj [description]
         * @return {[type]}           [description]
         */
        goOrderInfo(_orderObj){
            // console.log('浏览订单详情', _orderObj);
            localStorage.setItem('_orderItem', JSON.stringify(_orderObj));
            this.$router.push({
                name: 'MyOrderInfo',
                query: {
                    id: _orderObj.ID,
                    type: _orderObj.state
                }
            });
        }
    }
}
</script>
<style >
#orderList { background: #f4f4f4; }
#orderList .mint-navbar { width: 100%; }
#orderList .mint-navbar .mint-tab-item { padding: 1.7rem 0 1rem; font-size: 1.28875rem; }
#orderList .mint-navbar .mint-tab-item .mint-tab-item-label  { color: #333; font-size: 1.275rem; }
#orderList .mint-navbar .mint-tab-item.is-selected { border-color: #ff4242; margin-bottom: 0px; }
#orderList .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label { color: #ff4242;  }
#orderList .order-item { width: 100%; margin-top: 1rem; background-color: white; box-sizing: border-box; padding: 0 1rem; }
#orderList .order-item > * { box-sizing: border-box; }
#orderList .order-item .order-title { width: 100%; height: 3.75rem; line-height: 3.75rem; border-bottom: 1px double #e5e5e5; }
#orderList .order-item .order-title .shop { display: inline-block; }
#orderList .order-item .order-title .shop i.icon { color: #b5b4b7; font-size: 2rem; margin-right: .25rem; vertical-align: middle; margin-left: .25rem; }
#orderList .order-item .order-title .shop span.name { color: #b5b4b7; color: #333333; font-size: 1.19rem; vertical-align: middle; }
#orderList .order-item .order-title .order-state { float: right; display: inline-block; }
#orderList .order-item .order-title .order-state span { font-size: 1.19rem; color: #999999; font-weight: 500; letter-spacing: .05rem; }
#orderList .order-item .order-title .order-state span.active { color: #ff4242; }
#orderList .order-item .order-info { width: 100%; border-bottom: 1px dotted #dbdbdb; padding: 1rem 0; }
#orderList .order-item .order-info:after { content: ''; clear: both; display: block; }
#orderList .order-item .order-info .order-cover { display: inline-block; width: 6.65rem; height: 6.65rem; overflow: hidden; float: left; }
#orderList .order-item .order-info .order-cover img { width: 100%; min-height: 100%; height: auto; }
#orderList .order-item .order-info .order-describe { display: inline-block; width: calc(100% - 10rem); vertical-align: top; padding: 0 .5rem; box-sizing: border-box; float: left; }
#orderList .order-item .order-info .order-describe .order-name { color: #333333; font-size: 1.2rem; line-height: 1.4rem; overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
#orderList .order-item .order-info .order-describe .order-desc { font-size: 1rem; color: #999999; margin-top: .5rem; }
#orderList .order-item .order-info .order-describe .order-help { margin-top: .75rem; min-height: 1.67rem; }
#orderList .order-item .order-info .order-describe .order-help span.key { vertical-align: middle; font-size: .9rem; color: #ff9000; border: .1px double #ff9000; padding: .35rem .25rem .15rem .25rem; margin-right: .75rem; display: inline-block; margin-bottom: .5rem; border-radius: .25rem; }
#orderList .order-item .order-info .order-price-box { display: inline-block; width: 3.35rem; vertical-align: top; border-bottom: border-box; float: left; }
#orderList .order-item .order-info .order-price-box .order-price { width: 100%; text-align: right; color: #333333; font-size: 1.2rem; line-height: 1.4rem; }
#orderList .order-item .order-info .order-price-box .order-price-old { text-decoration: line-through; width: 100%; text-align: right; color: #999999; font-size: 1.2rem; line-height: 1.4rem; }
#orderList .order-item .order-info .order-price-box .order-number { width: 100%; text-align: right; color: #999999; font-size: 1rem; line-height: 2.4rem; }
#orderList .order-item .order-info .order-desc-box { float: left; width: 100%; display: block; text-align: right; margin-bottom: .3rem;margin-top: 1.3rem; }
#orderList .order-item .order-info .order-desc-box span { display: inline-block; vertical-align: bottom; }
#orderList .order-item .order-info .order-desc-box span.title { font-size: 1rem; color: #999; }
#orderList .order-item .order-info .order-desc-box span.val { font-size: 1rem; color: #333; }
#orderList .order-item .order-info .order-desc-box span.strong { font-size: 1.2rem; color: #333; }
#orderList .order-item .order-system { display: block; height: 5rem; padding: 1.25rem 0; text-align: right; }
#orderList .order-item .order-system a.order.button { font-size: 1.19rem; font-weight: 300; display: inline-block; height: 2.5rem; line-height: 2.5rem; border: .7px double #333; color: #333; padding: 0 1rem; border-radius: .25rem; }
#orderList .order-item .order-system a.order.button.active { color: #ff4242; border-color: #ff4242; }
#orderList .order-item .order-system a.order.button~a.order.button { margin-left: .75rem; }
</style>