<template>
	<section class="panel-slider">
		<!-- <div class="content">
			<h2 class="title">Фасадные системы</h2>
			<div class="slider">
				<div class="slider-wrapper">
					<article v-for="panel in panels" :key="panel.node._meta.uid">
						<div class="text">
							<h3 class="title">{{ panel.node.title }}</h3>
							<div class="rich_text description">
								<prismic-rich-text :field="panel.node.description" />
							</div>
							<div class="links">
								<n-link exact :to="`/projects#${panel.node._meta.uid}`">Объекты с {{ panel.node.title }}</n-link>
								<n-link exact :to="`/${panel.node._meta.uid}`">Подробнее</n-link>
							</div>
						</div>
						<ImageItem :src="panel.node.main_image.url" :alt="panel.title" />
					</article>
				</div>
			</div>
		</div> -->
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
	// computed: {
	// 	panels() {
	// 		const panelData = this.$store.getters.panels.filter((el) => {
	// 			return el.node._meta.tags[0] === 'panel_slider' ? el.node : false
	// 		})
	// 		return panelData
	// 	},
	// },
}
</script>

<style lang="scss" scooped>
$article-width: 16rem;
$transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);

.panel-slider {
	padding-top: 50px;
	padding-bottom: 50px;
	overflow-x: hidden;
	.content {
		.slider {
			width: 100%;
			overflow-x: auto;
			scrollbar-color: $secondary $primary-dark;
			scrollbar-width: thin;
			margin-left: 50px;
			padding-bottom: 1rem;
			overflow-y: hidden;
			height: auto;
			&::-webkit-scrollbar {
				width: 5px;
				height: 5px;
			}
			&::-webkit-scrollbar-button {
				width: 0px;
				height: 0px;
			}
			&::-webkit-scrollbar-thumb {
				background: $secondary;
				border: 5px none $secondary;
				border-radius: 50px;
			}
			&::-webkit-scrollbar-thumb:hover {
				background: $gradient-red;
			}
			&::-webkit-scrollbar-thumb:active {
				background: $secondary;
			}
			&::-webkit-scrollbar-track {
				background: $primary-dark;
				border: 5px none $primary-dark;
				border-radius: 50px;
			}
			&::-webkit-scrollbar-track:hover {
				background: $gradient-gray;
			}
			&::-webkit-scrollbar-track:active {
				background: $gradient-gray;
			}
			&::-webkit-scrollbar-corner {
				background: $gradient-gray;
			}
			.slider-wrapper {
				display: inline-flex;
				width: auto;
				article {
					width: $article-width;
					margin: 1rem;
					height: auto;
					padding: 1.5rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					transition: $transition;
					.text {
						display: flex;
						flex-direction: column;
						margin-bottom: 2rem;
						flex: 1;
						justify-content: space-between;
						a {
							color: $white;
							margin-top: 10px;
							font-size: 1rem;
							font-weight: 500;
							text-decoration-thickness: 1.5px;
							&:last-child {
								color: $secondary;
								display: flex;
								width: 100%;
								justify-content: space-between;
							}
							&:hover {
								color: lighten($secondary, 10%);
							}
						}
					}
					.title {
						margin-bottom: 1rem;
						font-size: 1.4rem;
					}
					picture {
						width: 100%;
						height: auto;
					}
					&:hover {
						box-shadow: 0 0 30px 0px $primary-dark;
						transform: scale(1.03);
					}
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.panel-slider .content .slider {
		margin-left: 0;
	}
}
</style>
