<!-- 
    售后详情 => 协商详情
 -->
<template>
    <div id="afterSalesNegotiate" :style="{'min-height':bodyHeight}">
        <div class="negotiate-box">
            <editdiv-view id="negotiateText" ref="negotiateText" v-model='negotiateText'></editdiv-view>
            <div class="number-box">{{negotiateTextInput}}/{{negotiateTextLength}}</div>
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
</template>
<script>
import editdiv from '@/components/tool/editInput'
export default {
    components: {
        'editdiv-view': editdiv
    },
    name: 'refunds',
    data() {
        return {
            pageQuery: null,
            bodyHeight: document.documentElement.clientHeight + 'px',
            imageUrl: '',
            imageList: [],
            imageVisible: false,
            negotiateText: '输入留言(必填)',
            negotiateTextInput: 0,
            negotiateTextLength: 500,
        }
    },
    watch: {
        negotiateText: function(val, oldVal) {
            this.negotiateTextInput = this.getStringLen(val);
        }
    },
    mounted(){
        this.pageQuery = this.$route.query;
        console.log(this.negotiateText);
    },
    methods: {
        /**
         * 清空评论 HTML
         * @return {[type]} [description]
         */
        clearNegotiateText(temp) {
            if (this.negotiateText == '输入留言(必填)') {
                console.log(this.negotiateText);
                this.negotiateText = '';
            //     this.$refs.negotiateText.innerHTML = '';
            }
            // if (temp == 'action') { this.negotiateText = '' }
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
#afterSalesNegotiate { background-color: #f4f4f4; box-sizing: border-box; width: 100%; padding: .85rem 1.15rem; }
#afterSalesNegotiate > * { box-sizing: border-box; }
#afterSalesNegotiate .negotiate-box { background-color: white; height: 18.5rem; width: 100%; position: relative; padding: 1rem; }
#afterSalesNegotiate .negotiate-box #negotiateText { position: absolute; z-index: 2; left: 1rem; top: 1rem; right: 1rem; bottom: 9rem; }
#afterSalesNegotiate .negotiate-box .number-box { position: absolute; z-index: 2; right: 2rem; top: 2rem; background-color: transparent; font-size: 1rem; color: #999999; }
#afterSalesNegotiate .negotiate-box .buttom-box { position: absolute; z-index: 2; left: 1rem; bottom: 1rem; width: auto; height: auto; border-radius: .5rem; border: 1px dotted #ececec; }
#afterSalesNegotiate .negotiate-box .buttom-box .image { width: auto; height: 6rem; display: inline-block; vertical-align: top; }
#afterSalesNegotiate .negotiate-box .buttom-box .image .imageUrl { display: inline-block; width: 6rem; height: 6rem; margin-right: 1rem; position: relative; }
#afterSalesNegotiate .negotiate-box .buttom-box .image .imageUrl .delImage { position: absolute; width: 1rem; height: 1rem; line-height: .75rem; font-size: 2rem; font-weight: 500; vertical-align: middle; right: -.35rem; top: -.35rem; background-color: #ff4242; color: white; border-radius: 50%; text-align: center; }
#afterSalesNegotiate .negotiate-box .buttom-box .image .imageUrl img { width: 100%; min-height: 100%; height: auto; border-radius: .5rem; overflow: hidden; }
#afterSalesNegotiate .negotiate-box .buttom-box .avatar-uploader { display: inline-block; vertical-align: top; height: 6rem;}
#afterSalesNegotiate .negotiate-box .buttom-box .el-upload { width: 6rem; height: 6rem; display: block; text-align: center; position: relative; }
#afterSalesNegotiate .negotiate-box .buttom-box .el-upload i.icon { margin: .5rem auto .25rem; color: #999999; display: block; font-size: 3rem; }
#afterSalesNegotiate .negotiate-box .buttom-box .el-upload input.el-upload__input { display: none; }
#afterSalesNegotiate .negotiate-box .buttom-box .el-upload span { text-align: center; width: 100%; display: block; color: #999999; font-size: 1.2rem; }

</style>