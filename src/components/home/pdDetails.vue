<!-- 商品详情 -->
<template>
    <div class="pdDetails">
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="nav">
    		<div class="product-data">
    			<div class="product-img">
    				<mt-swipe>
					  <mt-swipe-item v-for="item,index in productImg" :key="index">
					  	<img :src="item.img" width="100%" height="100%" />
					  </mt-swipe-item>
					</mt-swipe>
    			</div>
    			<div class="img-btm">
	    			<div class="product-meta">
	    				<div class="title"><span class="sign">自营</span><span>日式色织水洗棉格纹四件套 新款日式色织水洗棉格纹四件套 新款</span></div>
	    				<div class="detail">水洗做旧感，纯棉透气</div>
						<div class="prize">
							<span class="new-prize"><i>¥</i>279.00</span>
							<span class="integral">送999积分</span>
						</div>
						<div class="old-prize"><i>¥</i>379.00</div>
						<div class="right">
							<p class="comment-num">999+</p>
							<p class="comment-title">用户评价</p>
							<button @click="$router.push('/comment')">查看</button>
						</div>
	    			</div>
	    			<div class="product-tip">
	    				<span><i class="iconfont">&#xe98c;</i>正品保证</span>
	    				<span><i class="iconfont">&#xe98c;</i>闪电发货</span>
	    				<span><i class="iconfont">&#xe98c;</i>七天退换</span>
	    			</div>
    			</div>
    			<div class="choice">
    				<mt-cell title="选择   颜色   尺码" is-link @click.native="$router.push('/joinCart')"></mt-cell>
    			</div>
    			<div class="comment">
    				<mt-cell title="用户评价" value="查看全部" is-link @click.native="$router.push('/comment')"></mt-cell>
    				<div class="comment-item">
    					<div class="account">
    						<img src="./img/photo.png" />
    						<h3>静***笑<img src="./img/grade1.png" class="grade"/></h3>
    					</div>
    					<div class="info">
    						2017/11/17  松柏绿; 1.2M(三件套传床单款)
    					</div>
    					<div class="con">
    						<div class="con-text">非常好看，手感也很好，第一次在网易严选上买东西，棉质不错，很喜欢 还会在买几套。</div>
    						<div class="con-img">
    							<img src="./img/img02.png" />
    							<img src="./img/img03.png" />
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="product-detail">
    				<h3>商品详情</h3>
    				<div class="detail-img">
    					<img src="./img/img04.png" />
    				</div>
    			</div>
    		</div>
    	</div>
   		<div class="buy">
   			<span class="iconfont">&#xe667;</span>
   			<span class="iconfont">&#xe603;</span>
   			<button class="btn-buy" @click="handleChoose">立即购买</button>
   			<button class="btn-add" @click="handleChoose">加入购物车</button>
   		</div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'		

export default {
    name: 'pdDetails',
    components: {
	  	'header-bar': headerBar
	},
    data() {
        return {
        	productImg: [
        		{'img': '../../../src/assets/img/img01.png'},
        		{'img': '../../../src/assets/img/img01.png'},
        		{'img': '../../../src/assets/img/img01.png'}
        	]
        }
    },
    mounted() {
        this.$nextTick(function() {
        	
        });
    },
    methods: {
    	//选择尺码颜色等	
    	handleChoose: function() {
    		this.$router.push('/joinCart');
    	}
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.pdDetails {
	background: #f5f5f5;
}
.product-img {
	position: absolute;
	left: 0;
	top: 3.7rem;
	width: 100%;
	height: 31.4rem;
}
.img-btm,
.comment,
.product-detail {
	background: #fff;
	margin-bottom: 1.0rem;
}
.img-btm {
	margin-top: 31.4rem;
}
.product-meta {
	position: relative;
	top: 0;
	left: 0;
	padding: 1.5rem 0;
	margin: 0 1.5rem;
	border-bottom: 0.05rem solid #e6e6e6;
}
.product-meta .title {
	width: calc(100% - 7.2rem);
	line-height: 1.4rem;
	color: #242424;
	font-size: 1.5rem;
	overflow: hidden;
}
.product-meta .title span:nth-child(2) {
	line-height: 2.0rem;
}
.product-meta .title span.sign {
	/*display: inline-block;*/
	float: left;
	height: 1.4rem;
	line-height: 1.6rem;
	background: #e93b3d;
	font-size: 1.0rem;
	color: #fff;
	padding-left: 0.3rem;
	padding-right: 0.3rem;
	/*padding: 0rem 0.3rem;*/
	margin-right: 0.3rem;
	margin-top: 0.2rem;
	border-radius: 0.2rem;
}
.product-meta .detail {
	width: calc(100% - 7.0rem);
	height: 1.3rem;
	line-height: 1.4rem;
	color: #666;
	font-size: 1.3rem;
	margin-top: 1.1rem;
	overflow: hidden;
}
.product-meta .prize {
	color: #e93b3d;
	margin-top: 1.7rem;
	line-height: 1.0rem;
	vertical-align: middle;
}
.product-meta .prize .new-prize {
	font-size: 1.9rem;
	font-weight: bold;
}
.product-meta .prize .new-prize > i {
	font-size: 1.4rem;
	font-style: normal;
}
.product-meta .prize .integral {
	font-size: 1.0rem;
	border: 0.05rem solid #e93b3d;
	border-radius: 0.2rem;
	padding: 0.1rem 0.4rem;
	vertical-align: super;
	margin-left: 0.6rem;
}
.product-meta .old-prize {
	color: #999;
	font-size: 1.2rem;
	margin-top: 1.25rem;
	text-decoration: line-through;
}
.product-meta .old-prize > i {
	font-style: normal;
}
.product-meta .right {
	position: absolute;
	right: 0;
	top: 1.5rem;
	text-align: center;
	padding: 1.0rem 0 1.5rem 1.5rem;
	border-left: 0.05rem dashed #d9d9d9;
}
.product-meta .right p {
	color: #e93b3d;
}
.product-meta .right p.comment-num {
	font-size: 1.8rem;
}
.product-meta .right p.comment-title {
	font-size: 1.2rem;
	margin: 0.9rem 0;
}
.product-meta .right > button {
	border-radius: 0.2rem;
	border: 0.05rem solid #7f7f7f;
	background: #fff;
	padding: 0.3rem 1.2rem;
	color: #333;
}
.product-tip {
	margin: 0 1.5rem;
	padding: 1.5rem 0;
}
.product-tip span {
	display: inline-block;
	width: 32%;
	color: #666;
	font-size: 1.3rem;
}
.product-tip span:nth-child(2) {
	text-align: center;
}
.product-tip span:nth-child(3) {
	text-align: right;
}
.product-tip span > i {
	color: #e93b3d;
	font-size: 1.1rem;
	margin-right: 0.4rem;
}
.choice {
	/*padding-left: 0.6rem;*/
	background: #fff;
	margin-bottom: 1.0rem;
}
.comment-item {
	margin-left: 1.5rem;
	border-top: 0.05rem solid #d7d7d7;
}
.comment-item .account {
	padding: 1.5rem 0 1.0rem 0;
}
.account > img {
	float: left;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 3.2rem;
	vertical-align: middle;
	margin-right: 0.6rem;
}
.account h3 {
	line-height: 3.2rem;
	font-size: 1.3rem;
}
.account .grade {
	width: 1.4rem;
	height: 1.4rem;
	vertical-align: middle;
	margin-left: 0.5rem;
}
.comment-item .info {
	color: #666;
	font-size: 1.2rem;
	margin-bottom: 1.3rem;
}
.comment-item .con {
	margin-right: 1.5rem;
}
.comment-item .con .con-text {
	color: #333;
	font-size: 1.4rem;
	line-height: 2.0rem;
	margin-bottom: 1.0rem;
}
.comment-item .con .con-img {
	margin-bottom: 0.4rem;
}
.comment-item .con .con-img img {
	width: 6rem;
	height: 6rem;
	border-radius: 0.2rem;
	background: #7f7f7f;
	margin-right: 0.8rem;
	margin-bottom: 0.8rem;
}
.product-detail {
	padding: 1.5rem 1.5rem 4.9rem 1.5rem;
}
.product-detail > h3 {
	color: #333;
	font-size: 1.3rem;
	margin-bottom: 1.5rem;
}
.product-detail .detail-img img {
	width: 100%;
}
.buy {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 4.9rem;
	line-height: 4.9rem;
	background: #fff;
	border-top: 0.05rem solid #d9d9d9;
}
.buy span.iconfont {
	float: left;
	/*display: inline-block;*/
	width: 14.5%;
	font-size: 2.1rem;
	text-align: center;
	color: #7f7f7f;
	box-sizing: border-box;
}
.buy span.iconfont:nth-child(1) {
	border-right: 0.05rem solid #d9d9d9;
}
.buy .btn-buy,
.buy .btn-add {
	float: left;
	width: 35%;
	height: 4.9rem;
	background: #fff;
	color: #333;
	font-size: 1.5rem;
	box-sizing: border-box;
}
.buy .btn-buy {
	border-left: 0.05rem solid #d9d9d9;
}
.buy .btn-add {
	float: right;
	width: 36%;
	background: #e93b3d;
	color: #fff;
}
</style>
