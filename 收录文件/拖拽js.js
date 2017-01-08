/**
 * Created by Administrator on 2017/1/8.
 */
<div id="imgs">
    <img src="img/2.jpg" alt=""/>
    </div>
    <script>
var oImgs = document.getElementById("imgs");
oImgs.onmousedown = function(e){
    //解决事件对象e的兼容性问题
    e = e || window.event;
    //求出鼠标和drag的距离
    var iDisX = e.clientX - oImgs.offsetLeft;
    var iDisY = e.clientY - oImgs.offsetTop;

    //鼠标拖动的时候不断改变drag前一天的    补上的位置
    document.onmousemove = function(e){
        oImgs.style.left = e.clientX - iDisX + "px";
        oImgs.style.top = e.clientY - iDisY + "px";
        return false;
    };
};
document.onmouseup = function(){
    document.onmousemove = null;
};
</script>