
const heroImgsContainer = document.querySelector('.hero-gallery-container')
const transitionDuration = 4000
const delay = 1000

if (heroImgsContainer != null) {
    const heroImgs = heroImgsContainer.querySelectorAll('img')
    const pictures = heroImgsContainer.querySelectorAll('picture')
    // Verify all hq imgs are loaded
    let loadedImgs = 0
    heroImgs.forEach(img => {
        if (img.complete) {
            loadedImgs++
            loadImgs()
        }
        else {
            img.addEventListener('load', () =>{
                loadedImgs++
                loadImgs()
            })
        }
    })

    // Load hq imgs
    function loadImgs() {
        if (loadedImgs == heroImgs.length) {
            pictures.forEach(picture => {
                const hqImg = picture.querySelector('.img-hq')
                if (hqImg instanceof HTMLImageElement) {
                    hqImg.style.transition =  `background-position ${transitionDuration}ms ease-in-out, opacity 250ms`
                heroImgHQLoad(picture)
                }
            })
        }
    }
}

function heroImgHQLoad(picture: HTMLPictureElement) {
    picture.setAttribute('data-hq', 'true')
    setTimeout(() => heroImgAnimationStart(picture), delay)
}
function heroImgAnimationStart(picture: HTMLPictureElement) {
    picture.setAttribute('data-animate', 'true')
    setTimeout(() => heroImgAnimationReturn(picture), transitionDuration + delay)
}
function heroImgAnimationReturn(picture: HTMLPictureElement) {
    picture.setAttribute('data-animate', 'false')
}
