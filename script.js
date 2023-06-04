var balls = document.getElementsByClassName("ball");

for (var i = 0; i < balls.length; i++) {
    balls[i].addEventListener("click", bounceBall);
}

function bounceBall() {
    var ball = this;

    var posY = parseInt(ball.style.bottom) || 0;
    var maxHeight = 350; // Maximum height for the ball to bounce

    if (posY < maxHeight) {
        ball.style.animation = "bounce 2s linear";
        ball.style.bottom = (posY + maxHeight) + "px";
    }

    setTimeout(function() {
        ball.style.animation = "";
        ball.style.bottom = posY + "px";
    }, 2000);

    setTimeout(function() {
        var randomColor = generateRandomColor();
        ball.style.backgroundColor = randomColor;
    }, 1000); /*change ball colour after it mid of animation*/
}

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
