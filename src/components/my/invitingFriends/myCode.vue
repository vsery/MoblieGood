<template>
	<div id="myCode">
		<div class="content">
			<div class="code-box">
				<div class="ct-hd">
					<div class="item-box">
						<img src="../../../../static/img/good1.jpg"/>
						<div class="item-text">
							<div class="ellipsis">{{ userName }}的二维码</div>
							<div class="gray">邀请好友有惊喜哦</div>
						</div>
					</div>
					<div class="img-box">
						<img src="../../../../static/img/good2.jpg"/>
					</div>
					<div class="text">
						<a href="javascript:;">保存图片</a>
					</div>
				</div>
				<div class="ct-bd">
					<p>点击右上角分享给好友获得奖励</p>
					<a class="btn-share" href="javascript:;">分享给好友</a>
					<div class="link-box">
						<a class="mg-right" href="javascript:;" @click="$router.push({name: 'MyInvitingFriends'})">奖励邀请</a>
						<a href="javascript:;" @click="$router.push({name: 'myInviting'})">我的记录</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'myCode',
	data() {
		return {
			userName: '晚宴夏日'			
		}
	},
	mounted() {
		document.title = '邀请好友';
		//设置.ct-hd动态宽高
		var width = document.documentElement.clientWidth;
		var elem = document.querySelector("div[class='ct-hd']");
		elem.style.width = width * 0.86 +'px';
		var elemWidth = elem.offsetWidth; 
		elem.style.height =  elemWidth * 1.23 +'px';
	},
	methods: {
		
	}
}
</script>

<style scoped>
@import '../../../assets/css/itemCommon.css';
.content {
	box-sizing: border-box;
	min-height: 100vh;
	background-image:-webkit-linear-gradient(0deg,#ffe167 0%,#ffd409 80%);
	background-image: -webkit-linear-gradient(0deg,#ffe167 0%,#ffd409 80%); /* Safari 5.1 - 6.0 */
	background-image: -o-linear-gradient(0deg,#ffe167 0%,#ffd409 80%); /* Opera 11.1 - 12.0 */
	background-image: -moz-linear-gradient(0deg,#ffe167 0%,#ffd409 80%); /* Firefox 3.6 - 15 */
	background-image: linear-gradient(0deg,#ffe167 0%,#ffd409 80%);
}
.gray {
	color: #999;	
}
.content div {
	box-sizing: border-box;
}
.content .code-box {
	padding: 2.8rem 6%;
}
.content .code-box .ct-hd {
	width: 86%;
	margin: 0 auto;
	background: url(../../../assets/img/bgCode.png) no-repeat;
	background-size: contain;
	padding: 1% 3.5%;
	box-shadow: 2px 8px 24px 2px 
		rgba(212, 174, 1, 0.35);
}
.content .code-box .ct-bd {
	margin: 0 auto;
	font-size: 1.5rem;
	color: #763b00;
	text-align: center;
	padding: 4rem 2rem;
} 
.content .code-box .ct-bd p {
	padding-bottom: 1rem;
}
.content .code-box .btn-share {
	display: block;
	line-height: 5rem;
	font-size: 1.5rem;
	color: #fff;
	background-color: #ff7800;
	border-radius: 0.3rem;
	margin: 0 0 2rem;
}
.code-box .ct-hd .item-box {
	display: flex;
	width: 100%;
	height: 29%;
	padding-top: 2rem;
	justify-content: center;
}
.code-box .ct-hd .item-box img {
	width: 4.6rem;
	height: 4.6rem;
	border-radius: 50%;
}
.code-box .ct-hd .item-box .item-text {
	margin-left: 1rem;
	font-size: 1.65rem;
	line-height: 2.3rem;
}
.code-box .img-box {
	padding: 10% 15%;
	padding-bottom: 0;
}
.code-box .img-box img {
	width: 100%;
	height: 100%;
}
.code-box .text {
	text-align: center;
	font-size: 1.5rem;
	line-height: 3rem;
}
.code-box .text a {
	color: #666;
}
.code-box .link-box a {
	color: #763b00;
	font-size: 1.5rem;
}
.code-box .link-box a.mg-right {
	margin-right: 4rem;
}
</style>