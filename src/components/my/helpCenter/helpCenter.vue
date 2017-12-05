<template>
	<div id="helpCenter">
		<div class="content">
			<div class="query-box">
				<div class="query" @click="$router.push({name: 'helpQuery'})">
					<i class="iconfont icon-sousuo"></i>
					有问题？点我搜搜看吧~
				</div>
			</div>
			<div class="ct-bd">
				<div class="help-item" v-for="item,index in itemData" :key="index">
					<div class="item-left">
						<a href="javascript:;" @click="$router.push({name: 'helpList'})">
							<p><i :class="['iconfont ']+item.icon"></i></p>
							<p>{{ item.name }}</p>
						</a>
					</div>
					<div class="item-right clearfix">
						<div class="u-fl" v-for="itemDown,index in item.data"><a href="javascript:;" @click="$router.push({name: 'helpDetails',query: {id: itemDown.id}})">{{ itemDown.text }}</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpCenter',
		data() {
			return {
				itemData:[
					{
						name:'账户设置',
						icon:'icon-shezhi1',
						data:[
							{id:1,text:'修改订单'},
							{id:2,text:'取消订单'},
							{id:3,text:'差价问题'},
							{id:4,text:'缴税后如何报销'},
						]
					},
					{
						name:'名片夹使用',
						icon:'icon-mingpian',
						data:[
							{id:5,text:'申请收获退货'},
							{id:6,text:'取消商品破算处理'},
							{id:7,text:'为何无法微信支付'},
							{id:8,text:'付款后显示待支付'},
						]
					},
					{
						name:'名片编辑',
						icon:'icon-bianji1',
						data:[
							{id:9,text:'解绑银行卡'},
							{id:10,text:'支付方式'},
							{id:11,text:'差价问题'},
							{id:12,text:'缴税后如何报销'},
						]
					},
					{
						name:'企业相关',
						icon:'icon-qiyezhongxin',
						data:[
							{id:13,text:'催促发货'},
							{id:14,text:'催促物流'},
							{id:15,text:'能否包邮'},
							{id:16,text:'更改收件地址'},
						]
					},
					{
						name:'需求发布',
						icon:'icon-wendang',
						data:[
							{id:17,text:'如何获取积分'},
							{id:18,text:'如何使用积分'},
							{id:19,text:'积分会过期吗'},
							{id:20,text:'积分无法使用'},
						]
					},
				]
			}
		},
		mounted() {
			document.title = '帮助中心';
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	@import '../../../assets/css/itemCommon.css';
	.content .query-box {
		height: 4.16rem;
		padding: 0.58rem 0;
		background-color: #fff;
		border-bottom: 1px solid #e9e9e9;
	}
	.query-box .query {
		width: 90%;
		height: 3rem;
		line-height: 3rem;
		margin: 0 auto;
		background-color: #ededed;
		border-radius: 1.25rem;
		font-size: 1.25rem;
		color: #999;
		text-align: center;
		border-bottom: 0.1rem solid #e9e9e9;
	}
	.content .ct-bd {
		background-color: #F5F5F5;
		padding-top: 0.83rem;
	}
	.content .ct-bd .help-item {
	 	margin-bottom: 0.84rem;
	 	width: 100%;
		/*height: 9.4rem;*/
		text-align: center;
		background-color: #fff;
	}
	.content .ct-bd .help-item:last-child {
		margin-bottom: 0;
	}
	.help-item .item-left {
		float: left;
		width: 9.4rem;
	}
	.help-item .item-left a {
		display: block;
		padding: 2.08rem 0;
		color: #333;
	}
	.help-item .item-left p {
		line-height: 2rem;
		font-size: 1.2875rem;
	}
	.help-item .item-left p i {
		line-height: 2.9rem;
		font-size: 2rem;
		color: #ff4242;
	}
	.help-item .item-right {
		margin-left: 9.4rem;
		font-size: 1.195rem;
		border-left: 0.1rem solid #e5e5e5;
	}
	.help-item .item-right .u-fl {
		width: 50%;
		height: 4.58rem;
		line-height: 4.58rem;
		border-bottom: 0.1rem solid #E5E5E5;
	}
	.help-item .item-right .u-fl:nth-child(odd){
		width: 50%;
		border-right: 0.1rem solid #E5E5E5;
	}
	.help-item .item-right .u-fl a {
		display: block;
		color: #333;
	}
	.help-item .item-right .u-fl:nth-child(even) {
		width: 50%;
		border-right: 0;
	}
	.help-item .item-right .u-fl:nth-last-child(1),
	.help-item .item-right .u-fl:nth-last-child(2) {
		border-bottom: 0;
	}
</style>