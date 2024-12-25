const randomImage = document.getElementById('randomImage');
const imageArray = ['banner.jpg', 'banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg', 'banner-4.jpg', 'banner-5.jpg', 'banner-6.jpg', 'banner-7.jpg', 'banner-8.jpg', 'banner-9.jpg'];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    randomImage.src = '../../media/' + imageArray[randomIndex];
}

getRandomImage();