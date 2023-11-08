
const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const imgContainer = entry.target
            const imgs = imgContainer.querySelectorAll('img')
            let counter = 0;

            imgs.forEach((img) => {
                if (img.complete) areImgsDownloaded(imgs)

                else {
                    img.addEventListener('load', () => {
                        areImgsDownloaded(imgs)
                    })
                }
               
            })

            function areImgsDownloaded(imgs: NodeListOf<HTMLImageElement>) {
                counter++

                const totalImgs = imgs.length
                if (totalImgs === counter) showAnimation(imgs);
            }
        }
    });	
}

const aboutUsObserver = new IntersectionObserver(handleIntersection, {rootMargin: '0px', threshold: .1});
const aboutUsGalleryContainer = document.querySelector('.gallery-container');

if (aboutUsGalleryContainer != null) aboutUsObserver.observe(aboutUsGalleryContainer);


function showAnimation(imgs: NodeListOf<HTMLImageElement>) {
    console.log(imgs)
    for (let i = 0; i < imgs.length; i++) {
        const delayQuantity = 400
        const delay = i * delayQuantity

        setTimeout(() => {
            imgs[i].setAttribute('data-visible', 'true')
        }, delay)
        
    }
}