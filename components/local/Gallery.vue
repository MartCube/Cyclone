<template>
	<div id="gallery">
		<div class="gallery">
			<ImageItem v-for="(item, i) in data" :key="i" :data="item.image.gallery" @click.native="Toggle(i)" />
		</div>

		<div v-if="lightbox" class="lightbox">
			<div class="content">
				<Icon name="close" class="close" @click.native="Toggle(null)" />
				<div class="icons_navigation">
					<Icon name="chevron" :class="{ disable: currentImage == 0 }" direction="left" @click.native="Prev(0)" />
				</div>
				<div class="image">
					<ImageItem :data="data[currentImage].image" />
				</div>
				<div class="icons_navigation">
					<Icon name="chevron" :class="{ disable: currentImage == data.length - 1 }" @click.native="Next(0)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		lightbox: false,
		currentImage: null,
	}),
	computed: {},
	methods: {
		Toggle(index) {
			this.index = index
			this.currentImage = index
			this.lightbox = !this.lightbox
			if (this.lightbox) window.addEventListener('keydown', this.onKeydown)
			else window.removeEventListener('keydown', this.onKeydown)
		},
		Next() {
			if (this.currentImage !== this.data.length - 1) {
				this.currentImage++
				this.renderKey++
			}
		},
		Prev() {
			if (this.currentImage !== 0) {
				this.currentImage--
				this.renderKey++
			}
		},
		onKeydown(e) {
			switch (e.key) {
				case 'ArrowRight':
					this.Next()
					break
				case 'ArrowLeft':
					this.Prev()
					break
				case 'Escape':
					this.Toggle()
					break
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.gallery {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 16vw 16vw 16vw 16vw;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	margin: 40px 0;
	// justify-items: stretch;
	// align-items: stretch;

	picture {
		cursor: pointer;
		width: 100%;
		height: 100%;
		object-fit: cover;
		&:nth-child(1) {
			grid-column: 1 / 3;
			grid-row: 1;
		}
		&:nth-child(2) {
			grid-column: 3;
			grid-row: 1;
		}
		&:nth-child(3) {
			grid-column: 4;
			grid-row: 1;
		}
		&:nth-child(4) {
			grid-column: 5;
			grid-row: 1;
		}
		&:nth-child(5) {
			grid-column: 1;
			grid-row: 2;
		}
		&:nth-child(6) {
			grid-column: 2 / 5;
			grid-row: 2 / 4;
		}
		&:nth-child(7) {
			grid-column: 5;
			grid-row: 2;
		}
		&:nth-child(8) {
			grid-column: 1;
			grid-row: 3;
		}
		&:nth-child(9) {
			grid-column: 5;
			grid-row: 3;
		}
		&:nth-child(10) {
			grid-column: 1;
			grid-row: 4;
		}
		&:nth-child(11) {
			grid-column: 2;
			grid-row: 4;
		}
		&:nth-child(12) {
			grid-column: 3;
			grid-row: 4;
		}
		&:nth-child(13) {
			grid-column: 4 / last;
			grid-row: 4;
		}
	}
}
.lightbox {
	z-index: 999;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.85);

	.content {
		position: relative;
		display: flex;
		align-items: center;
		.image {
			width: calc(100% - 100px);
			height: 100vh;
			picture {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
	.icons_navigation {
		width: 40px;
		height: 40px;
	}
	svg {
		width: 40px;
		height: 40px;
		fill: white;
		&.disable {
			visibility: hidden;
		}
		cursor: pointer;
		opacity: 0.6;
		transition: all 0.2s ease;
		&:hover {
			opacity: 0.9;
		}
		&.close {
			position: fixed;
			top: 0;
			right: 0;
		}
		&.left {
			transform: rotate(180deg);
		}
	}
}
@media (max-width: 700px) {
	.gallery {
		grid-auto-columns: minmax(3em, 1fr);
		grid-auto-rows: minmax(3em, 1fr);
		grid-template-columns: initial;
		grid-template-rows: initial;
		picture {
			cursor: pointer;
			width: 100%;
			height: 100%;
			&:nth-child(1) {
				grid-column: 1;
				grid-row: 1;
			}
			&:nth-child(2) {
				grid-column: 2;
				grid-row: 1;
			}
			&:nth-child(3) {
				grid-column: 1;
				grid-row: 2;
			}
			&:nth-child(4) {
				grid-column: 2;
				grid-row: 2;
			}
			&:nth-child(5) {
				grid-column: 1;
				grid-row: 3;
			}
			&:nth-child(6) {
				grid-column: 2;
				grid-row: 3;
			}
			&:nth-child(7) {
				grid-column: 1;
				grid-row: 4;
			}
			&:nth-child(8) {
				grid-column: 2;
				grid-row: 4;
			}
			&:nth-child(9) {
				grid-column: 1;
				grid-row: 5;
			}
			&:nth-child(10) {
				grid-column: 2;
				grid-row: 5;
			}
			&:nth-child(11) {
				grid-column: 1;
				grid-row: 6;
			}
			&:nth-child(12) {
				grid-column: 2;
				grid-row: 6;
			}
			&:nth-child(13) {
				grid-column: 1;
				grid-row: 7;
			}
		}
	}
	.lightbox {
		.content {
			.image {
				width: calc(100% - 80px);
			}
		}
	}
}
</style>
