

	const imgs = document.querySelectorAll('.img-transition')
	console.log(imgs)
	imgs.forEach(img => {
		if (img instanceof HTMLImageElement && img != null) {
			if (img.complete) {
				loaded(img)
			}
			else {
				img.addEventListener('load', () => {
					loaded(img)
				})
			}
		}
	})

	function loaded(img: HTMLImageElement) {
		img.setAttribute('data-visible', 'true')
	}