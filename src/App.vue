<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
	    this.$nextTick(function() {
	    	//禁止复制
	    	document.body.onselectstart=document.body.oncontextmenu=function(){return false;};
	    });
	},
}
</script>

<style>
/*@import './assets/font/iconfont.css';*/
@import './assets/css/reset.css';
@import './assets/css/base.css';

#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
