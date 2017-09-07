<template>
	<div>
		<h1 class="title">
			<router-link to="/phone">
				<ik-icon type="home" 	/>
			</router-link>
			Icon-图标
		</h1>
		<div>
			<h2>基本</h2>
			<div class="box">
				<div v-for="item in iconName" :key="item.name">
					<ik-icon :type="item.name" 	size="32"/>
					<p>{{item.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import iconName from './iconName.js'
export default {
	data () {
		return {
			iconName
		}
	}
}
</script>

<style lang="less" scoped>
.title {
	font-size: 20px;
}

.box {
	display: flex;
	flex-wrap: wrap;
	div {
		width: 50%;
		padding: 20px;
		text-align: center;
	}
}
</style>

