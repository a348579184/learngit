<?php
  @$pageSize=$_REQUEST['pageSize'];
  @$page=$_REQUEST['page'];
  $start=($page-1)*$pageSize;
   require("init.php");
   $sql="select * from detail limit $start,$pageSize";
   $res=mysqli_query($conn,$sql);
   $str=mysqli_fetch_all($res);
   $arr['mi']=$str;
    $sql="select * from detail";
  $res=mysqli_query($conn,$sql);
  $s=mysqli_fetch_all($res);
  $s=count($s);
  $arr['length']=$s;
  $arr=json_encode($arr);
   echo $arr;
?>