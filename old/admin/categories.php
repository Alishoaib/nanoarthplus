<?php
require_once("include/adminheader.php");
require_once("../nano.php");
$obj = new Nano();
$categories = $obj->fetchdata(' categories ','',' order by cate_id desc ','');
if(isset($_POST['save']) && empty($_POST['cate_id'])){
	if(!empty($_POST['name'])){
		$cate = $obj->insertcategory($_POST['name'],$_POST['description'],$_POST['status'],$_POST['parent']);
	
		$status = 'success';
		header("Location: categories.php?status=".$status);
		
	}else{
		$status = 'error';
		header("Location: categories.php?status=".$status);
	}
}

if(isset($_POST['save']) && !empty($_POST['cate_id'])){
	if(!empty($_POST['name'])){
		$updatecate = $obj->updaterec("categories",array('name'=>$_POST['name'],'description'=>$_POST['description'],'status'=>$_POST['status'],'parentid'=>$_POST['parent']),' where cate_id = '.$_POST['cate_id'],NULL);
	if($updatecate){
		$status = 'success';
		header("Location: categories.php?status=".$status);
	}else{
		$status = 'error';
		header("Location: categories.php?status=".$status);
	}
		
	}else{
		$status = 'error';
		header("Location: categories.php?status=".$status);
	}
}
if(isset($_REQUEST['cateid'])){
	$caterecord = $obj->fetchdata(' categories ',' where cate_id = '.$_REQUEST['cateid'],'','');
	if(sizeof($caterecord) > 0){
		
		$cate_id = $caterecord[0]['cate_id'];
		$parentselected = $caterecord[0]['parentid'];
		$catename = $caterecord[0]['name'];
		$description = $caterecord[0]['description'];
		$status = $caterecord[0]['status'];
	}
}
?>
<link href="assets/plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
        <!--  page-wrapper -->
          <div id="page-wrapper">
            <div class="row">
                 <!-- page header -->
                <div class="col-lg-12">
                    <h1 class="page-header">Categories</h1>
                </div>
                <!--end page header -->
            </div>
            <?php
			if(isset($_REQUEST['status']) && $_REQUEST['status'] == 'success'){
				?>
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					Category Added
                </div>
                <?php
			}
			if(isset($_REQUEST['status']) && $_REQUEST['status'] == 'error'){
				?>
                <div class="alert alert-danger alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					Please enter complete detail of category
                </div>
                <?php
			}
			if(isset($_REQUEST['status']) && $_REQUEST['status'] == 'delsuccess'){
				?>
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					Category Deleted
                </div>
                <?php
			}			
			?>
            <div class="row">
                <div class="col-lg-12">
                    <!-- Form Elements -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Add Category
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-10">
                                    <form role="form" method="post">
                                    <input type="hidden" name="cate_id" value="<?=(isset($cate_id)) ? $cate_id : ""?>" />
                                    
                                    	<div class="form-group">
                                            <label>Parent Category</label>
                                            <select name="parent" class="form-control">
                                            <option value="0">--Itself Parent--</option>
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
                                            <label>Status</label>
                                            <select name="status" class="form-control">
                                                <option value="1" <?=(isset($status) && $status == 1) ? "selected='selected'" : ""?>>Active</option>
                                                <option value="0" <?=(isset($status) && $status == 0) ? "selected='selected'" : ""?>>Block</option>
                                            </select>
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
                                         Categories listing
                                    </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Parent</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <?php
												if(sizeof($categories) > 0){
													$colr = '';
													$no = 1;
													foreach($categories as $cat){
														if($no%2 == 0){
															$colr = 'odd gradeX';
														}else{
															$colr = 'even gradeC';
														}
														$parent = $obj->fetchdata(' categories ',' where cate_id = '.$cat['parentid'],'','');
														?>
                                                         <tr class="<?=$colr;?>">
                                                            <td><?=$cat['name']?></td>
                                                            <td><?=$cat['description']?></td>
                                                            <td><?=($cat['parentid'] > 0) ? $parent[0]['name'] : "Itsel parent";?></td>
                                                            <td><?=($cat['status'] == 1) ? "Active" : "Block";?></td>
                                                            <td class="center">
                                                             <a href="categories.php?cateid=<?=$cat['cate_id']?>"><button type="button" class="btn btn-success btn-circle"><i class="fa fa-link"></i></button></a>
                                                             
                            <a href="catedelete.php?id=<?=$cat['cate_id'];?>" onclick=" return confirm('Are you sure want to delete this ?')"><button type="button" class="btn btn-warning btn-circle"><i class="fa fa-times"></i></button></a>
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