/**
 * Created by web-01 on 2017/6/3.
 */
var le1;
var off;
var end=0;
var maxx=parseInt($("[data-u='hr']").css("width"))-parseInt($("#model").css("width"));
console.log(maxx);
$("#model").on("mouseenter",function(e){
    le1=e.offsetX;
    return;
});
$("#model").on("mousemove",function(e){
    var le2=e.offsetX;
    off=(le1-le2)*2+end;
    if(off>0){off=0;}
    if(off<-1*maxx){off=-1*maxx;}
    $("[data-u='hr']").css("left",off);
    console.log(off);
})
$("#model").on("mouseout",function(e){
    //le1=e.offsetX;
    end=off;
    return;
})