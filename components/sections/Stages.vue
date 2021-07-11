<template>
	<section>
		<div class="content">
			<h2 class="title">{{ data.primary.title }}</h2>
			<template v-if="data.primary.description">
				<prismic-rich-text class="rich_text" :field="data.primary.description" />
			</template>
			<div class="list">
				<div v-for="(stage, i) in data.items" :key="i" class="stage">
					<h2 v-if="i < 9" class="number">0{{ i + 1 }}<span>/</span></h2>
					<h2 v-else class="number">{{ i + 1 }}<span>/</span></h2>
					<div class="info">
						<h3>{{ stage.stage_title }}</h3>
						<p>{{ stage.stage_description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	computed: {
		// description() {
		// 	return this.data.primary.description
		// },
		// title() {
		// 	return
		// },
	},
}
</script>
