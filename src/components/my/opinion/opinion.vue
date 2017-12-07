<template>
	<div id="opinion">
		<div class="content">
			<div class="ct-hd clearfix">
				<div class="u-fl">
					<p>精益求精</p>
					<p>只为您提供更好的品质购物</p>
				</div>
				<div class="img-box"></div>
			</div>
			<div class="ct-bd">
				<div class="bd-tit">反馈问题类型</div>
				<ul class="type clearfix">
					<li @click="curId = 0" :class="{ 'active':curId===0 }">
						<a href="javascript:;">
							<div v-if="curId===0" class="active-box">
								<i class="iconfont icon-caret"></i>
							</div>
							{{ opinionType[0].name }}
						</a>
					</li>
					<li @click="curId = 1" :class="{ 'active':curId===1 }">
						<a href="javascript:;">
							<div v-if="curId===1" class="active-box">
								<i class="iconfont icon-caret"></i>
							</div>
							{{ opinionType[1].name }}
						</a>
					</li>
					<li @click="curId = 2" :class="{ 'active':curId===2 }">
						<a href="javascript:;">
							<div v-if="curId===2" class="active-box">
								<i class="iconfont icon-caret"></i>
							</div>
							{{ opinionType[2].name }}
						</a>
					</li>
					<li @click="curId = 3" :class="{ 'active':curId===3 }">
						<a href="javascript:;">
							<div v-if="curId===3" class="active-box">
								<i class="iconfont icon-caret"></i>
							</div>
							{{ opinionType[3].name }}
						</a>
					</li>
				</ul>
				<div class="textarea-box">
					<textarea name="opinion" placeholder="选择问题类型帮助我们更快处理您的反馈" v-model="textarea" @input="textNum" maxlength="500"></textarea>
					<span>{{ textLength }}/500</span>
				</div>
				<div class="img-upload">
					<ul class="clearfix">
						<li v-for="(item,index) in imgArr" v-if="imgArr[index]" :style="{height:liWidth}">
							<img :src="item.imgUrl" />
							<div class="u-del" @click="liRemove(index)">一</div>
						</li>
						<li class="add-upload" @click="openAction" :style="{height:liWidth}">
							<div class="box">
								<p class="iconBox"><i class="iconfont icon-zhaoxiangji"></i></p>
								<p>添加照片</p>
							</div>
						</li>
					</ul>
				</div>
				<button class="u-submit">提交</button>
			</div>
			<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
			<!--<el-upload
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible" size="tiny">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>-->
		</div>
	</div>
</template>

<script>
	import { Actionsheet } from 'mint-ui';
	export default {
		name: 'opinion',
		data() {
			return {
				liWidth: '',
				sheetVisible: false,
				actions: [{
						name: '拍照',
						method: this.getCamera
					},
					{
						name: '从相册中选择',
						method: this.getLibrary
					},
				],
				opinionType: [{
						name: '功能异常'
					},
					{
						name: '体验问题'
					},
					{
						name: '新功能建议'
					},
					{
						name: '其他'
					}
				],
				curId: 0,
				textarea: '',
				textLength: 0,
				imgArr: [{
						imgUrl: '../../../../static/img/header (1).jpg'
					},
					{
						imgUrl: '../../../../static/img/header (2).jpg'
					},
					{
						imgUrl: '../../../../static/img/header (3).jpg'
					},
				],
				dialogImageUrl: '',
				dialogVisible: false
			}
		},
		mounted() {
			document.title = '意见反馈';
			this.liWidth = document.querySelector('.ct-bd .img-upload ul li').offsetWidth + 'px';
		},
		methods: {
			openAction() {
				this.sheetVisible = true;
			},
			getCamera() {
				console.log('打开照相机');
			},
			getLibrary() {
				console.log('从相册中选择');
			},
			textNum() {
				this.textLength = this.textarea.length;
			},
			liRemove(index) {
				console.log(index);
				this.imgArr.splice(index, 1);
			},
			//			handleRemove(file, fileList) {
			//				console.log(file, fileList);
			//			},
			//			handlePictureCardPreview(file) {
			//				console.log(file);
			//				this.dialogImageUrl = file.url;
			//				this.dialogVisible = true;
			//			}
		}
	}
</script>

<style scoped>
	@import '../../../assets/css/itemCommon.css';
	div {
		box-sizing: border-box;
	}
	
	.content {
		position: relative;
		width: 100%;
	}
	
	.content .ct-hd {
		height: 8.75rem;
		background-color: #ff4c42;
		padding: 2rem 0 2rem 2.6rem;
		text-align: right;
	}
	
	.content .ct-hd .img-box {
		float: right;
		margin-right: 2rem;
		width: 9.8rem;
		height: 4.5rem;
		background: url(img/bg_msg.png) no-repeat;
		background-size: contain;
	}
	
	.content .ct-hd .img-box img {
		width: 100%;
		height: 100%;
	}
	
	.content .ct-hd p {
		font-size: 1.5rem;
		line-height: 2.575rem;
		color: #fff;
	}
	
	.content .ct-bd {
		padding: 2.16rem 1.25rem 0;
	}
	
	.ct-bd .bd-tit {
		font-size: 1.38rem;
		padding-bottom: 0.66rem;
		color: #333;
		border-bottom: 0.1rem solid #eee;
	}
	
	.ct-bd ul.type {
		margin: 0.83rem auto 0;
	}
	
	.ct-bd ul.type li {
		position: relative;
		box-sizing: border-box;
		float: left;
		width: 23.5%;
		height: 2.83rem;
		line-height: 2.83rem;
		border: 0.1rem solid #e4e4e4;
		text-align: center;
		font-size: 1.195rem;
		margin-right: 2%;
		border-radius: 0.33rem;
		margin-bottom: 0.83rem;
	}
	
	.ct-bd ul.type li a {
		color: #333;
	}
	
	.ct-bd ul.type li:last-child {
		margin-right: 0;
	}
	
	.ct-bd ul.type li.active {
		border-color: #ff4342;
	}
	
	.ct-bd ul.type li.active .active-box {
		position: absolute;
		left: 0;
		top: 0;
		width: 1.5rem;
		height: 1.5rem;
		overflow: hidden;
		z-index: 99;
	}
	
	.ct-bd ul.type li.active .active-box i {
		position: absolute;
		top: -1rem;
		left: -1rem;
		display: inline-block;
		width: 2rem;
		text-align: center;
		height: 2rem;
		line-height: 3.5rem;
		font-size: 1rem;
		color: #fff;
		background-color: #ff4342;
		-webkit-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
	}
	
	.ct-bd .textarea-box {
		position: relative;
		width: 100%;
		height: 14.8rem;
		margin: 0 auto;
		border: 1px solid #E4E4E4;
		padding: 0.66rem 0.5rem 1.7rem 0.5rem;
		border-radius: .42rem;
	}
	
	.ct-bd .textarea-box textarea {
		outline: none;
		width: 100%;
		height: 12rem;
		font-size: 1.2875rem;
		line-height: 1.3;
		resize: none;
		border-color: rgba(255, 255, 255, 0);
	}
	
	.ct-bd .textarea-box textarea:focus {
		color: #333;
	}
	
	.ct-bd .textarea-box span {
		position: absolute;
		bottom: 0.58rem;
		right: 0.58rem;
		background-color: #fff;
		font-size: 1rem;
		color: #999;
	}
	
	.ct-bd .img-upload ul {
		margin-top: 1.5rem;
	}
	
	.ct-bd .img-upload ul li {
		position: relative;
		float: left;
		width: 23.5%;
		border-radius: 0.5rem;
		margin-right: 2%;
		margin-bottom: 1.6rem;
		text-align: center;
	}
	
	.ct-bd .img-upload ul li:nth-child(4n+0) {
		margin-right: 0;
	}
	
	.ct-bd .img-upload ul li img {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border: 0.1rem solid #E8E8E8;
		border-radius: 0.5rem;
	}
	
	.ct-bd .img-upload ul li .u-del {
		position: absolute;
		top: -5px;
		right: -5px;
		width: 15px;
		height: 15px;
		line-height: 15px;
		text-align: center;
		color: #fff;
		background-color: #ff4342;
		border-radius: 50%;
		z-index: 99;
	}
	
	.ct-bd .img-upload ul li.add-upload {
		display: table;
		box-sizing: border-box;
		border: 0.1rem dashed #e8e8e8;
		color: #999;
	}
	
	.add-upload .box {
		display: table-cell;
	   text-align: center;
	   vertical-align: middle;
	}
	.add-upload .iconBox i {
		font-size: 3rem;
	}
	
	.add-upload p {
		font-size: 1.1rem;
	}
	
	.ct-bd .u-submit {
		width: 100%;
		height: 4.16rem;
		margin-top: 10rem;
		margin-bottom: 0.6rem;
		font-size: 1.56rem;
		color: #fff;
		background-color: #b3b3b3;
		border-radius: 0.5rem;
	}
	
	.ct-bd .u-submit.active {
		background-color: #ff4342;
	}
</style>