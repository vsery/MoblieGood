<!-- 头部工具条 -->
<template>
  <div class="header-bar">
  	<div id="header-bar" :class="['nav ']+[isWhite ? 'white' : '']" v-if="!isHome">
  		<div class="left">
  			<span class="iconfont icon-home" @click="$router.push('/')">&#xe608;</span>
  		</div>
  		<div class="title">{{title}}</div>
  		<div class="right">
  			<span class="iconfont icon-search" @click="$router.push('/search')">&#xe616;</span>
  			<span class="iconfont icon-shop" @click="$router.push({name: 'MyShoppingCart'})">&#xe64a;</span>
  		</div>
  	</div>
  	<!-- 首页的头部 -->
  	<div class="nav home-nav" v-if="isHome">
  		<div class="left">
  			<span class="iconfont icon-home" @click="handleMenu">&#xe740;</span>
  		</div>
  		<div class="search" @click="$router.push('/search')">
  			<i class="iconfont">&#xe616;</i>
  			<span>搜索商品</span>
  		</div>
  		<div class="right">
  			<span class="iconfont icon-shop" @click="$router.push({name: 'MyShoppingCart'})">&#xe64a;</span>
  			<span class="iconfont icon-msg" @click="$router.push('/MessageCenter')">
  				&#xe605;
  				<i class="red-point">●</i>
  			</span>
  		</div>
  	</div>
  	<!-- 一级分类 -->
  	<div class="bg-pop slide":style="{height: classH + 'rem', display: hidden}" @click="handleMenu">
	  	<div class="first-class slide" :style="{height: classH + 'rem', display: hidden}">
	  		<ul>
					<li v-for="item in classList" @click="handleClass">{{item.title}}</li>
				</ul>
	  	</div>
 	 	</div>
	</div>
</template>

<script>
export default {
  name: 'headerBar',
  props: {
  	//头部显示为白色 标识 
	  isWhite: {
			type: Boolean,
			default: false 
		},
		isHome: { //首页的头部
			type: Boolean,
			default: false 
		},
	},
  data () {
    return {
     	classH: 0,
     	hidden: 'none',
     	classList: [
    		{'title': '推荐区'},
    		{'title': '居家'},
    		{'title': '餐厨'},
    		{'title': '居家'},
    		{'title': '居家'},
    		{'title': '餐厨'},
    		{'title': '居家'},
    	],
    	headerBarDom: null,
    }
  },
  mounted() {
		this.$nextTick(function() {
			this.classH = this.clientH;
			this.headerBarDom = document.getElementsByClassName('header-bar')[0];
			if(this.isHome) {
				this.headerBarDom.style.height = '4.5rem';
			} else {
				this.headerBarDom.style.height = '3.7rem';
			}
		})
  },
  methods: {
  	//出现左边菜单
  	handleMenu: function() {
  		if(this.hidden == 'block') {
  			this.hidden = 'none';
  			document.body.style.overflow = 'auto';  
  		} else {
  			this.hidden = 'block';
  			document.body.style.overflow = 'hidden';  
  		}
  	},
  	//跳到二级分类
  	handleClass: function() {
  		this.$router.push('/secondClass');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-bar {
    border-bottom: .1px solid #ebebeb;
}
#header-bar.white {
    border-bottom: none;
}
.header-bar {
	width: 100%;
}
.header-bar .nav {
	position: fixed;
	top: 0;
	left: 0;
	width: calc(100% - 2.6rem);
	height: 3.7rem;
	line-height: 3.7rem;
	padding: 0 1.3rem;
	background: #fbfbfb;
	z-index: 1000;
}
.nav .left {
	float: left;
	width: 33%;
}
.nav .right {
	float: right;
	width: 33%;
	text-align: right;
}
.nav .right span.icon-search {
		font-size: 1.8rem;
}
.nav .right span.iconfont {
	display: inline-block;
	/*width: 45%;*/
}
.nav span.iconfont {
	font-size: 2.0rem;
	color: #666;
}
.nav span.iconfont.icon-home {
	font-size: 1.8rem;
}
.nav .title {
	display: inline-block;
	width: 34%;
	font-size: 1.5rem;
	text-align: center;
	padding: 0 auto;
	color: #333;
}
.nav .icon-search {
	margin-right: 2.8rem;
	font-size: 1.6rem;
}
.nav.white {
	background: none;
}
.nav.white span.iconfont,
.nav.white .title {
	color: #fff;
}
.nav .search {
	display: inline-block;
	width: calc(66% - 2.2rem);
	height: 3.0rem;
	line-height: 3.0rem;
	background: #ededed;
	padding: 0 1.1rem;
	margin-top: 0.65rem;
	border-radius: 0.5rem;
}
.search > span {
	color: #999;
	font-size: 1.4rem;
	font-family: 'MicrosoftYaHeiLight';
}
.search > i.iconfont {
	font-size: 1.4rem;
	color: #666;
	margin-right: 0.2rem;
}
.nav .icon-msg {
	position: relative;
	left: 0;
	top: 0;
}
.red-point {
	position: absolute;
	right: 0rem;
	top: -0.6rem;
	/*display: block;*/
	/*width: 0.6rem;*/
	/*height: 0.6rem;*/
	/*border-radius: 0.6rem;*/
	/*background: #d4282d;*/
	color: #d4282d;
	font-size: 1.0rem;
	font-style: initial;
}
.nav.home-nav {
	height: 4.5rem;
	line-height: 4.5rem;
}
.home-nav .left {
	width: 10%;
}
.home-nav .right {
	width: 23%;
}
.nav.home-nav .right span.icon-shop {
	margin-right: 1.8rem;
}
.nav.home-nav span.iconfont.icon-home {
	font-size: 2.2rem;
}
.first-class {
	position: fixed;
	left: -100%;
	top: 4.5rem;
	width: 15rem;
	font-size: 1.5rem;
	z-index: 100;
	background: #fff;
	overflow-y: auto;
	animation: animate 1s;
}
.first-class > ul {
	padding: 1.0rem 0;
}
.first-class > ul > li {
	margin: 2.0rem 0;
	padding: 0.5rem 0;
	text-align: center;
}
.first-class > ul > li.active,
.first-class > ul > li:first-child,
.first-class > ul > li:hover {
	border-left: 0.3rem solid #d4282d;
	color: #d4282d;
}
.bg-pop {
	position: fixed;
	top: 4.5rem;
	left: 0;
	width: 100%;
	background: rgba(0,0,0,0.4);
	z-index: 99;
}
.first-class.slide {
	animation: animate 0.4s;
	left: 0 !important;
}
.bg-pop.slide {
	animation: animate2 0.4s;
	left: 0 !important;
}
@keyframes animate {
	from{ left: -20%;}
	to{ left: 0;}
}
@keyframes animate2 {
	from{ display: none;}
	to{  display: block;}
}
</style>
