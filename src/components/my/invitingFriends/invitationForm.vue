<template>
	<div id="invitationForm">
		<div class="content">
			<div class="ct-hd"></div>
			<div class="nav">
				<div class="logo">logo</div>
				<div class="text-box">
					<p>榛品购</p>
					<p class="gray">logen或音效短语</p>
				</div>
				<div class="input-group">
					<div class="input-item input-person">
						<i class="iconfont">&#xe602;</i>
						<input type="text" placeholder="请输入手机号" />
					</div>
					<div class="input-item">
						<i class="iconfont">&#xe61c;</i>
						<input type="text" class="input-code" placeholder="请输入短信验证码" />
						<button class="btn-send">获取验证码</button>
					</div>
					<div class="input-item password-code">
						<i class="iconfont">&#xe61c;</i>
						<input type="password" placeholder="请输入登陆密码" />
						<a href="javascript:;" class="iconfont icon-biyan"></a>
					</div>
					<div class="input-item btn">
						<button class="btn-red" @click="$router.push({name: 'invitationSuccess'})">接受邀请</button>
					</div>
				</div>
			</div>
			<div class="ct-ft">
				<p>宏裕程网络科技有限公司版权所有</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'invitationForm',
		data() {
			return {

			}
		},
		mounted() {
			document.title = '邀请您体验榛品购';
		},
		methods: {

		}
	}
</script>

<style scoped>
#invitationForm .content {
	width: 100%;
}
.content .ct-hd {
	position: relative;
	top: 0;
	left: 0;
	height: 13rem;
	background-image: url(../../login/img/bg-red.png);
	background-size: cover;
	background-repeat: no-repeat;
	font-size: 2rem;
}
.content .ct-ft {
	padding: 2rem 0 3rem;
	text-align: center;
	color: #999;
	font-size: 1.5rem;
}
.nav {
	position: relative;
	top: 0;
	left: 0;
	width: 87%;/* 27.8rem */
	min-height: 28rem;
	background: #fff;
	margin: -4.2rem auto 0 auto;
	border-radius: 1.5rem;
	box-shadow: -0.2rem 0 1rem rgba(255, 66, 66, 0.15),
							0 -0.2rem 1rem rgba(255, 66, 66, 0.15),
							0.6rem 0 1rem rgba(255, 66, 66, 0.15),
							0 1rem 1rem rgba(255, 66, 66, 0.15);
	padding-top: 7rem;
}
.nav .text-box {
	padding: 0 0 1.5rem;
	text-align: center;
	line-height: 2rem;
	font-size: 1.5rem;
	color: #333;
}
.nav .text-box .gray {
	color:#999;	
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
.input-group .input-item.password-code input {
	padding-right: 2.5rem;
}
.input-group .input-item.password-code a {
	position: absolute;
	left: auto;
	right: 0;
	top: 0.5rem;
	width: 2rem;
	height: 2rem;
	background: #fff;
	color: #808080;
	font-size: 1.8rem;
}
.input-item > span {
	color: #666;
	font-size: 1.3rem;
}
.input-item .input-code {
	padding-right: 6.5rem;
}
.input-item .btn-send {
	position: absolute;
	right: 0;
	top: 0;
	width: 6.0rem;
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
	padding-bottom: 2.0rem;
}
</style>