<html ng-app="nano">
  <head>
  
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="<?php echo base_url(); ?>">
    <title>Nanoarthplus</title>
    
    <!-- Google Fonts -->
    <link href='assets/css/style1.css' rel='stylesheet' type='text/css'>
    <link href='assets/css/style2.css' rel='stylesheet' type='text/css'>
    <link href='assets/css/style3.css' rel='stylesheet' type='text/css'>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/common.css">
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

    
    <div class="site-branding-area container-fluid">
        <div class="container" id="top">
            <div class="row">
                <div class="col-sm-6">
                    <div class="logo">
                        <h1 style="margin:1px;"><a href="<?php echo base_url(); ?>"><img src="assets/img/nanoarthpluslogo2.png"></a></h1>
                    </div>
                </div>
                <div class="col-sm-6">
        <form method="post" class="form-inline pull-right" style="padding-top:15px">
            <input type="text" name="search_prod" id="search" class="form-control" placeholder="Search products...">
            <input type="button" value="Search" onClick="genericSearch()" class="btn btn-xs" style="padding:8px">
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
        <img src="assets/img/loader.gif" class="loader">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div> 
              <script>
              $(document).click(function (event) {
                if (event.target == $('.fixMenu')) {
                    $('.mega-dropdown').css('display','block');
                } else {
                    $('.mega-dropdown').css('display','none');
                }
            });
              </script>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav mainmenu">

                        <li id="home"><a href="<?php echo base_url(); ?>">Home</a></li>
                        <li id="aboutus"><a href="aboutus">About Us</a></li>
                        <li id="products"><a href="products">Products</a></li> 
                        <!--<li class="dropdown">
                            <a href="#" class="dropdown-toggle fixMenu" data-toggle="dropdown" >Products</a>
                            <ul class="dropdown-menu mega-dropdown">
                                <li class="row">
                                    <div class="col-sm-3">
                                        <ul class="list">
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                            <li><a href="category/{{data.cate_id}}">category</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="row">
                                            
                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        <div class="col-sm-3">
                                            <a href="product/{{item.product_id}}" class="thumbnail">
                                                <img ng-src="assets/productimages/hamza.jpg" width="100%" alt="">
                                                <div class="thumbnail-caption">test name</div>
                                            </a>
                                        </div>

                                        
                                    
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>-->
                        <li id="cate"><a href="category">Category</a></li>
                        <li id="contact"><a href="contactus">Contact us</a></li>                                  
                    </ul>
                </div>  
            </div>
        </div>
    </div> <!-- End mainmenu area -->