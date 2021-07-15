<template>
	<nav :class="{ compact: !compact }">
		<ul>
			<li>
				<a href="#">Вентилируемые фасады</a>
			</li>
			<li>
				<a href="#">Портфолио</a>
			</li>
			<li>
				<a href="#">Статьи</a>
			</li>
			<li>
				<n-link exact :to="'/contact'">Контакты</n-link>
			</li>
		</ul>
	</nav>
</template>
<script>
import { navbarAnimation } from '~/assets/anime'
export default {
	data: () => ({
		compact: true,
	}),
	mounted() {
		window.addEventListener('scroll', this.onScroll)
		this.onScroll()
		navbarAnimation(document.querySelectorAll('nav ul li'))
	},
	methods: {
		onScroll() {
			// Get the current scroll position
			const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

			this.compact = currentScrollPosition < screen.height - 200

			// Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
			if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
				return
			} // Here we determine whether we need to show or hide the navbar
			this.lastScrollPosition = currentScrollPosition
		},
	},
}
</script>
<style lang="scss" scoped>
nav {
	position: fixed;
	width: 100%;
	background-color: $primary;
	height: 100px;
	z-index: 2;
	right: 0;
	top: 0;
	transition: height 0.05s linear;
	padding-left: 100px;
	&::after {
		height: 100%;
		content: '';
		width: 1px;
		background-color: $secondary;
		position: absolute;
		top: 0;
		left: 100px;
	}
	ul {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		li {
			display: flex;
			align-items: center;
			width: fit-content;
			opacity: 0;
			padding: 0 2rem;
			a {
				color: $white;
				text-decoration: none;
				font-weight: 400;
				font-size: 1.1rem;
				transition: color 0.1s linear;
			}
			&:hover {
				a {
					color: $secondary;
					text-decoration: underline;
				}
			}
		}
	}
	&.compact {
		height: 70px;
	}
}
</style>
