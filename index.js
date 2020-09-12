const root = document.getElementById("root");
const body = document.body;

function fallingBugs() {
    const span = document.createElement("div");
    span.style.position = "absolute";
    span.style.left = Math.floor(Math.random() * 99) + "vw";
    span.style.animationDuration = Math.floor(Math.random() * 2 + 5) + "s";
    span.innerHTML = "❤️";
    root.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
}


setInterval(fallingBugs, 300);

function randomColor() {
    return Math.floor(Math.random() * 255)
}

function changeBg() {
    body.style.backgroundColor = `rgba(${randomColor()},${randomColor()},${randomColor()}, 0.5)`;
}

setInterval(changeBg, 1000);