<?php
  // define variables and set to empty values
  $nameErr = $emailErr = $franErr = $selectErr = $genrErr = $aspErr = "";
  $fname = $email = $franchise = $lname = $genre = $aspect = $selected = $select = "";
  
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
  if (empty($_POST["aspect"])) {
    $aspErr = "One favorite aspect is required";
  } else {
    $aspect = test_input($_POST["explore"]);
    $aspect = test_input($_POST["achievements"]);
    $aspect = test_input($_POST["plot"]);
  }
  
  if (isset($_POST['aspect'])){
    foreach ($_POST['aspect'] as $selectedAspect)
    $selected[$selectedAspect] = "checked";
  }
  
  //checks to make sure franchise is selected
  if (empty($_POST["franchise"])) {
    $franErr = "Favorite franchise is required";
  } else {
    $franchise = test_input($_POST["franchise"]);
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