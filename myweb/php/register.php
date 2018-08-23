<?php
 $uname=$_REQUEST['uname'];
 $upwd=$_REQUEST['upwd'];
 $uxing=$_REQUEST['uxing'];
 $uming=$_REQUEST['uming'];
 require("init.php");
 $sql="select * from user where uname=$uname";
 $res=mysqli_query($conn,$sql);
 $res=mysqli_fetch_row($res);
 if($res[0]==null||$res[0]==""){
     echo 'ok';
	 $sql="insert into User values('',$uname,$upwd,$uxing,$uming)";
    $res=mysqli_query($conn,$sql);
 }else{
	 echo 'exists';
 }
 ?>