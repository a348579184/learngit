(function(){
    var num=1;
    var num1=0;
    var img=document.querySelectorAll(".d2>img");
    setInterval(function(){
        img[num1].style.opacity=0;
        img[num].style.opacity=1;
        num++;
        num1++;
        num=num%4;
        num1=num1%4;
    },2500)
})();