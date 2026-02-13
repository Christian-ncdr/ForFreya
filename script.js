// ========== GENERATE STARS ==========
const starsContainer = document.getElementById('starsContainer');
if (starsContainer) {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 60 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ========== CREATE HEART PARTICLES FUNCTION ==========
function createHearts(e) {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        heart.style.left = e.clientX + (Math.random() - 0.5) * 100 + 'px';
        heart.style.top = e.clientY + (Math.random() - 0.5) * 100 + 'px';
        heart.style.animation = 'float-up 2s ease-out forwards';
        heart.style.animationDelay = i * 0.1 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 2000);
    }
}

// ========== SCREEN CLICK ANIMATION ==========
document.addEventListener('click', function(e) {
    createHearts(e);
});

// ========== BUTTON CLICK ANIMATION ==========
const playButton = document.getElementById('playButton');
if (playButton) {
    playButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Navigate to surprise page
        window.location.href = 'surprise.html';
    });
}