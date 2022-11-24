<template>
	<!-- <div class="navbar" :class="{ hide: isNavbarHidden && mobile > 950 && !isActiveSecondLvl && isSafari, active: isActiveSecondLvl }"> -->
	<div class="navbar" :class="{ active: isActiveSecondLvl }">
		<div class="burger" :class="{ active: isActiveMobileNavbar }" @click="ShowHideMenu">
			<span class="top_line" />
			<span class="mid_line" />
			<span class="bot_line" />
		</div>
		<nav :class="{ active: isActiveMobileNavbar }">
			<ul>
				<li class="first-lvl submenu" :class="{ active: isActiveSecondLvl }">
					<a href="javascript:;" @click="isActiveSecondLvl = !isActiveSecondLvl">{{ $t('navbar.menu') }}</a>
					<ul
						class="panels-list"
						@click="
							isActiveSecondLvl = false
							isActiveMobileNavbar = false
						">
						<template v-if="panels">
							<li v-for="panel in panels" :key="panel._id">
								<n-link exact :to="`${normalizedLocale}${panel.uid}/`">
									<div class="image">
										<ImageItem :image="panel.poster" w="160" mw="70" mobile />
									</div>
									<span class="title">{{ panel.title }}</span>
								</n-link>
							</li>
						</template>
					</ul>
				</li>
				<template v-if="menu">
					<li v-for="link in menu" :key="link.uid" class="first-lvl">
						<template v-if="!link.uid.includes('index')">
							<n-link :to="`${normalizedLocale}${link.uid}/`">{{ link.title }}</n-link>
						</template>
					</li>
				</template>
			</ul>
		</nav>
		<LanguageSwitcher />
		<n-link exact :to="normalizedLocale" class="logo">
			<Logo />
		</n-link>
	</div>
</template>

<script>
// import { navbarAnimation } from '~/assets/anime'
import { navbar, menuList } from '@/plugins/queries'
export default {
	name: 'Navbar',
	data: () => ({
		compact: true,
		isActiveMobileNavbar: false,
		isNavbarHidden: false,
		isActiveSecondLvl: false,
		menu: null,

		panels: null,
		isSafari: false,
		scrollPosition: 0,
		scrollPositionUpdated: 0,
		mobile: 0,
	}),
	async fetch() {
		await this.$sanity
			.fetch(navbar, { lang: this.$i18n.localeProperties.code })
			.then((data) => {
				this.panels = data.panelItems
			})
			.catch((error) => {
				console.error('Error:', error)
			})
		await this.$sanity
			.fetch(menuList, { lang: this.$i18n.localeProperties.code })
			.then((data) => {
				console.log(this.$i18n.localeProperties.code)
				this.menu = data
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	},
	computed: {
		normalizedLocale() {
			return this.$i18n.localeProperties.code === 'ua' ? '/' : '/ru/'
		},
	},
	watch: {
		$route(newValue, oldValue) {
			this.$fetch()
		},
	},
	mounted() {
		this.mobile = window.innerWidth
		this.navBarAnimation()
		this.isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/)
		window.addEventListener('resize', () => {
			this.navBarAnimation()
			this.resize()
		})
		window.addEventListener('scroll', this.updateScroll)
	},
	methods: {
		updateScroll() {
			this.scrollPositionUpdated = window.pageYOffset
			if (this.scrollPosition < this.scrollPositionUpdated) {
				this.isNavbarHidden = true
			} else if (this.scrollPosition > this.scrollPositionUpdated) {
				this.isNavbarHidden = false
			}
			this.scrollPosition = this.scrollPositionUpdated
		},
		resize() {
			this.mobile = window.innerWidth
		},
		ShowHideMenu() {
			this.isActiveMobileNavbar = !this.isActiveMobileNavbar
		},
		CloseMenu() {
			this.isActiveMobileNavbar = false
		},
		navBarAnimation() {
			// if (window.innerWidth > 950) {
			// 	this.$nextTick()
			// 	navbarAnimation(document.querySelectorAll('.first-lvl a'))
			// }
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
	transition: all 0.2s ease-in;
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
					// opacity: 0;
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
					top: 0;
					transform: translateY(-150%);
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
						padding: 0;
						margin: 0;
						margin: 0;
						padding: 0;
						height: initial;
						a {
							display: flex;
							opacity: 1;
							flex-direction: column-reverse;
							align-items: center;
							justify-content: flex-start;
							max-width: 12vw;
							margin: 0 2rem 0 0;

							// width: 100%;
							transition: $animation-time linear;
							span {
								margin-bottom: 1rem;
							}
							.image {
								width: 100%;
								height: 100%;
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
	&.hide {
		top: -100px;
	}
}
@media (min-width: 1750px) {
	.navbar {
		padding: 0 17%;
		nav ul li .panels-list {
			padding: 0 17%;
		}
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
			transform: translateX(-100%);
			width: 100%;
			order: 2;
			left: 0;
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
						transform: initial;
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
								margin: 0;
								padding: 0;
								height: auto;
								&:before {
									height: 100%;
									width: 90%;
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
			margin-right: 0;
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
								padding: 0;
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
		transform: translateX(-100%);
	}
	1% {
		opacity: 0;
		transform: translateX(0);
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: translateY(150%);
	}
	1% {
		opacity: 0;
		transform: translateY(0);
	}
	100% {
		transform: translateY(100px);
		opacity: 1;
	}
}
</style>
