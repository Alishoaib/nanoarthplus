<?php
session_start();
ob_start();
if($_SESSION['login'] != true){
	header("Location: login.php");
}

require_once("../nano.php");
$obj = new Nano();
$images = $obj->fetchdata(' products ',' where prod_id = '.$_REQUEST['id'],'','');

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="assets/plugins/bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
<title><?=$images[0]['name'];?> Images</title>
</head>

<body>
<div class="container">
    <div class="col-lg-12">
 		<div class="row">
        	<?php
			if(sizeof($images) > 0){
				foreach($images as $row){
					?>
                    <div class="col-lg-4">
						<img src="../productimages/<?=$row['prod_image']?>" style="width:99%; padding:5px;" />            
            		</div>
                    <div class="col-lg-4">
						<img src="../productimages/<?=$row['prod_image2']?>" style="width:99%; padding:5px;" />            
            		</div>
                    <div class="col-lg-4">
						<img src="../productimages/<?=$row['prod_image3']?>" style="width:99%; padding:5px;" />            
            		</div>
                    <?php
				}
			}
			?>
            
        </div>   
    </div>
</div>
</body>
</html>