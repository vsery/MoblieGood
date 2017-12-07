<template>
	<div id="helpDetails">
		<div class="content">
			<div class="problem-box mt">
				<p><span class="problem-icon">问</span>为何无法微信支付</p>
			</div>
			<div class="answer-box">
				<p class="tit"><span class="answer-icon">答</span>亲，榛品购目前支持微信支付</p>
				<p>1、合并支付</p>
				<p class="mt">2、榛品购APP为2.4以下版本</p>
				<p class="mt">若为1，微信目前暂不支持合并支付，建议换种支付方式，或拆分订单支付。</p>
				<p>若为2，将榛品购APP升级为最新版本即可。</p>
				<p>APP升级方法：</p>
				<p>“我的榛品购”界面左上角 点击：“设置”图标</p>
				<p>新版本测验。若有新版本，点击即可更新</p>
			</div>
			<div class="help-evaluate">
				<div class="split">解答对您有帮助吗？</div>
				<div class="btn-evaluate clearfix">
					<div v-if="evaluateData" class="u-fl" @click="evaluateYes">
						<button><i class="iconfont icon-fabulous"></i>有帮助</button>
					</div>
					<div v-if="evaluateData" class="u-fr" @click="evaluateNo">
						<button class="rotate"><i class="iconfont icon-fabulous"></i>没帮助</button>
					</div>
					<div class="evaluate-success">
						<div v-show="yes" class="yes"><i class="iconfont icon-zan2"></i>有帮助 | 我们会继续努力的！</div>
						<div v-show="no" class="no">
							<span><i class="iconfont icon-zan2"></i>没帮助 | 我们会尽快改进，谢谢！</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="text-two-item">
			<div class="clearfix">
				<div class="item-left">咨询电话<span>(9:00-24:00)</span></div>
				<div class="item-right">
					<a href="tel:40058852885">400-5885-2885</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpDetails',
		data() {
			return {
				evaluateData: true,
				yes: false,
				no: false,

			}
		},
		mounted() {
			document.title = '帮助中心';
		},
		methods: {
			evaluateYes() {
				this.evaluateData = false;
				this.yes = true;
			},
			evaluateNo() {
				this.evaluateData = false;
				this.no = true;
			}
		}
	}
</script>

<style scoped>
	@import '../../../assets/css/itemCommon.css';
	#helpDetails {
		min-height: 100vh;
		background-color: #F5F5F5;
		padding-bottom: 5.8rem;
	}
	
	.content {
		padding: 1.5rem 1.33rem;
		background-color: #fff;
	}
	
	.content .problem-box p,
	.content .answer-box p {
		line-height: 1.5rem;
		font-size: 1.2rem;
	}
	
	.mt {
		margin-bottom: 1.83rem;
	}
	
	.content .problem-icon,
	.content .answer-icon {
		float: left;
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		line-height: 1.6rem;
		text-align: center;
		margin-right: 0.33rem;
		font-size: 1rem;
		color: #fff;
		background-color: #ff4342;
		border-radius: 0.16rem;
	}
	
	.content .answer-icon {
		background-color: #999;
	}
	
	.content .answer-box p {
		box-sizing: border-box;
		font-size: 1.2875rem;
		line-height: 2.2rem;
		padding: 0 1rem 0 1.83rem;
	}
	
	.content .answer-box p.tit {
		padding: 0;
		margin-bottom: 1.83rem;
		line-height: 1.5rem;
	}
	
	.content .help-evaluate {
		padding-top: 7.5rem;
	}
	
	.content .help-evaluate .split {
		position: relative;
		text-align: center;
		font-size: 1.195rem;
		line-height: 2.2rem;
		color: #999;
	}
	
	.content .help-evaluate .split:after,
	.content .help-evaluate .split:before {
		content: ' ';
		position: absolute;
		top: 1rem;
		background-color: #E5E5E5;
		height: 0.1rem;
		width: 10.5rem;
		position: absolute;
	}
	
	.content .help-evaluate .split:before {
		left: 0;
	}
	
	.content .help-evaluate .split:after {
		right: 0;
	}
	
	.content .help-evaluate .btn-evaluate {
		padding-top: 2rem;
		height: 5rem;
		margin-bottom: 1rem;
	}
	
	.content .help-evaluate .btn-evaluate .u-fl,
	.content .help-evaluate .btn-evaluate .u-fr {
		width: 50%;
	}
	
	.content .help-evaluate .btn-evaluate .u-fl {
		padding-right: 2rem;
		text-align: right;
	}
	
	.content .help-evaluate .btn-evaluate .u-fr {
		padding-left: 2rem;
		text-align: left;
	}
	
	.content .help-evaluate .btn-evaluate button {
		background-color: #fff;
		color: #999;
	}
	
	.content .help-evaluate .btn-evaluate button i {
		font-size: 1.5rem;
	}
	
	.content .help-evaluate .btn-evaluate .rotate i {
		display: block;
		float: left;
		transform: rotate(180deg);
	}
	
	.evaluate-success {
		text-align: center;
		font-size: 1.2rem;
	}
	
	.evaluate-success .yes {
		color: #FF4342;
	}
	
	.evaluate-success .no {
		color: #999;
		text-align: center;
	}
	
	.evaluate-success .no span {
		position: relative;
		padding-left: 2rem;
	}
	
	.evaluate-success .no span i {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		transform: rotate(180deg);
	}
	
	.text-two-item {
		margin-top: 1rem;
	}
</style>