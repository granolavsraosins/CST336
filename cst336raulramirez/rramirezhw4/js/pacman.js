var output;
var pacman;
var loopTimer;
var numLoops = 0;
var redGhost;
var blueGhost;
var greenGhost;
var pinkGhost;
var whiteGhost;

var walls = new Array();

const PACMAN_SPEED = 10;

var upArrowDown = false;
var downArrowDown = false;
var leftArrowDown = false;
var rightArrowDown = false;
var direction = 'right';

//loads the game and starts the initial positions
function loadComplete(){
	output = document.getElementById('output');
	
	pacman = document.getElementById('pacman');
	
	
	//sets the left and top properties of pacman when the page loads
	pacman.style.left='320px';
	pacman.style.top='240px';
	pacman.style.width='40px';
	pacman.style.height='40px';
	
	redGhost = document.getElementById('redGhost');
	blueGhost = document.getElementById('blueGhost');
	pinkGhost = document.getElementById('greenGhost');
	whiteGhost = document.getElementById('whiteGhost');
	greenGhost = document.getElementById('pinkGhost');
	
	redGhost.style.left='280px';
	redGhost.style.top='240px';
	redGhost.style.width='40px';
	redGhost.style.height='40px';
	
	blueGhost.style.left='280px';
	blueGhost.style.top='240px';
	blueGhost.style.width='40px';
	blueGhost.style.height='40px';
	
	greenGhost.style.left='280px';
	greenGhost.style.top='240px';
	greenGhost.style.width='40px';
	greenGhost.style.height='40px';
	
	pinkGhost.style.left='280px';
	pinkGhost.style.top='240px';
	pinkGhost.style.width='40px';
	pinkGhost.style.height='40px';
	
	whiteGhost.style.left='280px';
	whiteGhost.style.top='240px';
	whiteGhost.style.width='40px';
	whiteGhost.style.height='40px';
	
	
	loopTimer = setInterval(loop, 50);
	
	//inside walls top L
	createWall(80,80,40,80);
	createWall(120,120,40,40);
	//inside left bottom l
	createWall(80,200,40,120)
	//middle top
	createWall(160,40,40,40);
	//middlebottom L
	createWall(160,200,40,120);
	createWall(160,280,120,40);
	//middle island
	createWall(240,200,40,40);
	//middle hat
	createWall(240,80,40,80);
	createWall(200,120,120,40);
	//topmiddle
	createWall(320,40,80,40);
	createWall(360,80,40,40);
	//middlebottom
	createWall(320,280,40,80);
	//middle middle
	createWall(320,200,160,40);
	createWall(360,160,40,40);
	//rightbox
	createWall(440,80,80,80);
	//rightsmall
	createWall(520,200,40,40);
	createWall(400,280,40,40);
	createWall(480,280,40,40);
	
	//top walls
	createWall(-20,0,640,40);
	//left walls
	createWall(0,0,40,240);
	createWall(0,280,40,180);
	//right side walls
	createWall(560,0,40,240);
	createWall(560,280,40,180);
	//bottom wall
	createWall(-20,360,640,40);
	
}

//makes wall array
function createWall(left,top,width,height){
    var wall=document.createElement('div');
    wall.className='wall';
    wall.style.left= left + 'px';
    wall.style.top = top + 'px';
    wall.style.width = width + 'px';
    wall.style.height = height + 'px';
    
    gameWindow.appendChild(wall);
    
    var numWalls = walls.length;
    walls[numWalls]=wall;
    output.innerHTML=walls.length;
}
//tests each wall for hit
function hitWall(element){
    var hit = false;
    for(var i=0; i < walls.length; i++){
        if(hittest(walls[i],element)) hit = true;
    }
    return hit;
}

//main movement pattern pacman
function loop(){
    numLoops++;
    tryToChangeDirection();
    
    var originalLeft = pacman.style.left;
    var originalTop = pacman.style.top;
    
    //output.innerHTML = numLoops;
    if(direction == 'up'){
        var pacmanY = parseInt(pacman.style.top) - PACMAN_SPEED;
        if(pacmanY < -30) pacmanY = 390;
        pacman.style.top = pacmanY + 'px';
    }
    if(direction == 'down'){
        var pacmanY = parseInt(pacman.style.top) + PACMAN_SPEED;
        if(pacmanY > 390) pacmanY = -30;
        pacman.style.top = pacmanY + 'px';
    }
    if(direction == 'left'){
        var pacmanX = parseInt(pacman.style.left) - PACMAN_SPEED;
        if(pacmanX < -30) pacmanX = 590;
        pacman.style.left = pacmanX + 'px';
    }
    if(direction == 'right'){
        var pacmanX = parseInt(pacman.style.left) + PACMAN_SPEED;
        if(pacmanX > 590) pacmanX = -30;
        pacman.style.left = pacmanX + 'px';
    }
    if(hitWall(pacman)){
        pacman.style.left = originalLeft;
        pacman.style.top = originalTop;
    }
    
    moveGhost(redGhost);
    moveGhost(blueGhost);
    moveGhost(greenGhost);
    moveGhost(pinkGhost);
    moveGhost(whiteGhost);
    
    if(hittest(pacman,redGhost) || hittest(pacman,blueGhost) || 
        hittest(pacman,greenGhost) || hittest(pacman,pinkGhost)
        || hittest(pacman,whiteGhost)){
        clearInterval(loopTimer);
        output.innerHTML='You Died';
    }
}

//adds keydown event for keypress
document.addEventListener('keydown', function(event){
    var originalLeft = pacman.style.left;
    var originalTop = pacman.style.top;
    
    if(event.keyCode==37) {
        pacman.style.left = parseInt(pacman.style.left) - PACMAN_SPEED + 'px';
        if(! hitWall(pacman)){
            direction = 'left';
            pacman.className = "flip-horizontal";   
        }
    }
    if(event.keyCode==38) {
        pacman.style.top = parseInt(pacman.style.top) - PACMAN_SPEED + 'px';
        if(! hitWall(pacman)){
            direction = 'up';
            pacman.className = "rotate270";   
        }
    }
    if(event.keyCode==39) {
        pacman.style.left = parseInt(pacman.style.left) + PACMAN_SPEED + 'px';
        if( ! hitWall(pacman)){
            direction = 'right';
            pacman.className = "";   
        }
    }
    if(event.keyCode==40) {
        pacman.style.top = parseInt(pacman.style.top) + PACMAN_SPEED + 'px';
        if(! hitWall(pacman)){
            direction = 'down';
            pacman.className = "rotate90";   
        }
    }
    pacman.style.left = originalLeft;
    pacman.style.top = originalTop;
});

function tryToChangeDirection(){
    var originalLeft = pacman.style.left;
    var originalTop = pacman.style.top;
    
    //output.innerHTML = numLoops;
    if(leftArrowDown){
        pacman.style.left = parseInt(pacman.style.left) - PACMAN_SPEED + 'px';
        if(!hitWall(pacman)){
            direction = 'left';
            pacman.className = "flip-horizontal";
        }
    }
    if(upArrowDown){
        pacman.style.top = parseInt(pacman.style.top) - PACMAN_SPEED + 'px';
        if(!hitWall(pacman)){
            direction = 'up';
            pacman.className = "rotate270";
        }
    }
    if(rightArrowDown){
        pacman.style.left = parseInt(pacman.style.left) + PACMAN_SPEED + 'px';
        if(!hitWall(pacman)){
            direction = 'right';
            pacman.className = "";
        }
    }
    if(downArrowDown){
        pacman.style.top = parseInt(pacman.style.top) + PACMAN_SPEED + 'px';
        if(!hitWall(pacman)){
            direction = 'down';
            pacman.className = "rotate90";
        }
    }
    pacman.style.left=originalLeft;
    pacman.style.top=originalTop;
}

document.addEventListener('keyup', function(event){
   if(event.keyCode==37) leftArrowDown = false;
   if(event.keyCode==38) upArrowDown = false;
   if(event.keyCode==39) rightArrowDown = false;
   if(event.keyCode==40) downArrowDown = false;
});


/*
//adds keyup event for keypress
document.addEventListener('keyDown', function(event){
   if(event.keyCode==37) leftArrowDown = true;
   if(event.keyCode==38) upArrowDown = true;
   if(event.keyCode==39) rightArrowDown = true;
   if(event.keyCode==40) downArrowDown = true;
});
*/