<template>
	<div class="lang" :class="{ opened: showLocales }">
		<!-- <span class="current_locale" @click="showLocales = !showLocales">
			{{ currentLocale }}
		</span> -->
		<n-link v-for="locale in availableLocales" :key="locale.code" class="locale" :to="switchLocalePath(locale.code)" @click.native="showLocales = false">
			{{ locale.code }}
		</n-link>
	</div>
</template>

<script>
export default {
	data: () => ({
		showLocales: false,
	}),
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
		},
		currentLocale() {
			return this.$i18n.locale
		},
	},
}
</script>
<style lang="scss" scoped>
.lang {
	display: flex;
	margin-left: auto;
	margin-right: 2rem;
	.locale {
		font-weight: bold;
		text-decoration: none;
	}
}
@media (max-width: 950px) {
	.lang {
		margin-left: initial;
	}
}
</style>
