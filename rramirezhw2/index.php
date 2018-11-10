<!DOCTYPE html>
<?php
session_start();
if(isset($_POST['replay']) && ($_POST['replay'] == "Replay")) { 
        unset($_SESSION['values']); 
        session_destroy();
    }
?>
<html>
    <head>
        <title>Tic Tac Toe</title>
        <link rel="stylesheet" href="/rramirezhw2/css/style.css">
    </head>
    <body>
        <header><h1>Tic Tac Toe</h1></header>
        
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <table>
        <?php
        //will check for win sequences of selected spaces
        function isWin($board){
            $win_sequences = '012345678036147258048642';
            //counts 3 spaces for a win condition
            for($i=0;$i<=21;$i+=3){
                $player = $board[$win_sequences[$i]];
                if($player == $board[$win_sequences[$i+1]]){
                        if($player == $board[$win_sequences[$i+2]]){
                            if($player!=0){
                                //the player
                                return $player;
                        }
                    } 
                }   
            }
            //cpu
            return 0;
        }
        $win = 0;
        $values = array();
        //gets input on board
        if(empty($_GET['values'])){
            //creates the board values
            $values = array_fill(0,9,0);
            //determine who begins at random
            if(mt_rand(0,1)){
            $values = cpuTurn($values);
            }
        }else{
            //get the board
            $values = explode(',',$_GET['values']);
            //Check if a player X won, if not, player 0 plays its turn.
            $win = isWin($values);
            if($win==0){
                $values = cpuTurn($values);
            }
            $win = isWin($values);    
        }
        //Display the board as a table
        for($i=0;$i<9;$i++){
            //begin of a row
            if(fmod($i,3)==0){
                echo '<tr>';
            }
                echo '<td>';
                //places an x or an o on the board.
                if($values[$i]==1){
                    echo '<span>X</span>';
                }else if($values[$i]==-1){
                    echo '<span>O</span>';
                }else{
                //puts blank spaces onto the board and allows the player to mark them x or keep spaces if not clicked
                if($win==0){
                    $selected_Value = $values;
                    $selected_Value[$i]=1;
                    //combines multiple select values to simplify code. prints multiple spaces.
                    echo '<a href="index.php?values='.implode(',',$selected_Value).'">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>';
                }
            }
            echo '</td>';
            //end of a row
            if(fmod($i,3)==2){echo '</tr>';}
        }
        //places cpu marker randomly on the board
        function cpuTurn($board){
            if(in_array(0,$board)){
                $i = mt_rand(0,8);
                while($board[$i]!=0){
                    $i = mt_rand(0,8);
                }
                $board[$i]=-1;
            }
            return $board;
        }
    ?>
    </table>
      <?php
        //echo '<pre>'; print_r($values); echo '</pre>';
        //displays winning message
        if($win!=0){
            echo '<p>Player '.(($win==1)?'X':'O').' won!</p>';
            echo '<button>Replay!</button>';
        }else if($selected_Value == 9){
            echo '<p>Tie!</p>';
        }
      ?>
    </form>
    <footer>
        <hr>CST 336. 2018&copy; Ramirez <br/>
        <strong>Disclaimer:</strong> The information in this webpage is used for academic purposes only.<br/>
        <img src="/rramirezhw2/img/csumb.jpg" alt="Logo og our Mascot"/>
    </footer>
    </body>
</html>