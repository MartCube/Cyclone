<template>
	<div class="contact_info">
		<div class="contacts">
			<h6>{{ $t('footer.group_title1') }}</h6>
			<n-link to="/"> <Icon name="phone" /> 044 492 05 30</n-link>
			<n-link to="/"> <Icon name="phone" /> 067 193 42 50</n-link>
			<n-link to="/"> <Icon name="phone" /> 050 785 04 05</n-link>
			<n-link to="/"> <Icon name="phone" /> 073 267 58 44</n-link>
		</div>
		<div class="smedias">
			<h6>{{ $t('footer.group_title2') }}</h6>
			<n-link to="/"> <Icon name="youtube" /> Youtube</n-link>
			<n-link to="/"> <Icon name="facebook" /> Facebook</n-link>
			<n-link to="/"> <Icon name="instagram" /> Instagram</n-link>
		</div>
		<div class="mail">
			<h6>{{ $t('footer.group_title3') }}</h6>
			<n-link to="/"><Icon name="mail" /> info@cyclone.kiev.ua</n-link>
		</div>
		<div class="map">
			<h6>{{ $t('footer.group_title4') }}</h6>
			<a target="_blank" href="https://goo.gl/maps/xSn9CX9dBNtFPHoM7"> <Icon name="location" /> {{ $t('footer.adress') }}</a>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ContactInfo',
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
.contact_info {
	display: flex;
	justify-content: space-between;
	width: 100%;
	& > * {
		position: relative;
		z-index: 2;
		flex: 1;
		h6 {
			margin-bottom: 50px;
		}
		a,
		p {
			text-decoration: none;
			color: $white;
			margin-bottom: 25px;

			display: flex;
			svg {
				margin-right: 1rem;
			}
		}

		&.map picture {
			width: 100%;
		}
	}
}
.contacts {
	.contact_info {
		& > * {
			flex: initial;
		}
		.contacts,
		.smedias,
		.mail,
		.map {
			width: 50%;
		}
		h6 {
			color: $grey;
		}
	}
}
@media (max-width: 900px) {
	.contact_info {
		flex-wrap: wrap;
		& > * {
			flex: initial;
			width: 100%;
			h6 {
				margin: 30px 0;
			}
			a,
			p {
				margin-bottom: 10px;
			}
		}
	}
	.contacts {
		.contact_info {
			.contacts,
			.smedias,
			.mail,
			.map {
				width: 100%;
			}
			margin-bottom: 4rem;
		}
	}
}
</style>
