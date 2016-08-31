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
		$this->response($data, REST_Controller::HTTP_OK);
		//$this->response($data, REST_Controller::HTTP_NOT_FOUND);
	}
	
	public function subCategories_get($id)
	{
		$data = $this->Generalmodal->subcategory($id);
		$this->response($data, REST_Controller::HTTP_OK);
		//$this->response($data, REST_Controller::HTTP_NOT_FOUND);
	}
	
	public function allProducts_get(){
		$data = $this->Generalmodal->join_two_result('products pr','product_images pi','pr.prod_id=pi.product_id','pr.prod_id',NULL,'*','pr.prod_id',"desc");
		$this->response($data,REST_Controller::HTTP_OK);
	}
	
	public function productsByCategory_get($cate){
		$data = $this->Generalmodal->join_three_result('categories cat','products pr','product_images pi','cat.cate_id=pr.cate_id','pr.prod_id=pi.product_id',$group=NULL,array('cat.cate_id'=>$cate),$select='*','pr.prod_id',"disc");
		$this->response($data,REST_Controller::HTTP_OK);
	}
	
	public function productdetail_get($id){
		$data = $this->Generalmodal->join_three_result('categories cat','products pr','product_images pi','cat.cate_id=pr.cate_id','pr.prod_id=pi.product_id',$group=NULL,array('pr.prod_id'=>$id),$select='*');		
		$this->response($data,REST_Controller::HTTP_OK);
	}
	
	public function contactus_put(){
		print_r($this->put());
	}
}
