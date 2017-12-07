<template>
  <div class="receivingAddress">
  	<div class="header">
  		<header-bar :isWhite="false"></header-bar>
  	</div>
  	<div class="content">
  		<div class="address-list" v-if="addressList.length != 0">
  			<div class="address-hd"></div>
  			<div class="address-item-ct clearfix" v-for="item in addressList">
  				<div class="item-name">
  					<div class="name">{{ item.name }}</div>
  					<div class="active-icon" v-if="item.state == 0">
  						<span>默认</span>
  					</div>
  					<div class="active-icon" v-else></div>
  				</div>
  				<div class="item-address">
  					<div class="user-phone">{{ item.phone }}</div>
  					<div class="address-detailed">{{ item.address }}</div>
  				</div>
  				<div class="item-edit">
  					<i class="iconfont icon-bianji"></i>
  				</div>
  			</div>
  			<div class="btn-box">
					<div class="u-btn btn-left">微信添加</div>
					<div class="u-btn btn-right" @click="link_addAddress">+新建地址</div>
				</div>
  		</div>
		
  		<div class="noAddress" v-else>
  			<div class="noAddress-ct">
	  			<div class="img-wrap">
	  				<img src="../../../assets/img/nothing.png" alt/>
	  			</div>
	  			<div class="text">您暂未添加收货地址</div>
  			</div>
  			<div class="btn-box">
  				<div class="u-btn btn-left">微信添加</div>
  				<div class="u-btn btn-right" @click="link_addAddress">+新建地址</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import headerBar from '@/components/header/headerBar'
import add from '@/components/my/receivingAddress/addAddress'
export default {
  name: 'receivingAddress',
  components: {
  	'header-bar': headerBar
  },
  data () {
    return {
    	noAddress:false,
    	addressList: [
	      { name: '陆亲亲', phone:'179****6721',address:'沙尖嘴铜锣湾10293号', state:0 },
	      { name: '陆亮', phone:'111****1511',address:'刘家湾烧饼5号摊', state:1 }
	    ],
    }
  },
  mounted() {
		document.title = '收货地址';
  },
  methods: {
  	link_addAddress(){
  		this.$router.push({name: 'addAddress'});
  	}
  }
}
</script>

<style scoped>
/* address-list */
.header {
	border-bottom: 0.1rem solid #EBEBEB; 
}
.content {
	min-height: calc(100vh - 3.8rem);
	background-color: #F5F5F5; 
}
.address-list .address-hd {
	width: 100%;
	background-image: url(../../../assets/img/addressHd.jpg);
	height: 0.5rem;
	background-size: 100% calc(100% + 0.1rem);
	border-top: 0.1rem solid #fbfbfb;
}
.address-list .address-item-ct {
	box-sizing: border-box;
	height: 6.5rem;
	width: 100%;
	padding: 1.3rem 1.25rem;
	border-bottom:0.1rem solid #ddd;
	overflow: hidden;
}
.address-item-ct .item-name {
	float: left;
	width: 25%;
	font-size: 1.38rem;
	line-height: 1.9rem;
}
.address-item-ct .item-name .active-icon {
	line-height: 2.5rem;
}
.address-item-ct .item-name .active-icon span {
	display: inline-block;
	font-size: 1.1rem;
	line-height: 1.5rem;
	border:1px solid #d4282d;
	color: #d4282d;
	padding: 0 0.25rem;
	border-radius: 0.2rem;
	vertical-align: middle;
}
.address-item-ct .item-address {
	float: left;
	width: 60%;
}
.address-item-ct .item-address .user-phone {
	font-size: 1.38rem;
	line-height: 1.9rem;
}
.address-item-ct .item-address .address-detailed {
	font-size: 1.3rem;
	color: #999;
	line-height: 2.5rem;
}
.address-item-ct .item-edit {
	float: left;
	width: 15%;
	line-height: 4.4rem;
	text-align: right;
}
.address-item-ct .item-edit i {
	font-size: 1.5rem;
	color: #666;
}
/* address-list end */
/* NoAddress */
.noAddress .noAddress-ct {
	text-align: center;
}
.noAddress .img-wrap {
	width: 45%;
	height: 45%;
	padding-top: 20%;
	margin: 0 auto;
}
.noAddress .img-wrap img {
	width: 100%;
}
.noAddress .text {
	margin-top: 1.5rem;
	font-size: 1.6rem;
	color: #666;
}
/* NoAddress end */
.receivingAddress .content .btn-box {
	position: fixed;
	left: 2rem;
	right: 2rem;
	bottom:0 ;
}
.receivingAddress .content .btn-box .u-btn {
	float: left;
	box-sizing: border-box;
	width: calc((100% - 2rem)/2);
	height: 4.12rem;
	line-height:4.12rem;
	background-color: #fff;
	border:0.1rem solid #666;
	text-align: center;
	border-radius: 0.5rem;
	font-size: 1.4rem;
	margin-bottom: 2rem;
}
.receivingAddress .content .noAddress .btn-box .u-btn {
	background-color: #F5F5F5;
}
.receivingAddress .content .btn-box .btn-left {
	margin-right: 2rem;
}
.receivingAddress .content .btn-box .btn-right {
	color: #e93b3d;
	border-color: #e93b3d;
}
</style>