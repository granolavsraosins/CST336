//VARIABLES
var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuesses = 6;
var hint = false;
var words = [{word:"snake", hint: "It's a reptile"},
             {word:"monkey", hint: "It's a mammal"},
             {word:"beetle", hint: "It's an insect"}];
//creating an array
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
                'U','V','W','X','Y','Z'];
//LISTENERS
window.onload = startGame();

//FUNCTIONS
function startGame() {
    pickWord();
    initBoard();
    updateBoard();
}
//Fill the board with underscores
function initBoard() {
    for(var letter in selectedWord) {
        board.push("_");
    }
}
function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt].word.toUpperCase();
    selectedHint = words[randomInt].hint;
}
function updateBoard() {
    $("#word").empty();
    
    for (var i=0; i < board.length; i++){
        $("#word").append(board[i] + " ");
    }
    $("#word").append("<br/>");
    $("#word").append("<span class='hint'>Hint: " + selectedHint + "</span>");
}
//Creates the letters inside the letters div
function createLetters(){
    for(var letter of alphabet){
        $("#letters").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
    }
}
//Update the current word then calls for a board update
function updateWord(positions,letter){
    for (var pos of positions){
        board[pos] = letter;
    }
    updateBoard();
}

//Checks to see if the selected letter exists in the selected Word
function checkLetter(letter){
    var positions = new Array();
    
    //Put all the positions the letter exists in the array
    for(var i=0; i < selectedWord.length; i++){
        console.log(selectedWord)
        if (letter == selectedWord[i]){
            positions.push(i);
        }
    }
    if(positions.length > 0){
        updateWord(positions,letter);
        
        //check to see if this is winning guess
        if(!board.includes('_')){
            endGame(true);
        }
    } else{
        remainingGuesses -= 1;
        updateMan();
    }
    if(remainingGuesses <= 0){
        endGame(false);
    }
}

//Calculates and updates the image for our stick man
function updateMan(){
    $("#hangImg").attr("src","img/stick_" + (6 - remainingGuesses) + ".png");
}
//Ends the game by hiding game divs and displaying the win or loss divs
function endGame(win){
    $("#letters").hide();
    if(win){
        $('#won').show();
    }else{
        $('#lost').show();
    }
}
//Disables the button and changes the style to tell the user it's disabled
function disableButton(btn){
    btn.prop("disabled",true);
    btn.attr("class", "btn btn-danger")
}

$(".letter").click(function() {
    console.log($(this).attr("id"));
    disableButton($(this));
});

$("#letterBtn").click(function(){
    var boxVal = $("#letterBox").val();
    console.log("You pressed the button and it has the value: " + boxVal);
});

$(".replayBtn").on("click",function(){
    location.reload();
});
