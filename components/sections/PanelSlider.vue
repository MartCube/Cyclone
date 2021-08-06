<template>
	<section class="panel-slider">
		<div class="content">
			<h2 class="title">{{ data.primary.title }}</h2>
			<div class="slider">
				<div class="slider-wrapper">
					<article v-for="panel in panels" :key="panel.uid">
						<div class="text">
							<h3 class="title">{{ panel.title }}</h3>
							<div class="rich_text description">
								<prismic-rich-text :field="panel.description" />
							</div>
							<n-link exact :to="`/portfolio#${panel.uid}`">Объекты с {{ panel.title }}</n-link>
							<n-link exact :to="`/${panel.uid}`">Подробнее</n-link>
						</div>
						<ImageItem :src="panel.image" :alt="panel.title" />
					</article>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PanelSlider',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	computed: {
		panels() {
			const panelData = []
			this.$store.getters.panels.forEach((el) => {
				if (el.tags.includes('panel_slider')) {
					// console.log(el)
					panelData.push({
						uid: el.uid,
						title: el.data.title,
						image: el.data.main_image.url,
						description: el.data.description,
						// gallery_images: el.data.body.filter((el) => {
						// 	return el.slice_type === 'short_info' ? el.items : ''
						// }),
					})
				}
			})
			// console.log(panelData)
			return panelData
		},
	},
}
</script>

<style lang="scss" scooped>
$article-width: 18rem;
.panel-slider {
	padding-top: 50px;
	padding-bottom: 50px;
	overflow-x: hidden;
	.content {
		.slider {
			width: 100%;
			overflow-x: auto;
			.slider-wrapper {
				display: inline-flex;
				width: auto;
				article {
					width: $article-width;
					margin-right: 2rem;
					padding: 1rem;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					.text {
						display: flex;
						flex-direction: column;
					}
					.title {
						margin-bottom: 2rem;
					}
					picture {
						width: 90%;
						height: auto;
					}
				}
			}
		}
	}
}
</style>
