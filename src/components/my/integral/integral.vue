<template>
    <div id="myInviting">
        <div class="header">
            <header-bar :isWhite="false"></header-bar>
        </div>
        <div class="content">
            <div class="inviting-details">
                <div class="round-box">
                    <p>积分</p>
                    <p class="integral-num">{{ integralMsg.total }}</p>
                </div>
                <div class="u-three-list">
                    <ul class="clearfix">
                        <li>
                            <div class="name" @click="$router.push({name: 'Integral'})"><i class="iconfont icon-fangzi1"></i>积分乐园</div>
                        </li>
                        <li>
                            <div class="name"><i class="iconfont icon-jinbi"></i>赚取积分</div>
                        </li>
                        <li>
                            <div class="name"><i class="iconfont icon-dingdan"></i>已消费</div>
                        </li>
                    </ul>
                </div>
                <div class="rule-box"><i class="iconfont icon-yiwen"></i>积分规则</div>
            </div>
            <div class="division-line">
                积分明细
            </div>
            <div class="inviting-list">
                <div class="three-box-img-item clearfix" v-for="item in itemList">
                    <div class="item-left">
                        <div class="item-ct">
                            <div class="text">{{ item.name }}</div>
                            <div class="gray-text">{{ item.time }}</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <span :class="item.num > 0?'add':'reduce'">{{ item.num }}积分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerBar from '@/components/header/headerBar'
    export default {
        name: 'myIntegral',
        components: {
            'header-bar': headerBar
        },
        data() {
            return {
                varText: null,
                integralMsg: {
                    total: '4873',
                    invitedNum: '612',
                    registeredNum: '107',
                    consumedNum: '105',
                },
                itemList: [{
                        id: 10,
                        name: '积分抽奖',
                        time: '2017-10-20 08:45',
                        num: 150,
                        state: 1
                    },
                    {
                        id: 11,
                        name: '邀请奖励',
                        time: '2017-10-21 08:45',
                        num: -180,
                        state: 2
                    },
                    {
                        id: 12,
                        name: '订单完成',
                        time: '2017-10-22 08:45',
                        num: 150,
                        state: 3
                    },
                ]
            }
        },
        mounted() {
            document.title = '我的积分';
        },
        methods: {
            setTxt(state) {
                if(state == 1) {
                    this.varText = "积分抽奖"
                } else if(state == 2) {
                    this.varText = "邀请奖励"
                } else if(state == 3) {
                    this.varText = "订单完成"
                }
            }
        }
    }
</script>

<style scoped>
    @import '../../../assets/css/itemCommon.css';
    .round-box p {
        line-height: 1.6rem;
    }
    
    .round-box p.integral-num {
        line-height: 4rem;
    }
    
    .u-three-list li .name {
        display: inline;
        padding: 0.5rem;
        border: 0.1rem solid #E5E5E5;
        border-radius: 0.3rem;
    }
    
    .u-three-list li {
        font-size: 1.3rem;
    }
    
    .u-three-list li .name i {
        margin-right: 0.2rem;
        font-size: 1.5rem;
        color: #FF4342;
    }
    
    .content .inviting-details {
        position: relative;
        padding: 2rem 1.5rem 2rem;
    }
    
    .content .inviting-details .rule-box {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 1.3rem;
        color: #999;
    }
    
    .content .inviting-details .rule-box i {
        font-size: 1.5rem;
        margin-right: 0.2rem;
        color: #c1c1c1;
    }
    
    .content .inviting-details .round-box .integral-num {
        font-size: 2rem;
    }
    
    .content .inviting-details .u-three-list {
        padding-top: 2rem;
    }
    
    .division-line {
        position: relative;
        font-size: 1.25rem;
        line-height: 1rem;
        text-align: center;
        margin-bottom: 1rem;
        color: #999;
    }
    
    .division-line:before,
    .division-line:after {
        content: '';
        background-color: #e6e6e6;
        height: 0.1rem;
        width: 40%;
        position: absolute;
        top: 0.4rem;
    }
    
    .division-line:before {
        left: 0;
    }
    
    .division-line:after {
        right: 0;
    }
    /* 列表 */
    
    #myInviting .three-box-img-item {
        height: 5.3rem;
    }
    
    #myInviting .three-box-img-item .item-left {
        width: 70%;
    }
    
    #myInviting .three-box-img-item .item-right {
        width: 30%;
    }
    
    .three-box-img-item .item-right span.add {
        color: #ff4342;
    }
    
    .three-box-img-item .item-right span.reduce {
        color: #00b94a;
    }
    
    .three-box-img-item .item-left .item-ct .text,
    .three-box-img-item .item-left .item-ct .gray-text,
    #myInviting .content .three-box-img-item .item-right span {
        font-size: 1.3rem;
    }
    
    .three-box-img-item .item-left .item-ct .text {
        line-height: 2rem;
    }
    
    .three-box-img-item .item-left .item-ct .gray-text {
        line-height: 1.9rem;
    }
    
    .three-box-img-item .item-right {
        margin-top: 2rem;
        line-height: 1.9rem;
    }
    
    #myInviting .content .three-box-img-item .item-left .item-ct {
        margin-left: 0;
    }
    
    .content .three-box-img-item .item-left .item-icon-box {
        width: 3rem;
    }
    
    .content .three-box-img-item .item-left .item-ct {
        margin-left: 3rem;
    }
    
    .content .three-box-img-item .item-right span {
        font-size: 1.4rem;
    }
</style>