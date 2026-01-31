// Get elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionPage = document.getElementById('question-page');
const successPage = document.getElementById('success-page');

// Track if mouse is near the No button
let isNearNoButton = false;

// Function to get random position for No button
function getRandomPosition() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();

    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate available space (keeping button within container)
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;

    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
}

// Function to move No button
function moveNoButton() {
    const newPos = getRandomPosition();
    noBtn.style.left = newPos.x + 'px';
    noBtn.style.top = newPos.y + 'px';
}

// Function to check if mouse is near No button
function checkProximity(mouseX, mouseY) {
    const rect = noBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    // Calculate distance from mouse to button center
    const distance = Math.sqrt(
        Math.pow(mouseX - btnCenterX, 2) +
        Math.pow(mouseY - btnCenterY, 2)
    );

    // If mouse is on the button or within 150px, move it
    const threshold = 150;
    const isOnButton = mouseX >= rect.left && mouseX <= rect.right &&
                       mouseY >= rect.top && mouseY <= rect.bottom;

    if (distance < threshold || isOnButton) {
        moveNoButton();
        // Make Yes button bigger when No button runs away
        yesBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 200);
    }
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    if (questionPage.classList.contains('active')) {
        checkProximity(e.clientX, e.clientY);
    }
});

// Handle touch events for mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// No button click (in case someone manages to click it)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Yes button click
yesBtn.addEventListener('click', () => {
    // Add celebration animation
    yesBtn.style.transform = 'scale(1.2)';

    setTimeout(() => {
        // Hide question page
        questionPage.classList.remove('active');

        // Show success page
        setTimeout(() => {
            successPage.classList.add('active');

            // Optional: Add confetti or fireworks effect
            createConfetti();
        }, 300);
    }, 300);
});

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#f093fb', '#ffd700', '#ff69b4', '#ff1493'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear`;

            document.body.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize No button position
window.addEventListener('load', () => {
    // Set initial position for No button on the right
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Position on the right side
    const initialX = containerRect.width - btnWidth - 20;
    const initialY = (containerRect.height - btnHeight) / 2;

    noBtn.style.left = initialX + 'px';
    noBtn.style.top = initialY + 'px';
});
