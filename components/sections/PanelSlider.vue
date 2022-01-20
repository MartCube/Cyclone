<template>
	<section class="panel-slider">
		<h2>{{ title }}</h2>
		<div class="slider">
			<div class="slider-wrapper">
				<article v-for="panel in panels" :key="panel._id">
					<div class="text">
						<h5 class="title">{{ panel.title }}</h5>
						<div class="description">
							<SanityContent :blocks="panel.description" />
						</div>
						<div class="links">
							<n-link exact :to="`/projects/#${panel.uid}`">Объекты с {{ panel.title }}</n-link>
							<n-link exact :to="`/${panel.uid}/`">Подробнее</n-link>
						</div>
					</div>
					<ImageItem :image="panel.poster" w="200" />
				</article>
			</div>
		</div>
	</section>
</template>

<script>
import { panelSlider } from '@/plugins/queries'

export default {
	name: 'PanelSlider',
	props: {
		panelItems: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		panels: null,
	}),
	mounted() {
		this.getPanels()
	},
	methods: {
		async getPanels() {
			const panelData = this.panelItems.map((el) => {
				return el.panelItem._ref
			})
			// console.log(panelData)
			const query = panelSlider
			const params = { ids: panelData }

			await this.$sanity.fetch(query, params).then((data) => {
				// console.log(data)
				this.panels = data
			})
		},
	},
}
</script>

<style lang="scss" scooped>
$article-width: 22rem;
$transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);

.panel-slider {
	overflow-x: hidden;
	padding: $section-padding;
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
				margin: 0.5rem;
				height: auto;
				padding: 2.5rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				transition: $transition;
				p {
					width: 100%;
					margin: 0;
					padding: 0;
				}
				ul {
					list-style-type: initial;
					margin: 1rem 0;
					padding: 0;
					li {
						// margin: 0 0 0 1rem;
						display: list-item;
						&::before {
							display: none;
						}
					}
				}
				.text {
					display: flex;
					flex-direction: column;
					margin-bottom: 2rem;
					flex: 1;
					justify-content: space-between;
					a {
						color: $white;
						margin-top: 10px;
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
				}
				img {
					width: 90%;
					margin: 0 auto;
					height: auto;
					filter: drop-shadow(0px 4px 11px rgba(26, 26, 26, 1));
				}
				&:hover {
					box-shadow: 0 0 30px 0px $primary-dark;
					transform: scale(1.03);
					background-color: hsl(0deg 0% 19%);
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.panel-slider .slider {
		margin-left: 0;
	}
}
</style>
