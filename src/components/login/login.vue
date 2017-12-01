<!-- 登录 -->
<template>
  <div class="login">
  	<div class="header">
  		<header-bar :isWhite="true"></header-bar>
  	</div>
  	<div class="nav">
  		<div class="logo">logo</div>
  		<div class="input-group">
  			<div class="input-item input-person">
  				<i class="iconfont">&#xe602;</i>
  				<input type="text" placeholder="请输入手机号" />
  			</div>
  			<div class="input-item"  v-if="pwdLogin">
  				<i class="iconfont">&#xe61c;</i>
  				<input type="password" placeholder="请输入密码" />
  			</div>
  			<div class="input-item"  v-if="!pwdLogin">
  				<i class="iconfont">&#xe61c;</i>
  				<input type="text" class="input-code" placeholder="请输入短信验证码" />
  				<button class="btn-send">获取验证码</button>
  			</div>
  			<div class="input-item operate">
  				<span>注册账号</span>
  				<span class="fr" v-if="pwdLogin" @click="handleForget">忘记密码</span>
  			</div>
  			<div class="input-item btn">
  				<button class="btn-red">登录</button>
  			</div>
  			<div class="input-item ta-center">
  				<a class="text-red" v-if="pwdLogin" @click="changeLogin">无密码快速登录</a>
  				<a class="text-red" v-if="!pwdLogin" @click="changeLogin">使用密码登录</a>
  			</div>
  		</div>
  	</div>
 		<div class="btm" v-if="pwdLogin">
 			<span class="wechat"><i class="iconfont">&#xe61b;</i>微信</span>
 			<span class="qq"><i class="iconfont">&#xe644;</i>QQ</span>
 			<span class="weibo"><i class="iconfont">&#xe614;</i>微博</span>
 		</div>
  </div>
</template>

<script>
import headerBar from '@/components/header/headerBar'
	
export default {
  name: 'login',
  components: {
  	'header-bar': headerBar
  },
  data () {
    return {
     pwdLogin: false,//使用密码登录
    }
  },
  mounted() {
		document.title = '登录';
  },
  methods: {
  	//切换登录方式
  	changeLogin: function() {
  		this.pwdLogin = !this.pwdLogin;
  	},
  	//忘记密码
  	handleForget: function() {
  		this.$router.push('/forgetPwd');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
	width: 100%;
	background: #fff;
}
.header {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 15rem;
	background-image: url(img/bg-red.png);
	background-size: 100% auto;
	background-repeat: no-repeat;
}
.nav {
	position: relative;
	top: 0;
	left: 0;
	width: 87%;/* 27.8rem */
	/*min-width: 27.8rem;*/
	min-height: 28rem;
	background: #fff;
	margin: -7.2rem auto 0 auto;
	border-radius: 1.5rem;
	box-shadow: -0.2rem 0 1rem rgba(255, 66, 66, 0.15),
							0 -0.2rem 1rem rgba(255, 66, 66, 0.15),
							0.6rem 0 1rem rgba(255, 66, 66, 0.15),
							0 1rem 1rem rgba(255, 66, 66, 0.15);
	padding-top: 8rem;
}
.nav .logo {
	position: absolute;
	top: -4.0rem;
	left: calc(50% - 4.55rem);
	width: 9.1rem;
	height: 9.1rem;
	line-height: 9.1rem;
	border-radius: 9.1rem;
	text-align: center;
	background: #fff;
	font-size: 2.7rem;
	color: #ff4242;
	box-shadow: 0.2rem 0.5rem 0.5rem rgba(255, 66, 66, 0.15);
}
input {
	background: #fff;
}
.input-group .input-item {
	position: relative;
	left: 0;
	top: 0;
	width: 85%;
	margin: 0 auto 3.0rem auto;
	clear: both;
}
.input-item .iconfont {
	position: absolute;
	left: 0;
	top: 0.5rem;
	font-size: 1.8rem;
	color: rgba(0, 0, 0, 0.5);
}
.input-item.input-person .iconfont{
	top: 0.8rem;
	left: -0.26rem;
	font-size: 2.2rem;
}
.input-group .input-item input {
	width: 100%;
	height: 3.0rem;
	line-height: 3.0rem;
	padding-left: 3.0rem;
	border-bottom: 0.1rem solid rgba(0,0,0,0.2);
	font-size: 1.5rem;
}
.input-item > span {
	color: #666;
	font-size: 1.3rem;
}
.input-item .input-code {
	padding-right: 7.5rem;
}
.input-item .btn-send {
	position: absolute;
	right: 0;
	top: 0;
	width: 7.0rem;
	height: 2.4rem;
	border-radius: 0.5rem;
	border: 0.1rem solid #808080;
	background: #fff;
	color: #808080;
	font-size: 1.2rem;
}
.fr {
	float: right;
}
.btn-red {
	width: 100%;
	height: 4.4rem;
	line-height: 4.4rem;
	background: #ff4242;
	color: #fff;
	font-size: 1.7rem;
	border-radius: 0.5rem;
}
.ta-center {
	text-align: center;
	padding-bottom: 5rem;
}
.text-red {
	color: #ff4242;
	font-size: 1.5rem;
	text-decoration: underline;
}
.input-group .operate {
	margin-top: 4.0rem;
	margin-bottom: 2.0rem;
}
.input-group .btn {
	margin-bottom: 2.0rem;
}
.btm {
	position: fixed;
	bottom: 2.5rem;
	left: calc(50% - 12rem);
	width: 24rem;
}
.btm > span {
	float: left;
	font-size: 1.2rem;
	color: #a8a8a8;
	width: 8rem;
	height: 1.7rem;
	line-height: 1.7rem;
	text-align: center;
}
.btm > span:nth-child(1),
.btm > span:nth-child(2) {
	width: calc(8rem - 0.1rem);
	border-right: 0.1rem solid #a8a8a8; 
}
.btm > span .iconfont {
	font-size: 2.0rem;
	vertical-align: middle;
	margin-right: 0.1rem;
}
.btm > span.wechat .iconfont {
	color: #2dbb4b;
}
.btm > span.qq .iconfont {
	color: #1ebbfc;
}
.btm > span.weibo .iconfont {
	color: #ff0035;
}
</style>
