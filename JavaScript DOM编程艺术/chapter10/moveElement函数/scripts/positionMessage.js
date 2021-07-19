// 设置元素的位置
function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "200px";
    moveElement("message", 400, 100, 10);
}

addLoadEvent(positionMessage);