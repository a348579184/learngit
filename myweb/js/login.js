var $=function(i){
			return document.getElementById(i);
		}
		var num=3;
		var mi=300;
		var uname=$("uname");
		var upwd=$("upwd");
		var showuname=$("showuname");
		var showupwd=$("showupwd")
		function check_uname(){
			if(uname.value==""){
				showuname.innerHTML="帐号/邮箱 不能为空！";
			}else{showuname.innerHTML=""}
		}
		function check_upwd(){
			if(upwd.value==""){
				showupwd.innerHTML="密码 不能为空！";
			}else{showupwd.innerHTML=""}
		}
		function login(){
			if(uname.value!=""&&upwd.value!=""){
			var xhr=createXhr();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					var res=xhr.responseText;
					console.log(res);
					if(res=="you"){
						showupwd.innerHTML="登录成功！";
            var href=location.href;
						var i=href.indexOf("back");
						href=href.slice(i+5,);
						location.href=href+"?islogin";
					}else{
						if(num==0){
							showupwd.innerHTML="您的账户已经被锁定请在"+mi+"秒后退出！";
							mi--;
							setTimeout("login()",1000);
						}
						else{
							showupwd.innerHTML="帐号密码 错误您还可以尝试"+num+"次";
						num--;}
					}
				}
			}
			xhr.open("get","../php/login.php?uname="+uname.value+"&upwd="+upwd.value,true);
			xhr.send(null);
		}
	}
		