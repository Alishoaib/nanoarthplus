<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Generalmodal extends CI_Model {

	public function __construct(){
		parent::__construct();
	}
	
	public function getdata($table,$where=NULL){
		if($where !== NULL){
			$this->db->where($where);
		}
		$query = $this->db->get($table);
		if($query->num_rows() > 0){			
			return $query->result();
		}else{
			return array("status"=>"Failed","message"=>"No record find");
		}
	}
	
}
