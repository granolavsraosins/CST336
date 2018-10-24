<?php

function displayCart() {
    //if there are items in the session display them
    if(isset($_SESSION['cart'])) {
        echo "<table class='table'>";
        foreach ($_SESSION['cart'] as $item) {
            $itemId = $item['id'];
            $itemQuant = $item['quantity'];
            
            echo'<tr>';
            
            //display data for item
            echo "<td><img src='" . $item['img'] . "'></td>";
            echo "<td><h4>" . $item['name'] . "</h4></td>";
            echo "<td><h4>$" . $item['price'] . "</h4></td>";
            
            //update form for the item
            echo '<form method="post">';
            echo "<input type='hidden' name='itemId' value='$itemId'>";
            echo "<td><input type='text' name='update' class='form=control' placeHolder='$itemQuant'></td>";
            echo '<td><button class="btn btn-danger">Update</button></td>';
            echo '</form>';
            
            //create separate form for delete
            echo "<form method='post'>";
            echo "<input type='hidden' name='removeId' value='$itemId'>";
            echo "<td><button class='btn btn-danger'>Remove</button></td>";
            echo "</form>";
            
            echo "</tr>";
        }
        echo "</table>";
    }
}
function displayCartCount() {
    echo count($_SESSION['cart']);
}

//displays the results in a table
function displayResults() {
    global $items;//necessary to get the global items array
    if(isset($items)) {
        echo "<table class = 'table'>";
        foreach($items as $item) {
            $itemName = $item['name'];
            $itemPrice = $item['salePrice'];
            $itemImage = $item['thumbnailImage'];
            $itemId = $item['itemId'];
            
            //display table row w/ add button for submitting form
            echo '<tr>';
            echo "<td><img src='$itemImage'></td>";
            echo "<td><h4>$itemName</h4></td>";
            echo "<td><h4>$$itemPrice</h4></td>";
            
            //create hidden fields to send item via post
            echo "<form method='post'>";
            echo "<input type='hidden' name='itemName' value='$itemName'>";
            echo "<input type='hidden' name='itemPrice' value='$itemPrice'>";
            echo "<input type='hidden' name='itemImg' value='$itemImage'>";
            echo "<input type='hidden' name='itemId' value='$itemId'>";
            
            //check to see if the most recent post request has the same itemId
            //if so the the item was just added to the cart. display a different button
            if($_POST['itemId'] == $itemId) {
                echo '<td><button class="btn btn-success">Added</button></td>';
            }else {
                echo '<td><button class="btn btn-warning">Add</button></td>';
            }
            echo '</tr>';
            echo '</form>';
        }
        echo "</table>";
    }
}
?> 