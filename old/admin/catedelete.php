<?php
require_once("include/adminheader.php");
require_once("../nano.php");
$obj = new Nano();
$categories = $obj->deletedata(' categories ',' cate_id ',$_REQUEST['id']);
if($categories){
	$status = 'delsuccess';
	header("Location: categories.php?status=".$status);
}else{
	header("Location: categories.php?status='error'");
}
?>