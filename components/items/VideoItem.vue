<template>
	<client-only>
		<div class="plyr_video">
			<vue-plyr>
				<div :data-plyr-provider="provider" :data-plyr-embed-id="data"></div>
			</vue-plyr>
		</div>
	</client-only>
</template>

<script>
export default {
	props: {
		data: {
			type: String,
			required: true,
		},
		provider: {
			type: String,
			default: 'youtube',
		},
	},
}
</script>

<style lang="scss">
.plyr_video {
	width: 50%;
}

:root {
	--plyr-color-main: #b93937;
}
</style>
