<!-- 抽奖 -->
<template>
    <div class="luckDraw" >
    	<div class="header">
    		<header-bar></header-bar>
    	</div>
    	<div class="nav" :style="{minHeight: clientH + 'rem'}">
    		<div class="draw-title"></div>
    		<div class="draw-nav">
    			<ul>
    				<li class="draw-li" v-for="item in drawList">
    					<img :src="item.img" />
    					<h3>{{item.text}}</h3>
    					<div class="bg-cover"></div>
    				</li>
    			</ul>
    			<div class="explain" @click="handleDraw">
    				<span>5积分/次</span>
    			</div>
    		</div>
    		<div class="rule">
	    		<span @click="handleMsg">活动规则></span>
	    	</div>
    	</div>
    	<!-- 弹框 -->
    	<mt-popup v-model="popupVisible" popup-transition="popup-fade">
    		<div class="pop">
    			<div class="close-pop" @click="popupVisible = false">
    				<img src="../../assets/img/close.png" />
    			</div>
    			<div class="pop-con" v-if="!winFlag">
    				<h2>{{drawInfo}}</h2>
    				<p>{{drawWarn}}</p>
    			</div>
    			<div class="pop-con" v-if="winFlag">
    				<p class="text-red">{{winText}}</p>
    			</div>
    			<div class="pop-btn" >
    				<button @click="popupVisible = false" v-if="!winFlag">稍后继续</button>
    				<button @click="popupVisible = false" v-if="winFlag">取消</button>
    				<button class="btn-red" v-if="!winFlag" @click="handleDraw">再抽一次</button>
    				<button class="btn-red" v-if="winFlag" @click="handleDraw">继续抽奖</button>
    			</div>
    			<!-- 提示 -->
    			<!--<div class="warn" v-if="viewWarn">
    				<div class="warn-con">
    					<h3>提示</h3>
    					<p>每次抽奖将消耗<b>5</b>积分</p>
    				</div>
    				<div class="warn-btn">
	    				<button @click="popupVisible = false">取消</button>
	    				<button class="btn-red">再抽一次</button>
    				</div>
    				<p><input type="checkbox" />不再提示</p>
    			</div>-->
    		</div>
		</mt-popup>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';

import headerBar from '@/components/header/headerBar'	

let INTERVAL_TIME = 50;//间隔时间
let ROLL_TIMES = 5;//转动圈数
let NO_WIN_TEXT = '再试试手气'; //没有中奖的文字
export default {
    name: 'luckDraw', 
    components: {
	  	'header-bar': headerBar
	},
    data() {
        return {
        	mainH: 0,
        	drawList: [
        		{'img': '../../src/assets/img/coin.png','text': '888积分'},
        		{'img': '../../src/assets/img/coin.png','text': '8888积分'},
        		{'img': '../../src/assets/img/coin.png','text': '888积分'},
        		{'img': '../../src/assets/img/noDraw.png','text': '再试试手气'},
        		{'img': '../../src/assets/img/coin.png','text': '68积分'},
        		{'img': '../../src/assets/img/coin.png','text': '28888积分'},
        		{'img': '../../src/assets/img/coin.png','text': '588积分'},
        		{'img': '../../src/assets/img/coin.png','text': '58积分'},
        		{'img': '../../src/assets/img/noDraw.png','text': '再试试手气'},
        		{'img': '../../src/assets/img/coin.png','text': '888积分'},
        		{'img': '../../src/assets/img/coin.png','text': '388积分'},
        		{'img': '../../src/assets/img/coin.png','text': '188积分'}
        	],
        	clickFlag: false,//正在抽奖中状态
        	selectIndex: 0, //奖项下标
        	drawLi: document.getElementsByClassName('draw-li'),//奖项
        	drawInterval: '',//抽奖定时器
        	intervalTime: INTERVAL_TIME,//间隔时间
        	rollTimes: ROLL_TIMES,//转动圈数
        	randomVal: 0,
        	popupVisible: false,
        	drawInfo: '没遗憾，没有中奖',
        	drawWarn: '这一次没有中，坚持下去万一下次中了呢',
        	winFlag: false,//中奖状态
        	winText: '',//中奖的信息
        	viewWarn: false,//提示弹框
        }
    },
    mounted() {
        this.$nextTick(function() {
        	document.title = '积分乐园-抽奖';
        	//默认第一个选中
        	this.selectIndex = parseInt(12 * Math.random()); 
        	this.drawLi[this.selectIndex].className = 'draw-li active';
        });
    },
    methods: {
    	//抽奖中
    	roll: function() {
    		for(var i = 0;i < this.drawLi.length;i++) {
    			this.drawLi[i].className = 'draw-li';
    		}
    		if(this.selectIndex >= (this.drawLi.length - 1)) {
    			this.selectIndex = 0;
    			
    			if(this.rollTimes >= 1) {
    				this.rollTimes--;
    			} else {
    				this.rollTimes = 0;
    			}
    		} else {
    			this.selectIndex++;
    		}
    		if(this.rollTimes <= 1) {
				this.intervalTime = this.intervalTime + 10;
			}
    		this.drawLi[this.selectIndex].className = 'draw-li active';
    		
    		
    		var that = this;
    		if(this.rollTimes > 0) {
    			setTimeout(function() {
    				that.roll();
    			}, that.intervalTime);
    		} else {
    			if(this.randomVal > 0) {
    				setTimeout(function() {
	    				that.roll();
	    			}, that.intervalTime);
	    			this.randomVal--;
    			} else {
    				var drawLiText = (this.drawLi[this.selectIndex].innerText).replace(/\s+/g,"");
    				if(drawLiText != NO_WIN_TEXT) {
    					this.winFlag = true;
    					this.winText = '恭喜您获得' + drawLiText;
    				} else {
    					this.winText = false;
    				}
    				this.clickFlag = false;
    				this.intervalTime = INTERVAL_TIME;//间隔时间
        			this.rollTimes = ROLL_TIMES;//转动圈数
        			setTimeout(function() {
        				that.handleMsg();
        			}, 500);
    			}
    		}
    	},
    	//开始抽奖
    	handleDraw: function() {
    		this.popupVisible = false;
    		if(this.clickFlag) {
    			return;
    		}
    		this.clickFlag = true;
    		this.randomVal = parseInt(12 * Math.random()) + 1; //0-11的随机数
    		this.roll();
    	},
    	//中奖信息弹框
    	handleMsg: function() {
    		this.popupVisible = true;
    	}
    }
}

</script>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.luckDraw {
	/*padding-top: 3.7rem;
	width: 100%;
	background: url(img/bg-draw.png);
	background-size: 100% 100%;*/
	/*padding-top: 3.7rem;*/
}
.nav {
	width: 100%;
	background: url(img/bg-draw.png) no-repeat;
	background-size: 100% 100%;
}
.draw-title {
	width: 24rem;
	height: 3.0rem;
	background: url(img/draw-title.png) no-repeat center;
	background-size: 100% auto;
	padding: 3.0rem 0 3.4rem 0;
	margin: 0 auto;
}
.draw-nav {
	position: relative;
	top: 0;
	left: 0;
	width: 33.9rem;
	height: 35.1rem;
	margin: 0 auto;
	background: url(img/draw02.png) no-repeat;
	background-size: 100% 100%;
}
.draw-nav .explain {
	position: absolute;
	top: 10rem;
	left: calc(50% - 7rem);
	width: 14rem;
	height: 4rem;
	border-radius: 0.9rem;
	color: #fffb5e;
	font-size: 1.1rem;
	text-align: center;
	padding-top: 10rem;
	cursor: pointer;
}
.draw-nav .explain > span {
	display: inline-block;
	width: 8.0rem;
	height: 1.8rem;
	line-height: 1.8rem;
	background: #f43c31;
	border-radius: 0.9rem;
	color: #fffb5e;
	font-size: 1.1rem;
	text-align: center;
}
.draw-nav > ul > li {
	position: absolute;
	width: 7.1rem;
	height: 5.5rem;
	text-align: center;
	padding: 0.8rem 0;
	border-radius: 1.0rem;
}
/*.draw-nav > ul > li:first-child,*/
.draw-nav > ul > li.active {
	/*background: rgba(0, 0, 0, 0.4);*/
}
.draw-nav > ul > li > img {
	width: 4.2rem;
	height: 3.6rem;
}
.draw-nav > ul > li > h3 {
	font-size: 1.1rem;
	color: #1e1b07;
	margin-top: 0.3rem;
}
.draw-nav > ul > li:nth-child(1),
.draw-nav > ul > li:nth-child(2),
.draw-nav > ul > li:nth-child(3),
.draw-nav > ul > li:nth-child(4) {
	top: 2.5rem;
}
.draw-nav > ul > li:nth-child(1),
.draw-nav > ul > li:nth-child(10),
.draw-nav > ul > li:nth-child(11),
.draw-nav > ul > li:nth-child(12) {
	left: 2.2rem;
}
.draw-nav > ul > li:nth-child(2),
.draw-nav > ul > li:nth-child(9) {
	left: 9.7rem;
}
.draw-nav > ul > li:nth-child(3),
.draw-nav > ul > li:nth-child(8) {
	left: 17.2rem;
}
.draw-nav > ul > li:nth-child(4),
.draw-nav > ul > li:nth-child(5),
.draw-nav > ul > li:nth-child(6),
.draw-nav > ul > li:nth-child(7) {
	left: 24.6rem;
}
.draw-nav > ul > li:nth-child(5),
.draw-nav > ul > li:nth-child(12) {
	top: 10rem;
}
.draw-nav > ul > li:nth-child(6),
.draw-nav > ul > li:nth-child(11) {
	top: 17.4rem;
}
.draw-nav > ul > li:nth-child(7),
.draw-nav > ul > li:nth-child(8),
.draw-nav > ul > li:nth-child(9),
.draw-nav > ul > li:nth-child(10) {
	top: 24.8rem;
}
.draw-nav > ul > li.active .bg-cover {
	display: block;
	position: relative;
	top: -5.9rem;
	left: 0;
	width: 7.1rem;
	height: 5.5rem;
	text-align: center;
	padding: 0.8rem 0;
	border-radius: 1.0rem;
	background: rgba(0, 0, 0, 0.4);
	box-shadow: 0px 1px 2px 0px 
		#fe6b6b, 
		0px 4px 4px 0px 
		rgba(217, 56, 48, 0.59);
	z-index: 10;
}
.bg-cover {
	display: none;
}
.rule {
	margin-top: 2.1rem;
	text-align: center;
	font-size: 1.0rem;
	color: #fff;
}
.rule > span {
	display: inline-block;
	padding: 0.6rem 2.2rem;
	background: #5335a3;
	border-radius: 1.0rem;
}
.mint-popup {
	background: transparent !important;
}
.pop {
	position: relative;
	top: 0;
	left: 0;
	width: 30.5rem;
	height: 16rem;
	margin: 0 auto;
	padding: 0.2rem;
	background: url(../../assets/img/bg-pop.png);
	background-size: 100% 100%;
}
.pop .close-pop {
	position: absolute;
	top: -3.3rem;
	right: 1.3rem;
	width: 2.2rem;
	height: 2.2rem;
	cursor: pointer;
	border-radius: 2.2rem;
}
.pop .close-pop img {
	width: 100%;
	height: 100%;
}
.pop-con,
.warn {
	text-align: center;
}
.pop-con > h2 {
	color: #333;
	font-size: 1.6rem;
	margin-top: 3.0rem;
	margin-bottom: 1.3rem;
}
.pop-con > p {
	color: #999;
	font-size: 1.2rem;
	margin-bottom: 3.3rem;
}
.pop-con > p.text-red {
	margin-top: 4.0rem;
	color: #e93b3d;
	font-size: 1.6rem;
	margin-bottom: 4.3rem;
}
.pop-btn,
.warn-btn {
	text-align: center;
}
.pop-btn > button,
.warn-btn > button {
	width: 11.4rem;
	height: 3.5rem;
	line-height: 3.5rem;
	color: #fff;
	font-size: 1.4rem;
	border-radius: 3.5rem;
	background: #b8b8b8;
	margin: 0 1.3rem;
}
.pop-btn > button.btn-red,
.warn-btn > button.btn-red {
	background: #e93b3d;
	color: #fff;
}
.warn .warn-con > h3 {
	color: #e93b3d;
	font-size: 1.4rem;	
	margin: 2.5rem;
	margin-bottom: 1.4rem;
}
.warn .warn-con > p {
	color: #333;
	font-size: 1.6rem;	
	margin-bottom: 2.0rem;
}
.warn > p {
	text-align: right;
	margin-right: 3.0rem;
	color: #666;
	font-size: 1.1rem;
	margin-top: 1.0rem;
} 
.warn > p > input {
	vertical-align: sub;
	margin-right: 0.3rem;
}
</style>
