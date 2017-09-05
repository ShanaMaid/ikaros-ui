<template>
	<div class="phone">
		<div class="phone-header">
			<div>
				<img style="width:100%;" src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" />
			</div>
			<div class="url">
				<div class="url-box">
					{{url}}
				</div>
			</div>
		</div>
		<iframe class="content" :src="url" />
	</div>
</template>
<script>
export default{
	props: ['url']
}
</script>
<style lang="less" scoped>
.phone {
	border-radius: 4px;
	overflow: hidden;
}

.phone-header {
	background: linear-gradient(rgba(55,55,55,.98),#545456);
}

.url {
	padding: 10px 20px;
}
.url-box {
	background-color: #a2a2a2;
	border-radius: 4px;
	height: 28px;
	line-height: 28px;
	color: white;
	white-space: nowrap;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
}

.content {
	width:100%;
	height:600px;
	border: none;
	&::-webkit-scrollbar {
		display: none;
	}
}
</style>

