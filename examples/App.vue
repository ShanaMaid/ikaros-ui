<template>
  <div id="app" v-if="flag">
    <div class="top">
      <div class="nav">
        <h1 class="title">IKAROS UI</h1>
        <div class="link">
          <router-link to="/">首页</router-link>
          <router-link to="docs">文档</router-link>
          <router-link to="index">变更记录</router-link>
          <router-link to="index">Github</router-link>
          <router-link to="index">关于</router-link>
        </div>
      </div>
    </div>
    <div class="child">
      <router-view/>
    </div>
  </div>
  <div v-else>
  	<router-view/>
  </div>
</template>
<script>
export default {
	name: 'app',
	computed: {
		flag () {
			return this.$route.fullPath.match('phone') === null
		}
	}
}
</script>
<style lang="less">
@import '../src/styles/index.less';
</style>
<style lang="less" scoped>
#app {
  background-color: #dddddd;
	min-height: 600px;
	overflow: hidden;
}

.top {
  height: 60px;
  background-color: black;
}

.nav {
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  margin:0 auto;
}

.title {
  display: inline-block;
  font-size: 25px;
  color: white;
  float: left;
	font-weight: bold;
	margin:0;
}

.link {
  float: right;
}

.link a {
  font-size: 18px;
  margin: 5px;
  display: inline-block;
  color: white;
}

</style>

