"use strict";const spiralCanvas=document.getElementById("spiral-canvas"),spiralContext=spiralCanvas.getContext("2d"),spiralAngel=document.getElementById("spiral-angel"),spiralLength=document.getElementById("spiral-length"),spiralRandom=document.getElementById("spiral-random"),spiralBtn=document.getElementById("spiral-btn");function spiralDraw(){let w=spiralCanvas.width,h=spiralCanvas.height,ang=parseFloat(spiralAngel.value),len=10,kLen=parseFloat(spiralLength.value)/100,offset=30;spiralContext.clearRect(0,0,w,h),aLine(30,h-80,10*kLen,180-ang,0)}function aLine(x,y,length,startAng,tol){let xx,yy,xa,ya,ang=parseFloat(spiralAngel.value),kLen=parseFloat(spiralLength.value)/100,random=parseFloat(spiralRandom.value)/100,rnd;rnd=Math.random()*(2*random)-random+1,startAng*=rnd,rnd=Math.random()*(2*random)-random+1,ang*=rnd,rnd=Math.random()*(2*random)-random+1,length*=rnd,xa=Math.sin(startAng*(3.14/180)),ya=Math.cos(startAng*(3.14/180)),xx=x+xa*length,yy=y+ya*length,spiralContext.beginPath(),spiralContext.moveTo(x,y),spiralContext.lineTo(xx,yy),spiralContext.strokeStyle="#ffffff",spiralContext.lineWidth=2,spiralContext.stroke(),length>1&&aLine(xx,yy,length*kLen,startAng-ang,tol)}function setCanvasSpiral(){let w=document.getElementById("spiral-canvas").parentElement.clientWidth,h=document.getElementById("spiral-canvas").parentElement.clientWidth;spiralCanvas.width=w-75,spiralCanvas.height=h-75,spiralDraw()}function setValueSpiral(){spiralAngel.value=2,spiralLength.value=99,spiralRandom.value=0}setCanvasSpiral(),setValueSpiral(),spiralAngel.oninput=function(){spiralDraw()},spiralLength.oninput=function(){spiralDraw()},spiralRandom.oninput=function(){spiralDraw()},spiralBtn.onclick=function(){setValueSpiral(),spiralDraw()};