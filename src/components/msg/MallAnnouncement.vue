<!--商城公告-->
<template>
	<div id="MallAnnouncement">
		<div class="header">
    		<header-bar></header-bar>
    		<div class="line"></div>
    	</div>
			<!--Full-->
			<div class="announcement_box">
				<div class="announcement_box_time">
					<span>13:10</span>
				</div>
				<div class="announcement_box_content">
					<router-link :to="{ name: 'AnnouncementDetails'}">
						<h2>
							商城公告标题<span>&gt;</span>
						</h2>
						<div class="announcement_box_content_nav">
							<p>商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商</p>
						</div>
					</router-link>
				</div>
			</div>
			<!--Full-->
			<div class="announcement_box">
				<div class="announcement_box_time">
					<span>13:10</span>
				</div>
				<div class="announcement_box_content">
					<router-link :to="{ name: 'AnnouncementDetails'}">
						<h2>
							商城公告标题<span>&gt;</span>
						</h2>
						<div class="announcement_box_content_nav">
							<p>商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商</p>
						</div>
					</router-link>
				</div>
			</div>
			<!--Full-->
			<div class="announcement_box">
				<div class="announcement_box_time">
					<span>13:10</span>
				</div>
				<div class="announcement_box_content">
					<router-link :to="{ name: 'AnnouncementDetails'}">
						<h2>
							商城公告标题<span>&gt;</span>
						</h2>
						<div class="announcement_box_content_nav">
							<p>商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商城公告内容商</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
</template>

<script>
	import headerBar from '@/components/header/headerBar'	
	
	export default {
  name: 'MallAnnouncement',
  components: {
	  	'header-bar': headerBar
	},
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#f5f5f5')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
}
</script>

<style  scoped>
			.clearfix:after {
				content: "";
				display: block;
				clear: both;
			}
			.header{
				position: relative;
				margin-bottom: 2.5rem;
			}
			.line{
				height: 0.1rem;
				width: 37.5rem;
				background: #ebebeb;
				position: fixed;
				left: 0;
				top: 3.7rem;
			}
			/*商城公告start*/
			#MallAnnouncement{
				width: 34.5rem;
				margin: 0 auto;
				margin-top: 0.1rem;
			}
			#MallAnnouncement .announcement_box{
				height: 19rem;
				width: 34.5rem;
			}
			#MallAnnouncement .announcement_box_time{
				height: 1.8rem;
				line-height: 1.8rem;
				text-align: center;
				font-size: 1.2rem;
			}
			#MallAnnouncement .announcement_box_time span{
				display: inline-block;
				min-width: 5rem;
				color: #fff;
				background: #ddd;
			}
			#MallAnnouncement .announcement_box_content{
				margin-top: 2rem;
				background: #fff;
				height: 11.5rem;
			}
			#MallAnnouncement .announcement_box_content a{
				display: block;
				width: 32.5rem;
				height: 9.5rem;
				margin: 0 auto;
				padding-top:1.5rem;
				text-decoration: none;
			}
			#MallAnnouncement .announcement_box_content a h2{
				font-size: 1.6rem;
				color:#333;
				font-weight: normal;
				
			}
			#MallAnnouncement .announcement_box_content a h2 span{
				float: right;
			}
			#MallAnnouncement .announcement_box_content_nav{
				margin-top: 1.3rem;
				border-top: 1px solid #e5e5e5;
				color: #666;
				font-size: 1.4rem;
				height: 3rem;
				padding-top: 1.6rem;
				
			}
			#MallAnnouncement .announcement_box_content_nav p{
				color: #666;
				font-size: 1.4rem;
				height: 4rem;
				line-height: 2rem;
				/*文字溢出*/
				display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
			}
			/*商城公告end*/
</style>