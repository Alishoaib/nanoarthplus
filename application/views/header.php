<html ng-app="nano">
  <head>
  <base href="<?=base_url();?>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nanoarthplus</title>
    
    <!-- Google Fonts -->
    <link href='assets/css/style1.css' rel='stylesheet' type='text/css'>
    <link href='assets/css/style2.css' rel='stylesheet' type='text/css'>
    <link href='assets/css/style3.css' rel='stylesheet' type='text/css'>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/owl.carousel.css">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <script src="assets/js/common/angular.min.js"></script>    
    <script src="assets/js/common/angular-route.min.js"></script>
    <script src="angularjs/routes.js"></script>
    <script src="assets/js/common/common.js"></script>
    <script src="angularjs/controllers/defaultController.js"></script>
    <script src="angularjs/controllers/aboutusController.js"></script>
    <script src="angularjs/controllers/categoryController.js"></script>
    <script src="angularjs/controllers/contactusController.js"></script>
    <script src="angularjs/controllers/productsController.js"></script>
    <script src="angularjs/controllers/productdetailController.js"></script>    

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style type="text/css">
	.logo img {
		width: 38%;
	}
	</style>
  </head>
  <body ng-app="nano">
   
    <!--<div class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="user-menu">
                        <ul>
                            <li><a href="#"><i class="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i class="fa fa-user"></i> Checkout</a></li>
                            <li><a href="#"><i class="fa fa-user"></i> Login</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="header-right">
                        <ul class="list-unstyled list-inline">
                            <!--<li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">currency :</span><span class="value">USD </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">language :</span><span class="value">English </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>--> <!-- End header area -->
    
    <div class="site-branding-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="logo">
                        <h1 style="margin:1px;"><a href="<?php echo base_url(); ?>"><img src="assets/img/nanoarthpluslogo2.png"></a></h1>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4" style="float:right; margin:5px;">
        <form action="products.php" method="post" style="float:right;margin-top: 15px;">
            <input type="text" name="search_prod" placeholder="Search products...">
            <input type="submit" value="Search">
        </form>
        </div>
                
                <!--<div class="col-sm-6">
                    <div class="shopping-item">
                        <a href="cart.html">Cart - <span class="cart-amunt">$100</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">5</span></a>
                    </div>
                </div>-->
            </div>
        </div>
    </div> <!-- End site branding area -->
    
    <div class="mainmenu-area">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div> 
              
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="<?php echo base_url(); ?>">Home</a></li>
                        <li><a href="aboutus">About Us</a></li>
                        <li><a href="products">Products</a></li>
                        <li><a href="category">Category</a></li>
                        <li><a href="contactus">Contact us</a></li>                </div>  
            </div>
        </div>
    </div> <!-- End mainmenu area -->