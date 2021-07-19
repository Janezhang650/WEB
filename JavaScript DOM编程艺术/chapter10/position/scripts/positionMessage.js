// 把文档中元素放到特定的位置
function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    // 5秒后元素向左移动150个像素
    movement = setTimeout("moveMessage()", 5000);
    // 清除动画
    //clearTimeout(movement);
}

addLoadEvent(positionMessage);