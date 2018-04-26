const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener('resize', (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('mousemove', (e) => {
    // vérifier si le curseur est sur la balle
    // améliorer le radius
    if(e.clientX > ball.x - 25 &&
        e.clientX < ball.x + 25&&
        e.clientY > ball.y - 25 &&
        e.clientY < ball.y + 25
    ) {
        console.log('on y est')
    }
    });

if (canvas.getContext) {
    const c = canvas.getContext("2d");
    let ball = {
        color: {'r': 240, 'g': 20, 'b': 100},
        x: canvas.width / 2,
        y: canvas.width / 2,
        dx: Math.random(),
        dy: Math.random()
    }
    init(c, ball);
} else {
    alert('Il faut mettre votre navigateur à jour');
}

function update(c, ball) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'rgb(${color.r},${color.g},${color.b})';
    c.beginPath();
    c.arc(ball.x, ball.y, 25, 0, Math.PI * 2, true);
    c.fill();

    if (ball.x >= (canvas.width - 25) || ball.x - 25 < 0) {
        if (ball.dx < 0) {
            ball.dx = -Math.random();
        } else {
            ball.dx = Math.random();
        }
        ball.dx = -ball.dx;
    }
    if (ball.y >= (canvas.height - 25) || ball.y - 25 < 0) {
        if (ball.dy < 0) {
            ball.dy = -Math.random();
        } else {
            ball.dy = Math.random();
        }
        ball.dy = -ball.dy;
    }

    ball.x = ball.x + ball.dx * 5;
    ball.y = ball.y + ball.dy * 5;
    window.requestAnimationFrame(() => update(c, ball));
}

function init(c, ball) {

    update(c, ball);
}