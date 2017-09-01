<template>
  <div id="app">
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
</template>

<script>
export default {
  name: 'app'
}
</script>

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
