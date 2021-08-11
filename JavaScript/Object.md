# 创建对象的两种方法
1. 使用`new`操作符和`Object`构造函数
```javascript
  let obj = new Object();
```
2. 使用对象字面量
```javascript
  let obj = {
    property1: "str1",
    property2: "str2",
    ...
  }
```
在对象字面量表示法中，属性名可以是字符串或数值，数值属性会自动转换为字符串。  
注意：**在使用字面量表示法定义对象时，并不会实际调用Object构造函数**。  

# 获取属性的两种方法
## “`.`”
```javascript
  obj.property = "";
``` 

## `[]` 
在使用中括号存取属性时，属性名必须以字符串的形式：
```javascript
  obj["property"];
```  

从功能上来说，两种存取属性的方法并无差异，使用中括号`[]`的主要优势是可以**通过变量访问属性**：
```javascript
  let variable = "property";
  console.log(obj[variable]);
``` 
另外，如果属性名中包含可能导致语法错误的字符，或者包含关键字/保留字，也可以使用中括号语法：
```javascript
  person["first name"] = "Zhang";
``` 
通常，点语法是首选的属性存取方式，除非访问属性时必须使用变量。

# 使用对象传参  
**对象字面量**已经成为给函数传递**大量可选参数**的主要方式。  
```javascript
  function displayInfo(args) {
    let output = "";
    
    if (typeof args.name == "string") output += "Name: " + args.name + "\n";
    if (typeof args.age == "number") output += "Age: " + args.age + "\n";
    alert(output);
  }
  displayInfo({
    name: 'Jane',
    age: 19
  });
  displayInfo({name: 'Matt'});
```
命名参数虽然更直观，但是需要大量的可选参数时就不太方便了。因此，**对必选的参数使用命名参数，可选的参数使用对象字面量进行封装**。
