const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    color: 'white',
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
}

function movePlayer(event) {
    switch(event.key) {
        case 'ArrowUp':
            player.y -= 5;
            break;
        case 'ArrowDown':
            player.y += 5;
            break;
        case 'ArrowLeft':
            player.x -= 5;
            break;
        case 'ArrowRight':
            player.x += 5;
            break;
    }
}

window.addEventListener('keydown', movePlayer);

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
