# 创建数组  
### 1.使用Array构造函数 
```javascript
  let arr = new Array();
```
如果能确定数组的长度，可以给构造函数传入一个数值，然后`length`属性就会被自动创建并设置为该值。  

### 2.使用数组字面量  
```javascript
  let arr = ["bar", "baz", "foo"];  // 创建一个包含3个元素的数组
  let arr2 = []; // 创建了一个空数组
  let arr3 = [1, 2, "abd", "s"]; // 创建一个包含4个元素的数组
```  
数组中的每个槽位可以存储任意类型的数据。  
注意：***与对象一样，在使用数组字面量表示法创建数组不会调用Array构造函数***  

### 3.ES6新增的用于创建数组的静态方法：from()和of()
`Array.from()`用于将**类数组**结构转换为数组实例：第一个参数是类数组对象，即任何**可迭代**的结构，或者有一个`length`属性和**可索引**元素的结构。
1. 将**字符串**转换为**单字符**数组
```javascript
  console.log(Array.from("Matt"));  // ["M", "a", "t", "t"]
```
2. 将**集合**和**映射**转换为一个数组
```javascript
  const m = new Map().set(1,2)
                     .set(3,4);
  const s = new Set.add(1)
                   .add(2)
                   .add(3)
                   .add(4);
  console.log(Array.from(m)); // [[1,2], [3,4]]
  console.log(Array.from(s)); // [1,2,3,4]
```
3. 对现有数组执行**浅复制**
```javascript
  const a1 = [1,2,3,4];
  const a2 = Array.from(a1);
  console.log(a2); // [1,2,3,4]
  console.log(a1 === a2); // false
``` 
4. 将**arguments对象**转换为数组
```javascript
  function getArgsArray() {
    return Array.from(arguments);
  }
  
  console.log(getArgsArray(1,2,3,4)); // [1,2,3,4]
```
5. 将**带有必要属性的自定义对象**转换为数组
```javascript
  const obj = {
    0: 1,
    1: 2,
    2: 3, 
    length: 3
  };
  console.log(Array.from(obj)); // [1,2,3]
```
`Array.of()`可以把一组**参数**转换为数组
```javascript
  console.log(Array.of(1,2,3,5)); // [1,2,3,5]
  console.log(Array.of(undefined)); // [undefined]
```

# 迭代器方法  
3个用于检索数组内容的方法：`keys()`、`values()`和`entries()`。
- `keys()`返回数组**索引**
- `values()`返回数组**元素**
- `entries()`返回**索引/值对**

# 复制和填充方法
ES6新增两个方法：批量复制方法`fill()`和填充数组方法`copyWithin()`。

# 栈方法和队列方法  
## 1. 栈方法
栈是一种**后进先出**(LIFO,Last-In-First-Out)的结构。数据项的插入(称为**推入**，`push`)和删除(称为**弹出**，`pop`)只在**栈顶**发生。  
ECMAScript数组提供了`push()`和`pop()`方法，以实现类似栈的行为。  
- `push()`方法接收任意数量的参数，并将它们添加到数组末尾，**返回数组的最新长度**。  
- `pop()`方法用于删除数组的最后一项，同时减少数组的`length`值，并**返回被删除的项**。
```javascript
  let colors = new Array();
  let cnt = colors.push("red", "green");
  console.log(cnt); // 2

  cnt = colors.push("blue");
  console.log(cnt); // 3
  
  let item = colors.pop();
  console.log(item); // blue
  console.log(colors.length); // 2
```  
## 2. 队列方法  
队列是一种先进先出(FIFO, First-In-First-Out)的结构。队列在列表末尾添加数据，在列表开头获取数据。
- `push()`在数组末尾添加数据
- `shift()`在数组开头获取数据，它会**删除数组的第一项并返回它**，然后数组长度减1.
```javascript
  let colors = new Array();
  let cnt = colors.push("red", "green");
  console.log(cnt); // 2
  
  cnt = colors.push("blue");
  console.log(cnt); // 3
  
  let item = colors.shift();
  console.log(item); // red
  console.log(cnt); // 2
```
`unshift()`方法于`shift()`相反：在数组**开头添加**任意多个值，然后**返回数组的长度**。通过使用`unshift()`和`pop()`，可以在相反方向上模拟队列，即**在数组
开头添加新数据，在数组末尾取得数据**。  

# 排序方法
数组有两种排序方法：reverse()和sort()。reverse()方法将数组反向排序。sort()方法按升序将数组进行排序，它会将数组**转换为字符串再比较、排序**:
```javascript
  let arr = [0,1,5,10,15];
  console.log(arr.sort()); // 0,1,10,15,5
``` 
字符串"10"在字符串"5"的前头，所以10排在5的前面。  
sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面。
```javascript
  function compare(num1, num2) {
    return num2 - num1; // 升序
    // return num1 - num2; // 降序
  }
  
  console.log(arr.sort(compare)); // 0,1,5,10,15
```
**注意：** reverse()和sort()都返回调用它们的数组的引用。

# 搜索和位置方法
ECMAScript提供两类搜索数组的方法：按严格相等搜索和按断言函数搜索。
## 1. 严格相等
3个严格相等的搜索方法：`indexOf()`、`lastIndexOf()`和`includes()`。这些方法都接收两个参数：要查找的元素和一个可选的起始搜索位置。  
`indexOf()`、`includes()`从数组前头开始搜索，`lastIndexOf()`从数组末尾开始搜索。  
`indexOf()`、`lastIndexOf()`返回要查找的元素在数组中的位置，否则返回-1。  
`includes()`返回布尔值，表示是否至少找到一个指定元素匹配的项。  

## 2. 断言函数  
断言函数接收3个函数：要查找的元素、当前元素的索引和正在搜索的数组。  
断言函数返回真值，表示是否匹配。
`find()`和`findIndex()`方法使用了断言函数。
- `find()`返回第一个匹配的元素
- `findIndex()`返回第一个匹配元素的索引。
