




const heroImgsContainer = document.querySelector('.hero-gallery-container')
const transitionDuration = 1500
const delay = 1500


if (heroImgsContainer != null) {
    const heroImgs = heroImgsContainer.querySelectorAll('img')

    // Start once images are loaded
    let loadedImgs = 0
    heroImgs.forEach(img => {
        img.style.transition = `object-position ${transitionDuration}ms ease-in-out`
        if (img.complete) {
            loadedImgs++
            startAnimation()
        }
        else {
            img.addEventListener('load', () =>{
                loadedImgs++
                startAnimation()
            })
        }
    })

    // Initiate fixed animation
    function startAnimation() {
        if (loadedImgs == heroImgs.length) {
            setTimeout(() => {
                heroImgs.forEach(img => {
                    heroImgAnimationStart(img)
                })
            }, 1000)
        }
    }
    

    // Once animation is finished, activate interactivity
}

function heroImgAnimationStart(img: HTMLImageElement) {
    img.setAttribute('data-animation-right', 'true')
    setTimeout(() => heroImgAnimationReturn(img), transitionDuration + delay)
}

function heroImgAnimationReturn(img: HTMLImageElement) {
    img.setAttribute('data-animation-right', 'false')
}