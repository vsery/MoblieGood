<template>
    <div id="helpList">
        <div class="content">
            <mt-cell v-for="item,index in itemData" :title="item.name" :key="item.id" is-link @click.native="goDetails(item.id)"></mt-cell>
        </div>
    </div>
</template>
<script>
import { Cell } from 'mint-ui';
export default {
    name: 'helpList',
    data() {
        return {
            itemData: [
                { id: 1, name: '需求发布' },
                { id: 2, name: '需求发布1' },
                { id: 3, name: '需求发布2' },
            ]
        }
    },
    mounted() {
        document.title = '帮助中心';
    },
    methods: {
        goDetails(id) {
            this.$router.push({ name: 'helpDetails', query: { id: id } });
        }
    }
}

</script>
<style scoped>
@import '../../../assets/css/itemCommon.css';
.content .mint-cell:after {
    position: absolute;
    background-color: #E5E5E5;
    content: " ";
    right: 0;
    bottom: 0;
    left: 1.5rem;
    height: 0.1rem;
}

</style>
