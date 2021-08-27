<template>
	<div id="gallery" class="gallery">
		<ImageItem v-for="(item, i) in data" :key="i" :src="item.image.thumbnail.url" :alt="item.image.alt" @click.native="Toggle(i)" />

		<div v-if="lightbox" class="lightbox">
			<Icon name="close" class="close" @click.native="Toggle(null)" />

			<Icon name="chevron" :class="{ disable: currentImage == 0 }" direction="left" @click.native="Prev(0)" />

			<ImageItem width="90%" height="90%" :src="data[currentImage].image.url" :alt="data[currentImage].image.alt" />

			<Icon name="chevron" :class="{ disable: currentImage == data.length - 1 }" @click.native="Next(0)" />
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
	// justify-items: stretch;
	// align-items: stretch;

	picture {
		cursor: pointer;
		width: 100%;
		height: 100%;
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
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.85);

	display: flex;
	justify-content: space-between;
	align-items: center;

	picture {
		height: 100%;
	}

	svg {
		width: 40px;
		height: 40px;
		margin: 10px;
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
</style>
