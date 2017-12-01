<template>
	<div id="AnnouncementDetails">
		<div class="header">
    		<header-bar></header-bar>
    	</div>
			<div class="details_box">
					<h3>商城公告标题商城公告标题</h3>
					<span>2017-11-26&nbsp;13:45</span>
					<p>商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描</p>
					<p>商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公</p>
					<p>商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公 商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描述商城公告描</p>
			</div>
		</div>
</template>

<script>
	import headerBar from '@/components/header/headerBar'	
	
	export default {
  name: 'AnnouncementDetails',
  components: {
	  	'header-bar': headerBar
	},
}
</script>

<style scoped>
			.clearfix:after {
				content: "";
				display: block;
				clear: both;
			}
			/*商城公告-详情start*/
			#AnnouncementDetails{
				width: 34.5rem;
				margin: 0 auto;
				margin-top: 2.6rem;
			}
			#AnnouncementDetails .details_box h3{
				font-size: 1.6rem;
				color: #333333;
				font-weight: normal;
			}
			#AnnouncementDetails .details_box span{
				display: block;
				width: 34.5rem;
				color: #999999;
				font-size: 1.2rem;
				margin-top: 1rem;
				padding-bottom: 1rem;
				border-bottom: 0.1rem solid #e5e5e5;;
			}
			#AnnouncementDetails .details_box p{
				font-size: 1.3rem;
				line-height: 2.5rem;
				text-indent: 2em;
				color: #666;
				margin-top: 1.5rem;
				margin-bottom: 1rem;
			}
			/*商城公告-详情end*/
</style>