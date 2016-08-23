<?php
require_once("nano.php");
$obj = new Nano();
require_once("header.php");
if(isset($_GET['cateid'])){
	$categories = $obj->fetchdata(' categories ',' where parentid = '.$_GET['cateid'],' order by cate_id ','');
}else{
	$categories = $obj->fetchdata(' categories ',' ',' order by cate_id ','');
}


?>
    
    <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2><?=(isset($_GET['cateid'])) ? "Sub Categories" : "Categories"?></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
        
            <div class="row">
            <?php
			
			foreach($categories as $cate){
				
				$subcat = $obj->countrecord(' categories ',' * ',' where parentid = '.$cate['cate_id']);
				if($subcat['total'] > 1){
					?>
                <a href="category.php?cateid=<?=$cate['cate_id']?>"> <div class="category mycate"><?=$cate['name']?></div></a>
                <?php
				}else{
				?>
                <a href="products.php?cateid=<?=$cate['cate_id']?>"> <div class="category mycate"><?=$cate['name']?></div></a>
                <?php	
				}
			}
			?>
            </div>
            
            <!--<div class="row">
                <div class="col-md-12">
                    <div class="product-pagination text-center">
                        <nav>
                          <ul class="pagination">
                            <li>
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                              <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          </ul>
                        </nav>                        
                    </div>
                </div>
            </div>-->
        </div>
    </div>
  <?php  
    require_once("footer.php");
	?>