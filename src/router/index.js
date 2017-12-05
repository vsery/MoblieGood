import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index' // 首页 => 视图
import BindMobile from '@/components/login/bindMobile' //绑定手机号

import Register from '@/components/register/register' //注册
import registerSuccess from '@/components/register/registerSuccess' //注册成功

import Login from '@/components/login/login' // 登录
import ForgetPwd from '@/components/forgetPwd/forgetPwd' // 忘记密码

import PdDetails from '@/components/home/pdDetails' // 商品详情
import JoinCart from '@/components/home/joinCart' // 加入购物车
import GoBuy from '@/components/home/goBuy' // 去付款
import BuySuccess from '@/components/home/buySuccess' // 支付完成
import Comment from '@/components/home/comment' // 评论
import Search from '@/components/home/search' // 搜索
import SearchResult from '@/components/home/searchResult' // 搜索结果

import Integral from '@/components/home/integral' // 积分乐园
import LuckDraw from '@/components/home/luckDraw' // 抽奖

import FirstClass from '@/components/class/firstClass' // 一级分类
import SecondClass from '@/components/class/secondClass' // 二级分类
import ProductList from '@/components/class/productList' // 商品列表


import My from '@/components/my/view' // 我的 => 视图
import User from '@/components/my/userIndex' // 我的 => 个人信息
import UserInfo from '@/components/my/user/userInfo' // 我的 => 个人信息
import Setting from '@/components/my/user/setting' // 我的 => 个人信息
import Collect from '@/components/my/collect/collect' // 我的 => 个人收藏
import MyIntegral from '@/components/my/integral/integral' // 我的 => 个人收藏
import MyTrace from '@/components/my/trace/trace' // 我的 => 个人收藏

import OrderList from '@/components/my/order/orderList' // 我的 => 订单列表
import OrderInfo from '@/components/my/order/orderInfo' // 我的 => 订单详情
import OrderAppraise from '@/components/my/order/orderAppraise' // 我的 => 订单详情 => 评价
import OrderAppraiseSuccess from '@/components/my/order/orderAppraiseSuccess' // 我的 => 订单详情 => 评价
import AfterSales from '@/components/my/order/afterSales' // 我的 => 申请售后
import AfterSalesList from '@/components/my/order/afterSalesList' // 我的 => 售后列表
import AfterSalesState from '@/components/my/order/afterSalesState' // 我的 => 售后详情
import AfterSalesNegotiate from '@/components/my/order/afterSalesNegotiate' // 我的 => 售后详情 = 协商
import AfterSalesNegotiateEdit from '@/components/my/order/afterSalesNegotiateEdit' // 我的 => 售后详情 = 协商

import address from '@/components/my/receivingAddress/receivingAddress' // 我的 => 收货地址
import add from '@/components/my/receivingAddress/addAddress' // 我的 => 增加收货地址

import invitingFriends from '@/components/my/invitingFriends/invitingFriends' // 我的 => 邀请好友list
import myInviting from '@/components/my/invitingFriends/myInviting' // 我的 => 邀请列表
import myCode from '@/components/my/invitingFriends/myCode' // 我的 => 邀请好友二维码
import invitationSuccess from '@/components/my/invitingFriends/invitationSuccess' // 我的 => 邀请您体验榛品购-注册成功
import invitationForm from '@/components/my/invitingFriends/invitationForm' // 我的 => 邀请您体验榛品购-注册表单

import opinion from '@/components/my/opinion/opinion' // 我的 => 意见反馈

import helpCenter from '@/components/my/helpCenter/helpCenter' // 我的 => 帮助中心
import helpList from '@/components/my/helpCenter/helpList' // 我的 => 帮助中心 => 列表
import helpQuery from '@/components/my/helpCenter/helpQuery' // 我的 => 帮助中心 => 搜索列表
import helpDetails from '@/components/my/helpCenter/helpDetails' // 我的 => 帮助中心 => 问题详情


import ShoppingCart from '@/components/shop/shoppingCart' // 我的 => 购物车

import MessageCenter from '@/components/msg/MessageCenter' //消息中心
import ShopSales from '@/components/msg/ShopSales' //商城活动
import LogisticsNotification from '@/components/msg/LogisticsNotification' //物流通知
import MallAnnouncement from '@/components/msg/MallAnnouncement' //商城公告
import AnnouncementDetails from '@/components/msg/AnnouncementDetails' //商城公告详情
import MessageNotification from '@/components/msg/MessageNotification'  //通知消息

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Index', title: '首页', component: Index },
        { path: '/login', name: 'Login', title: '登录', component: Login },
        { path: '/register',name: 'Register',title: '注册',component: Register},
	    { path: '/registerSuccess',name: 'registerSuccess',title: '注册成功',component: registerSuccess},
        { path: '/bindMobile', name: 'BindMobile', component: BindMobile },
        { path: '/forgetPwd', name: 'ForgetPwd', title: '忘记密码', component: ForgetPwd },
        
        { path: '/pdDetails', name: 'PdDetails', title: '商品详情', component: PdDetails },
        { path: '/joinCart', name: 'JoinCart', title: '加入购物车', component: JoinCart },

        { path: '/goBuy', name: 'GoBuy', title: '去付款', component: GoBuy },
        { path: '/buySuccess', name: 'BuySuccess', title: '支付完成', component: BuySuccess },
        
        { path: '/search', name: 'Search', title: '搜索', component: Search },
        { path: '/searchResult', name: 'SearchResult', title: '搜索结果', component: SearchResult },
        { path: '/comment', name: 'Comment', title: '评论', component: Comment },
        { path: '/integral', name: 'Integral', title: '积分乐园', component: Integral },
        { path: '/luckDraw', name: 'LuckDraw', title: '抽奖', component: LuckDraw },

        { path: '/firstClass', name: 'FirstClass', title: '一级分类', component: FirstClass },
        { path: '/secondClass', name: 'SecondClass', title: '二级分类', component: SecondClass },

        { path: '/productList', name: 'ProductList', title: '商品列表', component: ProductList },
        {
            path: '/my',
            name: 'My',
            title: '我的',
            component: My,
            children: [
                { path: '/user', name: 'MyUser', title: '我的个人中心', component: User },
                { path: '/userInfo', name: 'MyUserInfo', title: '我的个人信息', component: UserInfo },
                { path: '/userSetting', name: 'MySetting', title: '我的设置', component: Setting },
                { path: '/userCollect', name: 'MyCollect', title: '我的收藏', component: Collect },
                { path: '/userIntegral', name: 'MyIntegral', title: '我的积分', component: MyIntegral },
				{ path: '/userTrace', name: 'MyTrace', title: '我的足迹', component: MyTrace },

                { path: '/userOrderList', name: 'MyOrderList', title: '我的订单', component: OrderList },
                { path: '/userOrderInfo', name: 'MyOrderInfo', title: '我的订单详情', component: OrderInfo },
                { path: '/userOrderAppraise', name: 'MyOrderAppraise', title: '我的订单评价', component: OrderAppraise },
                { path: '/userOrderAppraiseSuccess', name: 'MyOrderAppraiseSuccess', title: '我的订单评价成功', component: OrderAppraiseSuccess },

                { path: '/userAfterSalesList', name: 'MyAfterSalesList', title: '售后列表', component: AfterSalesList },
                { path: '/userAfterSales', name: 'MyAfterSales', title: '申请售后', component: AfterSales },
                { path: '/userAfterSalesState', name: 'MyAfterSalesState', title: '售后详情', component: AfterSalesState },
                { path: '/userAfterSalesNegotiate', name: 'MyAfterSalesNegotiate', title: '协商详情', component: AfterSalesNegotiate },
                { path: '/userAfterSalesNegotiateEdit', name: 'MyAfterSalesNegotiateEdit', title: '协商详情', component: AfterSalesNegotiateEdit },

				{ path: '/receivingAddress', name: 'MyReceivingAddress', title: '收货地址', component: address },
              	{ path: '/addAddress', name:'addAddress', title:'新增地址', component:add },

              	{ path: '/invitingFriends',name:'MyInvitingFriends',title:'邀请好友', component: invitingFriends },
              	{ path: '/myInviting',name:'myInviting',title:'邀请列表', component: myInviting },
              	{ path: '/myCode',name:'myCode',title:'邀请好友', component: myCode },
              	{ path: '/invitationSuccess',name:'invitationSuccess',title:'邀请成功', component: invitationSuccess },
              	{ path: '/invitationForm',name:'invitationForm',title:'邀请表单', component: invitationForm },

              	{ path: '/opinion',name:'opinion',title:'意见反馈', component: opinion },

              	{ path: '/helpCenter',name:'helpCenter',title:'帮助中心', component: helpCenter },
              	{ path: '/helpList',name:'helpList',title:'帮助中心列表', component: helpList },
              	{ path: '/helpQuery',name:'helpQuery',title:'帮助中心', component: helpQuery },
              	{ path: '/helpDetails',name:'helpDetails',title:'帮助中心', component: helpDetails },
            ]
        },
        { path: '/shoppingCart', name: 'MyShoppingCart', title: '我的购物车', component: ShoppingCart},

        { path: '/MessageCenter', name: 'MessageCenter', title: '消息中心', component: MessageCenter },
	    { path: '/ShopSales', name: 'ShopSales', title: '商城活动', component: ShopSales },
        { path: '/LogisticsNotification', name: 'LogisticsNotification', title: '物流通知', component: LogisticsNotification },
	    { path: '/MallAnnouncement', name: 'MallAnnouncement', title: '商城公告', component: MallAnnouncement },
	    { path: '/AnnouncementDetails', name: 'AnnouncementDetails', title: '公告详情', component: AnnouncementDetails },
        { path: '/MessageNotification', name: 'MessageNotification', title: '通知消息', component: MessageNotification },
    ]
});

//router.beforeEach(function(to, from, next) {
//  if (to.path.startsWith('/login')) {
//     next()
//  } else {
//      let user = window.sessionStorage.getItem('userInfo')
//	   	if (!user) {
//	       next({ path: '/login' })
//	    } else {
//	       next();
//	       Vue.prototype.userInfo = JSON.parse(sessionStorage.userInfo); //登录之后的用户信息
//	       Vue.prototype.token = JSON.parse(sessionStorage.userInfo).token; //登录之后的token
//      }
//  }
//})

export default router
