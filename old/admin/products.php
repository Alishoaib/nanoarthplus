<?php
error_reporting(0);
require_once("include/adminheader.php");
require_once("../nano.php");
$obj = new Nano();
$products = $obj->fetchdata(' products ','',' order by prod_id desc ','');
if(isset($_POST['save']) && empty($_POST['prod_id'])){	
	//print_r($obj->insertproduct($_POST['parent'],$_POST['name'],$_POST['description'],$_POST['status'],$_POST['currency'],$_POST['price'],$_FILES['images'])); die;
	if(!empty($_POST['parent']) && !empty($_POST['status']) && !empty($_POST['currency']) && !empty($_POST['price']) && !empty($_POST['name']) && !empty($_POST['description']) && sizeof($_FILES['images']['name']) > 0){
		
		$prd = $obj->insertproduct($_POST['parent'],$_POST['name'],$_POST['description'],$_POST['status'],$_POST['currency'],$_POST['price'],$_FILES['images']);
	//print_r($prd); die;
		if($prd){
			$status = 'success';
			header("Location: products.php?status=".$status);	
		}else{
			$status = 'error';
			header("Location: products.php?status=".$status);
		}
	}else{
		$status = 'error';
		header("Location: products.php?status=".$status);
	}
}

if(isset($_POST['save']) && !empty($_POST['prod_id'])){	

		$query = '';
	
	if(!empty($_POST['parent']) && !empty($_POST['status']) && !empty($_POST['currency']) && !empty($_POST['price']) && !empty($_POST['name']) && !empty($_POST['description'])){
		
		if(sizeof($_FILES['images']['name']) > 1){
			
			$cate_pix = $obj->fetchdata(' products ',' where prod_id = '.$_POST['prod_id'],'','');
						
			if(!empty($cate_pix[0]['prod_image'])){
				$imag = unlink('../productimages/'.$cate_pix[0]['prod_image']);
			}
				
			if(!empty($cate_pix[0]['prod_image2'])){
				unlink('../productimages/'.$cate_pix[0]['prod_image2']);
			}
			
			if(!empty($cate_pix[0]['prod_image3'])){
				unlink('../productimages/'.$cate_pix[0]['prod_image3']);
			}
			
			for($i = 0; $i<=sizeof($_FILES['images']['name']); $i++){
			if(!empty($_FILES['images']['name'][$i])){
				if(!file_exists('../productimages/'.$_FILES['images']['name'][$i])){
					move_uploaded_file($_FILES['images']['tmp_name'][$i],'../productimages/'.basename($_FILES['images']['name'][$i]));
				
						if($i != 0){
							$query .=  ", prod_image".($i+1)." = '".$_FILES['images']['name'][$i]."'";
						}else{
							$query .=  " , prod_image = '".$_FILES['images']['name'][$i]."'";
						}
				}
			}
			
		
			//$file = move_uploaded_file($image['name'][$i],'../productimages');
			//$stmt->bindParam(':prodimage'.$i+1, $image['name'][$i]);

		}
			
		}
		$prd = $obj->updaterec(' products',array('cate_id'=>$_POST['parent'],'name'=>$_POST['name'],'description'=>$_POST['description'],'status'=>$_POST['status'],'curreny'=>$_POST['currency'],'price'=>$_POST['price']),' where prod_id = '.$_POST['prod_id'],$query);
		
	//print_r($prd); die;
		if($prd){
			$status = 'success';
			header("Location: products.php?status=".$status);	
		}else{
			$status = 'error';
			header("Location: products.php?status=".$status);
		}
	}else{
		$status = 'error';
		header("Location: products.php?status=".$status);
	}
}

if(isset($_REQUEST['prodid'])){
	$caterecord = $obj->fetchdata(' products ',' where prod_id = '.$_REQUEST['prodid'],'','');
	if(sizeof($caterecord) > 0){
		
		$prod_id = $caterecord[0]['prod_id'];
		$parentselected = $caterecord[0]['cate_id'];
		$catename = $caterecord[0]['name'];
		$description = $caterecord[0]['description'];
		$status = $caterecord[0]['status'];
		$currency = $caterecord[0]['curreny'];
		$price = $caterecord[0]['price'];
	}
}
?>
<link href="assets/plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
        <!--  page-wrapper -->
          <div id="page-wrapper">
            <div class="row">
                 <!-- page header -->
                <div class="col-lg-12">
                    <h1 class="page-header">Products</h1>
                </div>
                <!--end page header -->
            </div>
            <?php
			if(isset($_REQUEST['status']) && $_REQUEST['status'] == 'success'){
				?>
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					Product Added
                </div>
                <?php
			}
			if(isset($_REQUEST['status']) && $_REQUEST['status'] == 'error'){
				?>
                <div class="alert alert-danger alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					Please enter complete detail of Product
                </div>
                <?php
			}
			if(isset($_REQUEST['status']) && $_REQUEST['status'] == 'delsuccess'){
				?>
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					Product Deleted
                </div>
                <?php
			}			
			?>
            <div class="row">
                <div class="col-lg-12">
                    <!-- Form Elements -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Add Product
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-10">
                                    <form role="form" method="post" enctype="multipart/form-data">
                                    <input type="hidden" name="prod_id" value="<?=(isset($prod_id)) ? $prod_id : ""?>" />
                                    
                                    	<div class="form-group">
                                            <label>Category</label>
                                            <select name="parent" class="form-control">
                                            <option value="">--Select Category--</option>
                                            <?php
											$parent_categories = $obj->fetchdata(' categories ','',' order by name ','');
											foreach($parent_categories as $row){
												?>
                                                <option value="<?=$row['cate_id']?>" <?=(isset($parentselected) && $parentselected == $row['cate_id']) ? "selected='selected'" : "";?>><?=$row['name']?></option>
                                                <?php
											}
											?>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" name="name" class="form-control" value="<?=(isset($catename)) ? $catename : ""?>">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea name="description" class="form-control" rows="3"><?=(isset($description)) ? $description : ""?></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Price</label>
                                            <input type="number" name="price" class="form-control" value="<?=(isset($price)) ? $price : ""?>">
                                        </div>
                                        <div class="form-group">
                                            <label>Currency Symbol</label>
                                            <input type="text" name="currency" class="form-control" value="<?=(isset($currency)) ? $currency : ""?>">
                                        </div>
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select name="status" class="form-control">
                                                <option value="1" <?=(isset($status) && $status == 1) ? "selected='selected'" : ""?>>Active</option>
                                                <option value="0" <?=(isset($status) && $status == 0) ? "selected='selected'" : ""?>>Block</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Images</label>
                                            <input type="file" name="images[]"  class="form-control" >
                                        </div>                                     
                                        <div style="float:right;">
                                        <input type="submit" name="save" class="btn btn-primary" value="Save">
                                        <button type="reset" class="btn btn-success">Reset Button</button>
										</div>
                                    </form>
                                </div>
                                
                            </div>
                            
                          <div class="row" style="margin-top:5%;">
                            <div class="col-lg-12">
                                <!-- Advanced Tables -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                         Products listing
                                    </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                    <tr>
                                                        <th width="20%">Name</th>
                                                        <th width="25%">Description</th>
                                                        <th width="10%">Category</th>
                                                        <th width="10%">Price</th>
                                                        <th width="10%">Status</th>
                                                        <th width="15%">Image</th>
                                                        <th width="10%">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <?php
												if(sizeof($products) > 0){
													$colr = '';
													$no = 1;
													foreach($products as $cat){
														if($no%2 == 0){
															$colr = 'odd gradeX';
														}else{
															$colr = 'even gradeC';
														}
														$parent = $obj->fetchdata(' categories ',' where cate_id = '.$cat['cate_id'],'','');
														?>
                                                         <tr class="<?=$colr;?>">
                                                            <td><?=$cat['name']?></td>
                                                            <td><?=$cat['description']?></td>
                                                            <td><?=$parent[0]['name'];?></td>
                                                            <td><?=$cat['curreny'].$cat['price']?></td>
                                                            <td><?=($cat['status'] == 1) ? "Active" : "Block";?></td>
                                                            <td><a href="prodimages.php?id=<?=$cat['prod_id']?>" target="_blank"><img src="../productimages/<?=$cat['prod_image']?>" style="width:100px; height:100px;" /></td>
                                                            <td class="center">
                                                             <a href="products.php?prodid=<?=$cat['prod_id']?>"><button type="button" class="btn btn-success btn-circle"><i class="fa fa-link"></i></button></a>
                                                             
                            <a href="proddelete.php?id=<?=$cat['prod_id'];?>" onclick=" return confirm('Are you sure want to delete this ?')"><button type="button" class="btn btn-warning btn-circle"><i class="fa fa-times"></i></button></a>
                            </td>
                                                           
                                                        </tr>
                                                        <?php
														$no++;
													}
												}
												?>
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </div>
                                <!--End Advanced Tables -->
                            </div>
                        </div>
                        </div>
                    </div>
                     <!-- End Form Elements -->
                </div>
            </div>
        </div>
        <!-- end page-wrapper -->

   <?php
require_once("include/footer.php");
?>
 <!-- Page-Level Plugin Scripts-->
    <script src="assets/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="assets/plugins/dataTables/dataTables.bootstrap.js"></script>
    <script>
        $(document).ready(function () {
            $('#dataTables-example').dataTable();
        });
    </script>