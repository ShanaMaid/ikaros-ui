<template>
  <div class="container">
    <div class="left">
			<ul class="list">
				<li>
					<h2 class="title">开始使用</h2>
					<ul>
						<list-item to="des" name="概述" />
						<list-item to="usage" name="配置与使用" />
					</ul>
				</li>
				<li>
					<h2 class="title">组件</h2>
					<ul>
						<list-item to="" name="accordion（折叠面板）" />
						<list-item to="" name="actionsheet（操作表）" />
						<list-item to="" name="badges（数字角标）" />
						<list-item to="" name="buttons（按钮）" />
						<list-item to="" name="cardview（卡片视图）" />
						<list-item to="" name="checkbox（复选框）" />
						<list-item to="" name="dialog（消息框）" />
						<list-item to="" name="gallery（图片轮播）" />
						<list-item to="" name="grid（栅格）" />
						<list-item to="" name="icon（图标）" />
						<list-item to="" name="input（输入表单）" />
						<list-item to="" name="list（列表）" />
						<list-item to="" name="mask（遮罩蒙版）" />
						<list-item to="" name="number box（数字输入框）" />
						<list-item to="" name="offcanvas（侧滑菜单）" />
						<list-item to="" name="popover（弹出菜单）" />
						<list-item to="" name="picker（选择器）" />
						<list-item to="" name="progressbar（进度条）" />
						<list-item to="" name="transparentBar（透明状态栏）" />
						<list-item to="" name="radio（单选框）" />
						<list-item to="" name="range（滑块）" />
						<list-item to="" name="scroll（区域滚动）" />
						<list-item to="" name="slide（轮播组件）" />
						<list-item to="" name="switch（开关）" />
					</ul>
				</li>
			</ul>
    </div>
    <div class="right">
			<div class="md">1</div>
			<div class="mobile">2</div>
    </div>
  </div>
</template>
<script>
import ListItem from '../components/itemSelected.vue'
export default {
		name: 'Docs',
		components: {
			'list-item': ListItem
		}
}
</script>
<style scoped>
.container {
	width: 90%;
	margin: 20px auto;
	background-color: white;
	min-width: 1024px;
	display: flex;
	padding: 30px 0;
}

.left {
	border-right: 1px solid #dddddd;
	margin-right: 20px;
	min-width: 200px;
}

.right {
	width: 80%;
	flex-grow: 1;
	display: flex;
}

.md {
	width: calc(100% - 360px);
	padding: 20px;
}

.mobile {
	width: 360px;
	height: 620px;
	background-color: red;
}

.title {
	font-size: 18px;
	font-weight: 500;
	color: #333;
	text-indent: 20px;
	margin: 10px 0;
}
</style>

