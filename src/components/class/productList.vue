<!-- 商品列表 -->
<template>
    <div class="productList">
    	<div class="nav">
			<ul class="common-ul">
	  			<li v-for="item in proList" @click="handleDetail">
	  				<img :src="item.img" class="picture" />
	  				<div class="data">
	  					<div class="info">{{item.info}}</div>
		  				<span class="integral">赠{{item.integral}}积分</span>
		  				<div class="title">{{item.title}}</div>
		  				<div class="prize">
	  						<i class="iconfont">¥</i>{{item.prize}}
		  				</div>
	  				</div>
	  			</li>
	  			<li class="full-item" v-for="item in proList2" @click="handleDetail">
	  				<img :src="item.img" class="picture" />
	  				<div class="data">
		  				<span class="integral">赠{{item.integral}}积分</span>
		  				<div class="title">{{item.title}}</div>
		  				<div class="info">{{item.info}}</div>
		  				<div class="prize">
	  						<i class="iconfont">¥</i>{{item.prize}}
		  				</div>
	  				</div>
	  			</li>
	  		</ul>
	  		<!--<div class="no-data" :style="{height: clientH + 'rem'}">
	  			<img src="../../../src/assets/img/noResult.png" />
	  			<p>抱歉，暂无搜索结果</p>
	  		</div>-->
		</div>
    </div>
</template>
<script>

export default {
    name: 'productList', // 二级分类
    data() {
        return {
        	proList: [
        		{
        			'img': '../../../src/assets/img/img03.png',
        			'title': '全棉针织条纹四件套 新款全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '199'
        		},
        		{
        			'img': '../../../src/assets/img/img03.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '9999'
        		}
        	],
        	proList2: [
        		{
        			'img': '../../../src/assets/img/img02.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '399'
        		},
        		{
        			'img': '../../../src/assets/img/img02.png',
        			'title': '全棉针织条纹四件套 新款',
        			'info': '超柔针织棉，亲肤可裸睡',
        			'prize': '219.00',
        			'integral': '999'
        		}
        	]
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
    	},
    	//查看商品详情
    	handleDetail: function() {
    		this.$router.push('/pdDetails');
    	}
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.nav {
	/*border-top: 0.1rem solid #d9d9d9;*/ 
}
.common-ul {
	clear: both;
}
.common-ul li {    
	float: left;
	width: 50%;
	min-height: 25.4rem;
	margin-left: 0;
	box-sizing: border-box;
	background: #fff;
}
.common-ul li:nth-child(2n) {
	padding: 1.0rem 1.0rem 1.9rem 0.5rem;
}
.common-ul li:nth-child(2n + 1) {
	padding: 1.0rem 0.5rem 1.9rem 1.0rem;
}
.common-ul li img.picture {
	width: 100%;
	height: 17.2rem;
	border-top-left-radius: 0.2rem;
	border-top-right-radius: 0.2rem;
	margin: 0;
}
.common-ul .title {
	width: 100%;
	height: 1.4rem;
	line-height: 1.5rem;
	margin: 1.1rem 0 0.6rem 0;
	color: #333;
	font-size: 1.4rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.common-ul li .data {
	margin-top: -0.2rem;
}
.common-ul .info {
	width: calc(100% - 1rem);
	height: 3.4rem;
	line-height: 3.4rem;
	font-size: 1.2rem;
	color: #a18c63;
	margin-bottom: 1.2rem;
	background: #f1ece2;
	padding: 0 0.5rem;
	border-bottom-left-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
	overflow: hidden;
}
.prize {
	color: #d4282d;
	font-size: 1.5rem;
}
.prize i {
	font-size: 1.1rem;
	margin-right: 0.2rem;
}
.integral {
	display: inline-block;
	height: 1.5rem;
	line-height: 1.6rem;
	background: #e5686d;
	color: #fff;
	padding-left: 0.6rem;
	padding-right: 0.6rem;
	font-size: 1.0rem;
	border-radius: 0.2rem;
}
.common-ul li.full-item {
	width: 100%;
	padding: 0;
}
.common-ul li.full-item img.picture {
	height: 21rem;
	border-radius: 0;
	margin: 0;
}
.common-ul li.full-item .data {
	padding: 1.0rem;
}
.common-ul li.full-item .info {
	width: calc(100% - 1rem);
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 1.2rem;
	color: #999;
	padding: 0;
	margin-bottom: 1.2rem;
	background: transparent;
	overflow: hidden;
}
.common-ul li.full-item .prize {
	float: right;
	margin-top: -4.6rem;
}
.common-ul li.full-item .title {
	width: calc(100% - 8.0rem);
	margin-bottom: 0.7rem;
}
.no-data {
	text-align: center;
}
.no-data > img {
	width: 17.4rem;
	height: 15.6rem;
	margin-top: 10rem;
}
.no-data > p {
	font-size: 1.5rem;
	color: #333;
	margin-top: 3.4rem;
}
</style>
