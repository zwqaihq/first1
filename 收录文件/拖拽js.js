/**
 * Created by Administrator on 2017/1/8.
 */
<div id="imgs">
    <img src="img/2.jpg" alt=""/>
    </div>
    <script>
var oImgs = document.getElementById("imgs");
oImgs.onmousedown = function(e){
    //����¼�����e�ļ���������
    e = e || window.event;
    //�������drag�ľ���
    var iDisX = e.clientX - oImgs.offsetLeft;
    var iDisY = e.clientY - oImgs.offsetTop;

    //����϶���ʱ�򲻶ϸı�dragǰһ���    ���ϵ�λ��
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