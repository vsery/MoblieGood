<!-- 
    售后详情 => 协商详情
 -->
<template>
    <div id="afterSalesNegotiate" :style="{'min-height':bodyHeight}">
        <div class="negotiate-box" @click="goNegotiate">
            <input type="text" placeholder="请输入留言(必填)">
        </div>
        <div class="negotiates-list">
            <div class="negotiate-item" v-for="ng,index in negotiates" :key="index">
                <div class="userInfo" v-if="ng.userType=='user'">
                    <div class="cover"><img :src="userInfo.header" alt=""></div>
                    <div class="info">
                        <span class="name">{{userInfo.nickname}}</span>
                        <span class="time">{{ng.time}}</span>
                    </div>
                </div>
                <ul class="negotiate-desc">
                    <li class="item">买家({{userInfo.nickname}})&nbsp;于&nbsp;{{ng.time}}&nbsp;{{ng.negotiateType=='create'?'创建':'修改'}}了&nbsp;{{ng.afterSalesType=='money'?'退款':'退货'}}申请</li>
                    <template v-if="ng.negotiateType=='create'">
                        <li class="item"><span class="title">退款类型: </span><span class="val">{{ng.type}}</span></li>
                        <li class="item"><span class="title">退款金额: </span><span class="val">￥{{ng.price}}</span></li>
                        <li class="item"><span class="title">退款原因: </span><span class="val">{{ng.cause}}</span></li>
                        <li class="item"><span class="title">退款说明: </span><span class="val">{{ng.instruction}}</span></li>
                    </template>
                    <template v-else>
                        <li class="item"><span class="title">退款类型从</span><span class="val">"{{(negotiates[index+1]).type}}"</span>修改为<span class="val">"{{ng.type}}"</span></li>
                        <li class="item"><span class="title">退款原因从</span><span class="val">"{{(negotiates[index+1]).cause}}"</span>修改为<span class="val">"{{ng.cause}}"</span></li>
                        <li class="item"><span class="title">退款金额从</span><span class="val">￥{{(negotiates[index+1]).price}}</span>修改为￥<span class="val">{{ng.price}}</span></li>
                        <li class="item"><span class="title">退款说明从</span>修改为<span class="val">"{{ng.instruction}}"</span></li>
                    </template>
                </ul>
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
            bodyHeight: document.documentElement.clientHeight + 'px',
            userInfo: {
                nickname: '黄嘟嘟',
                header: './static/img/header (6).jpg',
            },
            goodsInfo: {
                nickname: '榛品官方旗舰店',
                header: './static/img/header (4).jpg',
            },
            negotiates: []
        }
    },
    mounted(){
        this.pageQuery = this.$route.query;
        this.getNegotiate();
    },
    methods: {
        /**
         * 获取 售后订单 => 协商详情 数据
         * @return {[type]} [description]
         */
        getNegotiate(){
            var _arr = [
                { id: 1, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货', price: 22.2, cause: '未按约定时间发货', instruction: '未发货' },
                { id: 1, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货(无需退货)', price: 23.3, cause: '有破损、污渍、变形', instruction: '变形' },
                { id: 2, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货', price: 24.4, cause: '商家发错货', instruction: '发错货' },
                { id: 3, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货(无需退货)', price: 25.5, cause: '保质期与产品描述不符', instruction: '描述不符' },
                { id: 4, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货', price: 26.6, cause: '尺寸与商品描述不符', instruction: '尺寸不符' },
                { id: 5, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货(无需退货)', price: 27.7, cause: '质量问题', instruction: '质量有问题' },
                { id: 6, negotiateType: 'edit', afterSalesType: 'money', userType: 'user', time: '2017-07-12 12:45:04', prompt: '修改了退款申请', type: '我要退货', price: 28.8, cause: '退运费', instruction: '没有面运费' },
                { id: 7, negotiateType: 'create', afterSalesType: 'money', userType: 'user', time: '2017-07-11 14:43:04', prompt: '创建了退款申请', type: '我要退货(无需退货)', price: 29.9, cause: '7天无理由退换货', instruction: '不想买了' },
            ];
            this.negotiates = _arr;
        },
        /**
         * 去协商, 编辑信息
         * @return {[type]} [description]
         */
        goNegotiate(){
            this.$router.push({
                name: 'MyAfterSalesNegotiateEdit',
                query: {
                    id: this.pageQuery.id
                }
            })
        }
    }
}
</script>
<style>
#afterSalesNegotiate { background-color: #f4f4f4; box-sizing: border-box; width: 100%; padding: .85rem 1.15rem; }
#afterSalesNegotiate .negotiate-box { background-color: white; height: 3.5rem; line-height: 3.5rem;  }
#afterSalesNegotiate .negotiate-box input { padding-left: .85rem; border: none; width:100%; height:100%; display:block; color: #999999; font-size: 1.2875rem; }
#afterSalesNegotiate .negotiates-list .negotiate-item { margin-top: 1rem; box-sizing: border-box; padding: .85rem; background-color: white; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo { height: 3.2rem; line-height: 1.6rem; padding-bottom: 1rem; border-bottom: 1px dotted #ececec; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo .cover { width: 3.2rem; height: 3.2rem; overflow: hidden; display: inline-block; border-radius: .5rem; vertical-align: top; margin-right: 1rem; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo img { width: 100%; min-height: 100%; height: auto; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo .info { width: calc(100% - 4.2rem); display: inline-block; vertical-align: top; float: right; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo .info span { display: block; line-height: 1.6rem; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo .info span.name { color: #333333; font-size: 1.2875rem; }
#afterSalesNegotiate .negotiates-list .negotiate-item .userInfo .info span.time { color: #666666; font-size: 1.1rem; }
#afterSalesNegotiate .negotiates-list .negotiate-desc { width: 100%; }
#afterSalesNegotiate .negotiates-list .negotiate-desc:after { content: ''; clear: both; display: block; }
#afterSalesNegotiate .negotiates-list .negotiate-desc .item { width: 100%; float: left; color: #333333; font-size: 1.2rem; line-height: 2rem; }
#afterSalesNegotiate .negotiates-list .negotiate-desc .item span { vertical-align: bottom; color: #333333; font-size: 1.2rem; line-height: 2rem; }
#afterSalesNegotiate .negotiates-list .negotiate-desc .item span.val { font-weight: 500; }
#afterSalesNegotiate .negotiates-list .negotiate-desc .item span~span { margin-left: .5rem; }
</style>