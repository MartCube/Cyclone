<template>
	<aside>
		<ul class="messengers">
			<li>
				<a href="https://www.facebook.com/cyclone.kiev.ua" rel="nofollow" target="_blank">
					<IconFacebook :fill="color" />
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/cyclone.kiev/" rel="nofollow" target="_blank">
					<IconInstagram :fill="color" />
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/channel/UCrueaE925SkKvspTkq85E2A" rel="nofollow" target="_blank">
					<IconYoutube :fill="color" />
				</a>
			</li>
			<li>
				<a href="tel:0444920530" rel="nofollow" target="_blank">
					<IconPhone :fill="color" />
				</a>
			</li>
		</ul>
		<Logo />
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
	z-index: 5;
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
</style>
