<template>
	<div class="container panel_post">
		<IntroPanel :data="intro" />
		<!-- <div v-for="(slice, i) in panel.data.body" :key="slice.slice_type + i">
		</div> -->
		<div v-for="(slice, i) in slices" :key="slice.slice_type + i">
			<HomeIntro v-if="slice.slice_type == 'homeintro'" :data="slice" />
			<Stages v-else-if="slice.slice_type == 'stages'" :data="slice" />
			<TitleText v-else-if="slice.slice_type == 'title_text'" :data="slice" />
			<PanelSlider v-else-if="slice.slice_type == 'panelslider'" :data="slice" />
			<Partners v-else-if="slice.slice_type == 'partners'" :data="slice" />
			<Cta v-else-if="slice.slice_type == 'cta'" :data="slice" />
			<!-- <Achievements v-else-if="slice.slice_type == 'achievements'" :data="slice" /> -->
			<section v-else-if="slice.slice_type == 'video_text'" class="video_text">
				<div class="left_text">
					<prismic-rich-text :field="slice.primary.left_text" />
				</div>
				<div class="video">
					<div class="play" @click="OpenModal">
						<Icon name="play" fill="white" />
					</div>
					<ImageItem :data="slice.primary.cover" />
					<ModalVideo :data="slice.primary.video_link" />
				</div>
				<div class="right_text">
					<prismic-rich-text :field="slice.primary.right_text" />
				</div>
			</section>
			<Faq v-else-if="slice.slice_type == 'faq'" :data="slice" />
			<section v-else-if="slice.slice_type == 'text'" class="plain-text">
				<div class="content rich_text">
					<prismic-rich-text :field="slice.primary.plain_text" />
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		data() {
			const fetch = this.$store.getters.panels.results.filter((el) => {
				return el.uid === this.$route.params.panel_post ? el : false
			})
			return fetch[0]
		},
		intro() {
			// const fetch = this.$store.getters.panels.results.filter((el) => {
			// 	return el.uid === this.$route.params.panel_post ? el : false
			// })
			return {
				title: this.data.data.title,
				image: this.data.data.main_image,
			}
		},
		slices() {
			return this.data.data.body
		},
	},
	methods: {
		OpenModal() {
			this.$store.dispatch('bindModalVideo', true)
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	picture {
		max-width: 50%;
		min-height: 400px;
		// margin: 100px 0;
	}
	.video_text {
		display: flex;
		align-items: stretch;
		// padding-top: 3rem;
		padding-bottom: 2rem;
		.video {
			width: 40%;
			// max-height: 450px;
			position: relative;
			border: 3px solid $primary-dark;
			.play {
				z-index: 4;
				display: flex;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				height: min-content;
				border-radius: 50%;
				padding: 20px;
				background: $secondary;
				cursor: pointer;
				svg {
					filter: drop-shadow(-1px 0px 10px #882523);
					margin-right: -4px;
					margin-top: -5px;
				}
			}

			picture {
				width: 100%;
				max-width: 100%;
				max-height: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.right_text,
		.left_text {
			padding: 40px 50px;
			text-align: justify;
			position: relative;
			width: 30%;
			display: flex;
			align-items: center;
			&::before,
			&::after {
				content: '';
				display: block;
				position: absolute;
				transform: translateX(-50%);
				left: 50%;
				width: 20%;
				height: 2px;
				background-color: $secondary;
			}
			&::after {
				bottom: 0;
			}
			&::before {
				top: 0;
			}
		}
	}
}
</style>
