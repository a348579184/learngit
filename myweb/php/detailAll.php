<?php
  require("init.php");
  $sql="select * from detail";
  $res=mysqli_query($conn,$sql);
  $str=mysqli_fetch_all($res);
  echo count($str);
?>