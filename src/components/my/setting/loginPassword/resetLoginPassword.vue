<template>
	<div id="resetLoginPassword">
		<div class="content" :style="{height:bodyHeight}">
			<div v-if="show" class="schedule-box">
				<div class="hd-box" :class="two.state?'active-lf':''">
					<ul class="clearfix ">
						<li class="active">
							<div class="icon-box">1<span class="u-line"></span></div>
							<div class="text">验证身份</div>
						</li>
						<li :class="two.state?'active':''">
							<div class="icon-box">2</div>
							<div class="text">修改登陆密码</div>
						</li>
						<li>
							<div class="icon-box">3<span class="u-line"></span></div>
							<div class="text">完成</div>
						</li>
					</ul>
				</div>
				<div class="input-group">
					<template v-if="one.state">
						<div class="input-item">
							<input type="tel" maxlength="11" placeholder="请输入手机号" />
							<i class="iconfont icon-iconfontcolor92 gray"></i>
						</div>
						<div class="input-item validate-code">
							<input type="text" maxlength="6" placeholder="请输入验证码" />
							<button>获取验证码</button>
						</div>
						<div class="input-item u-submit-box">
							<button @click="oneClick">下一步</button>
						</div>
					</template>
					<template v-if="two.state">
						<p>请输入您新的登录密码，6-20个数字或英文字符</p>
						<div class="input-item">
							<input type="password" maxlength="20" placeholder="登陆密码" />
						</div>
						<div class="input-item">
							<input type="password" maxlength="20" placeholder="确认密码" />
						</div>
						<div class="input-item u-submit-box">
							<button @click="twoClick">确定</button>
						</div>
					</template>
				</div>
				<div class="hint-box">
					<p class="tit">小提示</p>
					<p>1、为保障您的账户安全，建议您定期更改您的登录密码，并设定密码为高强度的复杂密码；</p>
					<p>2、若该手机号无法接收验证短信，请
						<a href="javascript:;">联系客服</a> 申诉更改验证手机。</p>
				</div>
			</div>
			<template v-else>
				<div class="form-box u-ok">
					<div class="ok-box">
						<div class="icon-box">
							<i class="iconfont icon-gou"></i>
						</div>
						<p>登陆密码修改成功</p>
						<div class="u-submit-box">
							<button @click="$router.push({name: 'MySetting'});">完成</button>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
	var cle
	export default {
		name: 'changePhone',
		data() {
			return {
				scheduleState: false,
				show: true,
				bodyHeight: document.documentElement.clientHeight + 'px',
				one: {
					state: true,
					inpVal: "",
					inpCode: "",
					validateCode: 123456,
				},
				two: {
					state: false,
					passWord: "",
					okPassWord: "",
				},
				three:{
					state: false,
				}
			}
		},
		mounted() {
			document.title = '重置登陆密码';
		},
		methods: {
			oneClick() {
				this.one.state = false;
				this.two.state = true;
				this.three.state = false;
			},
			twoClick() {
				this.one.state = false;
				this.two.state = false;
				this.three.state = true;
				this.show = false;
			},
		}
	}
</script>

<style scoped>
	@import '../../../../assets/css/itemCommon.css';
	.content {
		position: relative;
	}
	.gray {
		color: #ccc;
	}
	
	.content .schedule-box {
		padding: 2.8rem 0 0;
	}
	
	.schedule-box .hd-box {
		position: relative;
		margin-bottom: 3.75rem;
	}
	
	.schedule-box .hd-box:before,
	.schedule-box .hd-box:after {
		content: '';
		display: block;
		position: absolute;
		top: 1.2rem;
		width: calc(33% - 4rem);
		height: 0.1rem;
		background-color: #e1e1e1;
	}
	
	.schedule-box .hd-box:before {
		left: calc(16.5% + 2rem);
	}
	
	.schedule-box .hd-box:after {
		right: calc(16.5% + 2rem);
	}
	
	.schedule-box .hd-box.active-lf:before {
		background-color: #ff4242;
	}
	
	.schedule-box ul {
		position: relative;
	}
	
	.schedule-box ul li {
		float: left;
		width: 33.3%;
		text-align: center;
		font-size: 1rem;
		color: #999;
	}
	
	.schedule-box ul li.active {
		color: #333;
	}
	
	.schedule-box ul li.active .icon-box {
		background-color: #FF4242;
	}
	
	.schedule-box ul li .icon-box {
		position: relative;
		width: 2.4rem;
		height: 2.4rem;
		line-height: 2.4rem;
		font-size: 1.45rem;
		background-color: #B3B3B3;
		color: #fff;
		border-radius: 50%;
		margin: 0 auto 0.5rem;
	}
	
	.input-group {
		padding: 0 3rem;
	}
	
	.input-group p {
		text-align: center;
		font-size: 1.28rem;
		line-height: 1.5rem;
		color: #ff4242;
		margin-bottom: 1.5rem;
	}
	
	.input-group .input-item {
		position: relative;
		margin-bottom: 1.25rem;
	}
	
	.input-group .input-item input {
		width: 100%;
		font-size: 1.37rem;
		height: 4rem;
		border: 1px solid #ddd;
		outline: none;
		padding: 0.3rem 3rem 0.3rem 0.5rem;
		border-radius: 0.3rem;
	}
	
	.input-group .input-item i {
		position: absolute;
		top: 1.25rem;
		right: 1rem;
		width: 1.5rem;
		height: 1.5rem;
		font-size: 1.5rem;
	}
	
	.input-group .input-item.validate-code {
		display: flex;
		display: -webkit-flex;
	}
	
	.input-item.validate-code input {
		flex: 55;
		margin-right: 0.5rem;
	}
	
	.input-item.validate-code button {
		flex: 35;
		font-size: 1.2rem;
		background-color: #fff;
		color: #666;
		border: 0.1rem solid #ddd;
		border-radius: 0.3rem;
	}
	
	.input-item.u-submit-box {
		margin-top: 3rem;
	}
	
	.input-item.u-submit-box button {
		display: block;
		width: 100%;
		height: 4.3rem;
		line-height: 4.3rem;
		text-align: center;
		background-color: #ff4242;
		color: #fff;
		border-radius: 0.5rem;
	}
	
	.hint-box {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		padding: 0 3rem 2rem;
		margin-top: 14rem;
		font-size: 1.1rem;
		line-height: 1.655rem;
		color: #A8A8A8;
	}
	
	.hint-box p {
		margin-bottom: 1.5rem;
	}
	
	.hint-box .tit {
		font-size: 1.2rem;
		margin-bottom: 1rem;
		color: #666;
	}
	
	.hint-box a {
		color: #22AEFF;
	}
	
	.content .form-box.u-ok {
		padding: 4.6rem 2.25rem 0;
	}
	
	.content .form-box {
		background-color: #fafafa;
		padding: 1rem 0;
		height: 100vh;
	}
	
	.content .ok-box {
		padding: 3.75rem 0 3.5rem;
		text-align: center;
		background-color: #fff;
		border-radius: 1rem;
	}
	
	.content .ok-box .u-submit-box {
		margin-top: 3rem;
	}
	
	.content .ok-box .icon-box {
		margin-bottom: 2.5rem;
	}
	
	.content .ok-box .icon-box i {
		font-size: 5.2rem;
		color: #B3B3B3;
	}
	
	.content .ok-box p {
		font-size: 1.75rem;
		color: #666;
		margin-bottom: 1rem;
	}
	
	.content .ok-box p.red {
		color: #ff4242;
	}
	.content .u-submit-box {
		padding: 0 1.3rem;
		margin-top: 5rem;
	}
	
	.content .u-submit-box button {
		display: block;
		width: 100%;
		height: 4.15rem;
		line-height: 4.15rem;
		background-color: #ff4242;
		border-radius: 0.5rem;
		font-size: 1.56rem;
		color: #fff;
	}
</style>