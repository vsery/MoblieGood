<!-- 模型：
    DOM 结构
-->
<template>
    <div class="my-collect" :style="{height:bodyHeight}">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li class="item" v-for="item in goodList">
                <div class="cover"><img :src="item.cover" alt=""></div>
                <div class="body">
                    <div class="good-name">{{item.name}}</div>
                    <div class="good-desc">
                        <div class="desc">{{item.desc}}撒地方克鲁格哈商大发挥好hi会发顺丰</div>
                        <div class="integral">赠送<span class="red">{{item.integral}}</span>积分</div>
                    </div>
                    <div class="good-price">￥{{item.price}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
.my-collect { background-color: #f4f4f4; }
.my-collect ul { background-color: transparent; }
.my-collect ul li.item { background-color: white; width: 100%; padding: 1.5rem; margin-bottom: 1rem; box-sizing: border-box; }
.my-collect ul li.item:after { content: ''; display: block; clear: both; }
.my-collect ul li.item .cover { width: 7.5rem; height: 7.5rem; overflow: hidden; display: inline-block; vertical-align: top; float: left; }
.my-collect ul li.item .cover img { width: 100%; min-height: 100%; height: auto; }
.my-collect ul li.item .body { width: calc(100% - 7.5rem); height: 7.5rem; vertical-align: top; display: inline-block; float: left; letter-spacing: .75px; }
.my-collect ul li.item .body .good-name,
.my-collect ul li.item .body .good-desc,
.my-collect ul li.item .body .good-price { height: 2.5rem; line-height: 2.5rem; padding: 0 1rem; box-sizing: border-box; white-space: nowrap; overflow: hidden; -ms-text-overflow: ellipsis; text-overflow: ellipsis; }
.my-collect ul li.item .body .good-name { color: #333; font-size: 1.35rem; font-weight: 500; }
.my-collect ul li.item .body .good-price { color: #333; font-size: 1.35rem; line-height: 3rem; font-weight: 500; }
.my-collect ul li.item .body .good-desc { height: 2.6rem; }
.my-collect ul li.item .body .good-desc .desc { color: #666; font-size: 1.17rem; height: 2.6rem; line-height: 1.3rem; overflow: visible; white-space: pre-line; display: inline-block; width: calc(100% - 8rem); }
.my-collect ul li.item .body .good-desc .integral { float: right; font-size: 1.17rem; vertical-align: top; display: inline-block; height: 2.6rem; line-height: 1.67rem; border: 1px solid #eee; border-radius: .7rem; padding: .5rem; box-sizing: border-box; background-color: white; }
.my-collect ul li.item .body .good-desc .integral span.red { color: #ff4342; }
</style>
<script>
import headerBar from '@/components/header/headerBar'
export default {
    name: 'my-collect', // 结构名称
    components: {
        'header-bar': headerBar
    },
    data() {
        return {
            bodyHeight: document.documentElement.clientHeight + 'px', // 高度
            goodList: [
                { id: 234, name: '男士纯棉收口圆领T恤', desc: '色纺精梳棉，色纱立体', cover: './static/img/good.jpg', integral: 79, price: 79 },
                { id: 235, name: '日式色织水洗棉格纹...四件套... ', desc: '水洗做旧感，纯棉透气', cover: './static/img/good1.jpg', integral: 138, price: 138 },
                { id: 236, name: '男士纯棉收口圆领T恤', desc: '色纺精梳棉，色纱立体', cover: './static/img/good4.jpg', integral: 188, price: 188 },
                { id: 237, name: '日式色织水洗棉格纹...四件套... ', desc: '水洗做旧感，纯棉透气', cover: './static/img/good2.jpg', integral: 388, price: 388 },
                { id: 238, name: '男士纯棉收口圆领T恤', desc: '色纺精梳棉，色纱立体', cover: './static/img/good3.jpg', integral: 79, price: 79 },
                { id: 239, name: '日式色织水洗棉格纹...四件套... ', desc: '水洗做旧感，纯棉透气', cover: './static/img/good5.jpg', integral: 388, price: 388 }
            ]
        }
    },
    watch: {
        // 监控集合
    },
    props: {
        // 集成父级参数
    },
    beforeCreate() {
        // console.group('创建前状态  ===============》beforeCreate');
    },
    created() {
        // console.group('创建完毕状态===============》created');
    },
    beforeMount() {
        // console.group('挂载前状态  ===============》beforeMount');
    },
    mounted() {
        // console.group('挂载结束状态===============》mounted');
        this.$nextTick(function() {
            // console.log('执行完后，执行===============》mounted');
        });
    },
    beforeUpdate() {
        // console.group('更新前状态  ===============》beforeUpdate');
    },
    updated() {
        // console.group('更新完成状态===============》updated');
    },
    beforeDestroy() {
        // console.group('销毁前状态  ===============》beforeDestroy');
    },
    destroyed() {
        // console.group('销毁完成状态===============》destroyed');
    },
    methods: {
        // 方法 集合
    }

}

</script>
