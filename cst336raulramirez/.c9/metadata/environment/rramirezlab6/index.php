{"filter":false,"title":"index.php","tooltip":"/rramirezlab6/index.php","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["."],"id":2},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["."],"id":3}],[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"remove","lines":["."],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":25,"column":7},"action":"remove","lines":["<?php","    session_start();","?>","<!DOCTYPE html>","<html>","    <head>","        <title>OtterMart - Admin Site</title>","    </head>","    <body>","        <h1> OtterMart - Admin Site </h1>","        <form method=\"POST\" action=\"./loginProcess.php\">","            ","            Username:<input type = \"text\" name=\"username\"/><br/>","            Password:<input type = \"password\" name = \"password\"/><br/>","    ","            <input type = \"submit\" name = \"submitForm\" value = \"Login!\" />","            <?php","                if($_SESSION['incorrect']){","                    echo \"<p class = 'lead' id= 'error' style='color:red'>\";","                    echo \"<strong>Incorrect Username or Password!</strong></p>\";","                }","            ?>","        </form>","","    </body>","</html>"],"id":6},{"start":{"row":0,"column":0},"end":{"row":37,"column":7},"action":"insert","lines":["<?php","    session_start();","?>","<!DOCTYPE html>","<html>","    <head>","        <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">","        <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>","        <title>OtterMart - Admin Site</title>","    </head>","    <body>","        <div class=\"container\">","            <div class=\"row\">","                <h1 class=\"text-center\"> OtterMart - Admin Site </h1>","            </div>","            ","            ","            <form method=\"POST\" action=\"loginProcess.php\">","            <div class=\"btn-group-vertical btn-block text-center\" role=\"group\">    ","            ","            <label for=\"username\">Username:</label>","            <input type = \"text\" name=\"username\"/><br/>","            ","            <label for=\"password\">Password:</label>","            <input type = \"password\" name = \"password\"/><br/>","            ","            <input type = \"submit\" class=\"btn btn-danger btn-lg\" name = \"submitForm\" value = \"Login!\" />","            <?php","                if($_SESSION['incorrect']){","                    echo \"<p class = 'lead' id= 'error' style='color:red'>\";","                    echo \"<strong>Incorrect Username or Password!</strong></p>\";","                }","            ?>","            </div>","        </form>","        </div>","    </body>","</html>"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":35,"column":14},"end":{"row":35,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1531855932614,"hash":"3daa40a3447747568ede68b5af4069ef7b6c897f"}