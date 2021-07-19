function displayAbbreviations(){
    // 检查浏览器的兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    // 获取所有缩略语
    var defs = new Array();
    // 遍历缩略语
    for(var i=0; i<abbreviations.length; i++) {
        // 用 getAttribute() 获取 title属性的信息
        var definition = abbreviations[i].getAttribute("title");
        // 确保此函数能在IE6及以下版本中使用
        if(abbreviations[i].childNodes.length < 1) continue;
        // 通过nodeValue属性获取缩略语文本
        var key = abbreviations[i].lastChild.nodeValue;
        // 将以上两个值存入数组defs中：key作为下标，definition作值
        defs[key] = definition;
    }
    // 创建定义列表
    var dlist = document.createElement("dl");
    // 遍历定义
    for(key in defs) {
        var definition = defs[key];
        // 创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        // 创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        // 将定义标题与定义描述添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    // 创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // 把标题添加到页面主体
    document.body.appendChild(header);
    // 把定义列表添加到页面主体
    document.body.appendChild(dlist);
}
// 调用displayAbbreviations()函数
// window.onload = displayAbbreviations

// 为日后方便把多个事件添加到window.onload 处理函数，使用addLoadEvent()函数
addLoadEvent(displayAbbreviations);