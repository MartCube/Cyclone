<template>
	<div class="navbar">
		<div class="burger" :class="{ active: isActive }" @click="ShowHideMenu">
			<span class="top_line" />
			<span class="mid_line" />
			<span class="bot_line" />
		</div>
		<nav :class="{ active: isActive }" @click="isActive = false">
			<ul>
				<li class="first-lvl submenu" :class="{ active: isActive }">
					<a href="javascript:;" @mouseover="isActive = true">Вентилируемые фасады</a>
					<ul class="panels-list">
						<li v-for="panel in panels" :key="panel._id">
							<n-link exact :to="`/${panel.uid}/`">
								<div class="image">
									<ImageItem :image="panel.poster" w="160" mobile />
								</div>
								<span class="title">{{ panel.title }}</span>
							</n-link>
						</li>
					</ul>
				</li>
				<li v-for="link in menu" :key="link.uid" class="first-lvl">
					<n-link :to="`/${link.uid}/`">{{ link.name }}</n-link>
				</li>
			</ul>
		</nav>
		<n-link exact :to="'/'" class="logo">
			<Logo />
		</n-link>
	</div>
</template>

<script>
import { navbarAnimation } from '~/assets/anime'
import { panelList } from '@/plugins/queries'
export default {
	data: () => ({
		compact: true,
		isActive: false,
		menu: [
			{
				name: 'Объекты',
				uid: 'projects',
			},
			// {
			// 	name: 'Статьи',
			// 	uid: 'blog',
			// },
			{
				name: 'Контакты',
				uid: 'contact',
			},
		],
		panels: null,
	}),
	async fetch() {
		await this.$sanity.fetch(panelList).then((data) => {
			// console.log(data)
			this.panels = data
		})
	},
	computed: {},
	mounted() {
		this.navBarAnimation()
		window.addEventListener('resize', () => {
			this.navBarAnimation()
		})
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
			// window.removeEventListener('scroll', this.onScroll)
		},
		ShowHideMenu() {
			console.log(this.isActive)
			this.isActive = !this.isActive
		},
		CloseMenu() {
			console.log('closeMenu', this.isActive)
			this.isActive = false
		},
		navBarAnimation() {
			if (window.innerWidth > 950) {
				window.addEventListener('scroll', this.onScroll)
				// this.onScroll()
				navbarAnimation(document.querySelectorAll('.first-lvl a'))
			} else {
				window.removeEventListener('scroll', this.onScroll)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
$animation-time: 0.3s;
.navbar {
	z-index: 20;
	right: 0;
	top: 0;
	transition: height 0.05s linear;
	position: fixed;
	width: 100%;
	background-color: $primary;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3rem;
	nav {
		width: fit-content;
		ul {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			li {
				display: flex;
				align-items: center;
				width: fit-content;
				height: 100%;
				transition: all 0.3s ease;
				a {
					opacity: 0;
					color: $white;
					white-space: nowrap;
					text-decoration: none;
					margin-bottom: 0;
					font-weight: 400;
					font-size: $font-size;
					transition: all $animation-time linear;
					padding: 0 10px;
					margin-right: 2rem;
					position: relative;
					&::before {
						content: '';
						position: absolute;
						top: 0;
						right: 0;
						width: 0;
						height: 1.6rem;
						z-index: -1;
						transition: all 0.35s ease;
					}
					&:hover,
					&.nuxt-link-active {
						&::before {
							width: 100%;
							background: $secondary;
							right: unset;
							left: 0;
						}
					}
				}
				&.active.submenu {
					.panels-list {
						animation: fadeIn $animation-time linear forwards;
					}
					border-left-color: $primary;
				}
				.panels-list {
					position: fixed;
					top: -150%;
					left: 0;
					width: 100vw;
					height: calc(100vh - 100px);
					z-index: 20;
					background-color: $primary;
					display: flex;
					flex-wrap: wrap;
					padding: 0 4rem;
					opacity: 0;
					transition: all $animation-time linear;
					li {
						padding: 1rem;
						margin: 0 1rem;
						height: initial;
						a {
							display: flex;
							opacity: 1;
							flex-direction: column-reverse;
							align-items: center;
							justify-content: flex-start;
							max-width: 130px;
							margin-bottom: 0;

							width: 100%;
							transition: $animation-time linear;
							span {
								margin-bottom: 1rem;
							}
							.image {
								picture {
									width: 100%;
									height: 100%;
									filter: drop-shadow(10px 10px 10px $primary-dark);
								}
							}
							&:hover {
								transform: scale(1.02);
							}
						}
					}
				}
			}
		}
		&.compact {
			height: 70px;
		}
	}
	.logo {
		width: 17rem;
		margin-right: 10px;
	}
}
@media (min-width: 950px) {
	.burger {
		display: none !important;
	}
}
@media (max-width: 950px) {
	.navbar {
		height: 70px;
		padding: 0 1rem;
		nav {
			left: -100vw;
			width: 100vw;
			order: 2;
			height: 100vh;
			top: 70px;
			position: fixed;
			padding: 0;
			background-color: $primary-dark;
			&.active {
				animation: fadeInMobile $animation-time linear forwards;
			}
			ul {
				flex-direction: column;
				padding: 0;
				margin: 0;
				width: 100%;
				height: 100%;
				align-items: flex-end;
				border-left: 1px solid $secondary;
				li {
					padding: 0;
					height: initial;
					align-items: flex-end;
					&.submenu {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
					}
					&.submenu:hover {
						.panels-list {
							animation: initial;
						}
					}
					a {
						opacity: 1;
						height: 3rem;
						margin: 0;
						text-decoration: none;
						display: flex;
						padding: 0.5rem 1rem;
						align-items: center;
					}
					.panels-list {
						position: initial;
						top: initial;
						left: initial;
						z-index: initial;
						width: 100%;
						height: auto;
						display: flex;
						flex-wrap: wrap;
						align-items: flex-start;
						flex-direction: row;
						border: none;
						padding: 0 0 0 50px;
						margin: 0;
						width: 100%;
						opacity: 1;
						li {
							padding: 0;
							height: initial;
							width: 33.333%;
							margin: 0;
							a {
								display: flex;
								opacity: 1;
								flex-direction: row;
								align-items: center;
								justify-content: flex-start;
								max-width: initial;
								width: 100%;
								margin: 1rem 0px;
								height: auto;
								&:before {
									height: 100%;
								}
								.image {
									width: 4rem;
									height: 5rem;
									picture {
										width: 100%;
										height: 100%;
										object-fit: contain;
										img {
											width: inherit;
											height: inherit;
											object-fit: inherit;
										}
									}
								}
								span {
									margin-bottom: initial;
									white-space: normal;
									text-align: left;
									margin-left: 10px;
								}
							}
						}
					}
				}
			}
		}
		.logo {
			width: 14rem;
			order: 1;
			display: flex;
		}
		.burger {
			height: 2rem;
			width: 15px;
			order: 2;
			display: flex;
			justify-content: space-between;
			span {
				display: flex;
				height: 100%;
				width: 2px;
				opacity: 1;
				background-color: $secondary;
				transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);
			}
			&.active {
				.top_line {
					transform: rotate(20deg) translate(5px, -3px);
					transition-delay: 0.1s;
					height: 106%;
				}
				.mid_line {
					transform: translateX(-2px);
				}
				.bot_line {
					transition-delay: 0.1s;
					transform: translateX(-6px);
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.navbar {
		nav {
			ul {
				li {
					.panels-list {
						padding: 0 0 0 1rem;
						li {
							width: 50%;
							a {
								padding: 0.3rem;
								margin: 0;
								span {
									font-size: 1rem;
								}
								.image {
									width: 2.5rem;
									height: 3.5rem;
								}
							}
						}
					}
					a {
						padding: 1rem;
						&::before {
							height: 45px;
						}
					}
				}
			}
		}
	}
}
@keyframes fadeInMobile {
	0% {
		opacity: 0;
		left: -100vw;
	}
	1% {
		opacity: 0;
		left: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
}
@keyframes fadeIn {
	0% {
		opacity: 0;
		top: -100vh;
	}
	1% {
		opacity: 0;
		top: 100px;
	}
	100% {
		top: 100px;
		opacity: 1;
	}
}
</style>
