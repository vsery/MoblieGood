<!-- 订单评价 -->
<template>
    <div id="orderAppraise" :style="{height:bodyHeight}">
        <div class="order-box" v-if="order!=null">
            <div class="cover"><img :src="order.cover" alt=""></div>
            <div class="order-name">{{order.name}}</div>
        </div>
        <div class="appraise-box">
            <editdiv-view id='appraiseText' ref="appraiseText" v-model='appraiseText'></editdiv-view>
            <div class="number-box">{{appraiseTextInput}}/{{appraiseTextLength}}</div>
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
        <div class="stars-box" v-if="isNew">
            <label for="">商品评价</label>
            <ul class="star">
                <li v-for="n, index in 5" @click="selectedStar(index)" :class="index>star?'':'active'">
                    <template v-if="index>star">
                        <i class="icon iconfont icon-xingxingdianjiqian"></i>
                    </template>
                    <template v-else>
                        <i class="icon iconfont icon-xingxingdianjihou"></i>
                    </template>
                </li>
            </ul>
        </div>
        <div class="footer-box"><a href="javascript:;" class="action" @click="action">提交评价</a></div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import editdiv from '@/components/tool/editInput'
export default {
    components: {
        'editdiv-view': editdiv
    },
    name: 'orderAppraise',
    data() {
        return {
            imageUrl: '',
            imageList: [],
            imageVisible: false,
            pageQuery: null,
            isNew: false,
            bodyHeight: document.documentElement.clientHeight + 'px',
            order: null,
            appraiseText: '',
            appraiseTextInput: 0,
            appraiseTextLength: 140,
            from: null,
            star: 0,
        }
    },
    watch: {
        appraiseText: function(val, oldVal) {
            console.log(val);
            this.appraiseTextInput = this.getStringLen(val);
        }
    },
    mounted() {
        this.pageQuery = this.$route.query;
        this.getOrder();
    },
    methods: {
        /**
         * 获取订单
         * @return {[type]} [description]
         */
        getOrder() {
            this.order = JSON.parse(localStorage.getItem('_orderItem'));
            this.isNew = this.pageQuery.new;
            (this.isNew ? this.appraiseText = '分享你的购买心得吧' : this.appraiseText = '亲，有什么需要追加的评价么？')
        },
        /**
         * 上传图片
         * @return {[type]} [description]
         */
        upload() {

        },

        /**
         * 获取评论 HTML
         * @return {[type]} [description]
         */
        appraiseHtml() {
            var that = this;
            this.getAppraiseHtml();
            if (this.getStringLen(this.appraiseText) > 140) { essageBox.alert('输入的长度多大').then(action => { return; }) }
            if (this.appraiseText == null || this.appraiseText == '') { this.$message({ message: '请输入内容', type: 'warning' }); return; }
            this.clearAppraiseHtml('action');
        },
        /**
         * 获取字符串的实际长度
         */
        getStringLen: function(str) {
            var _length = 0,
                _code = -1;
            for (var i = 0; i < str.length; i++) {
                _code = str.charCodeAt(i);
                if (_code >= 0 && _code <= 128) {
                    _length += 1;
                } else { _length += 2; }
            }
            return _length;
        },
        /**
         * 获取评论 HTML
         * @return {[type]} [description]
         */
        getAppraiseHtml() {
            var chat = this.$refs.appraiseText.innerHTML;
            chat = chat.replace(/([<div><br/><div>])|(&nbsp;)|\s/g, '');
            this.appraiseText = chat;
        },
        /**
         * 清空评论 HTML
         * @return {[type]} [description]
         */
        clearAppraiseHtml(temp) {
            if (this.appraiseText == '分享你的购买心得吧' || this.appraiseText === '亲，有什么需要追加的评价么？') {
                console.log(this.appraiseText);
                this.appraiseText = '';
                console.log(this.appraiseText);
                this.$refs.appraiseText.innerHTML = '';
            }
            if (temp == 'action') { this.appraiseText = '' }
        },
        /**
         * 选择评价星级
         * @param  {[type]} _number [description]
         * @return {[type]}         [description]
         */
        selectedStar(_number){
            this.star = _number;
        },
        /**
         * 提交订单评论
         * @return {[type]} [description]
         */
        action() {
            this.from = { order: this.order.ID, appraise: this.appraiseText }
            if(this.isNew){ this.from.star = this.star }
            console.log(this.from);
            this.$router.push({
                name: 'MyOrderAppraiseSuccess',
                query: {
                    id: this.pageQuery.id,
                }
            });
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
        }
    }
}

</script>
<style>
#orderAppraise { background-color: #f4f4f4; }
#orderAppraise * { box-sizing: border-box; }
#orderAppraise .order-box { background-color: white; height: 4.5rem; padding: 1rem; border-bottom: 1px solid #e5e5e5; }
#orderAppraise .order-box:after { content: ''; clear: both; display: block; }
#orderAppraise .order-box .cover { width: 2.5rem; height: 2.5rem; overflow: hidden; border-radius: .25rem; display: inline-block; }
#orderAppraise .order-box .cover img { width: 100%; min-height: 100%; height: auto; }
#orderAppraise .order-box .order-name { display: inline-block; width: calc(100% - 2.6rem); float: right; line-height: 1.25rem; padding-left: 1rem; overflow : hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
#orderAppraise .appraise-box { background-color: white; height: 20.5rem; width: 100%; position: relative; padding: 1rem; }
#orderAppraise .appraise-box #appraiseText { position: absolute; z-index: 2; left: 1rem; top: 1rem; right: 1rem; bottom: 8rem; }
#orderAppraise .appraise-box .number-box { position: absolute; z-index: 2; right: 2rem; bottom: 9rem; background-color: transparent; font-size: 1rem; color: #999999; }
#orderAppraise .appraise-box .buttom-box { position: absolute; z-index: 2; left: 1rem; bottom: 1rem; width: auto; height: auto; border-radius: .5rem; border: 1px dotted #ececec; }
#orderAppraise .appraise-box .buttom-box .image { width: auto; height: 6rem; display: inline-block; vertical-align: top; }
#orderAppraise .appraise-box .buttom-box .image .imageUrl { display: inline-block; width: 6rem; height: 6rem; margin-right: 1rem; position: relative; }
#orderAppraise .appraise-box .buttom-box .image .imageUrl .delImage { position: absolute; width: 1rem; height: 1rem; line-height: .75rem; font-size: 2rem; font-weight: 500; vertical-align: middle; right: -.35rem; top: -.35rem; background-color: #ff4242; color: white; border-radius: 50%; text-align: center; }
#orderAppraise .appraise-box .buttom-box .image .imageUrl img { width: 100%; min-height: 100%; height: auto; border-radius: .5rem; overflow: hidden; }
#orderAppraise .appraise-box .buttom-box .avatar-uploader { display: inline-block; vertical-align: top; height: 6rem;}
#orderAppraise .appraise-box .buttom-box .el-upload { width: 6rem; height: 6rem; display: block; text-align: center; position: relative; }
#orderAppraise .appraise-box .buttom-box .el-upload i.icon { margin: .5rem auto .25rem; color: #999999; display: block; font-size: 3rem; }
#orderAppraise .appraise-box .buttom-box .el-upload input.el-upload__input { display: none; }
#orderAppraise .appraise-box .buttom-box .el-upload span { text-align: center; width: 100%; display: block; color: #999999; font-size: 1.2rem; }
#orderAppraise .stars-box { margin-top: 1rem; height: 4.5rem; line-height: 2.5rem; padding: 1rem; background-color: white; }
#orderAppraise .stars-box label { font-size: 1.275rem; color: #333333; font-weight: 500; display: inline-block; letter-spacing: .1rem;}
#orderAppraise .stars-box .star { display: inline-block; vertical-align: top; height: 2.5rem; line-height: 2.5rem; }
#orderAppraise .stars-box .star li { float: left; display: inline-block; vertical-align: top; margin-left: 1rem; }
#orderAppraise .stars-box .star li i.icon { font-size: 2rem; color: #bebebe; -webkit-transition: all .3s; -o-transition: all .3s; transition: all .3s; }
#orderAppraise .stars-box .star li.active i.icon { color: #ff4242; }
#orderAppraise .footer-box { position: fixed; left: 1.5rem; right: 1.5rem; bottom: 1rem; }
#orderAppraise .footer-box a.action { width: 100%; height: 4rem; line-height: 4rem; text-align: center; color: white; background-color: #ff4242; border-radius: .5rem; display: block; font-size: 1.2rem; }
</style>