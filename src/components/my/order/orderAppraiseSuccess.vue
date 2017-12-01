<!-- 订单评价 - 结果 -->
<template>
    <div id="orderAppraiseSuccess">
        <div class="success-box">
            <div class="thanks">感谢您的评价!</div>
            <div class="help-text">
                <span>春分实例不如您的一句满意~</span>
                <i class="icon iconfont icon-iconfontzhifeiji"></i>
            </div>
            <div class="callback-box">
                <router-link class="callback" :to="{ name:'Index' }">查看我的评论</router-link>
                <router-link class="callback" :to="{ name:'Index' }">首页逛逛</router-link>
            </div>
        </div>
        <div class="success-help">
            <i class="icon iconfont icon-gou"></i>
            <span>评论成功</span>
        </div>
        <div class="Recommended-goods" v-if="goodLists!=null">
            <div class="title-box">以下商品还未进行评价哦</div>
            <ul class="goodLists">
                <li v-for="goods,index in goodLists" :key="index" @click="goOrderInfo(goods)">
                    <div class="cover"><img :src="goods.cover"></div>
                    <div class="desc">
                        <label>{{goods.name}}</label>
                        <router-link class="appraise" :to="{ name:'MyOrderAppraise', query:{ type: goods.state, new: true }}">评价</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'orderAppraiseSuccess',
    data() {
        return {
            bodyHeight: document.documentElement.clientHeight + 'px',
            goodLists: null
        }
    },
    mounted() {
        this.pageQuery = this.$route.query;
        this.getOrderList();
    },
    methods: {
        getOrderList() {
            var arr = [
                { ID: 2489, name: '榛品自营:ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号--商品分类:深蓝色;尺码:160/84A(XS) [买100送10,买200送25,买300送50,买500送80]', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, state: 'appraise' },
                { ID: 2492, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号[买100送10,买200送25,买300送50,买500送80]', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good2.jpg', price: 100, originalPrice: 130, number: 1, state: 'appraise' },
                { ID: 2497, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号[商品分类:深蓝色;尺码:160/84A(XS)]', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good3.jpg', price: 100, originalPrice: 130, number: 1, state: 'appraise' },
                { ID: 2504, name: '榛品自营:ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good4.jpg', price: 100, originalPrice: 130, number: 1, state: 'appraise' },
                { ID: 2506, name: 'ECCO爱步春夏时尚休闲单鞋系列带平底柔酷7号', desc: '商品分类:深蓝色;尺码:160/84A(XS)', shopNmae: '榛品自营', keys: ['七天退款'], cover: './static/img/good1.jpg', price: 100, originalPrice: 130, number: 1, state: 'appraise' },
            ]
            this.goodLists = arr;
        },
        goOrderInfo(goods){
            this.$router.push({
                name: 'MyOrderInfo',
                query: {
                    ID: goods.ID,
                    type: goods.state
                }
            })
        }
    }
}

</script>
<style>
#orderAppraiseSuccess { background-color: white; }
#orderAppraiseSuccess * { box-sizing: border-box; }
#orderAppraiseSuccess .success-box { width: 100%; height: 11.25rem; overflow: hidden; background-image: -webkit-linear-gradient(to right, #ff5d42, #ff4242); background-image: linear-gradient(to right, #ff5d42, #ff4242); }
#orderAppraiseSuccess .success-box .thanks { margin-top: 2rem; }
#orderAppraiseSuccess .success-box .thanks,
#orderAppraiseSuccess .success-box .help-text { text-align: center; color: white; font-size: 1.2875rem; line-height: 2rem; }
#orderAppraiseSuccess .success-box .help-text i.icon { font-size: 2.4rem; vertical-align: top; }
#orderAppraiseSuccess .success-box { text-align: center; }
#orderAppraiseSuccess .success-box .callback-box { margin-top: 1rem; }
#orderAppraiseSuccess .success-box .callback { font-size: 1.2rem; width: 8.5rem; height: 2.5rem; line-height: 2.4rem; text-align: center; color: #fff600; border: 1px double #fff600; border-radius: .5rem; display: inline-block; }
#orderAppraiseSuccess .success-box .callback~.callback { margin-left: 2.5rem; }
#orderAppraiseSuccess .success-help { background-color: #f4f4f4; text-align: center; height: 6rem; line-height: 6rem; }
#orderAppraiseSuccess .success-help i.icon { font-size: 2rem; height: 2rem; line-height: 2rem; color: #00b94a; margin-right: .5rem; vertical-align: top; }
#orderAppraiseSuccess .success-help span { color: #333333; font-size: 1.65rem; height: 2rem; line-height: 2rem; }
#orderAppraiseSuccess .Recommended-goods { background-color: white; width: 100%; height: auto; }
#orderAppraiseSuccess .Recommended-goods .title-box { height: 5.8rem; line-height: 5.8rem; text-align: center; color: #999999; font-size: 1.25rem; position: relative; }
#orderAppraiseSuccess .Recommended-goods .title-box:after,
#orderAppraiseSuccess .Recommended-goods .title-box:before { position: absolute; content: ''; width: calc(50% - 8rem); height: 1px; background-color: #e6e6e6; top: 50%; }
#orderAppraiseSuccess .Recommended-goods .title-box:after { left: 0; }
#orderAppraiseSuccess .Recommended-goods .title-box:before { right: 0; }
#orderAppraiseSuccess .Recommended-goods .goodLists { width: 100%; padding: 0 1rem; }
#orderAppraiseSuccess .Recommended-goods .goodLists li { min-height: 9rem; height: auto; border-bottom: 1px dashed #dbdbdb; padding: 1.25rem 0; }
#orderAppraiseSuccess .Recommended-goods .goodLists li:after { content: ''; display: block; clear: both; }
#orderAppraiseSuccess .Recommended-goods .goodLists li .cover { width: 6.5rem; height: 6.5rem; border-radius: .5rem; overflow: hidden; background-color: #e6e6e6; display: inline-block; float: left; }
#orderAppraiseSuccess .Recommended-goods .goodLists li .cover img { width: 100%; min-height: 100%; height: auto; }
#orderAppraiseSuccess .Recommended-goods .goodLists li .desc { width: calc(100% - 6.5rem); display: inline-block; float: left; height: 6.5rem; position: relative; }
#orderAppraiseSuccess .Recommended-goods .goodLists li .desc label { padding-left: 1rem; color: #333333; font-size: 1.4rem; line-height: 1.6rem; width: calc(100% - 7rem); overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;  }
#orderAppraiseSuccess .Recommended-goods .goodLists li .desc a.appraise { position: absolute; right: 0; bottom: 0; height: 2.5rem; width: 6.75rem; text-align: center; line-height: 2.5rem; border: 1px double #ff4242; color: #ff4242; font-size: 1.2rem; border-radius: .1rem; }
</style>