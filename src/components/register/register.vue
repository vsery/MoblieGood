<!-- 注册 -->
<template>
  <div class="register">
	<div class="input-group">
		<div class="input-item">
			<input type="text" placeholder="请输入手机号" />
			<i class="iconfont icon-iconfontcolor92 color-gray"></i>
		</div>
		<div class="input-item validate-input">
			<input type="text" placeholder="请输入验证码" />
			<button>获取验证码</button>
		</div>
		<div class="input-item">
			<input type="password" placeholder="请输入密码" />
			<i class="iconfont icon-biyan color-gray"></i>
		</div>
		<div class="fill-referee" @click="show">
			<span>填写推荐人</span>
			<i class="iconfont icon-caret"></i>
		</div>
		<div class="input-item">
			<input type="password" placeholder="请输入推荐人手机号(选填)" />
			<i class="iconfont icon-biyan color-gray"></i>
		</div>
		<div class="input-item">
			<button class="btn-block no-success" @click="goSuccess">下一步</button>
		</div>
	</div>
	<div class="text-hint">注册即表示同意榛品购<a>《用户服务协议》</a>与<a>《隐私政策》</a>条款</div>
  </div>
</template>

<script>
	
export default {
  name: 'register',
  data () {
    return {
     
    }
  },
  mounted() {
		document.title = '注册';
  },
  methods: {
  	goSuccess(){
  		this.$router.push({name: 'registerSuccess'});
  	},
  	show(){
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* common */
.color-gray {
	color: #d2d2d2;
}
/* common end */
.register {
	padding: 0 2.5rem;
	margin: 2rem auto 0;
}
.register * {
	box-sizing: border-box;
	outline: none;
}
.register .input-group {
	padding-top: 1.5rem;
	
}
.input-group .input-item {
	position: relative;
	margin-bottom: 1.25rem;
}
.input-group .input-item input {
	width: 100%;
	font-size: 1.4rem;
	height: 3.3rem;
	border: 0.1rem solid #ddd;
	padding: 0.3rem 3rem 0.3rem 0.5rem;
	border-radius: 0.3rem;
}
.input-group .input-item.validate-input input {
	width: 60%;
	margin-right: 2%;
}
.input-group .validate-input button {
	font-size: 1.4rem;
	display: inline-block;
	height: 3.3rem;
	width: 35%;
	border-radius: 0.3rem;
	background-color: #fff;
	border: 1px solid #ddd;
	color: #666;
} 
.input-group .input-item i {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
.input-group .input-item i.icon-biyan {
	font-size: 1.8rem;
}
.input-group .input-item .btn-block {
	display: block;
	width: 100%;
	line-height: 3.8rem;
	font-size: 1.6rem;
	color: #fff;
	background-color: #ff4242;
	border-radius:0.5rem ;
}
.input-group .input-item .btn-block.no-success {
	background-color: #999;
}
.input-group .fill-referee {
	text-align: right;
	height: 1.5rem;
	margin-bottom: 1.25rem;
}
.input-group .fill-referee span {
	color: #999;
}
.register .text-hint {
	font-size: 1.3rem;
	padding-top: 1rem;
	line-height: 1.8rem;
}
.register .text-hint a {
	color: #1EBBFC;
}
</style>
