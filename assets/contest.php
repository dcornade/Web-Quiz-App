<?php 
	/*$db = $_GET['db'];
	$tb = $_GET['tb'];*/
	$i=1;
	$j=rand(1,49);
	while($i <= 50){
		if($j <= 50){
			
			echo $j." - ".$i."<br>";
		}else{
		$j = intval($j%10);
			echo $j." - ".$i."<br>";
	}
		$i++;
		$j=$j+7;
}
?>