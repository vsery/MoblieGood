<template>
	<div class="addAddress">
		<div class="content">
			<div class="inp-item">
				<input type="text" name="userName" id="userName" :value="inpValues.name" @change="changeName" placeholder="姓名" />
			</div>
			<div class="inp-item">
				<input type="tel" name="userPhone" id="userPhone" :value="inpValues.phone" @change="changePhone" placeholder="手机号" />
			</div>
			<div class="inp-item">
				<div class="disabled-address " :class="[once?'active':'']"  @click="setAddress">{{ inpValues.state }}</div>
			</div>
			<div class="inp-item">
				<input type="text" name="address-detailed" id="userName" :value="inpValues.detailAddress" @change="changeDetailAddress" placeholder="详细地址，如楼道、楼牌号等" />
			</div>
			<div class="radio-box" @click="settingDefault">
				<i :class="['iconfont icon-icon-check ']+[radioBtn?'active':'']"></i>设为默认地址
			</div>
			<div class="btn-box">
				<div class="u-btn btn-left" @click="close">取消</div>
				<div class="u-btn btn-right" @click="dataSubmit">保存</div>
			</div>
		</div>
		<mt-popup v-model="popupVisible" position="bottom">
			<div class="btn-ok"><span @click="btnOk">完成</span></div>
			<mt-picker v-if="popupVisible" :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
		</mt-popup>
	</div>
</template>

<script>
	import { Popup } from 'mint-ui';
	import { Picker } from 'mint-ui';
	import { Toast } from 'mint-ui';
	//三级联动json
	import myaddress from './json/address3.json'
	export default {
		name: 'addAddress',
		data() {
			return {
				inpValues: {
					'name': "",
					'phone': "",
					'address': "",
					'detailAddress': "",
					'state': "省份，城市，区县",
				},
				once: false,
				myAddressProvince: '湖南省',
				        myAddressCity: '长沙市',
				        myAddresscounty: '天心区',
				radioBtn: false,
				popupVisible: false,
				myAddressSlots: [{
					flex: 1,
		            defaultIndex: 1,
					values: Object.keys(myaddress),
		            className: 'slot1',
		            textAlign: 'center',
					value: "",
				}, {            
					divider: true,
		            content: '-',
		            className: 'slot2'          
				}, {            
					flex: 1,
		            values: null,
		            className: 'slot3',
		            textAlign: 'center',
					value: "",
				}, {            
					divider: true,
		            content: '-',
		            className: 'slot4'          
				}, {            
					flex: 1,
					            values: null,
					value: "",
		            className: 'slot5',
		            textAlign: 'center'          
				}],
			}
		},
		mounted() {
			document.title = '新增地址';
		},
		methods: {
			settingDefault() {
				this.radioBtn = !this.radioBtn;
			},
			setAddress(picker, values) {
				this.popupVisible = true;
				this.myAddressSlots[0].values = Object.keys(myaddress);
				this.myAddressSlots[0].value = this.myAddressProvince;
				this.myAddressSlots[2].values = Object.keys(myaddress[this.myAddressProvince]);
				this.myAddressSlots[2].value = this.myAddressCity;
				this.myAddressSlots[4].values = myaddress[this.myAddressProvince][this.myAddressCity];
				this.myAddressSlots[4].value = this.myAddresscounty;
			},
			changeName(event) {
				this.inpValues.name = event.target.value;
			},
			changePhone(event) {
				this.inpValues.phone = event.target.value;
			},
			onMyAddressChange(picker, values) {       
				if(myaddress[values[0]]) {  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）					         
					picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组					         
					picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
					this.myAddressProvince = values[0];
					this.myAddressCity = values[1];
					this.myAddresscounty = values[2];
				}      
			},
			btnOk() {
				var str;
				this.popupVisible = !this.popupVisible;
				if(this.myAddressCity == "市辖区") {
					str = ",";
				} else {
					str = "," + this.myAddressCity + ",";
				}
				this.inpValues.state = this.myAddressProvince + str + this.myAddresscounty;
				this.once = true;
			},
			changeDetailAddress(event) {
				this.inpValues.detailAddress = event.target.value;
			},
			dataSubmit() {
				if(this.radioBtn === false) {
//					this.inpValues.state = 0;
				} else {
//					this.inpValues.state = 1;
				}
				if(this.inpValues.name && this.inpValues.phone && this.inpValues.address && this.inpValues.detailAddress) {
					this.$router.push({
						name: 'MyReceivingAddress',
						params: this.inpValues
					})
				} else {
					//提示框
					Toast({
						message: '请按要求填写所有内容',
						position: 'bottom',
						duration: 3000
					})
				}
			},
			close() {
				this.$router.push({
					name: 'MyReceivingAddress'
				});
			},
		},
	}
</script>

<style>
	.addAddress {
		min-height: 100vh;
		background-color: #F5F5F5;
	}
	.addAddress .mint-popup.mint-popup-bottom {
		width: 100%;
	}
	
	.addAddress .btn-ok {
		height: 3rem;
		text-align: right;
		padding-right: 1rem;
	}
	
	.addAddress .btn-ok span {
		font-size: 1.2rem;
		line-height: 3rem;
		padding: 0.2rem 0.5rem;
		color: #fff;
		border: 1px solid #D4282D;
		border-radius: 0.3rem;
		background-color: #D4282D;
	}
	
	.addAddress .picker-slot {
		font-size: 1.5rem;
	}
	
	.addAddress {
		background-color: #f5f5f5;
	}
	
	.addAddress .content {
		padding-top: 1px;
		background-color: #fff;
	}
	
	.addAddress .content .inp-item,
	.addAddress .radio-box {
		width: calc(100% - 2rem);
		margin-left: 2rem;
		min-height: 4rem;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.addAddress .content .inp-item input,
	.addAddress .content .inp-item .disabled-address {
		width: 100%;
		border: 0;
		line-height: 4rem;
		font-size: 1.3rem;
	}
	
	.addAddress .content .inp-item .disabled-address {
		color: #999;
	}
	
	.addAddress .content .inp-item .disabled-address.active {
		color: initial;
	}
	
	.addAddress .radio-box {
		width: 100%;
		margin-left: 0;
		min-height: 3.8rem;
		line-height: 3.8rem;
		text-align: center;
		font-size: 1.4rem;
		color: #444;
		background-color: #fbfbfb;
	}
	
	.addAddress .radio-box i {
		color: #444;
		margin-right: 1rem;
	}
	
	.addAddress .radio-box i.active {
		color: #d4282d;
	}
	
	.addAddress .btn-box {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.addAddress .btn-box .u-btn {
		float: left;
		display: inline-block;
		width: 50%;
		height: 4.16rem;
		line-height: 4.16rem;
		background-color: #fff;
		text-align: center;
		font-size: 1.4rem;
	}
	
	.addAddress .btn-box .btn-right {
		color: #fff;
		background-color: #D4282D;
	}
</style>