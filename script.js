// Adding sparkles dynamically for festive effects
const container = document.querySelector('.container');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 5000);
}

setInterval(createSparkle, 300);

// Adding sparkle styles dynamically
const style = document.createElement('style');
style.innerHTML = `
    .sparkle {
        position: absolute;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #ffffff, transparent);
        border-radius: 50%;
        animation: sparkleAnim 5s linear infinite;
        pointer-events: none;
    }

    @keyframes sparkleAnim {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(style);
