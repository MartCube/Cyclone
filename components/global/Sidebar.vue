<template>
	<aside>
		<div class="wrapper">
			<ul class="messengers">
				<li>
					<a href="https://www.facebook.com/cyclone.kiev.ua" rel="nofollow" target="_blank">
						<Icon name="facebook" :fill="color" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/cyclone.kiev/" rel="nofollow" target="_blank">
						<Icon name="instagram" :fill="color" />
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/channel/UCrueaE925SkKvspTkq85E2A" rel="nofollow" target="_blank">
						<Icon name="youtube" :fill="color" />
					</a>
				</li>
				<li>
					<a href="tel:0444920530" rel="nofollow" target="_blank">
						<Icon name="phone" :fill="color" />
					</a>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script>
import { messengersAnim } from '~/assets/anime'

export default {
	data: () => ({
		color: '#B93937',
	}),
	computed: {
		isActive() {
			return this.$store.getters.navbarActive
		},
	},
	mounted() {
		messengersAnim(document.querySelectorAll('.messengers li'))
	},
}
</script>
<style lang="scss" scoped>
aside {
	background-color: transparent;
	border-right: 1px solid $secondary;
	position: relative;
	.wrapper {
		z-index: 22;
		width: 20%;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		height: 100vh;
		padding: 2rem;
	}
	.messengers {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		width: 100%;
		li {
			list-style-type: none;
			opacity: 0;
			&::marker {
				display: none;
			}
		}
	}
	.logo {
		width: 100%;
	}
}
@media (max-width: 950px) {
	aside {
		width: 50px;
		.messengers {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			li a svg {
				width: 20px;
				height: 20px;
			}
		}
	}
}
// @media (max-width: 600px) {
// 	aside {
// 		width: 30px;
// 	}
// }
</style>
