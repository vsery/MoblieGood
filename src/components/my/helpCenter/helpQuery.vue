<template>
	<div id="helpQuery">
		<div class="content">
			<div class="query-box clearfix">
				<div class="query">
					<i class="iconfont icon-sousuo"></i>
					<input v-model="inputValue" type="text" placeholder="有问题？点我搜搜看吧"/>
				</div>
				<button v-if="!inputValue" @click="$router.push({name: 'helpCenter'})">取消</button>
				<button v-else @click="queryBtn">搜索</button>
			</div>
			<div class="ct-bd">
				<mt-cell v-for="item,index in itemData" :key="index" :title="item.name" is-link @click.native="goDetails(item.id)"></mt-cell>
			</div>
			<div v-if="itemShow" class="no-item">你搜索的不存在！</div>
		</div>
	</div>
</template>

<script>
	import { Cell } from 'mint-ui';
	export default {
		name: 'helpQuery',
		data() {
			return {
				inputValue:'',
				btnClose: true,
				itemData:[
					{ id:1, name:'账户设置'},
					{ id:2, name:'名片夹使用'},
					{ id:3, name:'名片编辑'},
					{ id:4, name:'企业相关'},
					{ id:5, name:'需求发布'},
				],
				itemShow: false
			}
		},
		mounted() {
			document.title = '帮助中心';
		},
		methods: {
			queryBtn(){
				console.log(this.inputValue);
			},
			goDetails(id){
				this.$router.push({name: 'helpDetails',query: {id: id}});
			}
		}
	}
</script>

<style scoped>
	@import '../../../assets/css/itemCommon.css';
	.content .mint-cell:after {
		position: absolute;
	    background-color: #E5E5E5;
	    content: " ";
	    right: 0;
	    bottom: 0;
	    left: 1.5rem;
	    height: 0.1rem;
	}
	.content .query-box {
		height: 4.16rem;
		padding: 0.58rem 1.33rem;
		background-color: #fff;
		border-bottom: 1px solid #e9e9e9;
	}
	.query-box .query {
		float: left;
	}
	.query-box .query,.query-box .query input {
		width: 28rem;
		height: 3rem;
		line-height: 3rem;
		background-color: #ededed;
		border-radius: 1.25rem;
		font-size: 1.2875rem;
		text-align: center;
		border-bottom: 0.1rem solid #e9e9e9;
	}
	.query-box .query input {
		box-sizing: border-box;
		width: 23.8rem;
		text-align: left;
		border-color: #ededed;
		vertical-align: top;
	}
	.query-box button {
		float: left;
		font-size: 1.2875rem;
		width: 2.5rem;
		height: 3rem;
		margin-left: 1rem;
		background-color: #fff;
	}
	.content .ct-bd {
		background-color: #F5F5F5;
	}
	.content .no-item {
		color: #999;
		line-height: 4rem;
		font-size: 1.3rem;
		text-align: center;
	}
</style>