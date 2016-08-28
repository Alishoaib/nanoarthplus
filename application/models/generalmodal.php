<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Generalmodal extends CI_Model {

	public function __construct(){
		parent::__construct();
	}
	
	public function getdata($table,$where=NULL,$orderby=NULL,$order=NULL){
		if($where !== NULL){
			$this->db->where($where);
		}
		if($orderby !== NULL && $order !== NULL){
			$this->db->order_by($orderby,$order);
		}
		$query = $this->db->get($table);
		//return $this->db->last_query();
		if($query->num_rows() > 0){			
			return array("status"=>"SUCCESS","message"=>"record finded","object"=>$query->result());
		}else{
			return array("status"=>"FAILED","message"=>"No record found","object"=>NULL);
		}
	}
	
	public function category(){
		$parent = array();
		$parent_cate = $this->db->query("SELECT t1.cate_id as id FROM categories as t1, categories as t2 where t1.cate_id = t2.parentid and t1.status = 1 group by t1.cate_id");
		if($parent_cate->num_rows() > 0){
			foreach($parent_cate->result() as $val){
				$parent[] = $val->id;
			}
		}
		$this->db->where(array("status"=>1));
		$cates = $this->db->get('categories');
		if($cates->num_rows() > 0){
	
			foreach($cates->result() as $val){
				if(in_array($val->cate_id,$parent)){
					$val->parents = "true";
				}else{
					$val->parents = "false";
				}
			}
			
		}
		if($cates->result() > 0){			
			return array("status"=>"SUCCESS","message"=>"record finded","object"=>$cates->result());
		}else{
			return array("status"=>"FAILED","message"=>"No record found","object"=>NULL);
		}
		
	}
	
	public function subcategory($id){
		$parent = array();
		$parent_cate = $this->db->query("SELECT t1.cate_id as id FROM categories as t1, categories as t2 where t1.cate_id = t2.parentid and t1.status = 1 and t1.parentid = ".$id." group by t1.cate_id");
		if($parent_cate->num_rows() > 0){
			foreach($parent_cate->result() as $val){
				$parent[] = $val->id;
			}
		}
		$this->db->where(array("status"=>1,"parentid"=>$id));
		$cates = $this->db->get('categories');
		//return $this->db->last_query();
		if($cates->num_rows() > 0){
	
			foreach($cates->result() as $val){
				if(in_array($val->cate_id,$parent)){
					$val->parents = "true";
				}else{
					$val->parents = "false";
				}
			}
		}
		if($cates->result() > 0){			
			return array("status"=>"SUCCESS","message"=>"record finded","object"=>$cates->result());
		}else{
			return array("status"=>"FAILED","message"=>"No record found","object"=>NULL);
		}
		
	}
	
	function join_two_result($table1,$table2,$relation,$group=NULL,$where=NULL,$select='*',$order=NULL,$order_type="asc")
	{
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2,$relation,'inner');
		if($group != NULL){
			$this->db->group_by($group);
		}
		if($where != NULL){
			$this->db->where($where);
		}
		if($order != NULL){
			$this->db->order_by($order,$order_type);
		}
		$query = $this->db->get();
		//return $this->db->last_query();
		if($query->num_rows() > 0){			
			return array("status"=>"SUCCESS","message"=>"record finded","object"=>$query->result());
		}else{
			return array("status"=>"FAILED","message"=>"No record found","object"=>NULL);
		}
	}
	
	public function join_three_result($table1,$table2,$table3,$relation1,$relation2,$group=NULL,$where=NULL,$select='*',$order=NULL,$order_type="asc")
	{
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2,$relation1,'inner');
		$this->db->join($table3,$relation2,'inner');
		if($group != NULL){
			$this->db->group_by($group);
		}
		if($where != NULL){
			$this->db->where($where);
		}
		if($order != NULL){
			$this->db->order_by($order,$order_type);
		}
		$query = $this->db->get();
		//return $this->db->last_query();
		if($query->num_rows() > 0){			
			return array("status"=>"SUCCESS","message"=>"record finded","object"=>$query->result());
		}else{
			return array("status"=>"FAILED","message"=>"No record found","object"=>NULL);
		}
	}
	
}
