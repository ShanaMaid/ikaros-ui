<template>
	<div>
		<markdown-box :text="text"/>
	</div>
</template>
<script>
import zh from './zh.md'
import Markdown from '@/components/markdownElement.vue'
export default {
	data () {
		return {
			text: zh
		}
	},
	components: {
		'markdown-box': Markdown
	}
}
</script>
