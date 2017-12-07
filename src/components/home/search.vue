<!-- 搜索 -->
<template>
    <div class="search">
    	<div class="operate">
    		<i class="iconfont">&#xe616;</i>
    		<input type="text" placeholder="升级保温杯" v-model="searchText"  @keydown="handleSearch($event)" />
    		<span v-if="searchText ==''" @click="$router.go(-1)">取消</span>
    		<span v-else @click="handleSearch2">搜索</span>
    	</div>
    	<div class="search-group">
    		<h3>
    			<span>历史记录</span>
    			<span class="iconfont">&#xe601;</span>
    		</h3>
    		<div>
    			<span v-for="item in historyList">{{item}}</span>
    		</div>
    	</div>
    	<div class="search-group">
    		<h3>
    			<span>热门搜索</span>
    		</h3>
    		<div>
    			<span class="red" v-for="item in activityList">{{item}}</span>
    			<span v-for="item in hotList">{{item}}</span>
    		</div>
    	</div>
    </div>
</template>
<script>
export default {
    name: 'search', // 搜索
    data() {
        return {
            searchText: '',
            historyList: ['包包','牙膏'], //历史搜索
            activityList: ['抢40元全场优惠券', '美食99元选9件'],//热门活动
            hotList: ['鞋子','四件套','围巾'],//热门搜索
        }
    },
    mounted() {
        this.$nextTick(function() {
        	document.title = this.title;
        });
    },
    methods: {
    	handleSearch: function(e) {
    		if(e.keyCode==13) {
    			this.$router.push('/searchResult');
    		}
    	},
    	handleSearch2: function() {
    		this.$router.push('/searchResult');
    	}
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.search {
	background: #f5f5f5;
}
.operate {
	position: relative;
	top: 0;
	left: 0;
	height: 3.1rem;
	line-height: 3.1rem; 
	padding: 0.8rem 1.4rem;
	background: #fff;
	clear: both;
}
.operate >i.iconfont {
	position: absolute;
	left: 2.6rem;
	top: 1.0rem;
	font-size: 1.4rem;
}
.operate > input[type=text] {
	width: 85%;
	height: 3.2rem;
	background: #ededed;
	border-radius: 0.5rem;
	padding-left: 3.3rem;
	font-size: 1.5rem;
}
.operate > span {
	float: right;
	color: #333;
	font-size: 1.5rem;
}
.search-group {
	padding: 1.8rem 1.4rem;
	background: #fff;
	margin-bottom: 1.0rem;
	clear: both;
}
.search-group > h3 {
	color: #999;
	font-size: 1.5rem;
}
.search-group > h3 .iconfont {
	float: right;
	font-size: 1.7rem;
}
.search-group > div > span {
	display: inline-block;
	padding: 0.7rem 1.2rem;
	margin-right: 1.4rem;
	margin-top: 1.4rem;
	border: 0.1rem solid #ccc;
	border-radius: 0.2rem;
	font-size: 1.5rem;
	color: #333;
}
.search-group > div > span.red {
	color: #e93b3d;
	border: 0.1rem solid #e93b3d;
}
</style>
