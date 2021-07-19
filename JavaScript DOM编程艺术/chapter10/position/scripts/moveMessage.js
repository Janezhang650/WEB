// 改变某个元素的位置
function moveMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false; 
    var elem = document.getElementById("message");
    // 获取当前元素的位置
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    // 判断元素是否到达目的地,若未到达则继续移动
    if(xpos < 200) xpos++;
    if(xpos > 200) xpos--;
    if(ypos < 100) ypos++;
    if(ypos > 100) ypos--;
    // 重新获取位置
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()", 10);
}

// 抽象函数


// addLoadEvent(moveMessage);