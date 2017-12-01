<template>
	<div id="MessageNotification">
		<div class="header">
    		<header-bar></header-bar>
    	</div>
			<!--Full-->
			<div class="notification_box" v-for="integral in integrals">
				<div class="notification_box_time" >
					<span>{{integral.time}}</span>
				</div>
				<div class="notification_box_content">
					<a :href="integral.link">
						<h2>
							积分变动通知<span>&gt;</span>
						</h2>
						<div class="notification_box_content_nav">
							<p>您的积分账户变更如下：</p>
							<p class="change"><i>{{integral.change}}</i>积分：<span>{{integral.number}}</span></p>
							<p class="remainder">积分余额：<span>{{integral.remainder}}</span></p>
							<p class="reason">变动原因：<span>{{integral.reason}}</span></p>
						</div>
					</a>
				</div>
			</div>
			
		</div>
</template>

<script>
	import headerBar from '@/components/header/headerBar'	
	
	export default {
  name: 'MessageNotification',
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
     integrals:[
    	{'time':'13.45','link':'#','change':'减少','number':'10','remainder':'365','reason':'积分商城兑换'},
    	{'time':'13.10','link':'#','change':'增加','number':'20','remainder':'375','reason':'消费奖励（砸蛋）'},
    	]
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
			/*通知消息start*/
			#MessageNotification{
				width: 34.5rem;
				margin: 0 auto;
				margin-top: 2.6rem;
			}
			#MessageNotification .notification_box{
				height: 23.7rem;
				width: 34.5rem;
				background: #f5f5f5;
			}
			#MessageNotification .notification_box_time{
				height: 1.8rem;
				line-height: 1.8rem;
				text-align: center;
			}
			#MessageNotification .notification_box_time span{
				display: inline-block;
				min-width: 5rem;
				color: #fff;
				background: #ddd;
				font-size: 1.2rem;
			}
			#MessageNotification .notification_box_content{
				margin-top: 2rem;
				background: #fff;
				height: 16.5rem;
			}
			#MessageNotification .notification_box_content a{
				display: block;
				width: 32.5rem;
				height: 13rem;
				margin: 0 auto;
				padding-top:2.1rem;
				text-decoration: none;
			}
			#MessageNotification .notification_box_content a h2{
				font-size: 1.6rem;
				color:#333;
				font-weight: normal;
				
			}
			#MessageNotification .notification_box_content a h2 span{
				float: right;
			}
			#MessageNotification .notification_box_content_nav{
				margin-top: 0.7rem;
				border-top: 0.1rem solid #e5e5e5;
				color: #666;
				font-size: 1.4rem;
			}
			#MessageNotification .notification_box_content_nav p{
				padding-top: 0.6rem;
			}
			#MessageNotification .change i{
				font-style: normal;
			}
			/*通知消息end*/
</style>