<template>
	<div class="register">
		<div class="returnMsg-box">
			<i class="iconfont icon-gou"></i>
			<div class="account">
				您的账号1985623265
			</div>
			<div class="returnMsg">
				注册成功
			</div>
		</div>
		<button class="btn-block">完成</button>
  	</div>
</template>

<script>
	export default {
	  name: 'registerSuccess',
	  data () {
	    return {
	     
	    }
	  },
	  mounted() {
			document.title = '注册成功';
	  },
	  methods: {
	  	
	  }
	}
</script>

<style scoped>
.register {
	padding: 0 2.5rem;
	margin: 3rem auto 0;
}
.returnMsg-box {
	padding-top: 4rem;
	text-align: center;
	line-height: 1.5;
}
.returnMsg-box i {
	font-size: 5rem;
	color: #b3b3b3;
}
.returnMsg-box .account {
	margin-top: 1rem;
	font-size: 1.6rem;
	color: #666;
}
.returnMsg-box .returnMsg {
	font-size: 1.8rem;
	color: #ff4242;
	margin-bottom: 2.5rem;
}
.btn-block {
	display: block;
	width: 100%;
	line-height: 3.8rem;
	font-size: 1.6rem;
	color: #fff;
	background-color: #ff4242;
	border-radius:0.5rem;
}
</style>