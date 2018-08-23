<?php
	$uuid=$_REQUEST['uid'];
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$email=$_REQUEST['email'];
    $conn=mysqli_connect("127.0.0.1","root","","moshou",3306);
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
    $sql="select count(uid) from user where email='$email'";
    $res=mysqli_query($conn,$sql);
    $res=mysqli_fetch_row($res);
  if($res[0]==0){
	 $sql="insert into user values('','$uuid','$uname','$upwd','$email')";
    $res=mysqli_query($conn,$sql);
	echo '<br>'.mysqli_affected_rows($conn);
 }else{
	 echo 'exists';
 }
 ?>
