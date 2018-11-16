<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <title>OtterMart - Admin Site</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <h1 class="text-center"> OtterMart - Admin Site </h1>
            </div>
            
            
            <form method="POST" action="loginProcess.php">
            <div class="btn-group-vertical btn-block text-center" role="group">    
            
            <label for="username">Username:</label>
            <input type = "text" name="username"/><br/>
            
            <label for="password">Password:</label>
            <input type = "password" name = "password"/><br/>
            
            <input type = "submit" class="btn btn-danger btn-lg" name = "submitForm" value = "Login!" />
            <?php
                if($_SESSION['incorrect']){
                    echo "<p class = 'lead' id= 'error' style='color:red'>";
                    echo "<strong>Incorrect Username or Password!</strong></p>";
                }
            ?>
            </div>
        </form>
        </div>
    </body>
</html>