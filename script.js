const button = document.getElementById('click-btn');
const container = document.getElementById('main-container');
let clickCount = 0;
const maxClicks = 10;

// Initial centering
function centerButton() {
    // We don't need to manually center initially because CSS flexbox does it.
    // However, once we start moving it with absolute position, we need to handle it.
    // The CSS has position: absolute for the button, but centered via flexbox on the container.
    // When we set top/left via JS, it will override the flexbox positioning for the button.
}

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount < maxClicks) {
        moveButton();
    } else {
        showWinMessage();
    }
});

function moveButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    // Calculate max available width and height
    const maxWidth = containerRect.width - btnRect.width;
    const maxHeight = containerRect.height - btnRect.height;

    // Generate random position
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Apply new position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Ensure we switch from flexbox positioning (if meaningful) to absolute positioning fully
    button.style.position = 'absolute';
}

function showWinMessage() {
    container.innerHTML = '<h1>You Win! / لقد فزت</h1>';
}
