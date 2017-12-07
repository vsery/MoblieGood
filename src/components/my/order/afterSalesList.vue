<!-- 售后订单列表 -->
<template>
    <div id="afterSalesList">
        <div class="order-item" v-for="order, index in orderList" :key="index">
            <div class="order-title" @click="goAfterSales(order)">
                <div class="shop"><i class="icon iconfont icon-fangzi"></i><span class="name">{{order.shopNmae}}</span></div>
                <div class="order-state"><i class="icon iconfont icon-iconenter"></i></div>
            </div>
            <div class="order-info" @click="goAfterSales(order)">
                <div class="order-cover"><img :src="order.cover" alt=""></div>
                <div class="order-desc">
                    <div class="order-name">{{order.name}}</div>
                    <div class="order-help">
                        <span class="goods-number">x{{order.number}}</span>
                        <span class="key" v-for="k in order.keys">{{k}}</span>
                    </div>
                    <div class="order-price afterSales">退款金额<span class="price">￥{{order.price}}</span></div>
                </div>
            </div>
            <div class="order-system">
                <div class="order-state" v-if="order.afterSales=='success'"><i class="icon iconfont icon-tuikuan"></i><span>退货退款</span><span>退款成功</span></div>
                <div class="order-state" v-if="order.afterSales=='close'"><i class="icon iconfont icon-tuikuan"></i><span>退货退款</span><span>退款关闭</span></div>
                <div class="order-state" v-if="order.afterSales=='waiting'"><i class="icon iconfont icon-tuihuo"></i><span>退货退款</span><span>待商家收货</span><span>还剩9天5时31分</span></div>
                <a href="javascript:;" @click="afterSalesInfo(order)" class="order button active received">查看详情</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'refunds',
    data() {
        return {
            pageQuery: null,
            orderList: [],
        }
    },
    mounted(){
        this.pageQuery = this.$route.query;
        this.getOrderLIst();
    },
    methods: {
        /**
         * 获取订单列表
         * @return {[type]} [description]
         */
        getOrderLIst(){
            var arr = [
                { ID: 2489, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good1.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2490, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good2.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2491, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'waiting', keys: ['颜色:白色','尺码:L'], cover: './static/img/good3.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2492, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good4.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2493, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good1.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2494, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'waiting', keys: ['颜色:白色','尺码:L'], cover: './static/img/good2.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2495, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good3.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2496, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good4.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2497, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good1.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2498, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'waiting', keys: ['颜色:白色','尺码:L'], cover: './static/img/good2.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2499, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good3.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2500, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good4.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2501, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good1.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2502, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good2.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2503, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good4.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2504, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'waiting', keys: ['颜色:白色','尺码:L'], cover: './static/img/good5.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2505, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good1.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2506, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'waiting', keys: ['颜色:白色','尺码:L'], cover: './static/img/good2.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2507, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good3.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
                { ID: 2508, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'goods', afterSales: 'close', keys: ['颜色:白色','尺码:L'], cover: './static/img/good4.jpg', price: 100, afterState: true, originalPrice: 130, number: 1 },
                { ID: 2509, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', afterType: 'money', afterSales: 'success', keys: ['颜色:白色','尺码:L'], cover: './static/img/good1.jpg', price: 100, afterState: false, originalPrice: 130, number: 1 },
            ];
            this.orderList = arr;
        },
        goAfterSales(_order){
            localStorage.setItem('_orderItem', JSON.stringify(_order));
            this.$router.push({
                name: 'MyAfterSales',
                query: {
                    id: _order.ID,
                    type: _order.state,
                    show: _order.afterState
                }
            });
        },
        afterSalesInfo(_order){
            console.log(_order);
            this.$router.push({
                name: 'MyAfterSalesState',
                query: {
                    id: _order.ID,
                    state: _order.afterSales,
                    type: _order.afterType
                }
            });
        }
    }
}
</script>
<style>
#afterSalesList { background-color: #f4f4f4; }
#afterSalesList .order-item { width: 100%; margin-bottom: 1rem; background-color: white; box-sizing: border-box; padding: 0 1rem; }
#afterSalesList .order-item > * { box-sizing: border-box; }
#afterSalesList .order-item .order-title { width: 100%; border-bottom: 1px double #e5e5e5; }
#afterSalesList .order-item .order-title .shop * { height: 3.75rem; line-height: 3.75rem; display: inline-block; vertical-align: top; }
#afterSalesList .order-item .order-title .shop { display: inline-block; }
#afterSalesList .order-item .order-title .shop i.icon { color: #b5b4b7; font-size: 2rem; margin-right: .5rem; line-height: 3.5rem; }
#afterSalesList .order-item .order-title .shop span.name { color: #b5b4b7; color: #333333; font-size: 1.19rem; display: inline-block; }
#afterSalesList .order-item .order-title .order-state { float: right; display: inline-block; height: 3.75rem; line-height: 3.75rem; }
#afterSalesList .order-item .order-title .order-state span { font-size: 1.19rem; color: #999999; font-weight: 500; letter-spacing: .05rem; }
#afterSalesList .order-item .order-title .order-state span.active { color: #ff4242; }
#afterSalesList .order-item .order-title .order-state i.icon { font-size: 1rem; }
#afterSalesList .order-item .order-info { width: 100%; border-bottom: 1px dotted #dbdbdb; padding: 1rem 0; }
#afterSalesList .order-item .order-info .order-cover { display: inline-block; width: 6.65rem; height: 6.65rem; overflow: hidden; }
#afterSalesList .order-item .order-info .order-cover img { width: 100%; min-height: 100%; height: auto; }
#afterSalesList .order-item .order-info .order-desc { display: inline-block; width: calc(100% - 7rem); vertical-align: top; }
#afterSalesList .order-item .order-info .order-name { display: block; color: #333333; padding: 0 .5rem; font-size: 1.2rem; line-height: 1.4rem; overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
#afterSalesList .order-item .order-info .order-help { display: block; padding: 0 .5rem; margin: .5rem 0 .75rem; padding-right: 2.5rem; }
#afterSalesList .order-item .order-info .order-help span { color: #999999; font-size: 1rem; }
#afterSalesList .order-item .order-info .order-help .key { margin-right: 1.5rem; line-height: 1.4rem; }
#afterSalesList .order-item .order-info .order-help .goods-number { float: right; margin-top: 0; margin-right: -2rem; }
#afterSalesList .order-item .order-info .order-price.afterSales { padding: 0 .5rem; color: #ff4242; font-size: 1rem; }
#afterSalesList .order-item .order-info .order-price.afterSales span { margin-left: 1rem; font-weight: bold; font-size: 1.2rem; }
#afterSalesList .order-item .order-system { display: block; padding: .75rem 0; text-align: right; }
#afterSalesList .order-item .order-system .order-state { width: 100%; text-align: left; color: #333333; font-size: 1.2rem; font-weight: 500; }
#afterSalesList .order-item .order-system .order-state i.icon { color: #ff4242; vertical-align: middle; margin-right: .75rem; font-size: 1.25rem; font-weight: 500; }
#afterSalesList .order-item .order-system .order-state span { margin-right: .75rem; vertical-align: middle; }
#afterSalesList .order-item .order-system a.order.button { font-size: 1.19rem; display: inline-block; height: 2.5rem; line-height: 2.5rem; border: .1px double #333; color: #333; padding: 0 1rem; border-radius: .25rem; font-weight: 300; }
#afterSalesList .order-item .order-system a.order.button.active { color: #ff4242; border-color: #ff4242; }
#afterSalesList .order-item .order-system a.order.button~a.order.button { margin-left: .75rem; }
</style>