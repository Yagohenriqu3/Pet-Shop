const carousel = document.querySelector('.carousel')
const images = carousel.getElementsByTagName('img')
let currentIndex = 0

function showImage (index){
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active')
    }

    images[index].classList.add('active')
}

function nextImage() {
    currentIndex++

    if (currentIndex >= images.length){
        currentIndex = 0
    }


showImage(currentIndex)

}

function startCarousel(){
    setInterval(nextImage, 6000)
}

showImage(currentIndex)
startCarousel()