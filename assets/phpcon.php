<?php
	session_start();
	session_unset();
	$data2 = $_GET['db'];
	$tab2 = $_GET['tb'];
	if(($data2=="")||($tab2=="")){
		$data2 = "owlbase";
		$tab2 = "tallon";
	}
	$_SESSION['data2']=$data2;
	$_SESSION['tab2']=$tab2;
	$_SESSION['conn']=mysqli_connect("localhost","root","",$data2);
	if(!$_SESSION['conn']){
		echo "no1";
	}else{
		$sql1="Select * from ".$tab2;
		$_SESSION['res']=mysqli_query($_SESSION['conn'],$sql1);
		if($_SESSION['res']==false){
			echo "no2";
		}else{
			echo "yes";
		}
	}
?>