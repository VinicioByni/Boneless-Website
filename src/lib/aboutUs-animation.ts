const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const imgContainer = entry.target
            const img = imgContainer.querySelector('img');

            img?.setAttribute('data-visible', 'true')
        }
    });	
}

const aboutUsObserver = new IntersectionObserver(handleIntersection, {rootMargin: '0px', threshold: .2});
const imgContainers= document.querySelectorAll('.gallery .image-container');

imgContainers.forEach(container => {
    aboutUsObserver.observe(container);
})