<?php 
	/*$db = $_GET['db'];
	$tb = $_GET['tb'];*/
	echo "no";
	$i=1;
	$j=7;
	$j=rand(1,49);
	while($i <= 50){
		if($j <= 50){
			echo $j." - ".$i."<br>";
			$j=$j+7;
			$i++;
		}else{
		$j = intval($j%10);
	}
}
?>