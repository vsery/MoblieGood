<template>
	<div id="ShopSales">
		<div class="header">
    		<header-bar></header-bar>
    	</div>
			<!--Full-->
			<div class="sales_box" v-for="shop in shops">
				<div class="sales_box_time"><span>{{shop.time}}</span></div>
				<div class="sales_box_content">
					<a :href="shop.link"><img :src="shop.img">
					<span>{{shop.cont}}</span>
					</a>
				</div>
			</div>
		<div class="no_more">
			<p>没有更多了~</p>
		</div>
		</div>
</template>

<script>
	import headerBar from '@/components/header/headerBar'	
	
	export default {
  name: 'ShopSales',
  components: {
	  	'header-bar': headerBar
	},
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#f5f5f5')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
    data(){
		return {
			shops:[
			{'time':'09:41','link':'#','img':'../../src/components/msg/img/sale1.png','cont':'男仕魅力 行走的荷尔蒙'},
			{'time':'09:41','link':'#','img':'../../src/components/msg/img/sale2.png','cont':'秋冬 服装搭配饰品合集'},
			{'time':'09:41','link':'#','img':'../../src/components/msg/img/sale3.png','cont':'上新优惠购 9折出售'},
			{'time':'09:41','link':'#','img':'../../src/components/msg/img/sale4.png','cont':'春夏大爱の私服外套'},
			{'time':'09:41','link':'#','img':'../../src/components/msg/img/sale5.png','cont':'SUMMER9春装专区'}
			]
		}
	},
 }
</script>

<style scoped>
			.clearfix:after {
				content: "";
				display: block;
				clear: both;
			}
			/*商城活动start*/
			#ShopSales{
				width: 34.5rem;
				margin: 0 auto;
				margin-top: 1.2rem;
			}
			#ShopSales .sales_box{
				height: 22.2rem;
			}
			#ShopSales .sales_box_time{
				height: 1.8rem;
				line-height: 1.8rem;
				text-align: center;
			}
			#ShopSales .sales_box_time span{
				display: inline-block;
				min-width: 5rem;
				height: 1.8rem;
				line-height: 1.8rem;
				text-align: center;
				font-size: 1.2rem;
				background:#ddd;
				color: #fff;
			}
			#ShopSales .sales_box_content{
				width: 34.5rem;
				height: 15rem;
				margin-top: 2rem;
				background: #fff;
			}
			#ShopSales .sales_box_content a{
				display: block;
				width: 32rem;
				height: 12.5rem;
				margin: 0 auto;
				padding-top: 1.2rem;
				position: relative;
			}
			#ShopSales .sales_box_content a img{
				width: 32rem;
				height: 12.5rem;
			}
			#ShopSales .sales_box_content a span{
				display: inline-block;
				width: 32rem;
				height: 3.2rem;
				line-height: 3.2rem;
				position: absolute;
				bottom: 0;
				left: 0;
				background: #090909;
				opacity: 0.8;
				color: #fff;
				font-size: 1.4rem;
				text-indent: 1em;
			}
			.no_more{
				width: 7rem;
	height: 4rem;
	margin: 0 auto;
	font-size: 1.2rem;
	color: #999999;
			}
			/*商城活动end*/
</style>