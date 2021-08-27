<template>
	<div class="crumbs">
		<n-link v-for="link in links" :key="link.title" to="link.path">{{ link.title }}</n-link>
	</div>
</template>

<script>
export default {
	computed: {
		links() {
			const fullPath = this.$route.fullPath
			const params = fullPath.startsWith('/') ? fullPath.substring(1).split('/') : fullPath.split('/')
			console.log('params', params)
			const crumbs = []
			let path = ''

			params.forEach((param) => {
				path = `${path}/${param}`

				const match = this.$router.match(path)
				if (match.name !== null) {
					crumbs.push({
						title: param.replace(/-/g, ' '),
						link: path,
					})
				}
			})
			return crumbs
		},
		// links() {
		// 	return this.$router.currentRoute.fullPath.substring(1).split('/')
		// },
	},
}
</script>

<style lang="scss" scoped>
.crumbs {
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
