<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Favorite Game Survey</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        
        <?php include 'functions.php'?>
        
        <style>
            @import url("css/styles.css");
        </style>
    </head>
    
    <body>
    <!-- HTML Form -->
    <h1>Gaming Survey</h1>    
    
    <!-- Start of form -->
    <div class="row">
        
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
    <div class="column">
        <p><span class="error">* required field</span></p>
        <label>First Name:</label> 
        <br>
        <input type="text" name="fname" value="<?php echo $fname;?>">
        <span class="error">* <?php echo $nameErr;?></span>
        <br><br>
        <label>Last Name:</label>
        <br>
        <input type="text" name="lname" value="<?php echo $lname;?>">
        <span class="error">* <?php echo $nameErr;?></span>
        <br><br>
        
        <label>E-mail:</label>
        <br>
        <input type="text" name="email" value="<?php echo $email;?>">
        <span class="error">* <?php echo $emailErr;?></span>
        <br><br>
        
        <!-- radio buttons for form -->
        <fieldset>
            
        <legend>Favorite Franchise: </legend>
        <span class="error">* <?php echo $franErr;?></span>
        <br>
            <input type="radio" name="franchise" 
            <?php if (isset($franchise) && 
            $franchise=="Final Fantasy") echo "checked";?> value="Final Fantasy">
            <label for="final_fantasy">Final Fantasy</label>
        <br>
            <input type="radio" name="franchise" 
            <?php if (isset($franchise) && 
            $franchise=="Call of Duty") echo "checked";?> value="Call of Duty">
            <label for="call_of_duty">Call of Duty</label>
        <br>
            <input type="radio" name="franchise" 
            <?php if (isset($franchise) && 
            $franchise=="Super Mario") echo "checked";?> value="Super Mario">
            <label for="super_mario">Super Mario</label>
        <br>
            <input type="radio" name="franchise" 
            <?php if (isset($franchise) && 
            $franchise=="Forza Motorsport") echo "checked";?> value="Forza Motorsport">
            <label for="forza_motorsport">Forza Motorsport</label>
        <br>
            <input type="radio" name="franchise" 
            <?php if (isset($franchise) && 
            $franchise=="Street Fighter") echo "checked";?> value="Street Fighter">
            <label for="street_fighter">Street Fighter</label>
        <br>
        </fieldset>
        </div>
        <!-- drop down and submit button -->
            <div class="column">
            <legend>Favorite Genre:</legend>  
            <?php
                $select = $_POST['genre'];
            ?>
            <select name="genre[]" required>
                <option value=""<?php if ($_GET['genre'] == ''){echo 'selected';}?>>Select One</option>
                <option value="shooter"<?php if (isset($select) && 'shooter'){?>selected == "true"<?php ;}?>>Shooter</option>
                <option value="RPG"<?php if (isset($select) && 'RPG'){?>selected == "true"<?php ;}?>>RPG</option>
                <option value="platformer"<?php if (isset($select) && 'platformer'){?>selected == "true"<?php ;}?>>Platformer</option>
                <option value="simulation"<?php if (isset($select) && 'simulation'){?>selected == "true"<?php ;}?>>Simulation</option>
                <option value="arcade"<?php if (isset($select) && 'arcade'){?>selected == "true"<?php ;}?>>Arcade</option>
            </select>
            <br>
            <br>
            
            <legend>Favorite Aspect</legend>
            <span class="error">* <?php echo $aspErr;?></span>
            <br>
            <input type="checkbox" name="aspect[]"
            <?php echo $selected['exploration'] ?> value="exploration" />
            <label for="exploration">exploration</label><br>
            
            <input type="checkbox" name="aspect[]" 
            <?php echo $selected['achievements'] ?> value="achievements" />
            <label for="achievements">achievements</label><br>
            
            <input type="checkbox" name="aspect[]"
            <?php echo $selected['plot'] ?> value="plot" />
            <label for="plot">plot</label><br>
            <br>
            <br>
            <input type="submit" name="submit" value="Submit">  
            </div>
        </form>
        
        <!-- styled output here -->
        <?php
            if(isset($_POST['submit']) && !empty($_POST['aspect']) && 
            !empty($_POST['genre']) && !empty($_POST['email']) && 
            !empty($_POST['email']) && !empty($_POST['fname']) &&
            !empty($_POST['lname'])){
        ?>
        <div class="row">
        <div class="column">
            <?php
            
            echo "$fname $lname has landed a great job working on the newest $franchise game!<br>";
            foreach ($_POST['genre'] as $select){
                echo "The hiring managers are looking forward to seeing more $select, ";
            }
            $chkbox = $_POST['aspect'];
            $N = count($chkbox);
            for($i = 0; $i < $N; $i++){
                echo $chkbox[$i];
                if($i < ($N - 1)){
                echo ', ';
                }
            }
            echo " qualities introduced in their upcoming titles!<br><br>";
            echo "Please send kudos $email";    
            ?>
        </div>
        </div>
        </div>
        <!-- end of form -->
        <br/>
        <?php
            }
        ?>
        
        <!--Put Javascript APIs here b/c it could block the displays by going first-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        
        <!-- Footer Info -->
        <footer>
            <hr>CST 336 2018&copy; Ramirez <br/>
            <strong>Disclaimer:</strong> The information in this webpage is used for academic purposes only.<br/>
            <img src="img/csumb.jpg" alt="Logo of our Mascot"/>
        </footer>
    </body>
</html>