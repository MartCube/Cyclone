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
	margin-top: 40px;
	width: 900px;
	display: flex;
	flex-wrap: wrap;

	picture {
		cursor: pointer;
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
