import anime from 'animejs'

export function nambersIncreasingAnimation(firstNumber, secondNumber, thirdNumber) {
	const html = document.querySelectorAll('.achievements .counter .number')

	const duration = 1500
	const round = 1

	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add({
		duration,
		autoplay: true,
		easing: 'easeOutExpo',
		loop: 1,
	})
		.add(
			{
				targets: html[0],
				innerHTML: [0, firstNumber],
				round,
			},
			0,
		)
		.add(
			{
				targets: html[1],
				innerHTML: [0, secondNumber],
				round,
			},
			0,
		)
		.add(
			{
				targets: html[2],
				innerHTML: [0, thirdNumber],
				round,
			},
			0,
		)
}

export function modalAnim(modal) {
	anime({
		targets: modal,
		opacity: [0, 1],
		scale: [0.75, 1],

		easing: 'easeOutExpo',
		duration: 350,
	})
}

export function messengersAnim(items) {
	anime(
		{
			targets: items,
			opacity: [0, 1],
			translateY: ['-10%', '0%'],
			delay: anime.stagger(50),

			easing: 'easeInOutElastic',
			duration: 1500,
		},
		0,
	)
}

export function navbarAnimation(items) {
	anime(
		{
			targets: items,
			opacity: [0, 1],
			translateX: ['-10%', '0%'],
			delay: anime.stagger(50),

			easing: 'easeInOutElastic',
			duration: 1500,
		},
		0,
	)
}

export function logoAnim(items, logo) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add({
		duration: 1500,
		easing: 'easeInOutElastic',
		loop: 1,
	})
		.add(
			{
				targets: logo,
				opacity: [0, 1],
			},
			0,
		)
		.add(
			{
				targets: items,
				opacity: [0, 1],
				delay: anime.stagger(50),
				translateY: ['10%', '0%'],
			},
			10,
		)
}
