<template>
  <div class="receivingAddress">
  	<div class="header">
  		<header-bar :isWhite="false"></header-bar>
  	</div>
  	<div class="content">
  		<div class="address-list" v-if="addressList.length != 0">
  			<div class="address-hd"></div>
  			<div class="address-item-ct clearfix" v-for="item in addressList" is-link>
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
  					<i class="iconfont icon-write"></i>
  				</div>
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
  				<div class="u-btn btn-left" is-link>微信添加</div>
  				<div class="u-btn btn-right" is-link @click="link_addAddress"><i class="iconfont "></i>新建地址</div>
  			</div>
  		</div>
  		<div class="btn-box">
				<div class="u-btn btn-left" is-link>微信添加</div>
				<div class="u-btn btn-right" is-link @click="link_addAddress"><i class="iconfont "></i>新建地址</div>
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
	      { name: '陆亲亲', phone:'17932816721',address:'沙尖嘴铜锣湾10293号', state:0 },
	      { name: '陆亮', phone:'111111111',address:'刘家湾烧饼5号摊', state:1 }
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
.address-list {
	
}
.address-list .address-hd {
	height: 0.5rem;
	background: url(../../../assets/img/addressHd.jpg) repeat-x center;
}
.address-list .address-item-ct {
	box-sizing: border-box;
	min-height: 5.5rem;
	height: 5.5rem;
	width: 100%;
	padding: 0 1.5rem;
	border-bottom:0.1rem solid #ddd;
	overflow: hidden;
	line-height: 2.4rem;
	padding-top: 0.6rem;
}
.address-item-ct .item-name {
	float: left;
	width: 25%;
}
.address-item-ct .item-name .name {
	font-size: 1.6rem;
}
.address-item-ct .item-name .active-icon span {
	font-size: 1.3rem;
	border:1px solid #d4282d;
	color: #d4282d;
	padding: 0 0.5rem 0.1rem;
	border-radius: 0.4rem;
}
.address-item-ct .item-address {
	float: left;
	width: 60%;
}
.address-item-ct .item-address .user-phone {
	font-size: 1.6rem;
}
.address-item-ct .item-address .address-detailed {
	font-size: 1.3rem;
	color: #999;
}
.address-item-ct .item-edit {
	float: left;
	width: 15%;
	line-height: 4.4rem;
	text-align: right;
}
.address-item-ct .item-edit i {
	font-size: 2.5rem;
}
/* address-list end */
/* NoAddress */
.noAddress .noAddress-ct {
	text-align: center;
}
.noAddress .img-wrap {
	width: 45%;
	height: 45%;
	margin: 20% auto 0;
}
.noAddress .img-wrap img {
	width: 100%;
	/*height: 100%;*/
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
	display: inline-block;
	width: calc((100% - 1.4rem)/2);
	height: 3.4rem;
	line-height:3.4rem;
	background-color: #fff;
	border:0.1rem solid #666;
	text-align: center;
	border-radius: 0.5rem;
	font-size: 1.4rem;
	margin-bottom: 2rem;
}
.receivingAddress .content .btn-box .btn-left {
	margin-right: 1rem;
}
.receivingAddress .content .btn-box .btn-right {
	color: #e93b3d;
	border-color: #e93b3d;
}
</style>