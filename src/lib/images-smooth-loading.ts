	const LOADED_CLASS = "loaded-img"

	const imgContainer = document.querySelector('.hero-image-container')
	const isDiv = imgContainer instanceof HTMLDivElement

	if (isDiv && imgContainer != null) {
		const img = imgContainer.querySelector('img')
		const isImage = img instanceof HTMLImageElement

		if (isImage && img != null) {
			if (img.complete) {
				loaded(img)
			}
			else {
				img.addEventListener('load', () => {
					loaded(img)
				})
			}
		}
	}

	function loaded(img: HTMLImageElement) {
		img.classList.add(LOADED_CLASS)
	}