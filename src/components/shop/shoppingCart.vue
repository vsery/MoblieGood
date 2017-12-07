<!-- 模型：
    DOM 结构
-->
<template>
    <div class="shoppingCart" :style="{height: BH}">
        <div class="headerBg">
            <header-bar :isWhite="false"></header-bar>
        </div>
        <template v-if="goodList.length > 0">
            <div class="menu">
                <a href="javascript:;" @click="switchState" class="btn right">{{edit?'完成':'编辑'}}</a>
            </div>
            <div class="shopping-conentBox">
                <div class="goodList">
                    <ul class="itemList">
                        <li class="item" v-for="good,index in goodList" v-if="good.state" :key="index">
                            <div class="content" ref="content" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
                                <div class="sys">
                                    <div :class="['input-checkbox ']+[good.check?'on':'']">
                                        <input type="checkbox" name="vehicle" :value="good.check" @click="selectCheck(good)">
                                    </div>
                                </div>
                                <div class="good">
                                    <div class="cover"><img :src="good.cover" class="response-img" alt=""></div>
                                    <div class="info-box">
                                        <div class="info" v-if="!edit">
                                            <span class="name">{{good.name}}</span>
                                            <span class="number">X{{good.number}}</span>
                                            <p class="desc">{{good.desc}}</p>
                                        </div>
                                        <div class="info-desc" v-else>
                                            <span class="desc">已选择: {{good.desc}}</span><span class="right"><i class="icon iconfont icon-return-copy"></i></span>
                                        </div>
                                        <div class="set">
                                            <span class="price">￥{{good.price}}</span>
                                            <div class="number-box">
                                                <span :class="['cut ']+[good.number==1?'disable':'']" @click="cutGood(good)">-</span>
                                                <span class="val" @click="inputGood(good)">{{good.number}}</span>
                                                <span class="add" @click="addGood(good)">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="remove" ref='remove' @click="deleteGood(good)">
                                <i class="icon iconfont icon-shanchu"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="lose goodList" v-if="loseList.length>0">
                    <ul class="itemList">
                        <li class="title">
                            <span>失效宝贝{{loseList.length}}件</span>
                            <a class="close" @click="clearLose" href="javascript:;">清除失效宝贝</a>
                        </li>
                        <li class="item" v-for="lose,index in loseList" :key="index">
                            <div class="content" ref="content" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
                                <div class="sys"><span class="key">失效</span></div>
                                <div class="good">
                                    <div class="cover"><img :src="lose.cover" class="response-img" alt=""></div>
                                    <div class="info-box">
                                        <div class="info">
                                            <span class="name">{{lose.name}}</span>
                                            <!-- <span class="number">X{{lose.number}}</span> -->
                                            <p class="desc">{{lose.desc}}</p>
                                        </div>
                                        <div class="set">
                                            <span class="price">￥{{lose.price}}</span>
                                            <!-- <div class="number-box">
                                                <span :class="['cut ']+[lose.number==1?'disable':'']" @click="cutGood(lose)">-</span>
                                                <span class="val" @click="inputGood(lose)">{{lose.number}}</span>
                                                <span class="add" @click="addGood(lose)">+</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="remove" ref='remove' @click="deleteGood(lose)">
                                <i class="icon iconfont icon-shanchu"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shopping-btnBox">
                <div class="sys">
                    <div class="help-text">
                        <div :class="['input-checkbox ']+[allgood?'on':'']">
                            <input type="checkbox" name="allorder" :value="allgood" @click="allCheck">
                        </div>
                        已选<span class="help-number">{{orderList.length}}</span>
                    </div>
                </div>
                <div class="price">
                    <div class="help-text">应付:￥<span class="help-price"><span class="val">{{onPrice.toFixed(2)}}</span></span></div>
                </div>
                <div :class="['btn '] +[!orderState?'disable':'']"><a href="javascript:;" @click='action' class="order-btn">{{edit?'删除':'下单'}}</a></div>
            </div>
        </template>
        <template v-else>
            <div class="error-box">
                <div class="error-icon">
                    <img :src="'./static/img/shoping.png'" alt="">
                </div>
                <div class="error-help">这里有全球一万件好货</div>
                <div class="goshopping">
                    <router-link class="goBtn" :to="{name:'Index'}">去挑选</router-link>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import headerBar from '@/components/header/headerBar'
export default {
    components: {
        'header-bar': headerBar
    },
    name: 'shoppingCart',
    data() {
        return {
            selectIndex: null,
            BH: document.documentElement.clientHeight + 'px',
            startX: 0, //触摸位置
            endX: 0, //结束位置
            moveX: 0, //滑动时的位置
            disX: 0, //移动距离
            deleteSlider: '', //滑动时的效果,使用v-bind:style="deleteSlider"
            edit: false,
            orderState: false,
            goodList: [
                { id: 1, check: false, cover: './static/img/good.jpg', name: '男士纯棉收口圆领T恤男士纯棉收口圆领T恤', desc: '蓝灰; M (175~180)', price: 79.88, number: 1, state: true },
                { id: 2, check: false, cover: './static/img/good1.jpg', name: '日式色织水洗棉格纹四件...新款', desc: '深灰; 1.5M (床尺寸)', price: 279.88, number: 1, state: true },
                { id: 3, check: false, cover: './static/img/good2.jpg', name: '男士纯棉收口圆领T恤', desc: '深灰; 1.5M (床尺寸), 蓝灰; M (175~180), 深灰; 1.5M (床尺寸)', price: 179.88, number: 1, state: true },
                { id: 4, check: false, cover: './static/img/good3.jpg', name: '男士纯棉收口圆领T恤', desc: '蓝灰; M (175~180)', price: 169.88, number: 1, state: true },
                { id: 5, check: false, cover: './static/img/good4.jpg', name: '日式色织水洗棉格纹四件...新款', desc: '蓝灰; M (175~180)', price: 159.88, number: 1, state: true },
                { id: 6, check: false, cover: './static/img/good1.jpg', name: '男士纯棉收口圆领T恤', desc: '蓝灰; M (175~180)', price: 159.88, number: 1, state: false },
                { id: 7, check: false, cover: './static/img/good2.jpg', name: '日式色织水洗棉格纹四件...新款', desc: '蓝灰; M (175~180)', price: 169.88, number: 1, state: false },
                { id: 8, check: false, cover: './static/img/good3.jpg', name: '男士纯棉收口圆领T恤', desc: '蓝灰; M (175~180)', price: 179.88, number: 1, state: false },
                { id: 9, check: false, cover: './static/img/good4.jpg', name: '日式色织水洗棉格纹四件...新款', desc: '深灰; 1.5M (床尺寸)', price: 279.88, number: 1, state: false },
                { id: 10, check: false, cover: './static/img/good.jpg', name: '男士纯棉收口圆领T恤', desc: '蓝灰; M (175~180)', price: 79.88, number: 1, state: false }
            ],
            loseList: [],
            allgood: false,
            orderList: [],
            editList: [],
            payList: [],
            onPrice: 0.00,
        }
    },
    watch: {
        orderList: function(val, oldVal) {
            if (val.length > 0) {
                this.orderState = true;
            } else {
                this.orderState = false;
            }
        },
        edit: function (val,oldVal) {
            for (var i = 0; i < this.goodList.length; i++) {
                this.goodList[i].check = false;
            }
            this.allgood = false;
        }
    },
    props: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        this.getData();
        // this.goodList = [];
        console.log(this.goodList);
        this.$nextTick(function() {
        });
    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {
        touchStart(ev) {
            ev = ev || event
            //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
            if (ev.touches.length == 1) {
                // 记录开始位置
                this.startX = ev.touches[0].clientX;
            }
        },
        touchMove(ev) {
            ev = ev || event;
            var el = ev.currentTarget;
            //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
            let wd = this.$refs.remove[0].offsetWidth || this.$refs.remove[0].scrollWidth;
            if (ev.touches.length == 1) {
                // 滑动时距离浏览器左侧实时距离
                this.moveX = ev.touches[0].clientX
                //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
                this.disX = this.startX - this.moveX;
                // console.log(this.disX)
                // 如果是向右滑动或者不滑动，不改变滑块的位置
                if (this.disX < 0 || this.disX == 0) {
                    this.deleteSlider = "transform:translateX(0px)";
                    el.style = this.deleteSlider;
                    // 大于0，表示左滑了，此时滑块开始滑动 
                } else if (this.disX > 0) {
                    //具体滑动距离我取的是 手指偏移距离*5。
                    this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";
                    el.style = this.deleteSlider;
                    // 最大也只能等于删除按钮宽度 
                    if (this.disX * 5 >= wd) {
                        this.deleteSlider = "transform:translateX(-" + wd + "px)";
                        el.style = this.deleteSlider;
                    }
                }
            }
        },
        touchEnd(ev) {
            ev = ev || event;
            var el = ev.currentTarget;
            let wd = this.$refs.remove.offsetWidth || this.$refs.remove[0].scrollWidth;
            if (ev.changedTouches.length == 1) {
                let endX = ev.changedTouches[0].clientX;
                this.disX = this.startX - endX;
                // console.log(this.disX)
                //如果距离小于删除按钮一半,强行回到起点
                if ((this.disX * 5) < (wd / 2)) {
                    this.deleteSlider = "transform:translateX(0px)";
                    el.style = this.deleteSlider;
                } else {
                    //大于一半 滑动到最大值
                    this.deleteSlider = "transform:translateX(-" + wd + "px)";
                    el.style = this.deleteSlider;
                }
            }
        },
        /**
         * 获取数据
         * @return {[type]} [description]
         */
        getData() {
            var arr = [];
            for (var i = 0; i < this.goodList.length; i++) {
                if (this.goodList[i].state) {
                    arr.push(this.goodList[i]);
                } else {
                    this.loseList.push(this.goodList[i]);
                }
            }
            this.goodList = arr;
        },
        /**
         * 商品-1;
         * @param  {[type]} _good [description]
         * @return {[type]}       [description]
         */
        cutGood(_good) {
            if (_good.number > 1) {
                _good.number--;
                this.payMoney();
            }
        },
        inputGood(_good) {},
        /**
         * 商品+1
         * @param {[type]} _good [description]
         */
        addGood(_good) {
            _good.number++;
            this.payMoney();
        },
        /**
         * 删除购物车商品
         * @return {[type]}       [description]
         */
        deleteGood(_good, ev) {
            ev = ev || event;
            var el = ev.currentTarget;
            el.parentNode.firstChild.style = "transform:translateX(0px)";
            for (var i = 0; i < this.goodList.length; i++) {
                if (this.goodList[i].id == _good.id) {
                    this.goodList.splice(i, 1);
                }
            }
            for (var i = 0; i < this.loseList.length; i++) {
                if (this.loseList[i].id == _good.id) {
                    this.loseList.splice(i, 1);
                }
            }
        },
        /**
         * 切换状态
         * @return {[type]} [description]
         */
        switchState() {
            (this.edit ? this.edit = false : this.edit = true);
        },
        /**
         * 清空失效宝贝
         * @return {[type]} [description]
         */
        clearLose() {
            this.loseList = [];
            console.log('清空失效宝贝');
        },
        /**
         * 需要商品
         * @param  {[type]} _good [description]
         * @return {[type]}       [description]
         */
        selectCheck(_good,ev) {
            _good.check = !_good.check;
            if (_good.check) {
                this.orderList.push(_good);
            } else {
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].id == _good.id) {
                        this.orderList.splice(i, 1);
                    }
                }
            }
            this.payMoney();
        },
        /**
         * 全选商品
         */
        allCheck(ev){
            // ev = ev || event;
            // var el = ev.currentTarget;
            this.allgood = ! this.allgood;
            if(this.allgood){
                this.orderList = [];
                for (var i = 0; i < this.goodList.length; i++) {
                    this.goodList[i].check = true;
                    this.orderList.push(this.goodList[i]);
                }
                // el.parentNode.setAttribute('class','input-checkbox on');
            }else{
                this.orderList = [];
                for (var i = 0; i < this.goodList.length; i++) {
                    this.goodList[i].check = false;
                }
                // el.parentNode.setAttribute('class','input-checkbox');
            }
            this.payMoney();
        },
        /**
         * 支付金额
         * @return {[type]} [description]
         */
        payMoney() {
            this.onPrice = 0;
            for (var i = 0; i < this.orderList.length; i++) {
                this.onPrice = this.onPrice + this.orderList[i].price * this.orderList[i].number;
            }
        },
        /**
         * 下单 / 删除宝贝
         * @return {[type]} [description]
         */
        action() {
            if (this.edit) {
                for (var i = 0; i < this.goodList.length; i++) {
                    for (var j = 0; j < this.orderList.length; j++) {
                        if(this.orderList[j].id == this.goodList[i].id){
                            this.goodList.splice(i,1);
                            this.orderList.splice(j,1);
                        }
                    }
                }
                console.log('删除成功');
            } else {
                console.log('下单成功');
            }
            console.log(this.orderList);
        }
    }

}
</script>
<style scoped>
.shoppingCart { background-color: #f4f4f4; }
.shoppingCart .input-checkbox { width: 1.5rem; height: 1.5rem; border: 1px solid gray; border-radius: 50%; display: inline-block; box-sizing: border-box; vertical-align: middle; position: relative; }
.shoppingCart .input-checkbox.on { border-color: #ff4342; border-width: .25rem; background-color: #ff4342; } 
.shoppingCart .input-checkbox.on:before,
.shoppingCart .input-checkbox.on:after { position: absolute; content: ''; display: block; height: 1px; background-color: white; }
.shoppingCart .input-checkbox.on:before { width: 30%; left: 25%; top: 60%; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg); } 
.shoppingCart .input-checkbox.on:after { width: 60%; right: 5%; top: 50%; -webkit-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg); } .shoppingCart .input-checkbox input[type='checkbox'] { opacity: 0; position: absolute; left: 0; top: 0; width: 100%; height: 100%; }
.shoppingCart > * { box-sizing: border-box; }
.shoppingCart .menu { position: fixed; width: 100%; height: 3.8rem; line-height: 3.6rem; padding: 0 1rem; box-sizing: border-box; border-top: 1px solid #f5f5f5; border-bottom: .5px solid #f5f5f5;  background-color: white; z-index: 10; }
.shoppingCart .menu a.btn { display: block; color: #242424; font-size: 1.5rem; }
.shoppingCart .menu a.btn.right { float: right; }
.shoppingCart .shopping-conentBox { position: fixed; top: 7.6rem; right: 0; bottom: 4.5rem; left: 0; overflow-y: scroll; padding-bottom: 1rem; }
.shoppingCart .shopping-btnBox { position: fixed; width: 100%; bottom: 0; height: 4.5rem; line-height: 4.5rem; background-color: white; box-sizing: border-box; }
.shoppingCart .shopping-btnBox:after { content: ''; clear: both; display: block; }
.shoppingCart .shopping-btnBox .sys { padding-left: 1.5rem; display: inline-block; width: calc(100% - 23rem); box-sizing: border-box; float: left; text-align: left; }
.shoppingCart .shopping-btnBox .sys .input-checkbox { display: inline-block; vertical-align: middle; }
.shoppingCart .shopping-btnBox .sys .help-text { color: #333333; font-size: 1.3rem; }
.shoppingCart .shopping-btnBox .sys .help-number:before { content: '('; display: inline-block; margin-left: .5rem; }
.shoppingCart .shopping-btnBox .sys .help-number:after { content: ')'; display: inline-block; }
.shoppingCart .shopping-btnBox .price { display: inline-block; width: 11rem; text-align: right; box-sizing: border-box; padding-right: 1rem; float: left; }
.shoppingCart .shopping-btnBox .price .help-text { color: #ff4342; font-size: 1.4rem; }
.shoppingCart .shopping-btnBox .btn { display: inline-block; background-color: #ff4342; width: 12rem; text-align: center; float: right; }
.shoppingCart .shopping-btnBox .btn a.order-btn { color: white; font-size: 1.4rem; }
.shoppingCart .shopping-btnBox .btn.disable { background-color: #cccccc; }
.shoppingCart .goodList .item { background-color: white; height: 10rem; margin-bottom: 1rem; position: relative; user-select: none; }
.shoppingCart .goodList .item:first-child { border-top: 1rem solid #f4f4f4; }
.shoppingCart .goodList .item .content { position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: 100; transition: 0.3s; overflow: hidden; padding: 1.5rem; box-sizing: border-box; background-color: white; }
.shoppingCart .goodList .item .remove { position: absolute; width: 6.5rem; height: 10rem; overflow: hidden; background-color: #ff4342; right: 0; top: 0; color: #fff; text-align: center; font-size: 2rem; line-height: 10rem; }
.shoppingCart .goodList .item .remove i.icon { font-size: 1.67rem;  }
.shoppingCart .goodList .item:after { content: ''; clear: both; display: block; }
.shoppingCart .goodList.lose .title { height: 4.2rem; line-height: 4.2rem; padding: 0 1.5rem; box-sizing: border-box; background-color: white; position: relative; }
.shoppingCart .goodList.lose .title:after { content: ''; display: block; width: calc(100% - 3rem); height: 1px; background-color: #f7f7f7; position: absolute; left: 1.5rem; bottom: 0; }
.shoppingCart .goodList.lose .title span { color: #333333; font-size: 1.2rem; }
.shoppingCart .goodList.lose .title a.close { float: right; color: #ff4342; font-size: 1.2rem; }
.shoppingCart .goodList.lose .item { padding-left: .5rem; margin-bottom: 1px; }
.shoppingCart .goodList.lose .item .sys { width: 3rem; text-align: center; margin-left: -1rem; }
.shoppingCart .goodList.lose .item .sys span.key { background-color: #999999; color: white; font-size: .8rem; padding: .25rem; border-radius: .25rem; }
.shoppingCart .goodList.lose .item .good { width: calc(100% - 2rem); }
.shoppingCart .goodList.lose .item .info-box * { color: #999999 !important; }
.shoppingCart .goodList .sys { float: left; width: 2rem; height: 7rem; line-height: 7rem; display: inline-block; }
.shoppingCart .goodList .sys input { width: 1.5rem; height: 1.5rem; }
.shoppingCart .goodList .good { display: inline-block; float: left; width: calc(100% - 2rem); }
.shoppingCart .goodList .good .cover { width: 7rem; height: 7rem; display: inline-block; float: left; }
.shoppingCart .goodList .good .info-box { width: calc(100% - 7rem); display: inline-block; float: left; }
.shoppingCart .goodList .good .info-box .info-desc { height: 4.3rem; padding-left: 1rem; padding-right: 1.5rem; }
.shoppingCart .goodList .good .info-box .info-desc span.desc { line-height: 3rem; font-size: 1.4rem; color: #666666; display: inline-block; width: 100%; text-align: right; white-space: nowrap; overflow: hidden; -ms-text-overflow: ellipsis; text-overflow: ellipsis; }
.shoppingCart .goodList .good .info-box .info-desc span.right { float: right; color: #000000; margin-right: -1.5rem; line-height: 3rem; }
.shoppingCart .goodList .good .info,
.shoppingCart .goodList .good .set { display: block; width: 100%; box-sizing: border-box; padding-left: 1rem; }
.shoppingCart .goodList .good .info { line-height: 2.2rem; }
.shoppingCart .goodList .good .info span.name { color: #666666; font-size: 1.4rem; vertical-align: bottom; display: inline-block; width: calc(100% - 3rem); overflow: hidden; -ms-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }
.shoppingCart .goodList .good .info span.number { color: #333333; font-size: 1.2rem; float: right; vertical-align: bottom; display: inline-block; }
.shoppingCart .goodList .good .info p.desc { color: #666666; font-size: 1.2rem; width: 100%; padding-right: 3.5rem; box-sizing: border-box; overflow: hidden; white-space: nowrap; -ms-text-overflow: ellipsis; text-overflow: ellipsis; display: block; }
.shoppingCart .goodList .good .set { margin-top: .5rem; height: 2.2rem; line-height: 2.2rem; }
.shoppingCart .goodList .good .set span.price,
.shoppingCart .goodList .good .set .number-box { display: inline-block; vertical-align: middle; }
.shoppingCart .goodList .good .set span.price { color: #333333; font-size: 1.2rem; }
.shoppingCart .goodList .good .set .number-box { border-right: none; box-sizing: border-box; float: right; letter-spacing: 0; }
.shoppingCart .goodList .good .set .number-box span.val { width: 3.5rem; }
.shoppingCart .goodList .good .set .number-box span.disable { border-color: #e5e5e5; }
.shoppingCart .goodList .good .set .number-box span { float: left; display: inline-block; width: 2.2rem; height: 2.2rem; text-align: center; line-height: 1.9rem; border: 1px solid #b2b2b2; border-right: none; font-size: 1rem; margin: 0; box-sizing: border-box; }
.shoppingCart .goodList .good .set .number-box span:last-child { border-right: 1px solid #b2b2b2; }
.shoppingCart img.response-img { width: 100%; min-height: 100%; height: auto; }
.shoppingCart .error-box { position: fixed; top: 50%; left: 8rem; right: 8rem; height: 36rem; margin-top: -22rem; text-align: center; }
.shoppingCart .error-box .error-icon { margin-bottom: 1rem; margin-left: 1rem; }
.shoppingCart .error-box .error-icon img { width: 90%; height: auto; min-height: 90%; }
.shoppingCart .error-box .error-help { color: #666666; font-size: 1.35rem; line-height: 1.8rem; text-align: center; margin-bottom: 1rem; }
.shoppingCart .error-box .goshopping  {}
.shoppingCart .error-box .goshopping .goBtn { width: 9.5rem; display: block; margin: 0 auto; border-radius: .25rem; text-align: center; height: 3.75rem; line-height: 3.75rem; box-sizing: border-box; border: 1px solid #999; color: #333; font-size: 1.2875rem; }
</style>