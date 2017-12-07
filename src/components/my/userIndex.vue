<!-- 模型：我的 => 个人信息
    DOM 结构
-->
<template>
    <div class="MyUser">
        <header-bar :isWhite="true"></header-bar>
        <div class="headerBg"></div>
        <div id="information" class="seticon">
            <div class="box">
                <div :class="['grade ']+[userInfo.grade==1?'yellow':'green']"><span>{{userInfo.grade==1?'普通':'Vip'}}</span></div>
                <div class="setting right" @click="$router.push({name:'MySetting'})"><i class="icon iconfont icon-shezhi"></i></div>
            </div>
            <div class="user info">
                <div :class="['header ']+[userInfo.defaultImg?'default':'']" @click="$router.push({name:'MyUserInfo'})"><img :src="userInfo.header" alt=""></div>
                <div class="name" @click="$router.push({name:'MyUserInfo'})">{{userInfo.nickname}} <i class="icon iconfont icon-return-copy"></i></div>
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
                <router-link class="inline-black" :to="{ name: 'MyOrderList', query: {type: 'all'}}">查看订单 <i class="icon iconfont icon-return-copy"></i></router-link>
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
            scroll: '',
            userInfo: {
                grade: 1,
                token: 'bD3@hD4@gC2|rB4?cJ1#lB1`bB7@qC4{fI2;bD7~tE2?dB2%nU2$fD6ebN1@',
                header: './static/img/header.png',
                defaultImg: true,
                ID: '2144815',
                administrator: 'kettling',
                password: '123456',
                nickname: '薇靓的晨露',
                sex: '女',
                birthday: '1999-09-19',
                email: 'administrator@qq.com'
            },
            possession: [
                { id: 1, text: '积分', path: 'MyIntegral', number: 1388 },
                { id: 2, text: '收藏', path: 'MyCollect', number: 88 },
                { id: 3, text: '足迹', path: 'MyTrace', number: 118 }
            ]
        }
    },
    watch: {
    },
    props: {
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
        // document.title = this.title + '-我的';
        window.addEventListener('scroll', this.pageScroll);
        this.getData();
        this.$nextTick(function() {
        });
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
        console.log('test');
        window.removeEventListener('scroll', this.pageScroll);
    },
    destroyed() {
    },
    methods: {
        pageScroll() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(document.getElementById('header-bar'));
            if (this.scroll == 0) {
                document.getElementById('header-bar').setAttribute('class','nav white');
            }else{
                document.getElementById('header-bar').setAttribute('class','nav');
            }
        },
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
    }
}

</script>

<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.MyUser { position: relative; z-index: 0; width: 100%; padding-top: 1px; background: #fff; height: 1000px; }
.MyUser > .headerBg { position: absolute; z-index: -1; top: 0; left: 0; width: 100%; height: 15rem; background-image: url('../../../static/img/bg-red.png'); background-repeat: no-repeat; background-size: 100% auto; }
.MyUser .seticon { width: 90%; margin: 0 auto; border-radius: .5rem; background: #fff; box-shadow: -.2rem 0 1rem rgba(66, 66, 66, .05), 0 -.2rem 1rem rgba(66, 66, 66, .05), .6rem 0 1rem rgba(66, 66, 66, .05), 0 1rem 1rem rgba(66, 66, 66, .05); }
.MyUser .seticon .title.box { display: black; box-sizing: border-box; width: 100%; height: 3.75rem; padding: 1.25rem; text-align: left; border-bottom: 1px solid #f2f2f2; }
.MyUser .seticon .title.box .inline-black { font-size: 1.16rem; display: inline-block; }
.MyUser .seticon .title.box a { font-size: 1.16rem; float: right; }
.MyUser .seticon .title.box .inline-black i.icon { font-size: 1.15rem; }
.MyUser #information { position: static; left: 0; margin-top: .25rem; padding-bottom: 1.66rem; }
.MyUser #information .box { position: relative; top: 0; width: 100%; padding-top: .25rem; }
.MyUser #information .grade { position: absolute; z-index: 99; top: 0rem; left: 0rem; display: block; overflow: hidden; width: 4rem; height: 4rem; border-radius: .5rem 0 0 0; }
.MyUser #information .grade span { font-size: .8rem; line-height: 8.4rem; position: absolute; top: -2.5rem; left: -2.5rem; display: block; width: 5rem; height: 5rem; -webkit-transform: rotateZ(-45deg); -ms-transform: rotateZ(-45deg); -o-transform: rotateZ(-45deg); transform: rotateZ(-45deg); text-align: center; vertical-align: bottom; }
.MyUser #information .grade.yellow span { color: rgba(120, 60, 0, 1); background-color: rgba(255, 200, 0, 1); }
.MyUser #information .grade.green span { color: rgba(160, 120, 0, 1); background-color: rgba(120, 255, 0, 1); }
.MyUser #information .setting.right { position: absolute; top: .5rem; right: 1.85rem; display: black; width: 2rem; height: 2rem; }
.MyUser #information .setting.right i.icon { font-size: 2rem; }
.MyUser #information .user.info { width: 100%; text-align: center; }
.MyUser #information .user.info .header { overflow: hidden; box-sizing: border-box; width: 5.85rem; height: 5.85rem; margin: 1rem auto; border: .1rem solid red; border-radius: 50%; }
.MyUser #information .user.info .header.default { border-color: #e5e5e5; }
.MyUser #information .user.info .header img { width: 100%; height: 100%; }
.MyUser #information .user.info .name { font-size: 1.375rem; margin: .5rem auto; color: #333; }
.MyUser #information .user.info .name span { font-family: '楷体'; font-weight: bold; }
.MyUser #information .possession { width: 90%; margin: 1.8rem auto 0; }
.MyUser #information .possession .item { display: inline-block; box-sizing: border-box; width: 33.33%; text-align: center; border-right: 1px solid #eee; }
.MyUser #information .possession .item:last-child { border-right: none; }
.MyUser #information .possession .item .title { font-size: 1.3rem; margin-bottom: 1rem; }
.MyUser #information .possession .item .number { font-size: 1.1rem; color: #999; }
.MyUser #orders { position: static; left: 0; margin-top: 1.65rem; padding: 0; }
.MyUser #orders .items { display: block; width: 100%; }
.MyUser #orders .items:after { display: block; clear: both; content: ''; }
.MyUser #orders .items > .item { position: relative; display: inline-block; float: left; box-sizing: border-box; width: 25%; padding: 1.6rem 0; text-align: center; }
.MyUser #orders .items > .item span.number { margin-top: .25rem; font-size: 1rem; line-height: 1.65rem; position: absolute; top: 17%; right: 30%; overflow: hidden; box-sizing: border-box; width: 1.6rem; height: 1.6rem; text-align: center; letter-spacing: -.5px; color: #ff5a5a; border: 1.1px solid #ff5a5a; border-radius: 50%; background: white; }
.MyUser #orders .items > .item .icon { width: 3rem; height: 3rem; line-height: 3rem; text-align: center; display: inline-block; font-size: 1.8rem; color: #ff5a5a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-linear-gradient(rgba(255, 65, 65, 1), rgba(255, 135, 90, 1)); 
    background-image: -o-linear-gradient(rgba(255, 65, 65, 1), rgba(255, 135, 90, 1)); 
    background-image: linear-gradient(rgba(255, 65, 65, 1), rgba(255, 135, 90, 1));
}
.MyUser #orders .items > .item:nth-child(2) .icon { line-height: 3.6rem; }
.MyUser #orders .items > .item:nth-child(3) .icon { line-height: 3.4rem; }
.MyUser #orders .items > .item .text.name { font-size: 1.1rem; margin-top: .25rem; color: #333; }
.MyUser #system { position: static; left: 0; margin-top: 1.65rem; }
.MyUser #system ul.functions { width: 100%; }
.MyUser #system ul.functions:after { display: block; clear: both; content: ''; }
.MyUser #system ul.functions li { display: inline-block; float: left; box-sizing: border-box; width: 33.33%; padding: 2rem; text-align: center; border-bottom: 1px solid #f2f2f2; }
.MyUser #system ul.functions li i.icon { display: inline-block; width: 3rem; height: 2.6rem; text-align: center; line-height: 2.6rem; font-size: 2.4rem; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.MyUser #system ul.functions li.border-none i.icon { font-size: 2rem; }
.MyUser #system ul.functions li.border-none i.icon.icon-fankui { font-size: 1.95rem; }
.MyUser #system ul.functions li i.icon.darkred { background-image: -webkit-linear-gradient(rgba(255, 65, 65, 1), rgba(255, 135, 90, 1)); background-image: -o-linear-gradient(rgba(255, 65, 65, 1), rgba(255, 135, 90, 1)); background-image: linear-gradient(rgba(255, 65, 65, 1), rgba(255, 135, 90, 1)); }
.MyUser #system ul.functions li i.icon.blue { background-image: -webkit-linear-gradient(rgba(80, 170, 255, 1), rgba(0, 240, 250, 1)); background-image: -o-linear-gradient(rgba(80, 170, 255, 1), rgba(0, 240, 250, 1)); background-image: linear-gradient(rgba(80, 170, 255, 1), rgba(0, 240, 250, 1)); }
.MyUser #system ul.functions li i.icon.yellows { background-image: -webkit-linear-gradient(rgba(255, 160, 65, 1), rgba(250, 112, 155, 1)); background-image: -o-linear-gradient(rgba(255, 160, 65, 1), rgba(250, 112, 155, 1)); background-image: linear-gradient(rgba(255, 160, 65, 1), rgba(250, 112, 155, 1)); }
.MyUser #system ul.functions li i.icon.purple { background-image: -webkit-linear-gradient(rgba(135, 65, 255, 1), rgba(230, 180, 200, 1)); background-image: -o-linear-gradient(rgba(135, 65, 255, 1), rgba(230, 180, 200, 1)); background-image: linear-gradient(rgba(135, 65, 255, 1), rgba(230, 180, 200, 1)); }
.MyUser #system ul.functions li i.icon.red { background-image: -webkit-linear-gradient(rgba(255, 80, 80, 1), rgba(245, 155, 255, 1)); background-image: -o-linear-gradient(rgba(255, 80, 80, 1), rgba(245, 155, 255, 1)); background-image: linear-gradient(rgba(255, 80, 80, 1), rgba(245, 155, 255, 1)); }
.MyUser #system ul.functions li i.icon.gray { background-image: -webkit-linear-gradient(rgba(185, 180, 185, 1), rgba(160, 160, 160, 1)); background-image: -o-linear-gradient(rgba(185, 180, 185, 1), rgba(160, 160, 160, 1)); background-image: linear-gradient(rgba(185, 180, 185, 1), rgba(160, 160, 160, 1)); }
.MyUser #system ul.functions li .name { font-size: 1.1rem; margin-top: 1.25rem; color: #333; }
.MyUser #system ul.functions li.border-none { border-bottom: none; }
</style>