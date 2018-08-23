var d1=document.getElementById("d1");
var btn=document.getElementById("btn");
var fy=document.getElementById("fy");
var gl=document.getElementById("gl");
var lis=function(page,pageSize){
if(isNaN(page)==true){page=1;}
if(isNaN(pageSize)==true){pageSize=10;}
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
	if(xhr.readyState==4&&xhr.status==200){
		var result=xhr.responseText;
		result=JSON.parse(result);
		var res=result['mi'];
		var len=result['length'];
		console.log(len);
		console.log(pageSize);
console.log(page);
		len=Math.ceil(len/pageSize);
		d1.innerHTML="";
		for(var i of res){
			var [id,url,des]=i;
			d1.innerHTML+=`	<div class="div1">
	<p><span class="span">${des}</span>
	<img src="${url}" alt=""></p>
	</div>`
		}
		fy.innerHTML="";
		for(var i=1;i<=len;i++){
			fy.innerHTML+=`<button class="d1_btn">${i}</button>`;
		}
	}
}
xhr.open("get","php/detailQuery.php?pageSize="+pageSize+"&page="+page,true);
xhr.send(null);
}
btn.onclick=function(){
var pageSize=parseInt(document.getElementById("num").value);
var page=parseInt(document.getElementById("num1").value);
lis(page,pageSize);
}
gl.onclick=function(e){
	if(e.target.nodeName=="BUTTON"){
		var num=parseInt(e.target.innerHTML);
		lis(num,parseInt(document.getElementById("num").value));
	}
}