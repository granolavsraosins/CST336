//moves red ghost
function moveRedGhost(){
    var rgX =parseInt(redGhost.style.left);
    var rgY =parseInt(redGhost.style.top);
    
    var rgNewDirection;
    
    var rgOppositeDirection;
    if(rgDirection=='left') rgOppositeDirection = 'right';
    else if (rgDirection == 'right') rgOppositeDirection = 'left';
    else if (rgDirection == 'down') rgOppositeDirection = 'up';
    else if (rgDirection == 'up') rgOppositeDirection = 'down';
    
    do{
        redGhost.style.left = rgX + 'px';
        redGhost.style.top = rgY + 'px';
        do{
            var r = Math.floor(Math.random()*4);
            if(r==0) rgNewDirection = 'right';
            else if (r==1) rgNewDirection = 'left';
            else if (r==2) rgNewDirection = 'down';
            else if (r==3) rgNewDirection = 'up';
        } while(rgNewDirection == rgOppositeDirection);
    
        if(rgNewDirection =='right'){
            if(rgX > 590) rgX = -30;
            redGhost.style.left = rgX + GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'left'){
            if(rgX < -30) rgX = 590;
            redGhost.style.left = rgX - GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'down'){
            if(rgY > 390) rgY = -30;
            redGhost.style.top = rgY + GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'up'){
            if(rgY < -30) rgY = 390;
            redGhost.style.top = rgY - GHOST_SPEED + 'px';
        }
    } while (hitWall(redGhost));
    
    rgDirection = rgNewDirection;
}

//moves blue ghost
function moveBlueGhost(){
    var bgX =parseInt(blueGhost.style.left);
    var bgY =parseInt(blueGhost.style.top);
    
    var bgNewDirection;
    
    var bgOppositeDirection;
    if(bgDirection=='left') bgOppositeDirection = 'right';
    else if (bgDirection == 'right') bgOppositeDirection = 'left';
    else if (bgDirection == 'down') bgOppositeDirection = 'up';
    else if (bgDirection == 'up') bgOppositeDirection = 'down';
    
    do{
        blueGhost.style.left = bgX + 'px';
        blueGhost.style.top = bgY + 'px';
        do{
            var b = Math.floor(Math.random()*4);
            if(b==0) bgNewDirection = 'right';
            else if (b==1) bgNewDirection = 'left';
            else if (b==2) bgNewDirection = 'down';
            else if (b==3) bgNewDirection = 'up';
        } while(bgNewDirection == bgOppositeDirection);
    
        if(bgNewDirection =='right'){
            if(bgX > 590) bgX = -30;
            blueGhost.style.left = bgX + GHOST_SPEED + 'px';
        }
        else if (bgNewDirection == 'left'){
            if(bgX < -30) bgX = 590;
            blueGhost.style.left = bgX - GHOST_SPEED + 'px';
        }
        else if (bgNewDirection == 'down'){
            if(bgY > 390) bgY = -30;
            blueGhost.style.top = bgY + GHOST_SPEED + 'px';
        }
        else if (bgNewDirection == 'up'){
            if(bgY < -30) rgY = 390;
            blueGhost.style.top = bgY - GHOST_SPEED + 'px';
        }
    } while (hitWall(blueGhost));
    
    bgDirection = bgNewDirection;
}

//moves pink ghost
function movePinkGhost(){
    var pgX =parseInt(pinkGhost.style.left);
    var pgY =parseInt(pinkGhost.style.top);
    
    var pgNewDirection;
    
    var pgOppositeDirection;
    if(pgDirection=='left') pgOppositeDirection = 'right';
    else if (pgDirection == 'right') pgOppositeDirection = 'left';
    else if (pgDirection == 'down') pgOppositeDirection = 'up';
    else if (pgDirection == 'up') pgOppositeDirection = 'down';
    
    do{
        pinkGhost.style.left = pgX + 'px';
        pinkGhost.style.top = pgY + 'px';
        do{
            var b = Math.floor(Math.random()*4);
            if(b==0) pgNewDirection = 'right';
            else if (b==1) pgNewDirection = 'left';
            else if (b==2) pgNewDirection = 'down';
            else if (b==3) pgNewDirection = 'up';
        } while(pgNewDirection == pgOppositeDirection);
    
        if(pgNewDirection =='right'){
            if(pgX > 590) pgX = -30;
            pinkGhost.style.left = pgX + GHOST_SPEED + 'px';
        }
        else if (pgNewDirection == 'left'){
            if(pgX < -30) pgX = 590;
            pinkGhost.style.left = pgX - GHOST_SPEED + 'px';
        }
        else if (pgNewDirection == 'down'){
            if(pgY > 390) pgY = -30;
            pinkGhost.style.top = pgY + GHOST_SPEED + 'px';
        }
        else if (pgNewDirection == 'up'){
            if(pgY < -30) pgY = 390;
            pinkGhost.style.top = pgY - GHOST_SPEED + 'px';
        }
    } while (hitWall(pinkGhost));
    
    pgDirection = pgNewDirection;
}
//moves green ghost
function moveGreenGhost(){
    var gX =parseInt(greenGhost.style.left);
    var gY =parseInt(greenGhost.style.top);
    
    var gNewDirection;
    
    var gOppositeDirection;
    if(gDirection=='left') gOppositeDirection = 'right';
    else if (gDirection == 'right') gOppositeDirection = 'left';
    else if (gDirection == 'down') gOppositeDirection = 'up';
    else if (gDirection == 'up') gOppositeDirection = 'down';
    
    do{
        greenGhost.style.left = gX + 'px';
        greenGhost.style.top = gY + 'px';
        do{
            var b = Math.floor(Math.random()*4);
            if(b==0) gNewDirection = 'right';
            else if (b==1) gNewDirection = 'left';
            else if (b==2) gNewDirection = 'down';
            else if (b==3) gNewDirection = 'up';
        } while(gNewDirection == gOppositeDirection);
    
        if(gNewDirection =='right'){
            if(gX > 590) gX = -30;
            greenGhost.style.left = gX + GHOST_SPEED + 'px';
        }
        else if (gNewDirection == 'left'){
            if(gX < -30) gX = 590;
            greenGhost.style.left = gX - GHOST_SPEED + 'px';
        }
        else if (gNewDirection == 'down'){
            if(gY > 390) gY = -30;
            greenGhost.style.top = gY + GHOST_SPEED + 'px';
        }
        else if (gNewDirection == 'up'){
            if(gY < -30) gY = 390;
            greenGhost.style.top = gY - GHOST_SPEED + 'px';
        }
    } while (hitWall(greenGhost));
    
    gDirection = gNewDirection;
}
//moves green ghost
function moveWhiteGhost(){
    var wgX =parseInt(whiteGhost.style.left);
    var wgY =parseInt(whiteGhost.style.top);
    
    var wgNewDirection;
    
    var wgOppositeDirection;
    if(wgDirection=='left') wgOppositeDirection = 'right';
    else if (wgDirection == 'right') wgOppositeDirection = 'left';
    else if (wgDirection == 'down') wgOppositeDirection = 'up';
    else if (wgDirection == 'up') wgOppositeDirection = 'down';
    
    do{
        whiteGhost.style.left = wgX + 'px';
        whiteGhost.style.top = wgY + 'px';
        do{
            var w = Math.floor(Math.random()*4);
            if(w==0) wgNewDirection = 'right';
            else if (w==1) wgNewDirection = 'left';
            else if (w==2) wgNewDirection = 'down';
            else if (w==3) wgNewDirection = 'up';
        } while(wgNewDirection == wgOppositeDirection);
    
        if(wgNewDirection =='right'){
            if(wgX > 590) wgX = -30;
            whiteGhost.style.left = wgX + GHOST_SPEED + 'px';
        }
        else if (wgNewDirection == 'left'){
            if(wgX < -30) wgX = 590;
            whiteGhost.style.left = wgX - GHOST_SPEED + 'px';
        }
        else if (wgNewDirection == 'down'){
            if(wgY > 390) wgY = -30;
            whiteGhost.style.top = wgY + GHOST_SPEED + 'px';
        }
        else if (wgNewDirection == 'up'){
            if(wgY < -30) wgY = 390;
            whiteGhost.style.top = wgY - GHOST_SPEED + 'px';
        }
    } while (hitWall(whiteGhost));
    
    wgDirection = wgNewDirection;
}