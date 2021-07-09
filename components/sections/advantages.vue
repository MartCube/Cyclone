<template>
	<section>
		<div class="name">
			<span>{{ name }}</span>
		</div>
		<div class="content">
			<h2 class="title">{{ title }}</h2>
			<template v-if="data.primary.stages_description">
				<prismic-rich-text class="rich_text" :field="data.primary.stages_description" />
			</template>
			<div class="list">
				<div v-for="(stage, i) in data.items" :key="i" class="stage">
					<h2 v-if="i < 9" class="number">0{{ i + 1 }}<span>/</span></h2>
					<h2 v-else class="number">{{ i + 1 }}<span>/</span></h2>
					<div class="info">
						<h3>{{ $prismic.asText(stage.stage_title) }}</h3>
						<p>{{ $prismic.asText(stage.stage_description) }}</p>
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
		description() {
			return this.data.primary.stages_description
		},
		name() {
			return this.$prismic.asText(this.data.primary.name)
		},
		title() {
			return this.$prismic.asText(this.data.primary.title)
		},
	},
}
</script>

<style lang="scss" scoped></style>
