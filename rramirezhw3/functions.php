<?php
// define variables and set to empty values
$nameErr = $emailErr = $franErr = $aspErr = "";
$fname = $email = $lname = $genre = $franchise = "";
//initialize checkbox array
$aspect = count($_POST['aspect']) ? $_POST['aspect'] : array();
  
//gets the request from input form and looks to make sure first/last name 
//are not empty. Also checks that names do not have numbers in them
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["fname"]) || empty($_POST["lname"])){
      $nameErr = "Name is required";
    } else {
      $fname = test_input($_POST["fname"]);
      $lname = test_input($_POST["lname"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$fname) || !preg_match("/^[a-zA-Z ]*$/",$lname)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }
  //looks to see if an email was entered
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }
  //checks to make sure franchise is selected
  if (empty($_POST['aspect'])) {
    $aspErr = "One favorite aspect is required";
  } //checks to make sure franchise is selected
   else if (empty($_POST['franchise'])) {
    $franErr = "Favorite franchise is required";
  }
}

function poster() {
  //prints aspect images
  foreach($_POST['aspect'] as $aspect){
    echo "<div style='position: absolute; z-index: auto'><img src='./img/".$aspect.".png' alt='$aspect' title='".ucfirst("$aspect")."'width='100%'/></div>";
  }
  //prints franchise background
  if($_POST['franchise'] == 'cod') {
    echo "<img src='./img/cod.jpg' alt='Call of Duty' title='".ucfirst("Call of Duty")."'width='100%'/>"; 
  }else if($_POST['franchise'] == 'ff') {
    echo "<img src='./img/ff.jpg' alt='Final Fantasy XV' title='".ucfirst("Final Fantasy XV")."'width='100%'/>"; 
  }else if($_POST['franchise'] == 'sm') {
    echo "<img src='./img/sm.jpg' alt='Super Mario' title='".ucfirst("Super Mario")."'width='100%'/>"; 
  }
}

//takes user input and removes formatting
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>