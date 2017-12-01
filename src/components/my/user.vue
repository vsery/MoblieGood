<!-- 模型：我的 => 个人信息
    DOM 结构
-->
<template>
    <div class="MyUser">
        <div class="headerBg">
            <header-bar :isWhite="true"></header-bar>
        </div>
        <div id="information" class="seticon">
            <div class="box">
                <div :class="['grade ']+[userInfo.grade==1?'yellow':'green']"><span>{{userInfo.grade==1?'普通':'Vip'}}</span></div>
                <div class="setting right" @click="$router.push({name:'MySetting'})"><i class="icon iconfont icon-shezhi"></i></div>
            </div>
            <div class="user info">
                <div class="header"><img :src="userInfo.header" alt=""></div>
                <div class="name" @click="$router.push({name:'MyUserInfo'})">{{userInfo.nickname}} <span>></span></div>
            </div>
            <div class="possession">
                <div class="item" v-for="p,index in possession" :key="index" @click="$router.push({ name:p.path })">
                    <div class="title">{{p.number}}</div>
                    <div class="number">{{p.text}}</div>
                </div>
            </div>
        </div>
        <div id="orders" class="seticon">
            <div class="title box">
                <div class="span inline-black">我的订单</div>
                <router-link class="inline-black" :to="{ name: 'MyOrderList', query: {type: 'all'}}">查看订单 ></router-link>
            </div>
            <div class="items state">
                <div class="item" @click="$router.push({ name: 'MyOrderList', query: {type: 'paying' }})">
                    <span class="number">···</span>
                    <i class="icon iconfont icon-fukuan"></i>
                    <div class="text name">待付款</div>
                </div>
                <div class="item" @click="$router.push({ name: 'MyOrderList', query: {type: 'received' }})">
                    <span class="number">8</span>
                    <i class="icon iconfont icon-truck"></i>
                    <div class="text name">待收货</div>
                </div>
                <div class="item" @click="$router.push({ name: 'MyOrderList', query: {type: 'appraise' }})">
                    <span class="number">10</span>
                    <i class="icon iconfont icon-hua"></i>
                    <div class="text name">待评价</div>
                </div>
                <div class="item" @click="$router.push({ name: 'MyAfterSalesList' })">
                    <i class="icon iconfont icon-tuihuotuikuan"></i>
                    <div class="text name">退款/售后</div>
                </div>
            </div>
        </div>
        <div id="system" class="seticon">
            <div class="title box">
                <div class="span inline-black">我的服务</div>
            </div>
            <ul class="functions">
                <li class="item" @click="$router.push({ name: 'MyReceivingAddress' })">
                    <i class="icon darkred iconfont icon-dizhi"></i>
                    <div class="name"><span>地址管理</span></div>
                </li>
                <li class="item" @click="$router.push({ name: 'myCode' })">
                    <i class="icon blue iconfont icon-yaoqing"></i>
                    <div class="name"><span>邀请好友</span></div>
                </li>
                <li class="item" @click="">
                    <i class="icon yellows iconfont icon-kefu"></i>
                    <div class="name"><span>客服中心</span></div>
                </li>
                <li class="item border-none" @click="$router.push({ name:'opinion' })">
                    <i class="icon purple iconfont icon-fankui"></i>
                    <div class="name"><span>意见反馈</span></div>
                </li>
                <li class="item border-none" @click="$router.push({ name:'helpCenter' })">
                    <i class="icon red iconfont icon-yiwen"></i>
                    <div class="name"><span>帮助中心</span></div>
                </li>
                <li class="item border-none" @click="">
                    <i class="icon gray iconfont icon-jingqingqidai"></i>
                    <div class="name"><span>敬请期待</span></div>
                </li>
            </ul>
        </div>
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
            userInfo: {
                grade: 1,
                token: 'bD3@hD4@gC2|rB4?cJ1#lB1`bB7@qC4{fI2;bD7~tE2?dB2%nU2$fD6ebN1@',
                header: './static/img/header (6).jpg',
                ID: '2144815',
                administrator: 'kettling',
                password: '123456',
                nickname: '薇靓的晨露',
                sex: '女',
                birthday: '1999-09-19',
                email: 'administrator@qq.com'
            },
            possession: [
                { id: 1, text: '积分', path: 'Index', number: 1388 },
                { id: 2, text: '收藏', path: 'MyCollect', number: 88 },
                { id: 3, text: '足迹', path: 'Index', number: 118 }
            ]
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
        getCamera() {
            console.log('打开照相机');
        },
        getLibrary() {
            console.log('打开相册');
        },
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
        openAction() {
            // this.$refs.headerPicker.open();
            this.sheetVisible = true;
        },
        openSexPicker() {
            this.sexShow = true;
        },
        /**
         * [openDatePicker 打开日期面板]
         * @return {[String]} [返回用户出生日期]
         */
        openDatePicker() {
            this.pickerVisible = new Date(this.userInfo.birthday);
            this.$refs.picker.open();
        },
        /**
         * [handleConfirm 关闭日期时间面板]
         * @param  {Date} e [返回日期]
         * @return {[String]}   [设置用户出身日期]
         */
        handleConfirm(e) {
            console.log('pickerVisible', this.pickerVisible);
            var data = new Date();
            var day = this.pickerVisible.getDate(),
                month = this.pickerVisible.getMonth(),
                year = this.pickerVisible.getFullYear();
            this.userInfo.birthday = year + '-' + month + '-' + day;
        },
        onValuesChange() {

        }
    }

}

</script>

<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.MyUser { width: 100%; background: #fff; position: relative; z-index: 0; padding-top: 1px; }
.MyUser > .headerBg { position: absolute; z-index: -1; top: 0; left: 0; width: 100%; height: 15rem; background-image: url('../../../static/img/bg-red.png'); background-size: 100% auto; background-repeat: no-repeat; } 
.MyUser .seticon { width: 90%; background: #fff; margin: 0 auto; border-radius: .5rem; box-shadow: -0.2rem 0 1rem rgba(66, 66, 66, 0.05), 0 -0.2rem 1rem rgba(66, 66, 66, 0.05), 0.6rem 0 1rem rgba(66, 66, 66, 0.05), 0 1rem 1rem rgba(66, 66, 66, 0.05); }
.MyUser .seticon .title.box { display: black; width: 100%; text-align: left; padding: 1.25rem; box-sizing: border-box; height: 3.75rem; border-bottom: 1px solid #f2f2f2; }
.MyUser .seticon .title.box .inline-black { display: inline-block; font-size: 1.16rem; }
.MyUser .seticon .title.box a { float: right; font-size: 1.16rem; }
.MyUser #information { position: static; margin-top: 3.5rem; left: 0; padding-bottom: 1.66rem; }
.MyUser #information .box { position: relative; width: 100%; top: 0; padding-top: .25rem; }
.MyUser #information .grade { position: absolute; left: 0rem; top: 0rem; width: 4rem; height: 4rem; border-radius: .5rem 0 0 0; overflow: hidden; display: block; z-index: 99; }
.MyUser #information .grade span { position: absolute; top: -2.5rem; left: -2.5rem; display: block; width: 5rem; height: 5rem; line-height: 8.4rem; font-size: .8rem; vertical-align: bottom; text-align: center; -webkit-transform: rotateZ(-45deg); -ms-transform: rotateZ(-45deg); -o-transform: rotateZ(-45deg); transform: rotateZ(-45deg); }
.MyUser #information .grade.yellow span { background-color: rgba(255,200,0,1); color: rgba(120,60,0,1); }
.MyUser #information .grade.green span { background-color: rgba(120,255,0,1); color: rgba(160,120,0,1); }
.MyUser #information .setting.right { position: absolute; right: 1.85rem; top: .5rem; width: 2rem; height: 2rem; display: black; }
.MyUser #information .setting.right i.icon { font-size: 2rem; }
.MyUser #information .user.info { width: 100%; text-align: center; }
.MyUser #information .user.info .header { width: 5.85rem; height: 5.85rem; border-radius: 50%; overflow: hidden; margin: 1rem auto; border: .1rem solid red; box-sizing: border-box; }
.MyUser #information .user.info .header img { width: 100%; height: 100%; }
.MyUser #information .user.info .name { font-size: 1.375rem; margin: .5rem auto; color: #333; }
.MyUser #information .user.info .name span { font-family: '楷体'; font-weight: bold; }
.MyUser #information .possession { width: 80%; margin: 1.8rem auto 0; }
.MyUser #information .possession .item { width: 33.33%; display: inline-block; text-align: center; border-right: 1px solid #eee; box-sizing: border-box; }
.MyUser #information .possession .item:last-child { border-right: none; }
.MyUser #information .possession .item .title { font-size: 1.3rem; margin-bottom: 1rem; }
.MyUser #information .possession .item .number { font-size: 1.1rem; color: #999; }
.MyUser #orders { position: static; margin-top: 1.65rem; left: 0; padding: 0; }
.MyUser #orders .items { width: 100%; display: block; }
.MyUser #orders .items:after { content: ''; clear: both; display: block; }
.MyUser #orders .items > .item { width: 25%; display: inline-block; box-sizing: border-box; float: left; padding: 1.6rem 0; text-align: center; position: relative; }
.MyUser #orders .items > .item span.number { position: absolute; right: 30%; top: 17%; border-radius: 50%; border: 1.1px solid #ff5a5a; color: #ff5a5a; font-size: 1rem; width: 1.6rem; height: 1.6rem; overflow: hidden; line-height: 1.75rem; text-align: center; box-sizing: border-box; background: white; }
.MyUser #orders .items > .item .icon { font-size: 2rem; color:#ff5a5a; }
.MyUser #orders .items > .item .text.name { font-size: 1.1rem; margin-top: 1.25rem; color: #333; }
.MyUser #system { position: static; margin-top: 1.65rem; left: 0; }
.MyUser #system ul.functions { width: 100%; }
.MyUser #system ul.functions:after { content: ''; clear: both; display: block; }
.MyUser #system ul.functions li { float: left; width: 33.33%; display: inline-block; text-align: center; border-bottom: 1px solid #f2f2f2; padding: 2rem; box-sizing: border-box; }
.MyUser #system ul.functions li i.icon { font-size: 2.4rem; }
.MyUser #system ul.functions li i.icon.darkred  { color: rgba(255,80,80,1); }
.MyUser #system ul.functions li i.icon.blue { color: rgba(55,190,255,1); }
.MyUser #system ul.functions li i.icon.yellows { color: rgba(255,160,70,1); }
.MyUser #system ul.functions li i.icon.purple { color: rgba(140,70,255,1); }
.MyUser #system ul.functions li i.icon.red { color: rgba(255,100,140,1); }
.MyUser #system ul.functions li i.icon.gray { color: rgba(160,160,160,1); }
.MyUser #system ul.functions li .name { color: #333; font-size: 1.1rem; margin-top: 1.25rem; }
.MyUser #system ul.functions li.border-none { border-bottom: none; }
</style>