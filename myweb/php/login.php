<?php
    $uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
  $conn=mysqli_connect("127.0.0.1","root","","myy",3306);
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
   $sql="select * from user where uname=$uname and upwd=$upwd";
    $result=mysqli_query($conn,$sql);
	if($result==false){
	  echo "请检查sql语句！";
	}else{
	  $user=mysqli_fetch_row($result);
	  if($user==null||$user==""){
	    echo "wu";
	  }else{
	    echo "you";
	  }
	}
?>