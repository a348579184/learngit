/**
 * Created by web-01 on 2017/6/3.
 */
//主页轮播
(function(){
    var num=2;
    setInterval(function(){
        if(num==1){ $(".title .round>img:nth-child("+7+")").css("opacity",0);}
        else{
            $(".title .round>img:nth-child("+(num-1)+")").css("opacity",0);
        }
        $(".title .round>img:nth-child("+num+")").css("opacity",1);
        if(num<7){num++;
        }else{num=1;}
    },3500);
})();
//导航栏特效
(function(){
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(scrollTop>200){
         $("nav").addClass("nav1");
         $("nav").css("top",scrollTop-40);
        }else{
            $("nav").removeClass("nav1");
            $("nav").css("top",0);
        }
    })
})();
//字体特效
(function(){
    var sum=document.body.clientHeight;
    $(window).scroll(function(){
        var s=$(window).scrollTop();
        var font=document.getElementsByClassName('font-tx');
        console.log(s);
            if(s>(sum*2600/3951)){
            //$(".bg1:nth-child(2)").addClass("forin");
            font[8].style.display="block";font[9].style.display="block";
        }else if(s>(sum*1700/3951)){
                font[7].style.display="block";font[6].style.display="block";
        }else if(s>(sum*1350/3951)){
                font[5].style.display="block";font[4].style.display="block";
            }else if(s>(sum*750/3951)){
                font[3].style.display="block";font[2].style.display="block";
            }else if(s>(sum*450/3951)){
                font[0].style.display="block";font[1].style.display="block";
            }
    })
})();
//观看视频
(function(){

})();