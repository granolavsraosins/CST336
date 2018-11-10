{"filter":false,"title":"home.php","tooltip":"/css/home.php","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":97,"column":7},"action":"insert","lines":["<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"> ","<html>","<head>","\t<title>PHP form check box example</title>","</head>","","<body>","","<?php","// Code downloaded from html-form-guide.com","// This code may be used and distributed freely without any charge.","//","// Disclaimer","// ----------","// This file is provided \"as is\" with no expressed or implied warranty.","// The author accepts no liability if it causes any damage whatsoever.","//","","\tif(isset($_POST['formSubmit'])) ","    {","\t\t$aDoor = $_POST['formDoor'];","\t\t","\t\tif(isset($_POST['formWheelchair'])) ","        {","\t\t\techo(\"<p>You DO need wheelchair access.</p>\\n\");","\t\t} ","        else ","        {","\t\t\techo(\"<p>You do NOT need wheelchair access.</p>\\n\");","\t\t}","\t\t","\t\tif(empty($aDoor)) ","        {","\t\t\techo(\"<p>You didn't select any buildings.</p>\\n\");","\t\t} ","        else ","        {","            $N = count($aDoor);","","\t\t\techo(\"<p>You selected $N door(s): \");","\t\t\tfor($i=0; $i < $N; $i++)","\t\t\t{","\t\t\t\techo($aDoor[$i] . \" \");","\t\t\t}","\t\t\techo(\"</p>\");","\t\t}","        ","        //Checking whether a particular check box is selected","        //See the IsChecked() function below","        if(IsChecked('formDoor','A'))","        {","            echo ' A is checked. ';","        }","        if(IsChecked('formDoor','B'))","        {","            echo ' B is checked. ';","        }","        //and so on","\t}","    ","    function IsChecked($chkname,$value)","    {","        if(!empty($_POST[$chkname]))","        {","            foreach($_POST[$chkname] as $chkval)","            {","                if($chkval == $value)","                {","                    return true;","                }","            }","        }","        return false;","    }","?>","","<form action=\"<?php echo htmlentities($_SERVER['PHP_SELF']); ?>\" method=\"post\">","\t<p>","\t\tWhich buildings do you want access to?<br/>","\t\t<input type=\"checkbox\" name=\"formDoor[]\" value=\"A\" />Acorn Building<br />","\t\t<input type=\"checkbox\" name=\"formDoor[]\" value=\"B\" />Brown Hall<br />","\t\t<input type=\"checkbox\" name=\"formDoor[]\" value=\"C\" />Carnegie Complex<br />","\t\t<input type=\"checkbox\" name=\"formDoor[]\" value=\"D\" />Drake Commons<br />","\t\t<input type=\"checkbox\" name=\"formDoor[]\" value=\"E\" />Elliot House","\t</p>","\t<p>","\t\tDo you need wheelchair access?","\t\t<input type=\"checkbox\" name=\"formWheelchair\" value=\"Yes\" />","\t</p>","\t<input type=\"submit\" name=\"formSubmit\" value=\"Submit\" />","</form>","","<p>","<a href='http://www.html-form-guide.com/php-form/php-form-checkbox.html'>Handling checkbox in a PHP form processor</a>","</p>","","</body>","</html>"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":7},"end":{"row":4,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1531005203611,"hash":"8cf933d64c14aae8fb9d7c399c8a0408a4e21d66"}