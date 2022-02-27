<template>
	<div class="error page">
		<span>404</span>
		<h1>Страница, которую вы ищете не существует.</h1>
		<NuxtLink to="/" class="button">На главную</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
.error {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
	h1 {
		max-width: 60%;
		line-height: 1;
		text-transform: lowercase;
		font-weight: 400;
	}
	span {
		font-size: 16rem;
		font-weight: 700;
		color: #b93937;
		line-height: 1;
	}
	.button {
		width: fit-content;
		text-decoration: none;
	}
}
@media (max-width: 800px) {
	.error {
		h1 {
			font-size: 2rem;
			max-width: 80%;
		}
		span {
			font-size: 10rem;
		}
	}
}
</style>
