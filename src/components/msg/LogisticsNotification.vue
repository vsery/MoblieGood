<!--物流通知-->
<template>
	<div id="LogisticsNotification">
		<div class="header">
    		<header-bar></header-bar>
    		<div class="line"></div>
    	</div>
							<!--full-->
			<div class="logistics_box" v-for="logistic in logistics">
				<div class="logistics_box_time">{{logistic.time}}</div>
				<div class="logistics_box_content">
					<a :href="logistic.link">
						<div class="logistics_box_status">
							<p>
								<template v-if="logistic.status=='订单已签收'">
									<span class="red">订单已签收</span>
								</template>
								<template v-else-if="logistic.status=='订单派送中'">
									<span class="green">订单派送中</span>
								</template>
								<template v-else>
									<span class="blue">订单已发货</span>
								</template>
								
							</p><span>{{logistic.express}}</span>
						</div>
						<div class="logistics_box_info">
							<div class="logistics_box_icon clearfix">
						<img :src="logistic.img">
					</div>
					<div class="logistics_box_nav clearfix">
						<h3>{{logistic.title}}</h3>
						<p>订单号:{{logistic.number}}</p>
					</div>
						</div>
					</a>
				</div>
			</div>
		
		</div>
</template>

<script>
	import headerBar from '@/components/header/headerBar'	
	
	export default {
  name: 'LogisticsNotification',
  components: {
	  	'header-bar': headerBar
	},
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#f5f5f5')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  data () {
    return {
     logistics:[
     {'time':'2017-11-26 13:45','link':'#','status':'订单已签收','express':'邮政快递小包',
     'img':'../../src/components/msg/img/logistics1.png',
     'title':'秋冬新款纯色中长款针织衫宽松显瘦开衫时尚开叉外套女士韩版白搭',
     'number':'89225868408761257'},
     {'time':'2017-11-5 9:45','link':'#','status':'订单派送中','express':'申通快递',
     'img':'../../src/components/msg/img/logistics2.png',
     'title':'羊毛呢大衣女2017秋冬款新款韩版百搭加厚中长款呢子外套',
     'number':'89225868408764578'},
     {'time':'2017-10-23 15:45','link':'#','status':'订单已发货','express':'圆通速递',
     'img':'../../src/components/msg/img/logistics3.png',
     'title':'不锈钢中式家用厨房刀具切片刀 厨师切菜刀切肉持久锋利',
     'number':'89225868408763256'},
     ],
    }
  },
  mounted(){
  	for (var i = 0; i< this.logistics.length; i++) {
  		
  	}
  }
}
</script>

<style scoped>
	.clearfix:after {
				content: "";
				display: block;
				clear: both;
			}
			.header{
				position: relative;
				margin-bottom: 1.6rem;
			}
			.line{
				height: 2px;
				width: 37.5rem;
				background: #ebebeb;
				position: absolute;
				left: -1.5rem;
				bottom: 0;
			}
			/*物流通知start*/
			#LogisticsNotification{
				width: 34.5rem;
				margin: 0 auto;
				margin-top: 0.1rem;
				min-height: 60rem;
			}
			#LogisticsNotification .logistics_box{
				height: 18.5rem;
			}
			/*物流通知time*/
			#LogisticsNotification .logistics_box_time{
				min-width: 10rem;
				height: 0.9rem;
				line-height: 0.9rem;
				margin: 0 auto;
				text-align: center;
				font-size: 1.2rem;
				color: #999;
			}
			/*物流通知内容*/
			#LogisticsNotification .logistics_box_content{
				height: 14rem;
				margin-top: 1.1rem;
				background: #fff;
				border-radius: 0.3;
			}
			#LogisticsNotification .logistics_box_content a{
				display: block;
				width: 32.5rem;
				height: 11rem;
				margin: 0 auto;
				position: relative;
				text-decoration: none;
			}
			/*物流通知  发货状态*/
			#LogisticsNotification .logistics_box_status{
				line-height: 5rem;
				height: 5rem;
				border-bottom: 0.1rem solid #e5e5e5;
			}
			#LogisticsNotification .logistics_box_status p{
				display: inline-block;
				height:5rem;
				line-height: 5rem;
				min-width: 9.5rem;
				font-size: 1.6rem;
			}
			#LogisticsNotification .logistics_box_status p .red{
				color: #ff5a00;
			}
			#LogisticsNotification .logistics_box_status p .green{
				color: #01a33a;
			}
			#LogisticsNotification .logistics_box_status p .blue{
				color: #0078ff;
			}
			#LogisticsNotification .logistics_box_status>span {
				display: inline-block;
				height:1.9rem;
				line-height: 1.9rem;
				font-size: 1.2rem;
				min-width: 4rem;
				padding: 0 1rem;
				text-align: center;
				border: solid 0.1rem #999999;
				border-radius: 0.6rem;
				color: #333333;			
			}
			/*物流通知 详情*/
			#LogisticsNotification .logistics_box_info{
				width: 100%;
				height: 7.8rem;
			}
			/* 物流通知  左边的icon*/
			#LogisticsNotification .logistics_box_icon {
				width: 7.8rem;
				height: 7.8rem;
				line-height: 7.8rem;
				float: left;
			}
			
			#LogisticsNotification .logistics_box_icon img {
				vertical-align: middle;
				width: 6.3rem;
				height: 6.3rem;
			}
			/*物流通知   右边的文字*/
			#LogisticsNotification .logistics_box_nav {
				margin-top: 0.2rem;
				width: 24rem;
				height: 7.8rem;
				float: left;
			}
			
			#LogisticsNotification .logistics_box_nav h3 {
				margin-top: 0.7rem;
				font-weight: normal;
				font-size: 1.4rem;
				line-height: 1.8rem;
				height: 3.7rem;
				color: #666;
				/*文字溢出*/
				display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
			}		
			#LogisticsNotification .logistics_box_nav p {
				margin-top: 1.2rem;
				font-size: 1.3rem;
				color:#666;
				font-family: MicrosoftYaHeiLight;
			}
			
			/*物流通知end*/
</style>