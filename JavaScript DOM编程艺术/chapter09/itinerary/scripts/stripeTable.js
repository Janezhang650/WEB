// 为表格添加斑马线效果普通方式
// function stripeTable(){
//     if(!document.getElementsByTagName) return false;
//     var tables = document.getElementsByTagName("table");
//     var odd, rows;
//     for(var i=0; i<tables.length; i++){
//         odd = false;
//         rows = tables[i].getElementsByTagName("tr");
//         for(var j=0; j<rows.length; j++){
//             if(odd == true){
//                 rows[j].style.backgroundColor = "#ffc";
//                 odd = false;
//             } else {
//                 odd = true;
//             }
//         }
//     }
// }

addLoadEvent(stripeTable);
// 为表格添加斑马线效果CSS+DOM方式
function stripeTable() {
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for(var i=0; i<tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0; j<rows.length; j++) {
            if(odd == true) {
                addClass(rows[j], "odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

// 给元素追加新的class属性
function addClass(element, value) {
    if(!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}