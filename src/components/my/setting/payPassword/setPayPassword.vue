<template>
	<div id="resetPayPassword">
		<div class="content">
			<template v-if="one.state">
				<div class="text-box input-hd">
					<p class="gray">我们会将<span class="blue">验证码</span>发送到您的手机</p>
					<p class="phone-num">188****8957</p>
				</div>
				<div class="input-box">
					<div class="input-item u-three-input">
						<span>验证码</span>
						<input type="text" maxlength="6" placeholder="请输入手机号" />
						<button>获取验证码</button>
					</div>
				</div>
				<div class="u-submit-box">
					<button @click="oneBtn">下一步</button>
				</div>
			</template>
			<template  v-if="two.state">
				<div class="text-box">
					<p class="gray">请为帐号<span>159 **** 8957</span></p>
					<p class="">设置6位数支付密码</p>
				</div>
		        <div class="box">
		        	<pwd-input :redBorder="redBorder"></pwd-input>
		        	<!--<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>-->
		        </div>
		        <div class="hint">支付密码不能是重复、连续的数字</div>
		        <div class="u-submit-box">
					<button @click="twoBtn">下一步</button>
				</div>
			</template>
	        <template  v-if="three.state">
				<div class="text-box input-hd">
					<p>请再次输入</p>
				</div>
		        <div class="box">
		        	<pwd-input :redBorder="redBorder"></pwd-input>
		        	<!--<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>
		        	<div class="pawDiv">
		        		<input type="password" class="paw" maxLength="1"/>
		        	</div>-->
		        </div>
		        <div class="u-submit-box">
		        	<button @click="threeBtn">下一步</button>
		        </div>
			</template>
	    </div>
	</div>
</template>

<script>
	import pwdInput from '@/components/tool/pwdInput' //密码输入框
	
	import { Toast } from 'mint-ui';
	var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;

	export default {
		name: 'setPayPassword',
	 	components: {
		  	'pwd-input': pwdInput
		},
		data() {
			return {
				oldPhone: 17123456789,
				newPhone: null,
				password1: null,
				password2: null,
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
				redBorder: true
			}
		},
		mounted() {
			document.title = '设置支付密码';
//			console.log(this.one.state);
		},
		methods: {
			oneBtn(){
				this.one.state = false;
				this.two.state = true;
				this.three.state = false;
        		this.$nextTick(function() {
        			this.onInp();
				});
			},
			twoBtn(){
				this.one.state = false;
				this.two.state = false;
				this.three.state = true;
				this.$nextTick(function() {
        			this.onInp();
				});
			},
			threeBtn(){
				this.$router.push({
					name: 'MySetting'
				});
			},
			onInp(){
				//input 焦点事件
				var inp = document.querySelectorAll(".pawDiv input");
				for(var i = 0;i < inp.length;i++){
					inp[i].onblur = function(){
						this.style.fontSize = "3rem";
					};
					inp[i].onfocus = function(){
						this.style.fontSize = "1rem";
					};
				}
			}
		}
	}
</script>

<style scoped>
* { padding: 0; margin: 0; box-sizing: border-box; -webkit-box-sizing:border-box ; }
#setPayPassword {  background-color: #FAFAFA; min-height: 100vh; } 
.content { padding: 0 1.45rem; background-color: #fff; }

.content .text-box { font-size: 1.56rem; line-height: 2.57rem; padding: 2.1rem; text-align: center;}
.content .text-box.input-hd { padding: 3.3rem 0 2.1rem;}
.content .text-box .gray { color: #A8A8A8; }
.content .text-box .blue { color: #5dbfff; }
.content .text-box .phone-num { font-size: 1.8rem; }

.content .input-box {  }
.content .input-box .u-three-input { display: flex;display: -webkit-flex; background-color: #fff;  height: 3.6rem; align-items: center;  }
.u-three-input span { font-size: 1.38rem; line-height: 3.6rem; flex: 1;}
.u-three-input input { font-size: 1.38rem; line-height: 3.6rem; flex: 2; padding-left: 0.5rem;}
.u-three-input button { font-size: 1.2rem; line-height: 2.8rem; height: 2.8rem; flex: 2;  margin-left: 1rem; border: 0.1rem solid #ccc; color: #666; background-color: #fff; border-radius: 0.5rem;}
.u-submit-box { margin-top: 5.4rem; }
.u-submit-box button { height: 4.15rem; width: 100%; background-color: #ddd; color: #fff; font-size: 1.56rem; border-radius: 0.5rem; }
.u-submit-box button.active { background-color: #FF4242;}

.content .box { margin-top: 4.25rem; width: 100%; height: 4.5rem; /*border-width: 0.2rem 0.1rem; border-style:solid ; border-color: #E5E5E5;overflow: hidden;  border-radius: 0.5rem;*/}
.content .box.active { background-color: #fbc9c9;}
.content .box .pawDiv { width: 16.6%; height: 4.05rem; border-right: 0.1rem solid #E5E5E5; float: left;}
.content .box .pawDiv:last-child { border-right: 0; }
.content .box .pawDiv input { width: 100%; height: 4.05rem; text-align: center; font-size: 1rem; padding: 0.8rem 0; }
/*.content .box .pawDiv input:focus { font-size: 3rem; }
.content .box .pawDiv input:blur { font-size: 3rem; }*/

.content .hint { font-size: 1.2875rem; text-align: center; line-height: 2.57rem; color: #A8A8A8; margin-top: 1rem; }

/*.content .box .pawDiv input:focus { color: #999; }*/

/*.content { width: 400px; height: 50px; margin: 0 auto; margin-top: 100px; }
.title { font-family: '微软雅黑'; font-size: 16px; }
.box { width: 190px; height: 30px; border: 1px solid #ccc; margin-top: 10px; line-height: 30px; }
.content .box, .forget { display: inline-block; }
.content .forget { width: 100px; color: lightskyblue; vertical-align: super; font-size: 14px; }
.box input.paw { width: 30px; height: 20px; line-height: 20px; margin-left: -9px; border: none; border-right: 1px dashed #ccc; text-align: center; }
.box input.paw:nth-child(1) { margin-left: 0; }
.content .box .pawDiv:nth-child(6) input.paw { border: none; }
.content .box input.paw:focus { outline: 0; }
.content .box .pawDiv { display: inline-block; line-height: 30px; width: 31px; height: 31px; margin-top: -2px; float: left; }
.point { font-size: 14px; color: #ccc; margin: 5px 0; }
.errorPoint { color: red; display: none; }
.getPasswordBtn { width: 100px; height: 30px; background-color: cornflowerblue; font-size: 14px; font-family: '微软雅黑'; color: white; border: none; }*/
</style>