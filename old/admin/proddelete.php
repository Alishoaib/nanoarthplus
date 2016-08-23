<?php
require_once("include/adminheader.php");
require_once("../nano.php");
$obj = new Nano();
$cate_pix = $obj->fetchdata(' products ',' where prod_id = '.$_REQUEST['id'],'','');

if(!empty($cate_pix[0]['prod_image'])){
	unlink('../productimages/'.$cate_pix[0]['prod_image']);
}

if(!empty($cate_pix[0]['prod_image2'])){
	unlink('../productimages/'.$cate_pix[0]['prod_image2']);
}

if(!empty($cate_pix[0]['prod_image3'])){
	unlink('../productimages/'.$cate_pix[0]['prod_image3']);
}

$categories = $obj->deletedata(' products ',' prod_id ',$_REQUEST['id']);
if($categories){
	$status = 'delsuccess';
	header("Location: products.php?status=".$status);
}else{
	header("Location: products.php?status='error'");
}
?>