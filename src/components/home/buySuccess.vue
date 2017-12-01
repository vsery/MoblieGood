<!-- 支付成功 -->
<template>
    <div class="buySuccess">
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="nav">
    		<div class="icon">
    			<h2 class="iconfont">&#xe60a;</h2>
    			<p>支付成功</p>
    		</div>
    		<div class="cell-item">
    			<span>合计:</span>
    			<span class="fr">￥500.00</span>
    		</div>
    		<div class="cell-item">
    			<span>实付款:</span>
    			<span class="fr">￥230.00</span>
    		</div>
    		<div class="cell-item">
    			<span>
    				积分抵扣:
    				<label>￥198.00</label>
    			</span>
    			<span class="fr">
    				<i>消耗:</i>
    				<label>235.66积分</label>
    			</span>
    		</div>
    	</div>
    	<div class="btm">
    		<p>
    			您将在<span>确认收货</span>7天后获得积分<b>285.89</b>
    		</p>
    		<div class="btn">
    			<button>查看订单</button>
    			<button @click="$router.push('/')">首页逛逛</button>
    		</div>
    	</div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'

export default {
    name: 'buySuccess',
    components: {
	  	'header-bar': headerBar
	},
    data() {
        return {
        	
        }
    },
    mounted() {
        this.$nextTick(function() {
        	
        });
    },
    methods: {
    	
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.buySuccess {
	background: #f5f5f5;
}
.header{
	border-bottom: 0.1rem solid #ebebeb;
}
.nav {
	margin: 1.3rem 1.2rem;
	padding: 1.6rem 2.1rem 0.5rem 2.1rem;
	background: #fff;
	box-shadow: 0 0.3rem 1.0rem 0 rgba(0, 0, 0, 0.08);
}
.nav .icon {
	text-align: center;
}
.nav .icon .iconfont {
	color: #e93b3d;
	font-size: 7.0rem;
	margin-bottom: 0.7rem;
}
.nav .icon > p {
	color: #333;
	font-size: 1.6rem;
	margin-bottom: 2.6rem;
}
.cell-item {
	border-bottom: 0.1rem solid #e6e6e6;
	padding: 1.5rem 0;
	color: #999;
	font-size: 1.4rem;
}
.cell-item:last-child {
	border-bottom: none;
}
.cell-item span.fr,
.cell-item span label {
	color: #333;
}
.cell-item span.fr i {
	color: #999;
	font-style: initial;
}
.fr {
	float: right;
}
.btm {
	text-align: center;
	margin-top: 3.7rem;
}
.btm > p {
	color: #333;
	font-size: 1.4rem;
	margin-bottom: 1.5rem;
}
.btm > p > span {
	color: #e93b3d;
}
.btm > p > b {
	font-weight: bold;
}
.btm .btn button {
	padding: 1.5rem 4.0em;
	border-radius: 0.5rem;
	border: 0.1rem solid #666;
	background: #fff;	
	color: #333;
	font-size: 1.4rem;
	margin: 0.2rem;
}
.btm .btn button:last-child {
	border: 0.1rem solid #e93b3d;
	color: #e93b3d;
}
</style>
