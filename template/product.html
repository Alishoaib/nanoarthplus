<?php
require_once("nano.php");
$obj = new Nano();
require_once("header.php");
if(!isset($_REQUEST['id'])){
	header("Location:index.php");
}
?>    
    <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Shop</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Search Products</h2>
                        <form action="products.php" method="post">
                            <input type="text" name="search_prod" placeholder="Search products...">
                            <input type="submit" value="Search">
                        </form>
                    </div>
                    <?php
					$latproduct = $obj->fetchdata(' products ',' ',' order by prod_id desc ','limit 4');
					?>
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Products</h2>
                        <?php
						if(sizeof($latproduct) > 0){
							foreach($latproduct as $latprod){
								?>
                                <div class="thubmnail-recent">
                            <img src="productimages/<?=$latprod['prod_image'];?>" class="recent-thumb" alt="<?=$latprod['name'];?>">
                            <h2><a href="product.php?id=<?=$latprod['prod_id'];?>"><?=$latprod['name'];?></a></h2>
                            <div class="product-sidebar-price">
                                <?php /*?><ins><?=$latprod['curreny'];?><?=$latprod['price'];?></ins> <del><?=$latprod['curreny'];?><?=$latprod['price']+10;?></del><?php */?>
                            </div>                             
                        </div>
                                <?php
							}
						}
						?>
                        
                        <!--<div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>-->
                    </div>
                    
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Recent Products</h2>
                        <ul>
                        <?php
						if(sizeof($latproduct) > 0){
							foreach($latproduct as $latprod){
								?>
                            <li><a href="product.php?id=<?=$latprod['prod_id']?>"><?=$latprod['name']?></a></li>
                            
                            <?php
							}
						}
							?>
                            <!--<li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>-->
                        </ul>
                    </div>
                </div>
                <?php
				$product = $obj->fetchdata(' products ',' where prod_id = '.$_GET['id'],'','');
				$category = $obj->fetchdata(' categories ',' where cate_id = '.$product[0]['cate_id'],'','');
				
				?>
                <div class="col-md-8">
                    <div class="product-content-right">
                        <div class="product-breadcroumb">
                            <a href="products.php">Products</a>
                            <!--<a href="">Category Name</a>-->
                            <a href="product.php?id=<?=$product[0]['prod_id'];?>"><?=$product[0]['name']?></a>
                        </div>
                        
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="product-images">
                                    <div class="product-main-img">
                                        <img src="productimages/<?=$product[0]['prod_image']?>" alt="<?=$product[0]['name']?>">
                                    </div>
                                    
                                    <?php /*?><div class="product-gallery">
                                        <img src="productimages/<?=$product[0]['prod_image']?>" alt="<?=$product[0]['name']?>">
                                        <?php
										if(!empty($product[0]['prod_image2'])){
											?>
                                            <img src="productimages/<?=$product[0]['prod_image2']?>" alt="<?=$product[0]['name']?>">
                                            <?php
										}
										if(!empty($product[0]['prod_image3'])){
											?>
                                            <img src="productimages/<?=$product[0]['prod_image3']?>" alt="<?=$product[0]['name']?>">
                                            <?php
										}
										?>
                                        
                                        
                                    </div><?php */?>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="product-inner">
                                    <h2 class="product-name"><?=$product[0]['name']?></h2>
                                    <div class="product-inner-price">
                                        <?php /*?><ins><?=$product[0]['curreny']?><?=$product[0]['price']?></ins><?php */?> <!--<del>$100.00</del>-->
                                    </div>    
                                    
                                   <!-- <form action="" class="cart">
                                        <div class="quantity">
                                            <input type="number" size="4" class="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1">
                                        </div>
                                        <button class="add_to_cart_button" type="submit">Add to cart</button>
                                    </form>  --> 
                                    
                                    <div class="product-inner-category">
                                   
                                        <p>Category: <a href=""><?=$category[0]['name'];?></a>. <!--Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>.--> </p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul class="product-tab" role="tablist">
                                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                            <!--<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>-->
                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane fade in active" id="home">
                                                <h2>Product Description</h2>  
                                                <p><?=$product[0]['description'];?></p>
                                            </div>
                                            <!--<div role="tabpanel" class="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div class="submit-review">
                                                    <p><label for="name">Name</label> <input name="name" type="text"></p>
                                                    <p><label for="email">Email</label> <input name="email" type="email"></p>
                                                    <div class="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div class="rating-wrap-post">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"></p>
                                                </div>
                                            </div>-->
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <?php
                        $relatedproduct = $obj->fetchdata(' products ',' where cate_id = '.$product[0]['cate_id'].' and prod_id != '.$product[0]['prod_id'],' order by prod_id ',' limit 3');
						?>
                        <div class="related-products-wrapper">
                            <h2 class="related-products-title">Related Products</h2>
                            <div class="related-products-carousel">
                            <?php
							foreach($relatedproduct as $relprod){
							?>
                                <div class="single-product">
                                    <div class="product-f-image">
                                        <img src="productimages/<?=$relprod['prod_image'];?>" alt="<?=$relprod['name'];?>">
                                        <div class="product-hover">
                                            <!--<a href="" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>-->
                                            <a href="product.php?id=<?=$relprod['prod_id'];?>" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="product.php?id=<?=$relprod['prod_id'];?>"><?=$relprod['name'];?></a></h2>

                                    <?php /*?><div class="product-carousel-price">
                                        <ins><?=$relprod['curreny'];?><?=$relprod['price'];?></ins> 
                                    </div><?php */?> 
                                </div>
                                  <?php
							}
								  ?>                                
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
<?php  
    require_once("footer.php");
	?>