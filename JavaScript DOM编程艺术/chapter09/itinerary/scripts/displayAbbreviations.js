function displayAbbreviations(){
    if(!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    // 获取缩略语
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    // 遍历缩略语
    var defs = new Array();
    for(var i=0; i<abbreviations.length; i++){
        // 获取缩略语的title属性的值
        var current_abbr = abbreviations[i];
        // 确保此函数能在低版本的浏览器中使用
        if(current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        // 通过nodeValue属性获取缩略语文本
        var text = current_abbr.lastChild.nodeValue;
        // 将以上两个值存入数组defs中：text作为下标，definition作为值
        defs[text] = definition;
    }
    // 创建定义列表
    var dlist = document.createElement("dl");
    // 遍历定义列表
    for(text in defs){
        var definition =defs[text];
        // 创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(text);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        // 将定义标题和定义描述添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //if(dlist.childNodes.length < 1) return false;
    // 创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // 把标题添加的搭配页面主体
    document.body.appendChild(header);
    // 将定义列表添加到页面主体
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);