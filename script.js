const snaps = document.getElementById('snaps');
const images = snaps.getElementsByClassName('preload');

function restartAnimation() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.animation = 'none';
        images[i].offsetHeight; // Trigger a reflow to restart animation
        images[i].style.animation = null;
    }
}

snaps.addEventListener('animationiteration', restartAnimation);
