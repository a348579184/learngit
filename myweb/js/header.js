  
  var xhr=new XMLHttpRequest();
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/header.css";
	document.head.appendChild(link);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var res=xhr.responseText;
			var header=document.getElementById("header");
			header.innerHTML=res;
			console.log(res);
		}
	}
	xhr.open("get","header.html",false);
	xhr.send(null);
var href=location.href;
	if(href.indexOf("islogin")!=-1){
		var islogin=document.getElementById("islogin");
		islogin.innerHTML=`welconme to huawei! &nbsp&nbsp;<a href="index.html">退出</a>`;
	}
	var login=document.getElementById("login_btn");
	login.onclick=function(){
		var href=location.pathname;
		var i=href.indexOf("/");
		href=href.slice(0,i);
		location.href=href+"/myweb1/login.html?back="+location.href;
	}