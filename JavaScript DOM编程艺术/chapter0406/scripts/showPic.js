// 点击链接将图片在本页面中显示
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
    // 获取图片的文件路径
    var source = whichpic.getAttribute("href");
    // 获取“占位符”图片
    var placeholder = document.getElementById("placeholder");
    // 对placeholder元素的src属性进行刷新
    placeholder.setAttribute("src", source);
    if(document.getElementById("description")) {
        // 获取title属性
        var text = whichpic.getAttribute("title")? whichpic.getAttribute("title") : "";
        // 存放文本段落
        var description = document.getElementById("description");
        // 检测description的第一个子元素是否为文本节点
        if(description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

// 添加事件处理函数
function perpareGallery(){
    //向后兼容：保证低版本的浏览器也能正常运行，低版本的浏览器可能不支持以下3种方法
    if(!document.getElementsByTagName) return false; 
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    // 获取列表的id
    var gallery = document.getElementById("imagegallery");
    // 获取列表项的超链接
    var links = gallery.getElementsByTagName("a");
    // 遍历列表项
    for(var i=0; i<links.length; i++){
        // 将onclick事件绑定到各个链接元素上
        links[i].onclick = function(){
            return showPic(this)? false : true;
        }
    }
}

// 共享onload事件：防止页面未加载完成，因为DOM不完整无法执行以上代码
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
// 待页面加载完成后执行 perpareGallery()函数
addLoadEvent(perpareGallery);

