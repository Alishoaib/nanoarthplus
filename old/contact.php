<?php
require_once("nano.php");
$obj = new Nano();
require_once("header.php");

if(isset($_POST['send'])){
	mail('alishoaib@live.com','Email from website from '.$_POST['name'],$_POST['message']);
}
?>
    <style type="text/css">
	.send {
		float:right;
	}
	
	.send:hover {
		background-color:#fbfbfb;
		color:#000;
	}
	</style>
    <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
        
            <div class="row">
            	<div class="col-lg-8">
                <form action="" method="post" style="padding:25px 0 !important;">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea class="form-control" name="message" style="width:100%; height:250px;"></textarea>
                    </div>
                    
                    <input type="submit" name="send" value="Send" class="btn btn-default send" />
                    
                
                </form>
                </div>
            </div>            
            
        </div>
    </div>
  <?php  
    require_once("footer.php");
	?>