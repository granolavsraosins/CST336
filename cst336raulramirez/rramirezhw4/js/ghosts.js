function moveGhost(element){
    var rgX =parseInt(element.style.left);
    var rgY =parseInt(element.style.top);
    
    var rgNewDirection;
    
    var rgDirection;
    
    const GHOST_SPEED = 5;
    
    var rgOppositeDirection;
    if(rgDirection=='left') rgOppositeDirection = 'right';
    else if (rgDirection == 'right') rgOppositeDirection = 'left';
    else if (rgDirection == 'down') rgOppositeDirection = 'up';
    else if (rgDirection == 'up') rgOppositeDirection = 'down';
    
    do{
        element.style.left = rgX + 'px';
        element.style.top = rgY + 'px';
        do{
            var r = Math.floor(Math.random()*4);
            if(r==0) rgNewDirection = 'right';
            else if (r==1) rgNewDirection = 'left';
            else if (r==2) rgNewDirection = 'down';
            else if (r==3) rgNewDirection = 'up';
        } while(rgNewDirection == rgOppositeDirection);
    
        if(rgNewDirection =='right'){
            if(rgX > 590) rgX = -30;
            element.style.left = rgX + GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'left'){
            if(rgX < -30) rgX = 590;
            element.style.left = rgX - GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'down'){
            if(rgY > 390) rgY = -30;
            element.style.top = rgY + GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'up'){
            if(rgY < -30) rgY = 390;
            element.style.top = rgY - GHOST_SPEED + 'px';
        }
    } while (hitWall(element));
    
    rgDirection = rgNewDirection;
}
/*
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
    var rgX =parseInt(blueGhost.style.left);
    var rgY =parseInt(blueGhost.style.top);
    
    var rgNewDirection;
    
    var rgOppositeDirection;
    if(rgDirection=='left') rgOppositeDirection = 'right';
    else if (rgDirection == 'right') rgOppositeDirection = 'left';
    else if (rgDirection == 'down') rgOppositeDirection = 'up';
    else if (rgDirection == 'up') rgOppositeDirection = 'down';
    
    do{
        blueGhost.style.left = rgX + 'px';
        blueGhost.style.top = rgY + 'px';
        do{
            var r = Math.floor(Math.random()*4);
            if(r==0) rgNewDirection = 'right';
            else if (r==1) rgNewDirection = 'left';
            else if (r==2) rgNewDirection = 'down';
            else if (r==3) rgNewDirection = 'up';
        } while(rgNewDirection == rgOppositeDirection);
    
        if(rgNewDirection =='right'){
            if(rgX > 590) rgX = -30;
            blueGhost.style.left = rgX + GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'left'){
            if(rgX < -30) rgX = 590;
            blueGhost.style.left = rgX - GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'down'){
            if(rgY > 390) rgY = -30;
            blueGhost.style.top = rgY + GHOST_SPEED + 'px';
        }
        else if (rgNewDirection == 'up'){
            if(rgY < -30) rgY = 390;
            blueGhost.style.top = rgY - GHOST_SPEED + 'px';
        }
    } while (hitWall(blueGhost));
    
    rgDirection = rgNewDirection;
}
*/
