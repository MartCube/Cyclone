<template>
	<article class="article_card">
		<div class="image">
			<ImageItem :image="article.poster" w="450" h="450" />
		</div>
		<div class="content">
			<h2 class="title">
				{{ article.title }}
			</h2>
			<div class="info">
				<div v-if="article.articleTags" class="tags">
					<n-link v-for="tag in article.articleTags" :key="tag" class="link" :to="`${localePath('blog')}?filter=${tag}`"><span class="hashtag">#</span> {{ $t(`blog.filters.${tag}`) }}</n-link>
				</div>
				<div class="date">
					{{ article.articleDate }}
				</div>
			</div>
			<div class="description">
				{{ article.description }}
			</div>
			<n-link class="link" :to="`${localePath('blog')}${article.uid}/`">
				<span class="link">{{ $t('words.watch') }} </span>
				<Icon name="arrow" size="40px" fill="#F7F7F7" />
			</n-link>
		</div>
	</article>
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
	width: 100%;
	cursor: pointer;

	display: flex;

	text-decoration: none;
	color: $white;
	margin: 0 1.5rem 1.5rem 0;

	.image {
		width: 30%;
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
		picture {
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
		padding-left: 0;
		border-left: none;
		&::first-letter {
			text-transform: capitalize;
		}
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 1rem;
		width: 100%;
		.tags {
			display: flex;
			a {
				font-weight: 600;
				margin-right: 10px;
				font-size: 15px;
				&::first-letter {
					color: $secondary;
				}
				.hashtag {
					color: $secondary;
				}
			}
		}
		.date {
			color: $secondary;
			font-weight: 600;
			margin-left: auto;
		}
	}
	.content {
		width: 70%;
		padding-left: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.link {
		margin-left: auto;
		display: flex;
		align-items: center;
		color: rgb(255, 255, 255, 60%);
		svg {
			margin-left: 10px;
			width: 35px;
			fill: $secondary;
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

@media (max-width: 900px) {
	.article_card {
	}
}
@media (max-width: 600px) {
	.article_card {
		width: 100%;
		margin-right: 0;
		flex-direction: column;
		.image {
			width: 100%;
			height: auto;
		}
		.content {
			width: 100%;
			padding: 0;
		}
		.info {
			flex-wrap: wrap;
		}
	}
}
</style>
