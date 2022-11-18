<template>
	<n-link class="article_card" :to="`${localePath('articles')}${article.uid}/`">
		<div class="image">
			<ImageItem :image="article.poster" w="450" h="450" />
			<span class="link">{{ $t('words.watch') }}</span>
		</div>
		<h2 class="title">
			{{ article.title }}
			<Icon name="arrow" size="40px" fill="#F7F7F7" />
		</h2>
	</n-link>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	computed: {
		normalizedLocale() {
			return this.$i18n.localeProperties.code === 'ua' ? '/' : '/ru/'
		},
	},
}
</script>

<style lang="scss" scoped>
$card-size: 300px;
.article_card {
	width: $card-size;
	cursor: pointer;

	display: flex;
	flex-direction: column;

	text-decoration: none;
	color: $white;
	margin: 0 1.5rem 1.5rem 0;

	.image {
		width: inherit;
		height: $card-size;

		user-select: none;
		position: relative;
		overflow: hidden;

		.link {
			position: absolute;
			top: 0;
			right: -40px;
			width: 40px;
			height: 100%;
			background: $secondary;
			z-index: 4;

			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.35s ease;

			font-size: 1.5rem;
			transform: rotate(180deg);
			writing-mode: vertical-rl;
			text-orientation: mixed;
		}
		img {
			width: 100%;
			height: 100%;
			z-index: 1;
			position: relative;
			object-fit: cover;
			object-position: center;
			transition: all 0.75s ease;
			&.lazyload,
			&.lazyloading {
				opacity: 0;
			}
			&.lazyloaded {
				opacity: 1;
				transition: all 0.75s ease;
			}
		}
	}
	.title {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		font-weight: 400;
		font-size: 1.5rem;
		&::first-letter {
			text-transform: capitalize;
		}
	}

	&:hover {
		h2 svg {
			fill: $secondary;
		}
		.image .link {
			right: 0;
		}
	}
}
@media (min-width: 1650px) {
	.article_card {
		width: 295px;
	}
}
@media (max-width: 1200px) {
	.article_card {
		width: 15rem;
		.image {
			height: 15rem;
		}
	}
}
@media (max-width: 900px) {
	.article_card {
		// margin: 1rem 1vw;
		width: 42vw;
		.image {
			height: 45vw;
		}
		.title {
			font-size: 1.8rem;
		}
	}
}
@media (max-width: 600px) {
	.article_card {
		width: 100%;
		margin-right: 0;
		.image {
			height: 80vw;
		}
	}
}
</style>
