window.onload = function () {
    smoothScroll();
    navMenu();
}

function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) links[i].onclick = function () {
        const target = document.querySelector(this.attributes.href.nodeValue),
            targetY = target.offsetTop;
        var speed, dir, step, dist, screenY,
            anim = setInterval((function () {
                screenY = document.documentElement.scrollTop + document.body.scrollTop,
                    dir = screenY <= targetY ? 1 : -1,
                    dist = Math.abs(screenY - targetY),
                    (speed = dist / 10) < 1 && (speed = 1), step = dir * speed, dist < 1 ? clearInterval(anim) : scrollBy(0, step)
            }), 10);
        return !1
    }
}

function navMenu() {
    const hamb = document.querySelector(".nav__hamb");
    const menu = document.querySelector(".nav__menu");
    const close = document.querySelector(".nav__close");

    hamb.addEventListener("click", function () {
        menu.style.display = "flex";
        hamb.style.display = "none";
        close.style.display = "block";
    });

    close.addEventListener("click", function () {
        menu.style.display = "none";
        hamb.style.display = "block";
        close.style.display = "none";
    });
}
"use strict";const spiralCanvas=document.getElementById("spiral-canvas"),spiralContext=spiralCanvas.getContext("2d"),spiralAngel=document.getElementById("spiral-angel"),spiralLength=document.getElementById("spiral-length"),spiralRandom=document.getElementById("spiral-random"),spiralBtn=document.getElementById("spiral-btn");function spiralDraw(){let w=spiralCanvas.width,h=spiralCanvas.height,ang=parseFloat(spiralAngel.value),len=10,kLen=parseFloat(spiralLength.value)/100,offset=30;spiralContext.clearRect(0,0,w,h),aLine(30,h-80,10*kLen,180-ang,0)}function aLine(x,y,length,startAng,tol){let xx,yy,xa,ya,ang=parseFloat(spiralAngel.value),kLen=parseFloat(spiralLength.value)/100,random=parseFloat(spiralRandom.value)/100,rnd;rnd=Math.random()*(2*random)-random+1,startAng*=rnd,rnd=Math.random()*(2*random)-random+1,ang*=rnd,rnd=Math.random()*(2*random)-random+1,length*=rnd,xa=Math.sin(startAng*(3.14/180)),ya=Math.cos(startAng*(3.14/180)),xx=x+xa*length,yy=y+ya*length,spiralContext.beginPath(),spiralContext.moveTo(x,y),spiralContext.lineTo(xx,yy),spiralContext.strokeStyle="#ffffff",spiralContext.lineWidth=2,spiralContext.stroke(),length>1&&aLine(xx,yy,length*kLen,startAng-ang,tol)}function setCanvasSpiral(){let w=document.getElementById("spiral-canvas").parentElement.clientWidth,h=document.getElementById("spiral-canvas").parentElement.clientWidth;spiralCanvas.width=w-75,spiralCanvas.height=h-75,spiralDraw()}function setValueSpiral(){spiralAngel.value=2,spiralLength.value=99,spiralRandom.value=0}setCanvasSpiral(),setValueSpiral(),spiralAngel.oninput=function(){spiralDraw()},spiralLength.oninput=function(){spiralDraw()},spiralRandom.oninput=function(){spiralDraw()},spiralBtn.onclick=function(){setValueSpiral(),spiralDraw()};
"use strict"; const treeCanvas = document.getElementById("tree-canvas"), treeContext = treeCanvas.getContext("2d"), treeAngel = document.getElementById("tree-angel"), treeLength = document.getElementById("tree-length"), treeRandom = document.getElementById("tree-random"), treeBtn = document.getElementById("tree-btn"); function treeDraw() { let w = treeCanvas.width, h = treeCanvas.height, ang = parseFloat(treeAngel.value), len = h / 4.5, kLen = parseFloat(treeLength.value) / 100, offset = 50; treeContext.clearRect(0, 0, w, h), treeContext.beginPath(), treeContext.moveTo(w / 2, h - 50), treeContext.lineTo(w / 2, h - len - 50), treeContext.strokeStyle = "#ffffff", treeContext.lineWidth = len / 10, treeContext.stroke(), treeALine(w / 2, h - len - 50, len * kLen, 180 - ang, 0), treeALine(w / 2, h - len - 50, len * kLen, 180 + ang, 0) } function treeALine(x, y, length, startAng, tol) { let xx, yy, xa, ya, ang = parseFloat(treeAngel.value), kLen = parseFloat(treeLength.value) / 100, random = parseFloat(treeRandom.value) / 100, rnd; rnd = Math.random() * (2 * random) - random + 1, startAng *= rnd, rnd = Math.random() * (2 * random) - random + 1, ang *= rnd, rnd = Math.random() * (2 * random) - random + 1, length *= rnd, xa = Math.sin(startAng * (3.14 / 180)), ya = Math.cos(startAng * (3.14 / 180)), xx = x + xa * length, yy = y + ya * length, treeContext.beginPath(), treeContext.moveTo(x, y), treeContext.lineTo(xx, yy), treeContext.strokeStyle = "#ffffff", treeContext.lineWidth = length / 10, treeContext.stroke(), length > 1 && (treeALine(xx, yy, length * kLen, startAng - ang, tol), treeALine(xx, yy, length * kLen, startAng + ang, tol)) } function setCanvasTree() { let w = document.getElementById("tree-canvas").parentElement.clientWidth, h = document.getElementById("tree-canvas").parentElement.clientWidth; treeCanvas.width = w - 75, treeCanvas.height = h - 75, treeDraw() } function setValueTree() { treeAngel.value = 30, treeLength.value = 68, treeRandom.value = 10 } setCanvasTree(), setValueTree(), treeAngel.oninput = function () { treeDraw() }, treeLength.oninput = function () { treeDraw() }, treeRandom.oninput = function () { treeDraw() }, treeBtn.onclick = function () { setValueTree(), treeDraw() };