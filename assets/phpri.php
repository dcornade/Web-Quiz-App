<?php
session_start();
$q = $_GET['qno'];
for($i=1;$i<5;$i++){
	if(trim($_SESSION['que'][$q][$i])==trim($_SESSION['que'][$q][5])){
		echo $i;
	}
}
?>