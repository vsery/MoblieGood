<!-- 模型：我的 => 个人信息
    DOM 结构
-->
<template>
    <div class="userInfo" id="userInfo" :style="{height:bodyHeight}">
        <div class="header">
            <header-bar :isWhite="false"></header-bar>
        </div>
        <div class="content">
            <mt-cell title="头像" class="header" is-link @click.native="openAction">
                <div class="header"><img :src="userInfo.header" alt=""></div>
            </mt-cell>
            <div class="line"></div>
            <mt-cell title="用户ID">
                <div class="item"><span>{{userInfo.ID}}</span></div>
            </mt-cell>
            <div class="line"></div>
            <mt-cell title="账号">
                <div class="item"><span>{{userInfo.administrator}}</span></div>
            </mt-cell>
        </div>
        <div class="content">
            <mt-cell title="昵称" is-link @click.native="openInputPicker('nickname',userInfo.nickname)">
                <div class="item"><span>{{userInfo.nickname}}</span></div>
            </mt-cell>
            <div class="line"></div>
            <mt-cell title="性别" is-link @click.native="openSexPicker">
                <div class="item"><span>{{userInfo.sex}}</span></div>
            </mt-cell>
            <div class="line"></div>
            <mt-cell title="出生日期" is-link @click.native="openDatePicker">
                <div class="item"><span>{{userInfo.birthday}}</span></div>
            </mt-cell>
            <div class="line"></div>
            <mt-cell title="邮箱" is-link @click.native="openInputPicker('email',userInfo.email)">
                <div class="item"><span>{{userInfo.email}}</span></div>
            </mt-cell>
        </div>
        <template v-if="inputVisible">
            <div class="modal-body">
                <input type="text" name="" v-model="inputActions" @keyup.13="changeInputActions($event)">
            </div>
            <div class="modal-backdrop in" @click="closeInputPicker"></div>
        </template>
        <mt-datetime-picker ref="picker" type="date" year-format="{value}年" month-format="{value}月" date-format="{value}日" v-model="birthdayVisible" :startDate="new Date('1900-01-01')" :endDate="new Date('2100-12-30')" @confirm="handleConfirm"></mt-datetime-picker>
        <mt-actionsheet ref="headerVisible" :actions="headerActions" v-model="headerVisible"></mt-actionsheet>
        <mt-actionsheet ref="sexVisible" :actions="sexActions" v-model="sexVisible" cancelText></mt-actionsheet>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
export default {
    components: {
        'header-bar': headerBar
    },
    name: 'userInfo', // 结构名称
    data() {
        return {
            bodyHeight: document.documentElement.clientHeight + 'px', // 高度
            inputVisible: false,
            inputType: '',
            inputActions: '',
            headerActions: [
                { name: '拍照', method: this.getCamera },
                { name: '从相册中选择', method: this.getLibrary },
            ],
            headerVisible: false,
            sexActions: [
                { name: '男', method: this.setSexMen },
                { name: '女', method: this.setSexWomen },
            ],
            sexVisible: false,
            birthdayVisible: null,
            sexShow: false,
            sexList: [{
                flex: 1,
                values: ['男', '女', 'GAY'],
                className: 'slot1',
                textAlign: 'right'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }],
            userInfo: {
                token: 'bD3@hD4@gC2|rB4?cJ1#lB1`bB7@qC4{fI2;bD7~tE2?dB2%nU2$fD6ebN1@',
                header: './static/img/header (6).jpg',
                ID: '2144815',
                administrator: 'kettling',
                password: '123456',
                nickname: '薇靓的晨露',
                sex: '女',
                birthday: '1999-09-19',
                email: 'administrator@qq.com'
            }
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
        // console.group('挂载结束状态===============》mounted');
        this.getData();
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
        /**
         * [getData 获取用户信息]
         * @return {[Object]} [返货用户信息]
         */
        getData() {
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
            localStorage.setItem('token', this.userInfo.token);
            this.$nextTick(function() {
                this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
                // console.log(this.userInfo);
                this.token = localStorage.getItem('token');
                // console.log(this.token);
            });
        },
        /**
         * [openAction 打开头像设置]
         * @return {[type]} [description]
         */
        openAction(){
            // this.$refs.headerVisible.open();
            this.headerVisible = true;
        },
        /**
         * 打开照相机
         * @return {[type]} [description]
         */
        getCamera(){
            console.log('打开照相机');
        },
        /**
         * 打开相册
         * @return {[type]} [description]
         */
        getLibrary(){
            console.log('打开相册');
        },
        /**
         * 打开性设置
         * @return {[type]} [description]
         */
        openSexPicker() {
            this.sexVisible = true;
        },
        /**
         * 设置为男性
         */
        setSexWomen(){
            this.userInfo.sex = '女';
        },
        /**
         * 设置为女性
         */
        setSexMen(){
            this.userInfo.sex = '男';
        },
        /**
         * [openDatePicker 打开日期面板]
         * @return {[String]} [返回用户出生日期]
         */
        openDatePicker() {
            this.birthdayVisible = new Date(this.userInfo.birthday);
            this.$refs.picker.open();
        },
        /**
         * [handleConfirm 关闭日期时间面板]
         * @param  {Date} e [返回日期]
         * @return {[String]}   [设置用户出身日期]
         */
        handleConfirm(e) {
            var data = new Date();
            var day = this.birthdayVisible.getDate(),
                month = this.birthdayVisible.getMonth(),
                year = this.birthdayVisible.getFullYear();
            this.userInfo.birthday = year + '-' + month + '-' + day;
        },
        openInputPicker(type, _temp){
            this.inputType = type;
            this.inputActions = _temp;
            this.inputVisible = true;
        },
        changeInputActions(ev){
            if(ev.keyCode == 13){
                switch(this.inputType) {
                    case 'email':
                        this.userInfo.email = this.inputActions;                        
                        break;
                    case 'nickname':
                        this.userInfo.nickname = this.inputActions;
                        break;
                }
            }
            this.closeInputPicker();
        },
        closeInputPicker(){
            this.inputVisible = false;
        }
    }

}
</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
#userInfo { background: rgba(244,244,244,1); }
#userInfo > .header { position: relative; }
#userInfo > .content { position: static; }
#userInfo > .content .header img { width: 4rem; height: 4rem; border-radius: 50%; border: 1px solid #e5e5e5; box-sizing: border-box; }
#userInfo > .content .mint-cell { width: 100%; min-height: 4.16rem; }
#userInfo > .content .mint-cell-wrapper { background: none; }
#userInfo > .content .mint-cell.header { min-height: 6.45rem; }
#userInfo > .content ~ .content { margin-top: 1.35rem; }
#userInfo > .content .line { margin: 0 auto; height: 1px; width: calc(100% - 2rem); background-color: #e5e5e5; display: block; }
#userInfo .modal-body { position: fixed; left: 0; top: 0; bottom: auto; right: 0; z-index: 11; }
#userInfo .modal-body input { width: 100%; margin-top: .83rem; height: 4.16rem; line-height: 4.16rem; padding: 0 2rem; box-sizing: border-box; }
#userInfo .modal-backdrop.in { background-color: rgba(0,0,0,.5); position: fixed; left: 0; top: 0; bottom: 0; right: 0; z-index: 10; }
</style>
