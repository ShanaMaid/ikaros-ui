<template>
    <div class="container">
			<h1 class="title">IKAROS UI</h1>
			<p class="des">一个基于Vue 2.0的通用轻量级移动端组件库</p>
			<img class="url" src ="static/img/url.png"/>
			<div class="github">
				<img style="display:inline-block" src="https://img.shields.io/github/stars/ShanaMaid/ikaros-ui.svg?style=social&amp;label=Stars&amp;maxAge=2592000">
				<img style="display:inline-block" src="https://img.shields.io/github/forks/ShanaMaid/ikaros-ui.svg?style=social&amp;label=Forks&amp;maxAge=2592000">
			</div>
    </div>
</template>
<script>
export default {
    name: 'index'
}
</script>
<style scoped>
.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  height: calc(100vh - 60px);
  min-height: 500px;
  text-align: center;
}

.title {
	font-size: 40px;
	color: #e59a96;
	margin: 20px 0;
}

.des {
	font-size: 20px;
}

.url {
	width: 150px;
	height: 150px;
	margin: 50px 0;
}
</style>

