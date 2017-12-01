<template>
	<div class="invitingFriends">
		<div class="header">
			<header-bar :isWhite="false"></header-bar>
		</div>
		<div class="content">
			<div class="inviting-details">
				<div class="round-box">
					<p>已得奖励</p>
					<p class="integral-num">{{ integralMsg.total }}</p>
					<p>积分</p>
				</div>
				<div class="u-three-list">
					<ul class="clearfix">
						<li>
							<div class="name">已邀请</div>
							<div class="num"><span>{{ integralMsg.invitedNum }}</span>人</div>
						</li>
						<li>
							<div class="name">已注册</div>
							<div class="num"><span>{{ integralMsg.registeredNum }}</span>人</div>
						</li>
						<li>
							<div class="name">已消费</div>
							<div class="num"><span>{{ integralMsg.consumedNum }}</span>人</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="inviting-list">
				<div class="three-box-img-item clearfix" v-for="item in itemList">
					<div class="item-left">
						<div class="item-icon-box">
							<span class="u-icon icon-jf">积</span>
						</div>
						<div class="item-ct">
							<div class="text">推荐奖励</div>
							<div class="gray-text">{{ item.time }}</div>
						</div>
					</div>
					<div class="item-right">
						<span>{{ item.num }}积分</span>
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
	name: 'invitingFriends',
	components: {
		'header-bar': headerBar
	},
	data() {
		return {
			integralMsg:{
				total:'4873',
				invitedNum:'612',
				registeredNum:'107',
				consumedNum:'105',
			},
			itemList:[
				{time: '2017-10-20 08:45',num:'150' },
				{time: '2017-10-21 08:45',num:'180' },
				{time: '2017-10-22 08:45',num:'150' },
			]
		}
	},
	mounted() {
		document.title = '邀请好友';
	},
	methods: {

	}
}
</script>

<style scoped>
@import '../../../assets/css/itemCommon.css';

.invitingFriends .content .inviting-details {
	padding: 2rem 1.5rem 2rem;
}
.content .inviting-details .round-box .integral-num {
	font-size: 2rem;
}
.content .inviting-details .u-three-list {
	padding-top: 2rem;
}
/* 列表 */
.content .three-box-img-item .item-left .item-icon-box {
	width: 3rem;
}
.content .three-box-img-item .item-left .item-ct {
	margin-left: 3rem;
}
.content .three-box-img-item .item-right span {
	font-size: 1.4rem;
}
</style>