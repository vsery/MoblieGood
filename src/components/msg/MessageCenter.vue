<!--消息中心-->
<template>
	<div id="MessageCenter" class="clearfix">
		<div class="header">
    		<header-bar></header-bar>
    		<div class="line"></div>
    </div>
			<!--商城活动-->
			<router-link :to="{ name: 'ShopSales'}">
				<div class="message_box">
					<div class="message_box_icon clearfix">
						<img src="./img/msg1.png"><span>1</span>
					</div>
					<div class="message_box_content clearfix">
						<h3>商城活动<span>{{salesTime}}</span></h3>
						<p>{{salesTitle}}</p>
					</div>
				</div>
			</router-link>
			<!--物流通知-->
			<router-link :to="{ name: 'LogisticsNotification'}">
				<div class="message_box">
					<div class="message_box_icon clearfix">
						<img src="./img/msg2.png"><span>1</span>
					</div>
					<div class="message_box_content clearfix">
						<h3>物流通知<span>2017-05-10&nbsp;17:12</span></h3>
						<p>显示最近一条活动推送的标题</p>
					</div>
				</div>
			</router-link>
			<!--商城公告-->
			<router-link :to="{ name: 'MallAnnouncement'}">
				<div class="message_box">
					<div class="message_box_icon clearfix">
						<img src="./img/msg3.png"><span>1</span>
					</div>
					<div class="message_box_content clearfix">
						<h3>商城公告<span>2017-05-10&nbsp;17:12</span></h3>
						<p>显示最近一条活动推送的标题</p>
					</div>
				</div>
			</router-link>
			<!--通知消息-->
			<router-link :to="{ name: 'MessageNotification'}">
				<div class="message_box">
					<div class="message_box_icon clearfix">
						<img src="./img/msg4.png"><span>1</span>
					</div>
					<div class="message_box_content clearfix">
						<h3>通知消息<span>2017-05-10&nbsp;17:12</span></h3>
						<p>显示最近一条活动推送的标题</p>
					</div>
				</div>
			</router-link>
			<!--在线客服-->
			<a href="#">
				<div class="message_box">
					<div class="message_box_icon clearfix">
						<img src="./img/msg5.png">
					</div>
					<div class="message_box_content clearfix">
						<h3>在线客服</h3>
						<p>显示最近一条活动推送的标题</p>
					</div>
				</div>
			</a>

		</div>

</template>

<script>
	import headerBar from '@/components/header/headerBar'	
	
export default {
  name: 'MessageCenter',
  components: {
	  	'header-bar': headerBar
	},
  data () {
    return {
     salesTime:"2017-05-10  17:12",
     salesTitle:"显示最近一条活动推送的标题"
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
			}
			.line{
				height: 2px;
				width: 37.5rem;
				background: #ebebeb;
				position: absolute;
				left: -1.5rem;
				bottom: 0;
			}
			/*消息中心start*/
			#MessageCenter {
				width: 34.5rem;
				margin: 0 auto;
				margin-top: 0.1rem;
			}
			
			#MessageCenter .message_box {
				height: 7.5rem;
				width: 34.5rem;
			}
			/*消息中心  左边的icon*/
			#MessageCenter .message_box_icon {
				width: 5.5rem;
				height: 7.5rem;
				line-height: 7.5rem;
				text-align: center;
				float: left;
				position: relative;
			}
			
			#MessageCenter .message_box_icon img {
				vertical-align: middle;
				width: 4.9rem;
				height: 4.9;
				border-radius: 1rem;
			}
			
			#MessageCenter .message_box_icon span {
				display: block;
				width: 1.5rem;
				height: 1.5rem;
				line-height: 1.5rem;
				background: #ff4242;;
				color: #fff;
				position: absolute;
				right: 0;
				top: 1rem;
				border-radius: 1.5rem;
				font-size: 1.2rem;
			}
			/*消息中心  右边的文字*/
			#MessageCenter .message_box_content {
				width: 29rem;
				height: 4rem;
				float: right;
				text-indent: 1em;
			}
			
			#MessageCenter .message_box_content h3 {
				margin-top: 1.4rem;
				font-weight: normal;
				font-size: 1.5rem;
				height: 2rem;
				color: #333;
			}
			
			#MessageCenter .message_box_content span {
				font-size: 1.2rem;
				float: right;
				height: 2rem;
				line-height: 2rem;
				color: #999;
			}
			
			#MessageCenter .message_box_content p {
				padding-bottom: 1.3rem;
				margin-top: 1rem;
				font-size: 1.3rem;
				color: #666;
				border-bottom: 0.1rem solid #e5e5e5;
			}
			/*消息中心end*/
</style>