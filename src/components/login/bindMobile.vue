<!-- 绑定手机 -->
<template>
    <div class="bindMobile">
    	<div class="info">
    		为保障您的账户安全，请绑定您的手机号码
    	</div>
    	<div class="nav">
	    	<div class="mobile">
	    		<input type="text" />
	    	</div>
	    	<div class="code">
	    		<input type="text" />
	    		<button>获取验证码</button>
	    	</div>
	    	<div class="btn">
	    		<button @click="handleBind">确认绑定</button>
	    	</div>
	    	<div class="login">
	    		<span>直接登录</span>
	    	</div>
    	</div>
    	<div class="btm">
    		<p>绑定过程中遇到问题?</p>
			<p>请联系<span>在线客服</span>或联系电话客服<span>400-088-6909</span></p>
			<p>我们随时为您服务</p>
    	</div>
    </div>
</template>
<script>
export default {
    name: 'bindMobile', 
    data() {
        return {
        	
        }
    },
    mounted() {
    	document.title = this.title + '-绑定手机号';
    },
    methods: {
    	//确认绑定
    	handleBind: function() {
    		this.$toast('绑定成功');
    	}
    }
}
</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.info {
	color: #a8a8a8;
	font-size: 1.7rem;
	margin: 2.0rem auto;
	text-align: center;
}
.nav > div {
	width: 81%;
	height: 3.5rem;
	margin: 1.0rem auto;
}
.nav > .mobile > input,
.nav > .code > input,
.nav > .code > button {
	border: 0.1rem solid #a8a8a8;
	border-radius: 0.6rem;
	padding: 0 1.2rem;
	height: 100%;
}
.nav > .mobile > input {
	width: 100%;
	height: 100%;
}
.nav > .code > input {
	width: 63%;
}
.nav > .code > button {
	float: right;
	width: 33%; 
	background: #fff;
	color: #666;
	box-sizing: border-box;
}
.nav > .btn {
	height: 4.4rem;
	background-image: linear-gradient(#ff4242, #ff4242), 
	linear-gradient(#ff4242, #ff4242);
	border-radius: 0.5rem;
	margin-top: 4.0rem;
	margin-bottom: 2.0rem;
}
.nav > .btn > button {
	width: 100%;
	height: 100%;
	background: transparent;
	color: #fff;
	font-size: 1.7rem;
}
.nav > .login {
	text-align: right;
	color: #ff4242;
	font-size: 1.3rem;
}
.nav > .login > span {
	text-decoration: underline;
}
.btm > p {
	width: 81%;
	font-size: 1.3rem;
	color: #a8a8a8;
	line-height: 1.8rem;
	margin: 0 auto;
}
.btm > p > span {
	color: #333;
	text-decoration: underline;
}
</style>
