<template>
  <li class="item" :class="active">
		<router-link to="11212" >
			{{name}}
		</router-link>
	</li>
</template>
<script>
export default {
	props: [
		'to',
		'name'
	],
	computed: {
		active () {
			return this.$route.name === this.to ? 'active' : ''
		}
	}
}
</script>
<style lang="less" scoped>
.item {
	padding: 10px 0 10px 40px;
	font-size: 16px;
}
.active {
	background-color: rgba(229, 154, 154, 0.2);
	border-right: 4px solid #e59a96;
	a {
		color: black;
		font-weight: bold;
	}
}
</style>


