//VARIABLES
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
                'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var words = [{ word: "snake", hint: "It's a reptile" }, 
             { word: "monkey", hint: "It's a mammal" }, 
             { word: "beetle", hint: "It's an insect" }];

var selectedWord = "";
var selectedHint = "";
var board = "";
var remainingGuesses = 6;

window.onload = startGame();
//replaybutton loads after condition is met
$(".replayBtn").on('click', function() {
    location.reload();
});
//populates letters onto the page and makes them clickable, disables after click
$("#letters").on("click", ".letter", function(){
    checkLetter($(this).attr("id"));
    disableButton($(this));
});
//hint button populates hint in the area if clicked
$(".hint").on("click", function() {
    $(".hint").text("Hint: " + selectedHint);
});

//FUNCTIONS
function startGame() {
    pickWord();
    createLetters();
    initBoard();
    updateBoard();
}
//Places underscores on the page according to what the word is.
function initBoard() {
    for (var letter in selectedWord) {
        board += '_';
    }
}
//picks a random word from the array and sets it to upper case into a new variable
//the hint is the same as the random word
function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt].word.toUpperCase();
    selectedHint = words[randomInt].hint;
}
//populates the board according to the letter chosen
function updateBoard() {
    $("#word").empty();
    for (var letter of board) {
        $("#word").append(letter);
        $("#word").append(' ');
    }
    $("#word").append("<br />");
}
//Creates the letters inside the letters div
function createLetters(){
    for(var letter of alphabet){
        $("#letters").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
    }
}
//Checks to see if the selected letter exists in the selected Word
function checkLetter(letter) {
    var positions = new Array();
    
    for (var i = 0; i < selectedWord.length; i++) {
        if (letter == selectedWord[i]) {
            positions.push(i);
        }
    }
    if (positions.length > 0) {
        updateWord(positions, letter);
    } else {
        remainingGuesses -= 1;
        updateMan();
        if (remainingGuesses <= 0) {
        endGame(false);
        }
    }
}
//function that shows the hint when clicked
function showHint(){
        $("#word").append("<span class ='hint'>Hint: " + selectedHint + "</span>");
        $('#hint').hide();
    }
//Disables the button and changes the style to tell the user it's disabled
function disableButton(btn){
    btn.prop("disabled",true);
    btn.attr("class", "btn btn-danger")
}
//will accept correct letter for the guessword
function replaceAt(str, index, value) {
    return str.substr(0, index) + value + str.substr(index + value.length);
}
//put the letters on the board and replaces the underscores
function updateWord(positions, letter) {
    for (var pos of positions) {
        board = replaceAt(board, pos, letter)
    }
    updateBoard(board);
    if (!board.includes('_')) {
        endGame(true);
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

