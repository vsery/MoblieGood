<!-- 模型：
    DOM 结构
-->
<template>
    <div class="footprint" :style="{height:bodyHeight}">
        <div class="header">
            <header-bar :isWhite="false"></header-bar>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class="box" v-for="itemTime in goodList">
                <p class="time">{{ itemTime.time }}</p>
                <ul>
                    <li class="item" v-for="item,index in itemTime.data">
                        <div class="cover"><img :src="item.cover" alt=""></div>
                        <div class="body">
                            <div class="good-name">{{item.name}}男士纯棉收口圆领T恤男士纯棉收口圆领T恤男士纯棉收口圆领T恤男士纯棉收口圆领T恤男士纯棉收口圆领T恤</div>
                            <div class="good-desc">
                                <div class="desc ellipsis">{{item.desc}}男士纯棉收口圆领T恤男士纯棉收口圆领T恤男士纯棉收口圆领T恤男士纯棉收口圆领T恤男士纯棉收口圆领T恤</div>
                            </div>
                            <div class="good-price ellipsis">￥{{item.price}}.00</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<!-- 增加 "scoped" 属性 限制 CSS 属于当前部分 -->
<style scoped>
    .footprint {
        background-color: #f4f4f4;
    }
    
    .footprint .box {
        background-color: #fff;
        padding-bottom: 1.5rem;
    }
    
    .footprint ul {
        background-color: transparent;
    }
    
    .footprint ul li.item {
        background-color: white;
        width: 100%;
        padding: 1rem 1.5rem;
        box-sizing: border-box;
    }
    
    .footprint ul li.item:after {
        content: '';
        display: block;
        clear: both;
    }
    
    .footprint ul li.item .cover {
        width: 7.5rem;
        height: 7.5rem;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        float: left;
        border-radius: 0.3rem;
    }
    
    .footprint ul li.item .cover img {
        width: 100%;
        min-height: 100%;
        height: auto;
    }
    
    .footprint ul li.item .body {
        width: calc(100% - 7.5rem);
        height: 7.5rem;
        vertical-align: top;
        display: inline-block;
        float: left;
        letter-spacing: .75px;
    }
    
    .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    
    .footprint ul li.item .body .good-name,
    .footprint ul li.item .body .good-desc,
    .footprint ul li.item .body .good-price {
        padding: 0 1rem;
        box-sizing: border-box;
    }
    
    .footprint ul li.item .body .good-name {
        height: 4rem;
        line-height: 2rem;
        color: #333;
        font-size: 1.35rem;
        font-weight: 500;
        color: #000000;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    
    .footprint ul li.item .body .good-price {
        color: #333;
        font-size: 1.35rem;
        font-weight: 500;
        line-height: 2rem;
        color: #ff4243;
    }
    
    .footprint ul li.item .body .good-desc .desc {
        color: #666;
        font-size: 1.17rem;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    
    .footprint ul li.item .body .good-desc .integral {
        float: right;
        font-size: 1.17rem;
        vertical-align: top;
        display: inline-block;
        height: 2.6rem;
        line-height: 1.67rem;
        border: 1px solid #eee;
        border-radius: .7rem;
        padding: .5rem;
        box-sizing: border-box;
        background-color: white;
    }
    
    .footprint ul li.item .body .good-desc .integral span.red {
        color: #ff4342;
    }
    
    .footprint p {
        padding-left: 1.5rem;
        font-size: 1.35rem;
        line-height: 2rem;
    }
</style>
<script>
    import headerBar from '@/components/header/headerBar'
    export default {
        name: 'footprint', // 结构名称
        components: {
            'header-bar': headerBar
        },
        data() {
            return {
                bodyHeight: document.documentElement.clientHeight + 'px', // 高度
                loadMore: null,
                goodList: [{
                        time: '2017-10-15 23:10:21',
                        data: [{
                                id: 234,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good.jpg',
                                integral: 79,
                                price: 79
                            },
                            {
                                id: 235,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good1.jpg',
                                integral: 138,
                                price: 138
                            },
                            {
                                id: 236,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good4.jpg',
                                integral: 188,
                                price: 188
                            },
                            {
                                id: 237,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good2.jpg',
                                integral: 388,
                                price: 388
                            },
                            {
                                id: 238,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good3.jpg',
                                integral: 79,
                                price: 79
                            },
                            {
                                id: 239,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good5.jpg',
                                integral: 388,
                                price: 388
                            }
                        ]
                    },
                    {
                        time: '2017-10-16 23:10:21',
                        data: [{
                                id: 234,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good.jpg',
                                integral: 79,
                                price: 79
                            },
                            {
                                id: 235,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good1.jpg',
                                integral: 138,
                                price: 138
                            },
                            {
                                id: 236,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good4.jpg',
                                integral: 188,
                                price: 188
                            },
                            {
                                id: 237,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good2.jpg',
                                integral: 388,
                                price: 388
                            },
                            {
                                id: 238,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good3.jpg',
                                integral: 79,
                                price: 79
                            },
                            {
                                id: 239,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good5.jpg',
                                integral: 388,
                                price: 388
                            }
                        ]
                    },
                    {
                        time: '2017-10-17 23:10:21',
                        data: [{
                                id: 234,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good.jpg',
                                integral: 79,
                                price: 79
                            },
                            {
                                id: 235,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good1.jpg',
                                integral: 138,
                                price: 138
                            },
                            {
                                id: 236,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good4.jpg',
                                integral: 188,
                                price: 188
                            },
                            {
                                id: 237,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good2.jpg',
                                integral: 388,
                                price: 388
                            },
                            {
                                id: 238,
                                name: '男士纯棉收口圆领T恤',
                                desc: '色纺精梳棉，色纱立体',
                                cover: './static/img/good3.jpg',
                                integral: 79,
                                price: 79
                            },
                            {
                                id: 239,
                                name: '日式色织水洗棉格纹...四件套... ',
                                desc: '水洗做旧感，纯棉透气',
                                cover: './static/img/good5.jpg',
                                integral: 388,
                                price: 388
                            }
                        ]
                    }
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
            document.title = '我的足迹';
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