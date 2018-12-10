<?php
   include 'dbConnection.php'; 
   
   $conn = getDatabaseConnection(“ottermart”);
   
   function displayCategories(){
	    global $conn;
	   
	    $sql = "SELECT catId, catName FROM om_category ORDER BY catName";
	   	$stmt = $conn->prepare($sql); // This will send the sql you provided
		$stmt->execute(); // This will execute the sql
		$records = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
	    foreach ($records as $record){
		   echo "<option value='".$record["catId"]."'>".$record["catName"]."</option>";
	    }
    }
	function displaySearchResults(){
		global $conn;
		
		if (isset($_GET['searchForm'])){//checks for user submit
			echo "<h3>Products Found: </h3>";
			//prevents sql injection
			$namedParameters = array();
			
			$sql = "SELECT * FROM om_product WHERE 1";
			
			if(!empty($_GET['product'])){
				 $sql .=  " AND productName LIKE :productName OR productDescription LIKE :productName";
                 $namedParameters[":productName"] = "%" . $_GET['product'] . "%";
			}
			if(!empty($_GET['category'])){
				$sql .= " AND catId = :categoryId";
				$namedParameters[":categoryId"]= $_GET['category'];
			}
			if(!empty($_GET['priceFrom'])){
				$sql .= " AND price >= :priceFrom";
				$namedParameters[":priceFrom"] = $_GET['priceFrom'];
			}
			if(!empty($_GET['priceTo'])){
				$sql .= " AND price <= :priceTo";
				$namedParameters[":priceTo"] = $_GET['priceTo'];
			}
			if(isset($_GET['orderBy'])){
				if($_GET['orderBy'] == "price"){
					$sql .= " ORDER BY price";
				}else{
					$sql .= " ORDER BY productName";
				}
			}	
			$stmt = $conn->prepare($sql);
            $stmt->execute($namedParameters); // We NEED to include $namedParameters here
            $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
			
			foreach ($records as $record){
				echo "<a href='purchaseHistory.php?productId=".$record['productId']. "'> History </a>";
				echo $record["productName"]." ".$record["productDescription"]. " $" . $record["price"]."<br/><br/>";
			}
		}
	}	
?>
<!DOCTYPE html>
<html>
	<head>
		<title>OtterMart Product Search</title>
		<link rel="stylesheet" href="css/styles.css" type="text/css"/>
	</head>
	<body>
			<h1> OtterMart Product Search </h1>
			<div class="row">
			<form>
				<div class="column">
				<label>Product:</label><br>				
				<input type="text" name ="product"/>
				<br/><br/>
				<label>Category:</label> 
					<select name="category">
						<option value="">Select One</option>
						<?=displayCategories()?>
					</select>
				<br/><br/>
				<label>Price:</label><br> 
				<label>From</label>
				<input type="text" name="priceFrom" size="7"/>
				<label>To</label>  
				<input type="text" name="priceTo" size="7"/>
				<br/>
				<label>Order result by:</label>
				<br/>
				<input type="radio" name="orderBy" value="price"/> Price <br/>
				<input type="radio" name="orderBy" value="name"/> Name <br/>
				<br/><br/>
				<input type="submit" value="Search" name="searchForm">
				</div>
			</form>
			</div>
			<br/>
		
		<hr>
		<?=displaySearchResults()?>
		</div>
		<!-- Footer Info -->
        <footer>
            <hr>CST 336 2018&copy; Ramirez <br/>
            <strong>Disclaimer:</strong> The information in this webpage is used for academic purposes only.<br/>
            <img src="img/csumb.jpg" alt="Logo of our Mascot"/>
        </footer>
	</body>
</html>