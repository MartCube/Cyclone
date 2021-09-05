<template>
	<div class="message" @click="toggleAccordion">
		<div class="header">
			<h3>{{ header }}</h3>
			<Icon name="close" />
		</div>
		<div class="body" :class="{ colapseAnim: isOpen }">
			<p>{{ body }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		header: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: true,
		}
	},
	methods: {
		toggleAccordion() {
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style lang="scss" scoped>
.message {
	width: 70%;
	margin: 50px;
	.header {
		position: relative;
		z-index: 2;
		cursor: pointer;
		background-color: #2b3a41;
		color: white;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		h3 {
			display: inline-block;
			width: 80%;
		}
		i {
			padding: 2px 0;
			transition: 0.5s ease all;
		}
		&:hover {
			opacity: 0.9;
		}
	}
	.body {
		// background-color: white;
		max-height: 30em;
		overflow: hidden;
		opacity: 1;
		transition: 0.5s ease all;
		p {
			padding: 20px 10px;
		}
	}
	.colapseAnim {
		transform: translateY(-20px);
		opacity: 0;
		max-height: 0;
	}
	.iconAnim {
		transform: rotate(135deg);
		color: #4a88c8;
	}
}
@media (max-width: 750px) {
	.message {
		width: 95%;
	}
}
</style>
