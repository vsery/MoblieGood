<template>
	<div id="changePhone">
		<div class="content">
			<div v-if="one.state">
				<div class="text-box">
					<p>请填写您需要变更的手机号</p>
				</div>
				<div class="form-box">
					<input type="tel" name="phone" maxlength="11" placeholder="请输入手机号" v-model="one.inpVal" />
					<div class="u-submit-box">
						<button @click="oneDown">下一步</button>
					</div>
				</div>
			</div>
			<div v-if="two.state">
				<div class="text-box">
					<p>短信验证码将发送到您的手机</p>
					<p class="phone-num">{{ one.inpVal }}</p>
				</div>
				<div class="form-box">
					<div class="box">
						<input type="tel" name="phone" maxlength="6" v-model="two.inpCode" placeholder="请输入验证码" />
						<button>点击获取</button>
					</div>
					<div class="u-submit-box">
						<button @click="twoDown">下一步</button>
					</div>
				</div>
			</div>
			<div v-if="three.state">
				<div class="text-box">
					<p class="gray">你现在使用的手机号码是<span>159 **** 8957</span></p>
					<p>变更号码后，下次登录需要使用新手机号码</p>
				</div>
				<div class="form-box">
					<div class="box">
						<input type="tel" name="phone" maxlength="11" v-model="three.inpVal" placeholder="请输入手机号" />
						<button>点击获取</button>
					</div>
					<input type="tel" name="phone" maxlength="6" v-model="three.inpCode" placeholder="请输入验证码" />
					<div class="u-submit-box">
						<button @click="threeDown">下一步</button>
					</div>
				</div>
			</div>
			<div v-if="four.state">
				<div class="form-box u-ok">
					<div class="ok-box">
						<div class="icon-box">
							<i class="iconfont icon-gou"></i>
						</div>
						<p class="red">变更手机号成功</p>
						<p>您的新手机号<span>138 9966 9987</span></p>
						<div class="u-submit-box">
							<button @click="fourBtn">完成</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
	export default {
		name: 'changePhone',
		data() {
			return {
				oldPhone: 17123456789,
				newPhone: null,
				one: {
					state: true,
					inpVal: "",
				},
				two: {
					state: false,
					inpCode: "",
					validateCode: 123456,
				},
				three: {
					state: false,
					inpVal: "",
					inpCode: "",
					validateCode: 654321,
				},
				four: {
					state: false,
				}
			}
		},
		mounted() {
			document.title = '变更手机号';
		},
		methods: {
			oneDown() {
				console.log(this.one.inpVal);
				if(!phoneReg.test(this.one.inpVal)) {
					this.phoneHint();
				} else {
					this.one.state = false;
					this.two.state = true;
					this.three.state = false;
					this.four.state = false;
				}
			},
			twoDown() {
				console.log(this.two.inpCode);
				console.log(this.two.validateCode);
				if(this.two.inpCode != this.two.validateCode) {
					this.validateHint();
				} else {
					this.one.state = false;
					this.two.state = false;
					this.three.state = true;
					this.four.state = false;

				}
			},
			threeDown() {
				console.log(this.three.inpVal);
				console.log(this.three.inpCode);
				if(!phoneReg.test(this.three.inpVal) || this.three.inpCode != this.three.validateCode) {
					if(!phoneReg.test(this.three.inpVal) && this.three.inpCode != this.three.validateCode) {
						Toast({
							message: '请输入正确的手机号和验证码!',
							position: 'bottom',
							duration: 3000
						});
					} else if(this.three.validateCode != this.three.inpCode) {
						this.validateHint();
					} else {
						this.phoneHint();
					}
				} else {
					this.one.state = false;
					this.two.state = false;
					this.three.state = false;
					this.four.state = true;
				}
			},
			fourBtn() {
				this.$router.push({
					name: 'MySetting'
				});
			},
			phoneHint() {
				Toast({
					message: '请输入正确的手机号!',
					position: 'bottom',
					duration: 3000
				});
			},
			validateHint() {
				Toast({
					message: '请输入正确的验证码!',
					position: 'bottom',
					duration: 3000
				});
			}
		}
	}
</script>

<style scoped>
	.content * {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	
	.content .text-box {
		font-size: 1.56rem;
		line-height: 2.6rem;
		padding: 3.3rem 0;
		text-align: center;
	}
	
	.content .text-box .gray {
		color: #A8A8A8;
	}
	
	.content .text-box .phone-num {
		font-size: 1.8rem;
		font-weight: bold;
	}
	
	.content .form-box {
		background-color: #fafafa;
		padding: 1rem 0;
	}
	
	.content .form-box .box {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		background-color: #fff;
		line-height: 4.6rem;
		height: 4.6rem;
	}
	
	.content .form-box .box input {
		flex: 3;
	}
	
	.content .form-box .box button {
		flex: 1;
		margin: 0 1.5rem;
		line-height: 2.75rem;
		height: 2.75rem;
		width: 7.5rem;
		border: 0.1rem solid #e2e2e2;
		text-align: center;
		font-size: 1.195rem;
		color: #666;
		background-color: #fff;
		border-radius: 0.5rem;
	}
	
	.content .form-box input {
		display: block;
		width: 100%;
		margin: 1rem 0;
		line-height: 4.6rem;
		height: 4.6rem;
		font-size: 1.42rem;
		padding: 0 1.3rem;
	}
	
	.content .u-submit-box {
		padding: 0 1.3rem;
		margin-top: 2.3rem;
	}
	
	.content .u-submit-box button {
		display: block;
		width: 100%;
		height: 4.15rem;
		line-height: 4.15rem;
		background-color: #ff4242;
		border-radius: 0.5rem;
		font-size: 1.56rem;
		color: #fff;
	}
	
	.content .form-box.u-ok {
		padding: 4.6rem 2.25rem 0;
	}
	
	.content .ok-box {
		padding: 3.75rem 0 3.5rem;
		text-align: center;
		background-color: #fff;
		border-radius: 1rem;
	}
	
	.content .ok-box .u-submit-box {
		margin-top: 3rem;
	}
	
	.content .ok-box .icon-box {
		margin-bottom: 2.5rem;
	}
	
	.content .ok-box .icon-box i {
		font-size: 5.2rem;
		color: #B3B3B3;
	}
	
	.content .ok-box p {
		font-size: 1.75rem;
		color: #666;
		margin-bottom: 1rem;
	}
	
	.content .ok-box p.red {
		color: #ff4242;
	}
</style>