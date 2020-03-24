<?php
session_start();
$data2 = "owlbase";
$tab2 = "tallon";
$_SESSION['conn']=mysqli_connect("localhost","root","",$_SESSION['data2']);
$sql1="Select * from ".$_SESSION['tab2'];
$_SESSION['res']=mysqli_query($_SESSION['conn'],$sql1);
$j = rand(1,49);
while($row=mysqli_fetch_assoc($_SESSION['res'])){
	if($j<=50){
		$_SESSION['que'][$j][0]=$row["quest"];
		$_SESSION['que'][$j][1]=$row["op1"];
		$_SESSION['que'][$j][2]=$row["op2"];
		$_SESSION['que'][$j][3]=$row["op3"];
		$_SESSION['que'][$j][4]=$row["op4"];
		$_SESSION['que'][$j][5]=$row["ans"];
	}else{
		$j = intval($j%10);
		$_SESSION['que'][$j][0]=$row["quest"];
		$_SESSION['que'][$j][1]=$row["op1"];
		$_SESSION['que'][$j][2]=$row["op2"];
		$_SESSION['que'][$j][3]=$row["op3"];
		$_SESSION['que'][$j][4]=$row["op4"];
		$_SESSION['que'][$j][5]=$row["ans"];
	}
	$j=$j+7;
}
?>