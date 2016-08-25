<?php
require APPPATH . '/libraries/REST_Controller.php';
class Nano extends REST_Controller {
	
	function __construct(){
		parent::__construct();
		$this->load->library('REST_Controller');
	}

    public function show_get()
	{
		$query = $this->Generalmodal->getdata('categories');
		$data = array("status"=>"success","message"=>"categories","object"=>$query);
		$this->response($data, REST_Controller::HTTP_OK);
		/*if($data){
			
		}else{
			$this->response($data,REST_Controller::HTTP_NOT_FOUND);
		}*/
	}
}
