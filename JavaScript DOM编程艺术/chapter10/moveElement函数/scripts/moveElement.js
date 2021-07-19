// 移动元素位置
function moveElement(elementID, final_x, final_y, interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    // 获取当前元素的位置
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    // 判断元素的当前位置是否在目的位置，若为目的位置，则返回true
    if(xpos == final_x && ypos == final_y) return true;
    // 若元素未到达目的位置，则继续向前移动
    if(xpos < final_x) xpos++;
    if(ypos < final_y) ypos++;
    // 若元素已经处于目标位置的前方，则向后移动
    if(xpos > final_x) xpos--;
    if(ypos > final_y) ypos--;
    // 获取元素的新位置
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    // 设置动画效果间隔时间
    var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+interval+")";
    movement = setTimeout(repeat, interval);
}