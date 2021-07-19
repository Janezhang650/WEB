function moveElement(elementID, final_x, final_y, interval) {
    // 确保浏览器支持DOM方法
    if(!document.getElementById) return false;
    // 确保元素存在
    if(!document.getElementById(elementID)) return false;
    // 获取元素的当前位置
    var elem = document.getElementById(elementID);
    // 将变量moment从全局变量变为移动元素的属性可以消除动画滞后的现象
    if(elem.moment) clearTimeout(elem.moment);
    // 检查元素的left和top属性是否被设置
    if(!elem.style.left) elem.style.left = "0px";
    if(!elem.style.top) elem.style.top = "0px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    // 判断元素的位置是否处于目标位置
    if(xpos == final_x && ypos == final_y) return true;
    // 若元素未到达目标位置，继续移动
    if(xpos < final_x) {
        dist = Math.ceil((final_x-xpos)/10);
        xpos += dist;
    }
    if(ypos < final_y) {
        dist = Math.ceil((final_y-ypos)/10);
        ypos += dist;
    }
    if(xpos > final_x) {
        dist = Math.ceil((xpos-final_x)/10);
        xpos -= dist;
    }
    if(ypos > final_y) {
        dist = Math.ceil((ypos-final_y)/10);
        ypos -= dist;
    }
    // 获取元素的新位置
    elem.style.left = xpos +"px";
    elem.style.top = ypos +"px";
    // 设置动画效果
    var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+interval+")";
    elem.moment = setTimeout(repeat, interval);
}