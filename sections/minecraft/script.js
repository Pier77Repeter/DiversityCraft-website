const randomImage = document.getElementById('randomImage');
const imageArray = ['clicktocopyiplogo.jpg', 'banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg'];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    randomImage.src = '../../media/' + imageArray[randomIndex];
}

getRandomImage();