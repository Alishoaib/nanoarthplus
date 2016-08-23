<?php
class Nano {

	public $servername;
	public $username;
	public $password;
	public $conn;
	function nano(){
		$this->servername = "localhost";
		$this->username = "root";
		$this->password = "";
		
		try {
			$this->conn = new PDO("mysql:host=$this->servername;dbname=nano", $this->username, $this->password);
			// set the PDO error mode to exception
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			//echo "Connected successfully"; 
			}
		catch(PDOException $e)
			{
			echo "Connection failed: " . $e->getMessage();
			}
	
	}
	public function fetchdata($table,$where,$order,$limit){
		
		$sql = "SELECT * FROM ".$table.$where.$order.$limit;
		//return $sql;
		$query = $this->conn->query($sql);
		return $result = $query->fetchAll();
	}
	
	public function login($username,$password){
		$sql = "select * from user where username = '".$username."' and password = '".$password."'";
		$query = $this->conn->query($sql);
		$result = $query->fetch();
		if($query->rowCount() > 0){
			$_SESSION['user'] = $username;
			$_SESSION['login'] = true;
			return true;
		}else{
			return "Invalid username or password";
		}
		
	}
	public function countrecord($table,$field,$where){
		
		$sql = "SELECT count(".$field.") as total FROM ".$table.$where;
		//return $sql;
		$query = $this->conn->query($sql);
		return $result = $query->fetch();
	}
	
	public function insertcategory($name,$description,$status,$parent){
		// prepare sql and bind parameters
		$stmt = $this->conn->prepare("INSERT INTO categories (name,description,status,parentid) 
		VALUES (:name, :description, :status, :parent)");
		$stmt->bindParam(':name', $name);
		$stmt->bindParam(':description', $description);
		$stmt->bindParam(':status', $status);
		$stmt->bindParam(':parent', $parent);
		return $stmt->execute();

	}
	
	public function insertproduct($parent,$name,$description,$status,$currency,$price,$image){
		$field = '';
		$values = '';
		for($i = 0; $i<=sizeof($image['name']); $i++){
			if(!file_exists('../productimages/'.$image['name'][$i])){
				move_uploaded_file($image['tmp_name'][$i],'../productimages/'.basename($image['name'][$i]));
				if(!empty($image['name'][$i])){
					if($i != 0){
						$field .=  ",prod_image".($i+1);
					}else{
						$field .=  ",prod_image ";
					}
					$values .= ",'".$image['name'][$i]."'";
					
				}
			}else{
				//return 0;
			}
			
		
			//$file = move_uploaded_file($image['name'][$i],'../productimages');
			//$stmt->bindParam(':prodimage'.$i+1, $image['name'][$i]);

		}
		//return "INSERT INTO products (cate_id,name,description,price,curreny,status $field) VALUES (".$parent.", '".$name."','".$description."',".$price.",'".$currency."',".$status." ". $values.")";
		// prepare sql and bind parameters
		$stmt = $this->conn->prepare("INSERT INTO products (cate_id,name,description,price,curreny,status $field) VALUES (".$parent.", '".$name."','".$description."',".$price.",'".$currency."',".$status." ". $values.")");
		/*$stmt->bindParam(':cateid', $parent);
		$stmt->bindParam(':name', $name);
		$stmt->bindParam(':description', $description);
		$stmt->bindParam(':price', $price);
		$stmt->bindParam(':currency', $currency);
		$stmt->bindParam(':status', $status);
		$stmt->bindParam(':prodimage1', $image['name'][0]);*/
		//for($i = 0; $i<=sizeof($image['name']); $i++){
			
			//echo ":prodimage".$i+1."==".$image['name'][$i];
			//$file = move_uploaded_file($image['name'][$i],'../productimages');
			//$stmt->bindParam(':prodimage'.$i+1, $image['name'][$i]);

		//}
		
		return $stmt->execute();
	}
	
	public function deletedata($table,$field,$value){
		
		$sql = "delete FROM ".$table." where ".$field." = ".$value;
		//return $sql;
		return $this->conn->exec($sql);
	}
	
	public function updaterec($table,$dataset,$where,$remquery=NULL){
		$query = "update ".$table." set ";
		foreach($dataset as $key=>$row){
			$query .= "$key = '".$row."',";
		}
		$query = rtrim($query,",");
		if($remquery != NULL){
			$query .= $remquery;
		}
		
		$query .= $where;
		//return $query;
		$update = $this->conn->prepare($query);
		$query = $update->execute();
		return $query;
	}
}


?>