<!-- 忘记密码 -->
<template>
    <div class="forgetPwd">
    	<div class="step" v-if="!step3">
    		<div class="active">
    			<i>1</i>
    			<p>验证身份</p>
    			<div class="line"></div>
    		</div>
    		<div :class="{'active': step2 || (!step1 && !step2)}">
    			<i>2</i>
    			<p>修改登录密码</p>
    			<div class="line"></div>
    		</div>
    		<div :class="{'active': step3}">
    			<i>3</i>
    			<p>完成</p>
    		</div>
    	</div>
    	<!-- 验证身份 -->
    	<div class="step-one" v-if="step1">
    		<div class="input-group">
    			<mt-field placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    			<div class="code-group">
		    		<mt-field placeholder="请输入验证码" type="text" v-model="code" class="input-code"></mt-field>
		    		<button class="btn-send">获取验证码</button>
	    		</div>
    		</div>
    		<div class="btn">
    			<button class="btn-red" @click="handleNext('step2')">下一步</button>
    		</div>
    	</div>
    	<!-- 修改登录密码 -->
    	<div class="step-two" v-if="step2">
    		<p class="warn">请输入您新的登录密码，6-20个数字或英文字符</p>
    		<div class="input-group">
    			<mt-field placeholder="登录密码" type="password" v-model="loginPwd"></mt-field>
	    		<mt-field placeholder="确认密码" type="password" v-model="surePwd"></mt-field>
    		</div>
    		<div class="btn">
    			<button class="btn-red" @click="handleNext('step3')">确定</button>
    		</div>
    	</div>
    	<!-- 完成 -->
    	<div class="step-three" v-if="step3">
    		<div class="success-info">
    			<div class="iconfont">&#xe61e;</div>
    			<p>登录密码修改成功</p>
    		</div>
    		<div class="btn">
    			<button class="btn-red" @click="handleNext('step3')">完成</button>
    		</div>
    	</div>
    	<div class="btm" v-if="!step3">
    		<h2>小提示</h2>
    		<p>1、为保障您的账户安全，建议您定期更改您的登录密码，并设定密码为高强度的复杂密码；</p>
			<p>2、若该手机号无法接收验证短信，请 <span>联系客服</span> 申诉更改验证手机</p>
    	</div>
    </div>
</template>
<script>
export default {
    name: 'forgetPwd', 
    data() {
        return {
           	phone: '18823365957',//手机号码
           	code: '',//验证码
           	loginPwd: '',//登录密码
           	surePwd: '',//确认密码
           	step1: true,//第一步
            step2: false,//第二步
          	step3: false,//第三步
        }
    },
    mounted() {
        this.$nextTick(function() {
        	document.title = this.title + '-忘记密码';
        });
    },
    methods: {
    	//下一步
    	handleNext: function(param) {
    		if(param == 'step2') {
    			this.step1 = false;
    			this.step2 = true;
    			this.step3 = false;
    		}
    		if(param == 'step3') {
    			this.step1 = false;
    			this.step2 = false;
    			this.step3 = true;
    		}
    	}
    }

}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.forgetPwd {
	padding: 3.5rem 3.0rem;
}
.step {
	text-align: center;
	margin-bottom: 4.3rem;
}
.step > div {
	position: relative;
	top: 0;
	left: 0;
	display: inline-block;
	width: 24%;
	color: #b3b3b3;
	font-size: 1.1rem;
	margin: 0 5%;
	background: #fff;
}
.step > div:first-child {
	margin-left: 0;
}
.step > div:last-child {
	margin-right: 0;
}
.step > div > .line {
	position: absolute;
	left: 87%;
	top: 1.0rem;
	width: 5.0rem;
	height: 0.1rem;
	background: #b3b3b3;
	z-index: 10;
}
.step > div.active > .line {
	background: #e93b3d;
}
/*.step > div:after {
	position: absolute;
	top: 0.6rem;
	left: 6.2rem;
	content: '————';
	z-index: 1;
}
.step > div:last-child:after {
	content: '';
}
.step > div.active:after {
	color: #e93b3d;
}
*/
.step > div.active i {
	background: #e93b3d;
}
.step > div.active > p{
	color: #333;
}
.step > div > i {
	display: inline-block;
	width: 2.4rem;
	height: 2.4rem;
	line-height: 2.4rem;
	border-radius: 2.4rem;
	background: #b3b3b3;
	font-style: normal;
	color: #fff;
	font-size: 1.5rem;
}
.step > div > p {
	line-height: 2.0rem;
	color: #b3b3b3;
	font-size: 1.1rem;
}
.forgetPwd .mint-cell,
.forgetPwd .mint-cell-wrapper{
	background-image: none !important;
	margin-bottom: 1.3rem;
}
.input-group {
	padding-bottom: 2.4rem;
}
.code-group {
	position: relative;
	top: 0;
	left: 0;
}
.input-code {
	width: 63%;
}
.btn-send {
	position: absolute;
	top: 0rem;
	right: 0;
	width: 33%;
	height: 3.8rem;
	line-height: 3.8rem;
	background: #fff;
	border: 0.1rem solid #a8a8a8;
	border-radius: 0.3rem;
	color: #666;
}
.btn-red {
	width: 100%;
	height: 4.7rem;
	line-height: 4.7rem;
	background-color: #e93b3d;
	box-shadow: 0.1rem 0.4rem 1.2rem 0.1rem 
		rgba(255, 66, 66, 0.35);
	border-radius: 0.5rem;
	color: #fff;
	font-size: 1.7rem;
}
.warn {
	color: #ff4242;
	font-size: 1.4rem;
	margin-bottom: 2.5rem;
}
.success-info {
	text-align: center;
	margin-bottom: 5.5rem;
	margin-top: 6rem;
}
.success-info > div {
	color: #b2b2b2;
	font-size: 4.7rem;
}
.success-info > p {
	font-size: 1.9rem;
	color: #666;
	margin-top: 3.0rem;
}
.btm {
	position: fixed;
	bottom: 0;
	left: 0;
	padding: 3.0rem;
}
.btm > h2 {
	color: #333;
	font-size: 1.3rem;
	margin-bottom: 1.2rem;
}
.btm > p {
	color: #a8a8a8;
	font-size: 1.2rem;
	line-height: 1.8rem;
	margin-bottom: 1.5rem;
}
.btm > p > span {
	color: #22aeff;
}
</style>
