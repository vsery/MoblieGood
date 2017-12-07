<!-- 去付款 -->
<template>
    <div class="goBuy">
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="nav">
    		<div class="line"></div>
    		<div class="address" @click="$router.push('/receivingAddress')">
    			<h3>
    				<span>{{username}}</span>
    				<span>{{mobile}}</span>
    			</h3>
    			<p>
    				<span class="default-sign">默认</span>
    				<span>{{address}}</span>
    			</p>
    			<i class="iconfont">&#xe60c;</i>
    		</div>
    		<div class="part">
    			<div class="part-item">
    				<span>可以积分：1533</span>
    				<span class="fr">本次购买送0积分</span>
    			</div>
    			<div class="part-item">
    				<span>
    					<input type="checkbox" />可抵扣
    				</span>
    				<span class="fr">￥288.00</span>
    			</div>
    		</div>
    		<div class="part">
    			<div class="part-item">
    				<span>商品合计</span>
    				<span class="fr">￥388.00</span>
    			</div>
    			<div class="part-item">
    				<span>运费</span>
    				<span class="fr">￥0.00</span>
    			</div>
    			<div class="part-item">
    				<span>优惠</span>
    				<span class="fr">-￥88.00</span>
    			</div>
    			<div class="part-item">
    				<span>需付款</span>
    				<span class="fr">￥66.00</span>
    			</div>
    		</div>
    		<div class="product-info">
    			<img src="../../assets/img/img01.png" />
    			<div class="right">
    				<h2>日式色织水洗棉格纹四件套</h2><span class="num">×1</span>
    				<p>水洗做旧感，纯棉透气</p>
    				<p class="prize">￥288.00</p>
    			</div>
    		</div>
    	</div>
    	<div class="btm">
    		<span>应付：￥66.00</span>
    		<button @click="popupVisible = true">去付款</button>
    	</div>
    	
    	<!-- 支付密码框 -->
    	<div class="pop" v-if="popupVisible">
	    	<mt-popup v-model="popupVisible" popup-transition="popup-fade">
	    		<div class="close-pop"><span @click="closePop">×</span></div>
	    		<h2>请输入支付密码</h2>
	    		<h3>请输入6位数数字支付密码</h3>
	    		<pwd-input @result="getPwd"></pwd-input>
	    		<p><span @click="$router.push('/forgetPwd')">忘记密码？</span></p>
			</mt-popup>
		</div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
import pwdInput from '@/components/tool/pwdInput'

export default {
    name: 'goBuy', 
    components: {
	  	'header-bar': headerBar,
	  	'pwd-input': pwdInput
	},
    data() {
        return {
        	username: '卢青青',
        	mobile: '137****5231',
        	address: '湖南省长沙是天心区中欣国际',
        	deductible: 'valueF',
        	options: {label: '可抵扣'},
        	popupVisible: true,
        }
    },
    mounted() {
        this.$nextTick(function() {
        	
        });
    },
    methods: {
    	//关闭弹框
    	closePop: function() {
    		this.popupVisible = false;
    	},
    	//获取从子组件传来的密码值
    	getPwd: function(val) {
			var that = this;
			setTimeout(function() {
				that.handleBuy();
			}, 1000);
    	},
    	//去付款
    	handleBuy: function() {
    		this.$router.push('/buySuccess');
    	},
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.goBuy {
	background: #f5f5f5;
	margin-bottom: 4.9rem;
}
.nav .line {
	width: 100%;
	height: 0.5rem;
	background: url(img/line.png);
	background-size: 100% calc(100% + 0.1rem);
	border-top: 0.1rem solid #fbfbfb;
}
.address {
	position: relative;
	top: 0;
	left: 0;
	padding: 1.5rem 1.4rem;
	background: #fffded;
	margin-bottom: 1.0rem;
}
.address > h3 {
	font-size: 1.5rem;
	color: #333;
	margin-bottom: 1.0rem;
}
.address > h3 > span:first-child {
	margin-right: 3.2rem;
}
.address > p  {
	position: relative;
	left: 0;
	top: 0;
}
.address > p > span.default-sign {
	min-width: 3.5rem;
	padding: 0 0.5rem;
	border-radius: 0.2rem;
	border: 0.1rem solid #e93b3d;
	color: #e93b3d;
	font-size: 1.2rem;
}
.address > p > span:last-child {
	position: absolute;
	left: 8.2rem;
	top: -0.2rem;
	display: inline-block;
	width: 16.0rem;
	height: 2.1rem;
	line-height: 1.8rem;
	color: #999;
	font-size: 1.2rem;
	overflow: hidden;
}
.address > i.iconfont {
	position: absolute;
	top: 2.7rem;
	right: 1.5rem;
}
.part {
	background: #fff;
	margin-bottom: 1.0rem;
}
.part .part-item {
	padding: 1.6rem 1.6rem 1.6rem 0;
	margin-left: 1.5rem;
	border-bottom: 0.1rem solid #d9d9d9;
	color: #333;
	font-size: 1.4rem;
}
.part .part-item:last-child {
	border-bottom: none;
}
.part-item > span > input[type='checkbox'] {
	margin-right: 0.4rem;
	vertical-align: middle;
}
.fr {
	float: right;
}
.product-info {
	padding: 1.2rem;
	background: #fff;
}
.product-info img {
	float: left;
	width: 8.0rem;
	height: 8.0rem;
	border-radius: 0.2rem;
	margin-right: 1.3rem;
}
.product-info .right > h2 {
	width: 55%;
	height: 2.0rem;
	font-size: 1.5rem;
	color: #242424;
	padding: 0.4rem 0;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.product-info .num {
	float: right;
	margin-top: -2.5rem;
	margin-right: 0.3rem;
	color: #242424;
	font-size: 1.5rem;
}
.product-info .right > p {
	font-size: 1.3rem;
	color: #666;
	margin-bottom: 2.6rem;
}
.product-info .right > p.prize {
	margin-bottom: 0;
	color: #333;
	font-size: 1.5rem;	
}
.btm {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 4.9rem;
	line-height: 4.9rem;
	background: #fff;
	border-top: 0.1rem solid #d9d9d9;
}
.btm > span {
	color: #e93b3d;
	font-size: 1.5rem;
	margin-left: 1.5rem;
}
.btm > button {
	float: right;
	width: 13.2rem;
	height: 100%;
	background: #e93b3d;
	color: #fff;
	font-size: 1.5rem;
}
.mint-popup {
	width: 28rem;
	height: 20.6rem;
	text-align: center;
	border-radius: 0.5rem;
	padding: 2.0rem;
}
.close-pop {
	font-size: 2.4rem;
	text-align: right;
	color: #333;
}
.pop h2 {
	color: #333;
	font-size: 1.6rem;
	margin-bottom: 1.5rem;
}
.pop h3 {
	color: #999;
	font-size: 1.4rem;
	margin-bottom: 2.8rem;
}
.pop p {
	text-align: center;
	color: #305694;
	font-size: 1.3rem;
	margin-top: 4.1rem;
}
</style>
