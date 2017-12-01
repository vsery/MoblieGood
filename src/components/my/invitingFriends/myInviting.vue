<template>
	<div class="myInviting">
		<div class="header">
			<header-bar :isWhite="false"></header-bar>
		</div>
		<div class="content">
			<div class="inviting-list">
				<div class="line"></div>
				<div class="three-box-img-item clearfix" v-for="item in itemList">
					<div class="item-left">
						<div class="item-img">
							<img :src="item.imgUrl"/>
						</div>
						<div class="item-ct">
							<div class="text">{{ item.userName }}</div>
							<div class="gray-text">{{ item.userPhone }}</div>
						</div>
					</div>
					<div class="item-right">
						<div class="time">{{ item.time }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '@/components/header/headerBar'
	//import add from '@/components/my/receivingAddress/addAddress'
	export default {
		name: 'myInviting',
		components: {
			'header-bar': headerBar
		},
		data() {
			return {
				itemList: [
					{
						ID: 9221,
						imgUrl:'./static/img/good.jpg',
						userName:'舍人',
						time: '2017-10-20 08:45',
						userPhone: '15481181250'
					},
					{
						ID: 5222,
						imgUrl:'./static/img/good2.jpg',
						userName:'两人',
						time: '2017-10-21 08:45',
						userPhone: '15481181250'
					},
					{
						ID: 6625,
						imgUrl:'./static/img/good3.jpg',
						userName:'舍人111',
						time: '2017-10-22 08:45',
						userPhone: '15481181250'
					},
				]
			}
		},
		mounted() {
			document.title = '我的邀请';
		},
		methods: {
			
		}
	}
</script>

<style scoped>
@import '../../../assets/css/itemCommon.css';
</style>