<!-- 积分乐园 -->
<template>
    <div class="integral">
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="nav">
    		<div class="person-info">
    			<div class="left">
    				<img src="../../../static/img/header (2).jpg" />
    				<span>大大脸猫<img src="./img/grade1.png" /></span>
    			</div>
    			<div class="right">
    				<span>6698.55</span>
    				<span class="">积分</span>
    				<i class="iconfont">&#xe60c;</i>
    			</div>
    		</div>
    		<div class="integral-group" :style="{minHeight: minGroup + 'rem'}">
    			<div class="integral-title">玩游戏 赚积分</div>
    			<div class="integral-item" @click="$router.push('/luckDraw')">
    				<img src="./img/integral01.png" />
    				<div class="right">
    					<h2>小积分大抽奖</h2>
    					<p>3388积分每天抽出</p>
    				</div>
    				<div class="enter"></div>
    			</div>
    			<div class="integral-item"  @click="$router.push('/luckDraw')">
    				<img src="./img/integral01.png" />
    				<div class="right">
    					<h2>小积分大抽奖</h2>
    					<p>3388积分每天抽出</p>
    				</div>
    				<div class="enter"></div>
    			</div>
    			<div class="integral-item" @click="$router.push('/luckDraw')"> 
    				<img src="./img/integral01.png" />
    				<div class="right">
    					<h2>小积分大抽奖</h2>
    					<p>3388积分每天抽出</p>
    				</div>
    				<div class="enter"></div>
    			</div>
    		</div>
    	</div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'		

export default {
    name: 'integral', // 积分乐园
    components: {
	  	'header-bar': headerBar
	},
    data() {
        return {
        	minGroup: 0
        }
    },
    mounted() {
        this.$nextTick(function() {
        	this.minGroup = this.clientH - 3.7 - 6.3;
        });
    },
    methods: {
    	
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.nav {
	border-top: 0.1rem solid #ebebeb;
}
.person-info {
	padding: 1.5rem 1.0rem;
}
.person-info .left {
	float: left;
	line-height: 3.2rem;
}
.person-info .left > img {
	float: left;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 3.2rem;
	margin-right: 0.6rem;
}
.person-info .left > span {
	font-size: 1.3rem;
	color: #333;
}
.person-info .left > span > img {
	width: 1.4rem;
	height: 1.4rem;
	border-radius: 0.2rem;
	vertical-align: middle;
	margin-left: 0.5rem;
}
.person-info .right {
	text-align: right;
	line-height: 3.2rem;
}
.person-info .right > span {
	color: #333;
	font-size: 1.8rem;
}
.person-info .right > span:nth-child(2) {
	font-size: 1.3rem;
	margin-right: 1.5rem;
}
.integral-group {
	padding: 1.5rem 1.0rem;
	background: #24262e;
	border-radius: 1.2rem 1.2rem 0 0;
}
.integral-group .integral-title {
	width: 60%;
	height: 3.0rem;
	line-height: 3.0rem;
	text-align: center;
	margin: 0 auto;
	background: url(./img/bg-title.png);
	background-size: 100% 100%;
	color: #fff;
	font-size: 1.6rem;
	margin-bottom: 1.5rem;
}
.integral-group .integral-item {
	position: relative;
	top: 0;
	left: 0;
	min-height: 5.0rem;
	margin-top: 0.6rem;
	padding: 1.0rem 1.5rem;
	background: #323743;
	border-radius: 0.5rem;
	clear: both;
}
.integral-item > img {
	float: left;
	width: 5.0rem;
	height: 5.0rem;
	border-radius: 0.5rem;
	margin-right: 1.3rem;
}
.integral-item .right > h2 {
	color: #f1f4ff;
	font-size: 1.5rem;
	line-height: 3.4rem;
}
.integral-item .right > p {
	color: #707a9d;
	font-size: 1.1rem;
}
.integral-item .enter {
	position: absolute;
	top: 0;
	right: 0;
	width: 7.2rem;
	min-height: 7.0rem;
	color: #707a9d;
	background: url(img/enter.png);
	background-size: 100% 100%;
}
</style>
