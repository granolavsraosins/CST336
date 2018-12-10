<?php
    session_start();    
    include 'functions.php';
    $conn = getDatabaseConnection();

    if(!isset($_SESSION['cart'])){
        $_SESSION['cart'] = array();
        
    }
    
    // Check to see if an item has been added to the cart
    if(isset($_POST['name'])){
        $newItem = array();
        $newItem['name'] = $_POST['name'];
        $newItem['price'] = $_POST['price'];
        $newItem['picture']=$_POST['picture'];
        $newItem['idVid'] = $_POST['idVid'];
        
        foreach($_SESSION['cart'] as &$item){
            if($newItem['idVid'] == $item['idVid']){
                $item['quantity'] += 1;
                $found = true;
            }
        }
        
        if($found != true){
            $newItem['quantity'] = 1;
            array_push($_SESSION['cart'], $newItem);
        }
    }

    function displayCart() {
        
        if(isset($_SESSION['cart'])) {
            echo "<table class='table'>";
            echo "<thead>
                    <tr>
                        <th scope='col'>Picture</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                    </tr>
                    </thead>";
            echo "<tbody>";
            foreach($_SESSION['cart'] as $item) {
                $name = $item['name'];
                $price = $item['price'];
                $picture = $item['picture'];
                $idVid = $item['idVid'];
                //$itemQuant = $item['quantity'];
                
                echo "<tr>";
            
                echo "<td><img src='img/$picture'></td>";
                echo "<td><h4>$name</h4></td>";
                echo "<td><h4>$$price</h4></td>";
                //echo "<td><h4>$itemQuant</h4></td>";
                
                //Update form for this item
                echo '<form method="post">';
                echo "<input type='hidden' name='idVid' value='$idVid'>";
                //echo "<td><input type='text' name='update' class='form-control' placeHolder='$itemQuant'></td>";
                //echo '<td><button class="btn btn-danger">Update</button></td>';
                echo '</form>';
                
                // Hidden input element containing the item name
                echo "<form method='post'>";
                echo "<input type='hidden' name='removeVid' value='$idVid'>";
                echo "<td><button class='btn btn-danger'>Remove</button></td>";
                echo "</form>";
                
                echo "</tr>";
            }
        echo"</tbody>";
        echo "</table>";
        }
    }

    if(isset($_POST['removeVid'])) {
        foreach($_SESSION['cart'] as $itemKey => $item) {
            if($item['idVid']==$_POST['removeVid']) {
                unset($_SESSION['cart'][$itemKey]);
            }
        }
    }

    if(isset($_POST['idVid'])){
      foreach($_SESSION['cart'] as &$item){
          if($item['idVid'] == $_POST['idVid']){
              $item['quantity'] = $_POST['update'];
          }
      }
    }
    

  
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Vid Cart</title>
        <link href="./css/styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary rounded">
            <a class="navbar-brand" href="http://csumb.edu" target="_blank">CSUMB</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="index.php" id="home">
                    <i class="fp-home"></i>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="admin.php" id = 'login'>
                <i class="adminLogin"></i>Admin Login</a>
            </li>
                <li class="nav-item">
                <a class="nav-link" href="about.php" id = 'about'>
                <i class="about-us"></i>About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="scart.php" id = 'cart'>
                <i class="videoCart"></i>Cart: <?php displayCartCount();?></a>
            </li>
          </ul>
        </div>
    </nav>
    <br/>
        <h1>Video Cart</h1>
        <!--<button type="button" class="btn btn-lg btn-primary btn-block" data-toggle="collapse" data-target="#results" aria-expanded="false" aria-controls="results">Proceed to Summary</button>-->
        <a class="btn btn-lg btn-primary btn-outline-danger btn-block" href="saleSummary.php" role="button">Proceed to Summary</a>
        <br/>
        <!--<div id="results" class="collapse">
        <?php //displaySummary();?>
        </div>
        <br/>-->
        <?php displayCart(); ?>
    </body>
</html>