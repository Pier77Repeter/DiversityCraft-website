const copyButton = document.getElementById('copy-ip');
const copyMessage = document.getElementById('copy-message');

copyButton.addEventListener('click', () => {
navigator.clipboard.writeText('DiversityCraft.xyz')
    .then(() => {
        copyMessage.textContent = 'IP copied, time to join in!';
        copyMessage.style.color = 'green';
        setTimeout(() => {
        copyMessage.textContent = '';
        }, 3000);
    })
    .catch(err => {
        copyMessage.textContent = 'Copy failed, somewhow...!';
        copyMessage.style.color = 'red';
    });
});

const randomImage = document.getElementById('randomImage');
const imageArray = ['clicktocopyiplogo.png']; // add more

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    randomImage.src = 'media/' + imageArray[randomIndex];
}

getRandomImage();