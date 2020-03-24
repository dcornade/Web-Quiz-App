<?php 
session_start();
$q = $_GET['q'];
if(is_null($_SESSION['ans2'][$q])){
	echo 0;
}else{
	echo 1;
}
?>