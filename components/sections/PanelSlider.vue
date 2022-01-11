<template>
	<section class="panel-slider">
		<div class="slider">
			<div class="slider-wrapper">
				<article v-for="panel in panels" :key="panel._id">
					<div class="text">
						<h3 class="title">{{ panel.title }}</h3>
						<div class="rich_text description">
							<SanityContent :blocks="panel.description" />
						</div>
						<div class="links">
							<n-link exact :to="`/projects#${panel.uid}`">Объекты с {{ panel.title }}</n-link>
							<n-link exact :to="`/${panel.uid}`">Подробнее</n-link>
						</div>
					</div>
					<SanityImage :asset-id="`${panel.poster}?w=200`" />
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PanelSlider',
	props: {
		panelItems: {
			type: Array,
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
			console.log(panelData)
			const query = '*[_id in $ids]{"uid": uid.current, _id, title, description, "poster": poster.asset._ref}'
			const params = { ids: panelData }

			await this.$sanity.fetch(query, params).then((data) => {
				console.log(data)
				this.panels = data
			})
		},
	},
}
</script>

<style lang="scss" scooped>
$article-width: 16rem;
$transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);

.panel-slider {
	padding-top: 50px;
	padding-bottom: 50px;
	overflow-x: hidden;
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
@media (max-width: 600px) {
	.panel-slider .content .slider {
		margin-left: 0;
	}
}
</style>
