<template>
	<div class="video_wrapper">
		<client-only>
			<LazyYoutube :src="url" autoplay="true" />
		</client-only>
	</div>
</template>

<script>
import { LazyYoutube } from 'vue-lazytube'
export default {
	name: 'VideoItem',
	components: {
		LazyYoutube,
		// LazyVimeo,
	},
	props: {
		url: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss">
.video_wrapper {
	width: 100%;
}

:root {
	--plyr-color-main: rgb(255, 196, 36);
}

.ipOhDr {
	max-width: 100% !important;
}

@media (max-width: 900px) {
	.video_wrapper {
		width: 100%;
	}
}
</style>
