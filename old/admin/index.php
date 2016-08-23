<?php
require_once("include/adminheader.php");
require_once("../nano.php");
$obj = new Nano();
$category = $obj->countrecord(' categories ',' cate_id ','');
$products = $obj->countrecord(' products ',' prod_id ','');

?>

        <div id="page-wrapper">

            <div class="row">
                <!-- Page Header -->
                <div class="col-lg-12">
                    <h1 class="page-header">Dashboard</h1>
                </div>
                <!--End Page Header -->
            </div>

            <div class="row">
                <!-- Welcome -->
                <div class="col-lg-12">
                    <div class="alert alert-info">
                        <i class="fa fa-folder-open"></i><b>&nbsp;Hello ! </b>Welcome <b><?=$_SESSION['user']?> </b>
                    </div>
                </div>
                <!--end  Welcome -->
            </div>


            <div class="row">
                <div class="panel panel-primary text-center no-boder">
                                        <div class="panel-body yellow">
                                            <i class="fa fa-bar-chart-o fa-3x"></i>
                                            <h3><?=$category[0];?> </h3>
                                        </div>
                                        <div class="panel-footer">
                                            <span class="panel-eyecandy-title">Categories
                                            </span>
                                        </div>
                                    </div>
                <div class="panel panel-primary text-center no-boder">
                        <div class="panel-body blue">
                            <i class="fa fa-pencil-square-o fa-3x"></i>
                            <h3><?=$products[0];?></h3>
                        </div>
                        <div class="panel-footer">
                            <span class="panel-eyecandy-title">Products
                            </span>
                        </div>
                    </div>

            </div>

        </div>
        <!-- end page-wrapper -->
<?php
require_once("include/footer.php");
?>