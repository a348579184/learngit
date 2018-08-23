//轮播图
(function(){
	  var img=document.querySelectorAll("#banner img");
	  var cir=document.querySelectorAll("#banner .cir");
	  var num=0;
	for(var i=0;i<img.length;i++){
		cir[i].onclick=(function(){
			var a=i;
			return function(){
				document.getElementsByClassName("img")[0].className="";
				document.getElementsByClassName("cir1")[0].className="cir";
				img[a].className="img";
				cir[a].className="cir cir1";
				num=a;
			}
		})();
		img[i].onmouseover=(function(){
			var a=i;
			return function(){
				clearInterval(time);
			}
		})();
		img[i].onmouseout=(function(){
			var a=i;
			return function(){
	            time=setInterval(ban,1000);
			}
		})();
	}
	var btn=document.querySelectorAll("#banner a");		
	btn[0].onclick=function(){
			clearInterval(time);
			var i=parseInt(document.getElementsByClassName("img")[0].alt);			
			img[i].className="";
			cir[i].className="cir";
			if(i==0){i=2}else{i--}
						img[i].className="img";
			cir[i].className="cir cir1";
      if(num==0){num=2;}else{num--;}
		}
			btn[1].onclick=function(){
			clearInterval(time);
			var i=parseInt(document.getElementsByClassName("img")[0].alt);			
			img[i].className="";
			cir[i].className="cir";
			if(i==2){i=0}else{i++;}
						img[i].className="img";
			cir[i].className="cir cir1";
      if(num==2){num=0;}else{num++;}
		}
	function ban(){
		for(var i=0;i<img.length;i++){
			img[i].className="";
			cir[i].className="cir";
		}

		img[num].className="img";
		cir[num].className="cir cir1";
		num++;
		if(num==img.length){num=0;}
	}
	
		 
	var time=setInterval(ban,1000);

	}
	)()	
  var acc=document.getElementById("accordion");
	acc.onclick=function(e){
		var h3=e.target;
		if(h3.className=="h3"){
			document.getElementsByClassName("show")[0].className="content hide";
			e.target.nextElementSibling.className="content hide show";
		}
	}