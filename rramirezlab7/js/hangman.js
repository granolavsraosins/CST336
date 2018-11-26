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

$(".replayBtn").on('click', function() {
    location.reload();
});

$("#letters").on("click", ".letter", function(){
    checkLetter($(this).attr("id"));
    disableButton($(this));
});

//FUNCTIONS
function startGame() {
    pickWord();
    createLetters();
    initBoard();
    updateBoard();
}
//Fill the board with underscores
function initBoard() {
    for(var letter in selectedWord) {
        board.push("_");
    }
}
//picks a random word from the array and sets it to upper case into a new variable
//the hint is the same as the random word
function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt].word.toUpperCase();
    selectedHint = words[randomInt].hint;
}
//puts the amount of underscores on the board according to the word
function updateBoard() {
    $("#word").empty();
    for (var i=0; i < board.length; i++){
        document.getElementById("word").innerHTML += letter + " ";
    }
}
//Creates the letters inside the letters div
function createLetters(){
    for(var letter of alphabet){
        $("#letters").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
    }
}
//populates the board according to the letter chosen and places the hint on the page
function updateBoard() {
    $("#word").empty();
    for (var letter of board) {
        $("#word").append(letter);
        $("#word").append(' ');
    }
    $("#word").append("<br />");
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
    checkLetter($(this).attr("id"));
    disableButton($(this));
});

$("#letterBtn").click(function(){
    var boxVal = $("#letterBox").val();
    console.log("You pressed the button and it has the value: " + boxVal);
});

$(".hint").on("click", function() {
    $(".hint").text("Hint: " + selectedHint);
});

function createLetters() {
    for(var letter of alphabet) {
        let letterInput = '"' + letter + '"';
        $("#letters").append("<button class='btn btn-success letter' id='" + letter + "'>" + letter + "</button>");
    }
}
//will accept correct letter for the guessword
function replaceAt(str, index, value) {
    return str.substr(0, index) + value + str.substr(index + value.length);
}
//places underscores on the page according to what the word is.
function initBoard() {
    for (var letter in selectedWord) {
        board += '_';
    }
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

