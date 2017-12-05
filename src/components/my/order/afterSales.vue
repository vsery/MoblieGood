<!-- 申请售后 -->
<template>
    <div id="afterSales" :style="{height:bodyHeight}">
        <template v-if="afterSalesShow==true">
            <div class="from-box" v-model="refundsFrom">
                <div class="item" @click="typeVisible=true">
                    <label>退款类型</label>
                    <div class="val">{{refundsFrom.type=='callback'?'我要退货(无需退货)':'我要退货'}}</div>
                    <i class="icon iconfont icon-caret"></i>
                </div>
                <div class="item" @click="causeVisible=true">
                    <label>退款原因</label>
                    <div class="val">{{refundsFrom.cause}}</div>
                    <i class="icon iconfont icon-caret"></i>
                </div>
                <div class="item">
                    <label>退款金额</label>
                    <div class="val">
                        <input ref="amount" @change="changeAmount" class="amount" type="number" :placeholder="refundsFrom.amount">
                        <span class="active">|&nbsp;{{refundsFrom.maxAmount}}</span>
                        <span class="help">最多¥{{refundsFrom.maxAmount}}</span>
                    </div>
                </div>
                <div class="item info" @click="eidtInfo">
                    <label>
                        退款说明<span class="help">(可不填)</span>
                    </label>
                    <div class="val info">
                        <!-- <input type="text" class="instruction" name="instruction" v-model="refundsFrom.instruction"> -->
                        <textarea class="instruction" name="instruction" v-model="refundsFrom.instruction"></textarea>
                        <!-- {{refundsFrom.instruction}} -->
                    </div>
                </div>
                <div class="item image">
                    <label>上传凭证<span>(最多三张)</span></label>
                    <div class="buttom-box">
                        <div class="image" v-if="imageVisible">
                            <div class="imageUrl" v-for="img,index in imageList" :key="index">
                                <div class="delImage" @click="delImage(index)">-</div>
                                <img :src="img.src" alt="">
                            </div>
                        </div>
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <i class="icon iconfont icon-zhaoxiangji"></i>
                            <span>添加照片</span>
                        </el-upload>
                    </div>
                </div>
            </div>
            <div class="footer-box"><a href="javascript:;" class="action" @click="action">提交申请</a></div>
            <mt-actionsheet ref="typeVisible" :actions="typeActions" v-model="typeVisible" cancelText></mt-actionsheet>
            <mt-actionsheet ref="causeVisible" :actions="causeActions" v-model="causeVisible" cancelText></mt-actionsheet>
        </template>
        <template v-else>
            <div class="error-box">
                <div class="error-icon">
                    <img :src="'./static/img/error.png'" alt="">
                    <!-- http://localhost:8080/static/img/good1.jpg -->
                </div>
                <div class="error-help">
                    尊敬的用户，您已错过了申请售后的时间（交易完成7天内），如果您有换货或维修的祈求，建议您和客服协商。如需要帮助，您可以向客服提问
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name: 'refunds',
    data() {
        return {
            pageQuery: null,
            afterSalesShow: false,
            orderID: null,
            bodyHeight: document.documentElement.clientHeight + 'px',
            typeVisible: false,
            typeActions: [
                { name: '我要退货(无需退货)', method: this.callback },
                { name: '我要退货', method: this.callbackMoney },
            ],
            causeVisible: false,
            causeActions: [
                { name: '7天无理由退换货', method: this.causeAction1 },
                { name: '退运费', method: this.causeAction2 },
                { name: '质量问题', method: this.causeAction3 },
                { name: '尺寸与商品描述不符', method: this.causeAction4 },
                { name: '保质期与产品描述不符', method: this.causeAction5 },
                { name: '商家发错货', method: this.causeAction6 },
                { name: '有破损、污渍、变形', method: this.causeAction7 },
                { name: '未按约定时间发货', method: this.causeAction8 },
            ],
            refundsFromType: 'callback',
            refundsFrom: {
                type: 'callback',
                cause: '',
                amount: '请输入退款金额',
                maxAmount: 0,
                instruction: '请您详细填写退款说明'
            },
            imageUrl: '',
            imageVisible: false,
            imageList: []
        }
    },
    mounted(){
        this.pageQuery = this.$route.query;
        this.afterSalesShow = Boolean(this.pageQuery.show);
        this.orderID = this.$route.query.id;
        this.getOrder();
    },
    methods: {
        /**
         * 获取订单
         * @return {[type]} [description]
         */
        getOrder(){
            this.order = JSON.parse(localStorage.getItem('_orderItem'));
            this.refundsFrom.maxAmount = this.order.price;
        },
        callback() {
            this.refundsFrom.type = 'callback';
        },
        callbackMoney() {
            this.refundsFrom.type = 'callbackMoney';
        },
        causeAction1(){
            this.refundsFrom.cause = '7天无理由退换货';
        },
        causeAction2(){
            this.refundsFrom.cause = '退运费';
        },
        causeAction3(){
            this.refundsFrom.cause = '质量问题';
        },
        causeAction4(){
            this.refundsFrom.cause = '尺寸与商品描述不符';
        },
        causeAction5(){
            this.refundsFrom.cause = '保质期与产品描述不符';
        },
        causeAction6(){
            this.refundsFrom.cause = '商家发错货';
        },
        causeAction7(){
            this.refundsFrom.cause = '有破损、污渍、变形';
        },
        causeAction8(){
            this.refundsFrom.cause = '未按约定时间发货';
        },
        /**
         * 控制最大退款金额
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        changeAmount(e){
            if( this.$refs.amount.value > this.refundsFrom.maxAmount) {
                this.$refs.amount.value = this.refundsFrom.maxAmount;
            }
            this.refundsFrom.amount = this.$refs.amount.value;
        },
        /**
         * 清空退款说明
         * @return {[type]} [description]
         */
        eidtInfo(){
            (this.refundsFrom.instruction=='请您详细填写退款说明'?this.refundsFrom.instruction='':null)
        },
        /**
         * 删除照片
         * @return {[type]} [description]
         */
        delImage(_index){
            console.log(this.imageList,_index);
            this.imageList.splice(_index, 1);
        },
        /**
         * 上传照片成功处理
         * @param  {[type]} res  [description]
         * @param  {[type]} file [description]
         * @return {[type]}      [description]
         */
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.imageVisible = true;
            if ( 2 >= this.imageList.length) {
                this.imageList.push({src:this.imageUrl});
            }else{
                this.imageList.splice(this.imageList.length-1, 1, {src:this.imageUrl});
            }
        },
        /**
         * 上传照片限制
         * @param  {[type]} file [description]
         * @return {[type]}      [description]
         */
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        /**
         * 提交申请
         * @return {[type]} [description]
         */
        action(){
            this.refundsFrom.imageList = this.imageList;
            console.log(this.refundsFrom);
            this.$router.push({
                name: 'MyAfterSalesList'
            });
        }
    }
}
</script>
<style>
#afterSales { background-color: #f4f4f4; }
#afterSales .from-box { padding: 0 1rem; background-color: white; }
#afterSales .from-box .item { border-bottom: 1px solid #e6e6e6; height: 4.15rem; line-height: 4.14rem; position: relative; }
#afterSales .from-box .item label { display: inline-block; width: 7rem; text-align: left; font-size: 1.2rem; color: #666666; font-weight: 500; letter-spacing: .1rem; vertical-align: top; }
#afterSales .from-box .item.info { height: 14.5rem; }
#afterSales .from-box .item.info label { width: 100%; }
#afterSales .from-box .item.info label span.help { float: right; font-size: 1rem; color: #999999; }
#afterSales .from-box .item label:before { content: '*'; color: #ff4242; height: 4.15rem; line-height: 4.5rem; display: inline-block; font-size: 2rem; margin-right: .5rem; vertical-align: middle; }
#afterSales .from-box .item > i.icon { position: absolute; right: 0; top: 0; font-weight: 500; }
#afterSales .from-box .item .val { display: inline-block; width: calc(100% - 8rem); height: 4.15rem; line-height: 4.15rem; margin-left: .5rem; color: #999999; font-size: 1.2rem; }
#afterSales .from-box .item .val input { display: inline-block; width: 9rem; color: #999999; font-size: 1.2rem; }
#afterSales .from-box .item .val span.active { color: #ff4242; font-size: 1.2rem; vertical-align: top; margin-left: .5rem; }
#afterSales .from-box .item .val span.help { float: right; font-size: 1rem; vertical-align: bottom; color: #999999; }
#afterSales .from-box .item .val.info { height: 10rem; margin-left: 0; width: 100%; display: block; position: relative; }
#afterSales .from-box .item .val.info textarea.instruction { width: 100%; height: calc(100% - 1rem); resize: none; padding: .1rem 0; font-size: 1.2rem; color: #999999; border: none; }
#afterSales .from-box .item.image { height: auto; padding-bottom: 1rem; }
#afterSales .from-box .item.image label { width: 100%; }
#afterSales .from-box .item.image label:before { content: ''; }
#afterSales .from-box .item.image .buttom-box { width: auto; height: auto; border-radius: .5rem; border: 1px dotted #ececec; }
#afterSales .from-box .item.image .buttom-box .image { width: auto; height: 6rem; display: inline-block; vertical-align: top; }
#afterSales .from-box .item.image .buttom-box .image .imageUrl { display: inline-block; width: 6rem; height: 6rem; margin-right: 1rem; position: relative; }
#afterSales .from-box .item.image .buttom-box .image .imageUrl .delImage { position: absolute; width: 1rem; height: 1rem; line-height: .75rem; font-size: 2rem; font-weight: 500; vertical-align: middle; right: -.35rem; top: -.35rem; background-color: #ff4242; color: white; border-radius: 50%; text-align: center; }
#afterSales .from-box .item.image .buttom-box .image .imageUrl img { width: 100%; min-height: 100%; height: auto; border-radius: .5rem; overflow: hidden; }
#afterSales .from-box .item .avatar-uploader { width: 6rem; display: inline-block; vertical-align: top; height: 6rem; overflow: hidden; position: relative; }
#afterSales .from-box .item .el-upload { width: 6rem; height: 6rem; display: block; text-align: center; position: absolute; top: 0; }
#afterSales .from-box .item .el-upload i.icon { margin: .5rem auto .25rem; color: #999999; display: block; font-size: 3rem; height: 3rem; }
#afterSales .from-box .item .el-upload input.el-upload__input { display: none; }
#afterSales .from-box .item .el-upload span { text-align: center; width: 100%; display: block; color: #999999; font-size: 1.2rem; line-height: normal; }
#afterSales .footer-box { position: fixed; left: 1.5rem; right: 1.5rem; bottom: 1rem; }
#afterSales .footer-box a.action { width: 100%; height: 4rem; line-height: 4rem; text-align: center; color: white; background-color: #ff4242; border-radius: .5rem; display: block; font-size: 1.2rem; }
#afterSales .error-box { position: fixed; top: 50%; left: 4rem; right: 4rem; height: 26rem; margin-top: -13rem; text-align: center; }
#afterSales .error-box .error-icon { margin-bottom: 4rem; }
#afterSales .error-box .error-help { color: #000; font-size: 1.6rem; line-height: 1.8rem; text-indent: 2em; text-align: left; }
</style>