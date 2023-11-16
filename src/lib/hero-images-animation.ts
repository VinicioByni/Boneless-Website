




const heroImgsContainer = document.querySelector('.hero-gallery-container')
const transitionDuration = 3500
const delay = 1000


if (heroImgsContainer != null) {
    const heroImgs = heroImgsContainer.querySelectorAll('img')
    const pictures = heroImgsContainer.querySelectorAll('picture')
    // Start once images are loaded
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

    // Initiate fixed animation
    
    function loadImgs() {
        if (loadedImgs == heroImgs.length) {
            
            pictures.forEach(picture => {
                heroImgHQLoad(picture)
            })
        }
    }
    

    // Once animation is finished, activate interactivity
}
function heroImgHQLoad(picture) {
    picture.setAttribute('data-hq', 'true')
    setTimeout(() => heroImgAnimationStart(picture), delay)
}
function heroImgAnimationStart(picture) {
    picture.setAttribute('data-animate', 'true')
    setTimeout(() => heroImgAnimationReturn(picture), transitionDuration + delay)
}
function heroImgAnimationReturn(picture) {
    picture.setAttribute('data-animate', 'false')
}
