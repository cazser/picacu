const cssCode =
    `
.skin * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.skin *::after,
.skin *::before {
    box-sizing: boder-box;
}

.skin {
    background: #ffe600;
    position: relative;
    height: 100vh;
}

.triangle {
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    border: 10px solid black;
    width: 0px;
    height: 0px;
    border-bottom: none;
    z-index: 2;
    border-color: black transparent transparent transparent;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite;
}

.circle {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye {
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    position: absolute;
    left: 50%;
    top: 100px;
    background: #2e2e2e;
    margin-left: -32px;
    border-radius: 50%;
}

.eye::before {
    content: '';
    border: 3px solid black;
    width: 30px;
    display: block;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    left: 4px;
    top: 2px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 210px;
    margin-left: -100px;
}

.mouth>.up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.up>.lip {
    background: #ffe600;
}

.up>.lip.left {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    transform: rotate(-15deg) translateX(-53px);
}

.up>.lip.left::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    right: -6px;
    background: #ffe600;
    bottom: 0;
}

.up>.lip.right {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    transform: rotate(15deg) translateX(53px);
}

.up>.lip.right::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    left: -6px;
    background: #ffe600;
    bottom: 0;
}

.mouth>.down {
    width: 100%;
    height: 180px;
    position: absolute;
    overflow: hidden;
    top: 0px;
}

.mouth>.down>.yuan1 {
    border: 3px solid black;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    background: #96000a;
    border-radius: 75px/300px;
    height: 1000px;
    overflow: hidden;
}

.mouth>.down>.yuan1>.yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    background: #ff485f;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    background: #ff0000;
    border-radius: 50%;
    margin-left: -44px;
}

.face.left {
    transform: translateX(-180px);
}

.face.right {
    transform: translateX(180px);
}




`



let demo = document.querySelector("#demo")
let style = document.querySelector("#demo2")

let n = 0;
let diff = 1;
let intervalId = setInterval(() => {

    demo.innerHTML = cssCode.slice(0, n);
    style.textContent = cssCode.slice(0, n);
    n += diff;

}, 0)

let pause = document.querySelector("#buttons>#pause")
let play = document.querySelector("#buttons>#play")
let speedUp = document.querySelector("#buttons>#speedUp")
let slowdown = document.querySelector("#buttons>#slowdown")

pause.addEventListener('click', () => {
    diff = 0;
})

play.addEventListener('click', () => {
    diff = 1;
})

speedUp.addEventListener("click", () => {
    diff++;
})

slowdown.addEventListener("click", () => {
    diff--;
})