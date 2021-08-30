<template>
	<div class="crumbs">
		<n-link to="/">Главная</n-link>
		<n-link v-for="link in links" :key="link.title" :to="link.path">{{ link.title }}</n-link>
	</div>
</template>

<script>
export default {
	computed: {
		links() {
			const fullPath = this.$route.fullPath
			const params = fullPath.startsWith('/') ? fullPath.substring(1).split('/') : fullPath.split('/')
			// console.log('params', params)
			const crumbs = []
			let path = ''

			params.forEach((param) => {
				path = `${path}/${param}`
				// console.log('path', path)

				const match = this.$router.match(path)
				// console.log('match', match)

				if (match.name !== null) {
					crumbs.push({
						title: param.replace(/-/g, ' '),
						path,
					})
				}
			})
			return crumbs
		},
	},
}
</script>

<style lang="scss" scoped>
.crumbs {
	height: min-content;
	margin: 50px 0;
	display: flex;
	a {
		text-decoration: none;
		color: $white;

		width: min-content;
		display: flex;
		align-items: center;
		&::after {
			content: '';
			width: 50px;
			margin: 0 10px;
			height: 2px;
			background: $white;
		}
		&:last-child {
			&::after {
				display: none;
			}
		}
	}
}
</style>
