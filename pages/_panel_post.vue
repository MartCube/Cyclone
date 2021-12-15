<template>
	<div class="container panel_post">
		test
		<!-- <IntroPanel :data="intro" /> -->
		<!-- <div v-for="(slice, i) in panel.data.body" :key="slice.slice_type + i">
		</div> -->
	</div>
</template>

<script>
import { request } from '~/plugins/datocms'

export default {
	name: 'Panel',
	data: () => ({
		panels: null,
	}),
	async fetch() {
		const query = `
		query {
			allPanels {
				uid
				title
				poster {
					url
				}
			}
		}
		`
		const fetch = await request({
			query,
		})
		this.panels = fetch.allPanels
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
