<template>
	<div class="crumbs">
		<n-link to="/">{{ $t('words.main') }}</n-link>
		<template v-if="links.length < 2">
			<p>{{ links[0].title }}</p>
		</template>
		<template v-else>
			<template v-for="(link, i) in links">
				<n-link v-if="i !== links.length - 1" :key="link.path" :to="link.path">{{ link.title }}</n-link>
				<p v-else :key="link.path">{{ link.title }}</p>
			</template>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Crumbs',
	props: {
		links: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.crumbs {
	height: min-content;
	display: flex;
	p {
		padding: 0;
		font-size: 1rem;
		color: $grey;
		margin: 0;
	}
	a {
		text-decoration: none;
		color: $grey;
		margin: 0;
		width: min-content;
		display: flex;
		align-items: center;
		font-size: 1rem;
		&::after {
			content: '';
			width: 50px;
			margin: 0 10px;
			height: 1px;
			background: $grey;
		}
		&:last-child {
			&::after {
				display: none;
			}
		}
		&:hover {
			color: $secondary;
		}
	}
}
</style>
