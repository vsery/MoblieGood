<!-- 二级分类 -->
<template>
    <div class="secondClass">
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="nav">
    		<div class="nav-menu">
    			<span v-for="item in menuList" @click="handleSelect($event)">{{item.title}}</span>
    		</div>
    		<div class="nav-con">
    			<product-list></product-list>
    		</div>
    	</div>
    	<back-top></back-top>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
import productList from '@/components/class/productList' //商品列表
import backTop from '@/components/tool/backTop' //回到顶部

export default {
    name: 'secondClass', // 二级分类
    components: {
	  	'header-bar': headerBar,
	  	'product-list': productList,
	  	'back-top': backTop
	},
    data() {
        return {
        	selectMenu: 1,
        	menuList: [
        		{'id':1,'title': '床品件套'},
        		{'id':2,'title': '被套'},
        		{'id':3,'title': '枕头'},
        		{'id':4,'title': '家具'},
     			{'id':5,'title': '装饰'},
        		{'id':6,'title': '收纳'},
//      		{'id':7,'title': '家具'},
//      		{'id':8,'title': '电器'},
//      		{'id':9,'title': '鞋帽'},
//      		{'id':10,'title': '衣服'}
        	],
        	proList: [
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
        	'back-top': backTop
        }
    },
    mounted() {
        this.$nextTick(function() {
        	
        });
    },
    methods: {
    	//选择菜单
    	handleSelect: function(e) {
    		var spanArr = document.getElementsByClassName('nav-menu')[0].getElementsByTagName('span');
    		for(var i = 0;i < spanArr.length;i++) {
    			spanArr[i].className = '';
    		}
    		e.currentTarget.className = 'active'
    	}
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.nav {
	border-top: 0.1rem solid #ebebeb;
}
.nav-menu {
	width: 100%;
	height: 3.5rem;
	line-height: 3.5rem;
	color: #333;
	font-size: 1.3rem;
	border-bottom: 0.1rem solid #ebebeb;
	overflow-x: auto;
	white-space: nowrap;
	/*overflow-y: hidden;*/
}
.nav-menu > span {
	/*float: left;*/
	display: inline-block;
	height: 3.5rem;
	line-height: 3.5rem;
	padding: 0 0.6rem;
	margin-left: 1.3rem;
}
.nav-menu > span.active {
	height: 3.3rem;
	border-bottom: 0.2rem solid #d4282d;
	color: #d4282d;
}
</style>
