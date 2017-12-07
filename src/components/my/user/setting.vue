<!-- 模型：
    DOM 结构
-->
<template>
    <div class="my-setting" :style="{height:bodyHeight}">
        <!-- <div class="header">
            <header-bar :isWhite="false"></header-bar>
        </div> -->
        <div class="content" style="margin-top: 1px;">
            <mt-cell :title="help.text" is-link v-for="help, index in helpList" :key='index' :to='help.name'></mt-cell>
        </div>
        <div class="goExitBox">
            <a href="javascript:;" class="goEixt" @click="goEixt">退出</a>
        </div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
export default {
    name: 'my-setting', // 结构名称
    components: {
        'header-bar': headerBar
    },
    data() {
        return {
            helpList: [
                { id: '', path: '', name: 'loginPassword', text: '设置/重置登录密码' },
                { id: '', path: '', name: 'setPayPassword', text: '设置/重置支付密码' },
                { id: '', path: '', name: 'changePhone', text: '绑定/修改手机号' }
            ],
            bodyHeight: document.documentElement.clientHeight + 'px', // 高度
        }
    },
    watch: {
        // 监控集合
    },
    props: {
        // 集成父级参数
    },
    beforeCreate() {
        // console.group('创建前状态  ===============》beforeCreate');
    },
    created() {
        // console.group('创建完毕状态===============》created');
    },
    beforeMount() {
        // console.group('挂载前状态  ===============》beforeMount');
    },
    mounted() {
        console.log(this.bodyHeight);
        // console.group('挂载结束状态===============》mounted');
        this.$nextTick(function() {
            // console.log('执行完后，执行===============》mounted');
        });
    },
    beforeUpdate() {
        // console.group('更新前状态  ===============》beforeUpdate');
    },
    updated() {
        // console.group('更新完成状态===============》updated');
    },
    beforeDestroy() {
        // console.group('销毁前状态  ===============》beforeDestroy');
    },
    destroyed() {
        // console.group('销毁完成状态===============》destroyed');
    },
    methods: {
        goEixt(){
            this.userInfo = null;
            this.token = null;
            this.$router.push({name:'Index'});
        }
        // 方法 集合
    }

}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.my-setting { background-color: #f4f4f4; }
a.mint-cell:after { content: ''; display: block; width: 100%; height: 1px; background-color: #e5e5e5; }
a.mint-cell:last-child:after { display: none; }
.goExitBox { width: 100%; height: 4rem; line-height: 4rem; margin-top: 1.5rem; background-color: white; text-align: center; box-sizing: border-box;  }
.goExitBox a.goEixt { color: rgba(255,64,64,1); font-size: 1.37rem; vertical-align: middle; }
</style>
