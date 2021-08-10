# 正则表达式基本语法
ECMSScript是通过RegExp类型支持正则表达式。  
1. 使用字面量创建正则表达式：
```javascript
  let expression = /pattern/flags;
```  
2. 使用RegExp构造函数创建正则表达式：  
```javascript
  let expression = new RegExp("pattern", "flags");
```  

匹配模式标记flags：  
|flag|description| 
|----|-----------|
|g|全局模式|  
|i|忽略大小写|  
|m|多行模式|  
|y|黏附模式，只查找从lastIndex开始及之后的字符串|  
|u|Unicode模式|  
|s|dotAll模式，表示元字符.匹配任何字符（包括\n或\r）|  

```javascript
  let pattern1 = /[bc]at/i  // 匹配第一个“bat”或“cat”，忽略大小写
  // 等价于
  let pattern1 = new RegExp("[bc]at", "i");
  
  let pattern2 = /\[bc\]at/i // 匹配第一个“[bc]at”,忽略大小写
  
  let pattern3 = /.at/gi; // 匹配所有以“at”结尾的三字符，忽略大小写
  let pattern4 = /\.at/gi; // 匹配所有“.at”,忽略大小写
```  

# RegExp实例方法  
### 1. exec()
RegExp实例的主要方法是`exec()`，用于配合捕获组使用。该方法接收一个参数——字符串，如果找到匹配项，返回包含第一个匹配信息的数组，否则返回`null`。 
返回的数组包含两个额外信息：`index`(字符串中模式匹配的起始位置)和`input`(要查找的字符串)。 
```javascript
  let text = "mom and dad and baby";
  let pattern = /mom( and dad( and baby)?)?/gi;
  let matches = pattern.exec(text);
  console.log(matches.index); // 0
  console.log(matches.input); // mom and dad and baby
  console.log(matches[0]); // mom and dad and baby
  console.log(matches[1]); // and dad and baby
  console.log(matches[2]); // and baby
``` 
如果模式设置了全局模式，则每次调用`exec()`都会返回字符串中的下一个匹配项，直到搜索到字符串的末尾，并且模式的`lastIndex`属性每次都会变化。

### 2. test()  
`test()`接收一个字符串参数，如果输入的文本与模式匹配，则参数返回`true`，否则返回`false`。此方法常用于**验证用户输入**。  
```javascript 
  let text = "000-00-0000";
  let pattern = /\d{3}-\d{2}-\d{4}/;
  if(pattern.test(text)) console.log("The pattern was matched.");
```  
