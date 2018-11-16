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
            <label for="franchise">
            <input type="radio" name="franchise" value="ff"
            <?php if(isset($_POST['franchise']) && $_POST['franchise'] == 'ff')  
            echo ' checked="checked"';?>>
            Final Fantasy
        <br>
            <input type="radio" name="franchise" value="cod"
            <?php if(isset($_POST['franchise']) && $_POST['franchise'] == 'cod')  
            echo ' checked="checked"';?>>
            Call of Duty
        <br>
            <input type="radio" name="franchise" value="sm"
            <?php if(isset($_POST['franchise']) && $_POST['franchise'] == 'sm')  
            echo ' checked="checked"';?>>
            Super Mario
            </label>
        <br>
        </fieldset>
        </div>
        <!-- drop down and submit button -->
            <div class="column">
            <legend>Favorite Genre:</legend>  
            <?php
                $select = $_POST['genre'];
            ?>
            <select name='genre' required onChange="this.form.submit();">
                <option value=''<?php if($_POST['genre'] == '') echo 'selected="selected"';?>>Select One</option>
                <option value='shooter'<?php if($_POST['genre'] == 'shooter') echo 'selected="selected"';?>>Shooter</option>
                <option value='rpg'<?php if($_POST['genre'] == 'rpg') echo 'selected="selected"';?>>RPG</option>
                <option value='platformer'<?php if($_POST['genre'] == 'platformer') echo 'selected="selected"';?>>Platformer</option>
            </select>
            <br>
            <br>
            
            <label><legend>Favorite Aspect</legend></label>
            <span class="error">* <?php echo $aspErr;?></span><br>
            
            <label><input type="checkbox" name="aspect[]" value="exploration"
            <?php echo in_array('exploration' , $aspect)?'checked="checked"':'';?>>exploration</label><br>
            
            <label><input type="checkbox" name="aspect[]" value="achievements"
            <?php echo in_array('achievements' , $aspect)?'checked="checked"':'';?>>achievements</label><br>
            
            <label><input type="checkbox" name="aspect[]" value="plot"
            <?php echo in_array('plot' , $aspect)?'checked="checked"':'';?>>plot</label><br>
            <br>
            <br>
            <input type="submit" name="submit" value="Submit">  
            </div>
        </form>
        <!-- styled output here -->
        <div class="row">
        <div class="column">
        <?php
            if(isset($_POST['submit']) && !empty($_POST['aspect']) && 
                !empty($_POST['genre']) && !empty($_POST['email']) && 
                !empty($_POST['email']) && !empty($_POST['fname']) &&
                !empty($_POST['lname'])){
                    echo "<div>Hello $fname $lname <br>Here's your poster!</div>";
                    poster();
                }else {
                    echo "<div> Please fill out all form elements.</div>";
            }
        ?>
        </div>
        </div>
        </div>
        <!-- end of form -->
        <br/>
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