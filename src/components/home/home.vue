<!-- 首页 -->
<template>
<div class="home">
	<div class="header">
  		<header-bar :isHome="true"></header-bar>
  	</div>
  	<div class="banner">
  		<mt-swipe>
		  <mt-swipe-item v-for="item,index in bannerList" :key="index">
		  	<img :src="item.img" width="100%" height="100%" />
		  </mt-swipe-item>
		</mt-swipe>
  	</div>
  	<div class="menu">
  		<ul>
  			<li @click="$router.push('/integral')">
  				<span class="iconfont icon">&#xe6ca;</span>
  				<p>积分乐园</p>
  			</li>
  			<li>
  				<span class="iconfont icon"></span>
  				<p>其他频道</p>
  			</li>
  			<li>
  				<span class="iconfont icon"></span>
  				<p>其他频道</p>
  			</li>
  			<li>
  				<span class="iconfont icon"></span>
  				<p>其他频道</p>
  			</li>
  			<li>
  				<span class="iconfont icon"></span>
  				<p>其他频道</p>
  			</li>
  			<li>
  				<span class="iconfont icon"></span>
  				<p>其他频道</p>
  			</li>
  			<li @click="$router.push('/firstClass')">
  				<span class="iconfont icon">&#xe604;</span>
  				<p>分类</p>
  			</li>
  			<li @click="$router.push({ name: 'MyUser'})">
                <span class="iconfont icon">&#xe64b;</span>
                <p>我的</p>
  			</li>
  		</ul>
  	</div>
  	<div class="hot">
  		<h2>人气推荐</h2>
  		<product-list></product-list>
  	</div>
  	<div class="like">
  		<h2>猜你喜欢</h2>
  		<product-list></product-list>
  	</div>
	<back-top></back-top>
</div>
</template>
<script>
import headerBar from '@/components/header/headerBar'	
import productList from '@/components/class/productList' //商品列表
import backTop from '@/components/tool/backTop' //回到顶部

export default {
    name: 'home',
    components: {
	  	'header-bar': headerBar,
	  	'product-list': productList,
	  	'back-top': backTop
	},
    data() {
        return {
        	bannerList:[
        		{'img': '../../../src/assets/img/banner01.png'},
        		{'img': '../../../src/assets/img/banner01.png'},
        		{'img': '../../../src/assets/img/banner01.png'}
        	],
        	hotList: [
        		{
        			'img': '../../../src/assets/img/img01.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '99'
        		},
        		{
        			'img': '../../../src/assets/img/img01.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '99'
        		},
        		{
        			'img': '../../../src/assets/img/img01.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '99'
        		},
        		{
        			'img': '../../../src/assets/img/img01.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '99'
        		}
        	],
        	toTop: false, //回到顶部
        }
    },
    mounted() {
    	this.$nextTick(function() {
    		document.title = this.title + '-首页';    		
    		window.addEventListener('scroll', this.needBackTop); //监听滚动事件
    	})
    },
    computed: {
    	
    },
    methods: {
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.home {
	background: #f5f5f5;
}
.header {
	background: #fff;
}
.banner {
	position: absolute;
	left: 0;
	top: 4.5rem;
	width: 100%;
	height: 17.7rem;
}
.menu {
	min-height: 13rem;
	margin-top: 17.7rem;
	padding: 1.5rem 0;
	background: #fff;
}
.menu ul li {
	float: left;
	width: 25%;
	text-align: center;
	margin-bottom: 0.2rem;
}
.menu ul li .icon {
	display: inline-block;
	width: 3.6rem;
	height: 3.6rem;
	line-height: 3.6rem;
	border-radius: 3.6rem;
	color: #fff;
	font-size: 1.7rem;
	font-weight: lighter;
}
.menu ul li > p {
	line-height: 2.8rem;
	color: #333;
	font-size: 1.1rem;
}
.menu ul li:nth-child(1) .icon {
	border: 0.05rem solid #ffa749;
	background: #ffcd97;
	font-size: 1.6rem;
	line-height: 3.6rem;
}
.menu ul li:nth-child(2) .icon {
	border: 0.05rem solid #77bfee;
	background: #a9d9f8;
}
.menu ul li:nth-child(3) .icon {
	border: 0.05rem solid #ff696c;
	background: #ffa3a4;
}
.menu ul li:nth-child(4) .icon {
	border: 0.05rem solid #88aeff;
	background: #b8ceff;
}
.menu ul li:nth-child(5) .icon {
	border: 0.05rem solid #8ae6a9;
	background: #b0eec5;
}
.menu ul li:nth-child(6) .icon {
	border: 0.05rem solid #c39dfd;
	background: #d7bbfe;
}
.menu ul li:nth-child(7) .icon {
	border: 0.05rem solid #88aeff;
	background: #b8ceff;
	line-height: 3.9rem;
}
.menu ul li:nth-child(8) .icon {
	border: 0.05rem solid #ff696c;
	background: #ffa3a4;
	font-size: 2.0rem;
}
.hot,
.like {
	min-height: 97rem;
	background: #fff;
	margin-top: 1.0rem;
	clear: both;
}
.hot > h2,
.like > h2 {
	font-size: 1.5rem;	
	padding: 2.3rem 0 1.9rem 0;
	/*height: 5.5rem;*/
	/*line-height: 5.5rem;*/
	text-align: center;
}
</style>
