<?php
include 'functions.php';

//start the session in any php file
session_start();

//Create an array in the session to hold cart items
if(!isset($_SESSION['cart'])){
   $_SESSION['cart'] = array();
}

//checks to see if the search form was submitted
if(isset($_GET['query'])){
    //gets access to our api
    include 'wmapi.php';
    $items = getProducts($_GET['query']);
}

//theitem name is set
if(isset($_POST['itemName'])){
   $newItem = array();
   $newItem['name'] = $_POST['itemName'];
   $newItem['price'] = $_POST['itemPrice'];
   $newItem['img'] = $_POST['itemImg'];
   $newItem['id'] = $_POST['itemId'];
   
   //check to see if other items are in the array with the same id
   //update quantity if it isn't new. Must be passed by reference
   foreach($_SESSION['cart'] as &$item){
       if ($newItem['id'] ==  $item['id']){
           $item['quantity'] += 1;
           $found = true;
       }
   }
   //add to array
   if($found != true){
       $newItem['quantity'] = 1;
       array_push($_SESSION['cart'], $newItem);
   }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <title>Products Page</title>
    </head>
    <body>
    <div class='container'>
        <div class='text-center'>
            <!-- Bootstrap Navigation Bar-->
            <nav class='navbar navbar-default - navbar-fixed-top'>
                <div class='container-fluid'>
                    <div class='navbar-header'>
                        <a class='navbar-brand' href='#'>R Squared Store</a>
                    </div>
                    <ul class='nav navbar-nav'>
                        <li><a href='index.php'>Home</a></li>
                        <li><a href='scart.php'>
                        <span class='glyphicon glyphicon-shopping-cart' aria-hidden='true'>   
                        </span> Cart: <?php displayCartCount(); ?> </a></li>
                    </ul>
                </div>
            </nav>
            <br /><br /><br />
            
            <!-- Search Form -->
            <form enctype="text/plain">
                <div class="form-group">
                    <label for="pName">Product Name</label>
                    <input type="text" class="form-control" name="query" id="pName" placeholder="Name">
                </div>
                <input type="submit" name="search-submitted" value="Submit" class="btn btn-default">
                <br /><br />
            </form>
            
            <?php displayResults(); ?>
        </div>
    </div>
    </body>
</html>