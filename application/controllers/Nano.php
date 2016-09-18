<?php
require APPPATH . '/libraries/REST_Controller.php';
class Nano extends REST_Controller {
	
	function __construct(){
		parent::__construct();
		$this->load->library('REST_Controller');
	}

    public function categories_get()
	{
		$data = $this->Generalmodal->category();
		if(sizeof($data) > 0){
			$this->response(array("status"=>"SUCCESS","message"=>"record finded","object"=>$data), REST_Controller::HTTP_OK);
			
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL), REST_Controller::HTTP_OK);
		}
	}
	
	public function subCategories_get($id)
	{
		$data = $this->Generalmodal->subcategory($id);
		$this->response($data, REST_Controller::HTTP_OK);
		//$this->response($data, REST_Controller::HTTP_NOT_FOUND);
	}
	
	public function allProducts_get(){
		$data = $this->Generalmodal->join_two_result('products pr','product_images pi','pr.prod_id=pi.product_id','pr.prod_id',NULL,'*','pr.prod_id',"desc");
		if(sizeof($data) > 0){
			$this->response($data,REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
		}
		
	}
	
	public function productsByCategory_get($cate){
		$data = $this->Generalmodal->join_three_result('categories cat','products pr','product_images pi','cat.cate_id=pr.cate_id','pr.prod_id=pi.product_id',$group=NULL,array('cat.cate_id'=>$cate),$select='*','pr.prod_id',"disc");
		if(sizeof($data) > 0){
			$this->response(array("status"=>"SUCCESS","message"=>"record finded","object"=>$data),REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
		}
	}
	
	public function productdetail_get($id){
		$data = $this->Generalmodal->join_three_result('categories cat','products pr','product_images pi','cat.cate_id=pr.cate_id','pr.prod_id=pi.product_id',$group=NULL,array('pr.prod_id'=>$id),'cat.name as catname,pr.*,pi.*');	
		
		if($data){
			$object = array();
			$images = array();
			
			foreach($data as $val){
				$images[] = array('image_id' => $val->image_id,'image_name' => $val->image_name);
			}
			$object['prod_id'] = $data[0]->prod_id;
			$object['cate_id'] = $data[0]->cate_id;
			$object['catname'] = $data[0]->catname;
			$object['prodname'] = $data[0]->name;
			$object['description'] = $data[0]->description;
			$object['curreny'] = $data[0]->curreny;
			$object['status'] = $data[0]->status;
			$object['price'] = $data[0]->price;
			$object['images'] = $images;
			$this->response(array("status"=>"SUCCESS","message"=>"record finded","object"=>$object),REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
		}
		
	}
	
	public function contactus_put(){
		$insert = $this->put();
		$data = $this->Generalmodal->insertdata('contactus',$insert);
		
		$this->load->library('email');

		$this->email->from($this->put('email'),$this->put('name'));
		//$this->email->to('naveed_meer26@hotmail.com');
		$this->email->to('alishoaib174@gmail.com');
		
		$this->email->subject('Customer Email From Nanoarthplus');
		$this->email->message($this->put('message'));
		
		$eamil = $this->email->send();
		if($eamil){
			$this->response($data,REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"Error in email","object"=>NULL), REST_Controller::HTTP_FORBIDDEN );
		}
		
	}
	
	public function productsearch_get(){
		$str = $this->get('name');
		$data = $this->Generalmodal->join_three_result('categories cat','products pr','product_images pi','cat.cate_id=pr.cate_id','pr.prod_id=pi.product_id',$group=NULL,"pr.name like \"%$str%\"",$select='*','pr.prod_id',"disc");
		if(sizeof($data)){
			$this->response(array("status"=>"SUCCESS","message"=>"record finded","object"=>$data),REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
		}
	}
	
	public function categorieslimit_get($limit)
	{
		$data = $this->Generalmodal->childcategory($limit);
		$this->response($data, REST_Controller::HTTP_OK);
		//$this->response($data, REST_Controller::HTTP_NOT_FOUND);
	}
	
	public function productsByCategoryLimit_get($cate,$limit){
		$data = $this->Generalmodal->join_three_result('categories cat','products pr','product_images pi','cat.cate_id=pr.cate_id','pr.prod_id=pi.product_id',$group=NULL,array('cat.cate_id'=>$cate),$select='*','pr.prod_id',"disc",$limit);
		if(sizeof($data)){
			$this->response(array("status"=>"SUCCESS","message"=>"record finded","object"=>$data),REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
		}
	}
	
	public function allProductsLimit_get($limit){
		$data = $this->Generalmodal->join_two_result('products pr','product_images pi','pr.prod_id=pi.product_id','pr.prod_id',NULL,'*','pr.prod_id',"desc",$limit);
		if(sizeof($data) > 0){
			$this->response($data,REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
		}
	}
	
	public function productForSlider_get(){
		$data = $this->Generalmodal->join_two_result('products pr','product_images pi','pr.prod_id=pi.product_id','pr.prod_id',NULL,'*','pr.prod_id',"desc",72);
		if(sizeof($data) > 0){
			$mainarray = array();
			$temparray = array();
			$count = 0;
			foreach($data as $key=>$val){
				$temparray[] = $val;
				$count++;
				if($count == 11){
					$mainarray[] = $temparray;
					$temparray = array();
					$count = 0;
				}
				
				
			}
			if(sizeof($mainarray) == 0){
				$mainarray = $data;
			}
			$this->response(array("status"=>"SUCCESS","message"=>"record founded","object"=>$mainarray),REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No record found","object"=>NULL),REST_Controller::HTTP_OK);
			
		}
	}
	
	public function categoryForSlider_get(){
		$data = $this->Generalmodal->category();
		if(sizeof($data) > 0){
			$mainarray = array();
			$temparray = array();
			$count = 0;
			foreach($data as $key=>$val){
				$temparray[] = $val;
				$count++;
				if($count == 7){
					$mainarray[] = $temparray;
					$temparray = array();
					$count = 0;
				}
				if(sizeof($mainarray) == 48){
					break;
				}
			}
			if(sizeof($mainarray) == 0){
				$mainarray = $data;
			}
			$this->response(array("status"=>"SUCCESS","message"=>"categories","object"=>$mainarray),REST_Controller::HTTP_OK);
		}else{
			$this->response(array("status"=>"FAILURE","message"=>"No categories found","object"=>NULL),REST_Controller::HTTP_OK);
			
		}
	}
}
