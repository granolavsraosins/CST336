<?php
	include '/rramirezlab5/dbConnection.php';
	$conn = getDabaseConnection("ottermart");
	
	$productId = $_GET['productId'];
	
	$sql = "SELECT * 
			FROM om_product
			NATURAL JOIN om_purchase
			WHERE productId = :pId";
	$np = array();
	$np[":pId"]=$productId;
	
	$stmt = $conn->prepare($sql); // This will send the sql you provided
	$stmt->execute($np); // This will execute the sql
	$records = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	echo $records[0]['productName'] . "<br/>";
	echo "<img src='" . $records[0]['productImage'] . "' width='200'/><br/>";
	
	foreach($records as $record){
		echo "Purchase Date: ". $record["purchaseDate"]."<br/>";
		echo "Unit Price: " . $record["unitPrice"]."<br/>";
		echo "Quantity: ". $record["quantity"]."<br/>";
	}
?>