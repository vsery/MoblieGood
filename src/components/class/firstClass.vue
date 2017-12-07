<!-- 一级分类 -->
<template>
    <div class="firstClass">
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="search" @click="$router.push('/search')">
    		<p><i class="iconfont">&#xe616;</i>搜索商品</p>
    	</div>
    	<div class="nav">
    		<div class="nav-left" :style="{height: minNavH + 'rem'}">
    			<ul>
    				<li v-for="item in classList">{{item.title}}</li>
    			</ul>
    		</div>
    		<div class="nav-right" :style="{height: minNavH + 'rem'}">
    			<div class="top-img">
    				<img src="../../assets/img/img04.png" />
    			</div>
    			<div class="part">
    				<div class="part-title"><i>—</i>推荐区<i>—</i></div>
    				<div class="part-con">
    					<div class="part-item" v-for="item in list" @click="$router.push('/secondClass')">
    						<img :src="item.img" />
    						<h3>{{item.title}}</h3>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'	

export default {
    name: 'firstClass', // 一级分类
    components: {
	  	'header-bar': headerBar
	},
    data() {
        return {
        	minNavH: 0,
        	classList: [
        		{'title': '推荐区'},
        		{'title': '居家'},
        		{'title': '餐厨'},
        		{'title': '居家'},
        		{'title': '居家'},
        		{'title': '餐厨'},
        		{'title': '居家'},
        	],
        	list: [
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'},
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'},
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'},
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'},
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'},
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'},
        		{'img': '../../src/assets/img/img01.png', 'title': '美食特惠'}
        	]
        }
    },
    mounted() {
        this.$nextTick(function() {
        	this.minNavH = this.clientH - 3.7 - 1;
        });
    },
    methods: {
    	
    }

}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.search {
	padding: 0.7rem 1.0rem;
}
.search > p {
	width: 100%;
	height: 3.2rem;
	line-height: 3.2rem;
	margin: 0 auto;
	background: #ededed;
	border-radius: 0.5rem;
	font-size: 1.4rem;
	text-align: center;
	color: #999;
}
.search > p > i {
	font-size: 1.4rem;
	color: #666;
	margin-right: 0.7rem;
}
.nav {
	display: flex;
	border-top: 0.1rem solid #d9d9d9;
	color: #333;
	font-size: 1.5rem;
	overflow: hidden;
}
.nav-left {
	width: 8.5rem;
	border-right: 0.1rem solid #d9d9d9;
	overflow-y: auto;
}
.nav-left > ul {
	padding: 1.0rem 0;
}
.nav-left > ul > li {
	margin: 2.0rem 0;
	padding: 0.5rem 0;
	text-align: center;
	font-size: 1.5rem;
}
.nav-left > ul > li.active,
.nav-left > ul > li:first-child {
	border-left: 0.3rem solid #d4282d;
	color: #d4282d;
}
.nav-right {
	flex: 1;
	background: #fff;
	overflow-y: auto;
}
.nav-right .top-img {
	width: 90%;
	height: 9.0rem;
	margin: 1.5rem auto;
}
.nav-right .top-img > img {
	width: 100%;
	height: 100%;
	border-radius: 0.2rem;
}
.nav-right .part {
	padding: 0.5rem 1.0rem;
}
.nav-right .part .part-title {
	text-align: center;
	font-size: 1.2rem;
}
.nav-right .part .part-title > i {
	color: #d4d4d4;
	margin: 0 1.0rem;
}
.nav-right .part .part-con {
	width: 100%;
	clear: both;
}
.part-con .part-item {	
	float: left;
	width: 33.3%;
	text-align: center;
	margin: 2.6rem auto 1.7rem auto;
}
.part-con .part-item > img {
	width: 4.0rem;
	height: 4.0rem;
	border-radius: 4.0rem;
}
.part-con .part-item > h3 {
	color: #333;
	font-size: 1.3rem;
	margin-top: 1.0rem;
}
</style>
