<template>
	<aside>
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
		<n-link exact :to="'/'">
			<Logo />
		</n-link>
	</aside>
</template>

<script>
// import Logo from './Logo.vue'
import { messengersAnim } from '~/assets/anime'

export default {
	// components: { Logo },
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
	width: 100px;
	height: 100vh;
	background-color: transparent;
	position: fixed;
	z-index: 22;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.messengers {
		position: absolute;
		top: 2.5rem;
		left: 50%;
		transform: translatex(-50%);
		li {
			list-style-type: none;
			opacity: 0;
			margin-bottom: 1rem;
		}
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
@media (max-width: 600px) {
	aside {
		width: 30px;
	}
}
</style>
