function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    document.getElementsByTagName("body")[0].appendChild(placeholder);
    document.getElementsByTagName("body")[0].appendChild(description);
    var gallery = document.getElementById("imagegallery");
    //gallery.parentNode.insertBefore(description, gallery);
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

// 在本页面中点击查看放大的图片
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if(!document.getElementById("description")) return false;
    if(whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
    }
    return false;
}

// 将节点插入到另一个节点之后
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload =func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery"));
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0; i<links.length; i++){
        links[i].onclick = function(){
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
