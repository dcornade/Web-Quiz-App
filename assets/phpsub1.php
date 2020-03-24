<?php 
session_start();
$q = $_GET['qno'];
$j = $_SESSION['ans1'][$q];
if((trim($_SESSION['que'][$q][$j]))==(trim($_SESSION['que'][$q][5]))){
	$_SESSION['ans2'][$q]=1;
}else{
	$_SESSION['ans2'][$q]=0;
}
echo $_SESSION['ans2'][$q];
?>