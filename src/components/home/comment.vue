<!-- 评论 -->
<template>
    <div class="comment">
    	<!--<div class="header">
    		<header-bar></header-bar>
    	</div>-->
    	<div class="tabs">
    		<span class="active" @click="handleTabs($event)">全部（265）</span>
    		<span @click="handleTabs($event)">有图（26）</span>
    	</div>
    	<div class="comment-group">
	    	<div class="comment-item">
				<div class="account">
					<img src="./img/photo.png" />
					<h3>静***笑<img src="./img/grade1.png" class="grade"/></h3>
				</div>
				<div class="info">
					2017/11/17  松柏绿; 1.2M(三件套传床单款)
				</div>
				<div class="con">
					<div class="con-text">非常好看，手感也很好，第一次在网易严选上买东西，棉质不错，很喜欢 还会在买几套。</div>
					<div class="con-img">
						<img src="./img/img02.png" />
						<img src="./img/img03.png" />
					</div>
				</div>
			</div>
			<div class="comment-item">
				<div class="account">
					<img src="./img/photo.png" />
					<h3>静***笑<img src="./img/grade1.png" class="grade"/></h3>
				</div>
				<div class="info">
					2017/11/17  松柏绿; 1.2M(三件套传床单款)
				</div>
				<div class="con">
					<div class="con-text">非常好看，手感也很好，第一次在网易严选上买东西，棉质不错，很喜欢 还会在买几套。</div>
					<div class="con-img">
						<img src="./img/img02.png" />
						<img src="./img/img03.png" />
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'	

export default {
    name: 'comment', 
    components: {
	  	'header-bar': headerBar
	},
    data() {
        return {
        	
        }
    },
    mounted() {
        this.$nextTick(function() {
        	document.title = '商品评价';
        });
    },
    methods: {
    	//切换
    	handleTabs: function(e) {
    		var tabsArr = document.getElementsByClassName('tabs')[0].getElementsByTagName('span');
    		for(var i = 0;i < tabsArr.length;i++) {
    			tabsArr[i].className = '';
    		}
    		e.currentTarget.className = 'active';
    	}
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.comment {
	width: 100%;
}
.header { 
	border-bottom: 0.1rem solid #d9d9d9;
}
.comment-item {
	margin-left: 1.5rem;
	border-bottom: 0.1rem solid #d7d7d7;
}
.comment-item:last-child {
	border-top: none;
}
.comment-item .account {
	padding: 1.5rem 0 1.0rem 0;
}
.account > img {
	float: left;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 3.2rem;
	vertical-align: middle;
	margin-right: 0.6rem;
}
.account h3 {
	line-height: 3.2rem;
	font-size: 1.3rem;
}
.account .grade {
	width: 1.4rem;
	height: 1.4rem;
	vertical-align: middle;
	margin-left: 0.5rem;
}
.comment-item .info {
	color: #666;
	font-size: 1.2rem;
	margin-bottom: 1.3rem;
}
.comment-item .con .con-text {
	color: #333;
	font-size: 1.4rem;
	line-height: 1.8rem;
	margin-bottom: 1.0rem;
}
.comment-item .con .con-img {
	margin-bottom: 0.4rem;
}
.comment-item .con .con-img img {
	width: 6rem;
	height: 6rem;
	border-radius: 0.2rem;
	background: #7f7f7f;
	margin-right: 0.8rem;
	margin-bottom: 0.8rem;
}
.tabs {
	width: 100%;
	height: 3.7rem;
	line-height: 3.7rem;
	border-bottom: 0.1rem solid #ebebeb;
	clear: both;
}
.tabs > span {
	float: left;
	width: 50%;
	height: 100%;
	font-size: 1.5rem;
	color: #333;
	text-align: center;
	cursor: pointer;
}
.tabs > span.active {
	color: #d4282d;
	border-bottom: 0.2rem solid #d4282d;
}
</style>
