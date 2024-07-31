const randomImage = document.getElementById('randomImage');
const imageArray = ['clicktocopyiplogo.png']; // add more

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    randomImage.src = '../../media/' + imageArray[randomIndex];
}

getRandomImage();