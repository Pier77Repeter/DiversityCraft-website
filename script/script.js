const copyButton = document.getElementById('copy-ip');
const copyMessage = document.getElementById('copy-message');

copyButton.addEventListener('click', () => {
navigator.clipboard.writeText('diversitycraft.xyz')
    .then(() => {
        copyMessage.textContent = 'Server IP copied, time to join in!';
        copyMessage.style.color = 'green';
        setTimeout(() => {
        copyMessage.textContent = '';
        }, 3000);
    })
    .catch(err => {
        copyMessage.textContent = 'Copy failed, somewhow...';
        copyMessage.style.color = 'red';
    });
});

const randomImage = document.getElementById('randomImage');
const imageArray = ['clicktocopyiplogo.jpg', 'banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg', 'banner-4.jpg', 'banner-5.jpg', 'banner-6.jpg', 'banner-7.jpg', 'banner-8.jpg'];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    randomImage.src = '../media/' + imageArray[randomIndex];
}

getRandomImage();