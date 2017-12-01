<!-- 售后详情 -->
<template>
    <div id="afterSalesState" :style="{height:bodyHeight}" v-if="asOrder!=null">
        <div class="prompt-box" v-if="asOrder.state == 'success'">
            <div class="state">{{asOrder.type=='money'?'退款':'退货'}}成功</div>
            <div class="item time">退款成功时间:<span>{{asOrder.closeTime}}</span></div>
            <div class="item money">退款金额:<span class="price">￥{{asOrder.price}}</span></div>
            <div class="item callback">退款去向:<span class="callback">{{asOrder.callback}}</span></div>
        </div>
        <div class="prompt-box" v-if="asOrder.state == 'close'">
            <div class="state">{{asOrder.type=='money'?'退款':'退货'}}关闭</div>
            <div class="item cause">关闭原因:<span>{{asOrder.cause}}</span></div>
            <div class="item time">关闭时间:<span>{{asOrder.closeTime}}</span></div>
        </div>
        <div class="prompt-box" v-if="asOrder.state == 'waiting'">
            <div class="state">请修改{{asOrder.type=='money'?'退款':'退货'}}申请</div>
            <div class="item">修改时间:<span>{{asOrder.waring}}</span></div>
            <div class="item callback">商家拒绝理由:<span>{{asOrder.goodState}}</span></div>
        </div>
        <mt-cell title="协商详情" is-link @click.native="goNegotiate"></mt-cell>
        <div class="order-info">
            <ul class="items">
                <li class="item"><label for="">商品名称</label><span class="val">{{asOrder.name}}</span></li>
                <li class="item"><label for="">售后类型</label><span class="val">{{asOrder.type=='money'?'仅退款':'退货'}}</span></li>
                <li class="item"><label for="">退款金额</label><span class="val">{{asOrder.price}}</span></li>
                <li class="item"><label for="">退款原因</label><span class="val">{{asOrder.cause}}</span></li>
                <li class="item"><label for="">售后说明</label><span class="val">{{asOrder.instruction}}</span></li>
                <li class="item"><label for="">售后编号</label><span class="val">{{asOrder.number}}</span></li>
                <li class="item"><label for="">申请时间</label><span class="val">{{asOrder.closeTime}}</span></li>
            </ul>
        </div>
        <div class="system-box" v-if="asOrder.state=='waiting'">
            <a href="javascript:;" class="order button">修改退款申请</a>
            <a href="javascript:;" class="order button active">撤销售后申请</a>
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
            asOrder: null,
            order: null
        }
    },
    mounted(){
        this.pageQuery = this.$route.query;
        console.log(this.pageQuery);
        this.gerAfterSalesOrder();
    },
    methods: {
        /**
         * 去售后订单 => 协商详情
         * @return {[type]} [description]
         */
        goNegotiate(){
            this.$router.push({
                name: 'MyAfterSalesNegotiate',
                query: {
                    id: this.asOrder.id
                }
            })
        },
        /**
         * 获取售后订单详情
         * @return {[type]} [description]
         */
        gerAfterSalesOrder(){
            this.order = JSON.parse(localStorage.getItem('_orderItem'));
            this.asOrder = {
                id: this.pageQuery.id,
                state: this.pageQuery.state,
                name: this.order.name,
                createTime: '2017-11-11 12:13:14',
                waring: '剩余06天18时,逾期未修改申请将自动关闭',
                goodState: '其他',
                closeTime: '2017-11-18',
                type: this.pageQuery.type,
                price: this.order.price,
                callback: '我的余额',
                cause: this.pageQuery.type=='close'?'由您取消':'7天无理由退换货',
                instruction: '',
                number: 'ASDF17454-15498',
            }
        }
    }
}
</script>
<style>
#afterSalesState { background-color: #f4f4f4; }
#afterSalesState .prompt-box { width: 100%; background-color: #ff4242; position: relative; box-sizing: border-box; padding: 1.5rem 0 1rem 2rem; margin-bottom: 1rem; }
#afterSalesState .prompt-box:before { content: ''; display: block; width: calc(100% - .5rem); height: 3px; position: absolute; left: .5rem; bottom: -.2rem; border-bottom: .5rem dotted #ff4242; z-index: 99; }
#afterSalesState .prompt-box:after { content: ''; display: block; width: 100%; height: 3px; position: absolute; left: 0; bottom: -.2rem; border-bottom: .5rem dotted #ff4242; z-index: 99; }
#afterSalesState .prompt-box * { color: white; line-height: 1.75em; }
#afterSalesState .prompt-box .state { font-size: 1.37rem; margin-bottom: .5rem; }
#afterSalesState .prompt-box .item { font-size: 1.1rem; }
#afterSalesState .prompt-box span { margin-left: .75rem; vertical-align: top; display: inline-block; }
#afterSalesState .prompt-box span.callback { font-size: 1.2rem; color: #ffcc00; }
#afterSalesState .mint-cell { margin-bottom: 1rem; }
#afterSalesState .mint-cell-text { color: #333333; font-size: 1.2875rem; }
#afterSalesState .order-info { background-color: white; width: 100%; box-sizing: border-box; padding: 0 1.5rem; }
#afterSalesState .order-info .items .item { padding: 1.45rem 0; border-bottom: 1px dotted #e5e5e5; text-align: left; }
#afterSalesState .order-info .items .item label { font-size: 1.2875rem; color: #666666; line-height: 1.6rem; display: inline-block; width: 4em; vertical-align: top; }
#afterSalesState .order-info .items .item span.val { margin-left: 1.5rem; font-size: 1.2875rem; color: #333333; display: inline-block; width: calc(100% - 5.5em); vertical-align: top; line-height: 1.6rem; }
#afterSalesState .system-box { position: fixed; left: 0; right: 0; bottom: 0; background-color: white; display: block; padding: 1.25rem 1.5rem; text-align: right; }
#afterSalesState .system-box a.order.button { font-size: 1.19rem; display: inline-block; height: 2.5rem; line-height: 2.5rem; border: 1px double #939393; padding: 0 1rem; border-radius: .25rem; font-weight: 100; }
#afterSalesState .system-box a.order.button.active { color: #ff4242; border-color: #ff4242; }
#afterSalesState .system-box a.order.button~a.order.button { margin-left: .75rem; }
</style>