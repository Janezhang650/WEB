# Flex布局的概念  
`Flexbox`(弹性盒子)是Flexible Box的简称，是用于在页面上布置元素的一种一维**布局模式**，给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。    
弹性布局是指通过调整盒子内部元素的宽高，从而实现在任何设备对**可用显示空间的最佳填充**。  
弹性容器通过扩展其内部元素来**填充可用空间**，或者将其收缩来**避免溢出**现象。  
在Flex布局中，`flex`内部元素的设置`float`，`clear`以及`vertical-align`属性都将失效。
## 定义弹性盒子的语法  
任何容器都可以被指定为`flex`布局。
```css
  .box {
    display: flex;
  }
```  
行内元素也可以被指定为`flex`布局：  
```css
  .box {
    display: inline-flex;
  }
```   
***注意：设为`flex`布局之后，其子元素的`float`、`clear`、`vertical-align`属性将无效***  
## Flex相关术语  
#### 弹性容器(Flex container)  
采用Flex布局的元素，称为Flex容器，简称“容器”。   
#### 弹性项目(Flex item)  
Flex容器的所有子元素都称为弹性项目，简称“项目”。   
![image](https://user-images.githubusercontent.com/48990446/126175181-ddad30fa-af90-414b-880b-bfd28f9c2092.png)  
#### 轴 (Axis) 
**主轴(main axis)**：沿水平方向的轴叫主轴，项目默认沿主轴依次排列。  
**侧轴(cross axis)**:垂直于主轴的轴叫侧轴，也叫交叉轴。  
主轴的开始位置(与边框的交叉点)叫**主轴起点(main start)**,主轴的结束位置叫**主轴终点(main end)**。  
侧轴的开始位置叫**侧轴起点(cross start)**，侧轴的结束位置叫**侧轴终点(cross end)**  
## flex布局的属性
|作用在容器上       |  作用在项目上    |
| `flex-direction`  | `order`         |
| `flex-wrap`       | `flex-grow`     |
| `flex-flow`       | `flex-shrink`   |
| `align-items`     | `flex`          |
| `align-content`   | `align-self`    |
| `justify-content` | `flex-basis`    |
### 作用在容器上的属性
#### flex-direction属性  
`flex-direction`决定主轴的方向(项目的排列方向)  
```css
  .box {
    flex-direction:row | row-reverse | column | column-reverse;
  }
```  
- `row`默认值：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端，容器成员顺序与row顺序相反。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿，容器成员顺序与column顺序相反  

#### flex-wrap属性  
`flex-wrap`决定项目整体是单行显示还是换行显示。如果需要换行，则新的一行是从原来的方向排列还是反方向排列  
```css 
  .box {
    flex-wrap: nowrap | wrap | wrap-reverse;
  }
```  
- `nowrap`：默认值，不换行显示项目。
- `wrap`: 空间不足时换行显示。
- `wrap-reverse`：空间不足时换行显示，在原来一行的上面另起一行。  
#### flex-flow属性  
`flex-flow`为`flex-direction` 和 `flex-wrap` 组合简写，第一个指定的值为`flex-direction` ，第二个指定的值为 `flex-wrap`。默认值为`row nowrap`。  
#### align-items属性  
`align-items`中的`items`就是指项目，所以`align-items`用来决定项目在垂直方向的对齐方式。  
```css
  .box{
    align-items: stretch | flex-start | flex-end | center | baseline;
  }
```  
- `stretch`：默认值。如果项目未设置高度或设为auto，将占满整个容器的高度。
- `flex-start`：容器顶部对齐。
- `flex-end`：容器底部对齐。
- `center`：垂直居中对齐。
- `baseline`：项目第一行文字的基线对齐。  
#### align-content属性  
`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。  
```css
  .box{
    align-content:stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;
  }
```  
- `stretch`：默认值。每一行的项目都等比拉伸。
- `flex-start`：默认在顶部堆砌。
- `flex-end`：默认在底部堆放。
- `center`：整体垂直居中对齐。
- `space-between`：在顶部的一行和在底部的一行分别沿侧轴起点和侧轴终点对齐，剩余空间由中间的其他行项目等分分配。  
- `space-around`：每一行的项目上下都有不重叠的空白空间，即行与行之间有空白。  
- `space-evenly`：每一行都完全上下等分。
#### justify-content属性  
`justify-content`决定每一行项目在水平方向的对齐与分布方式。  
```css
  .box {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  }
```  
- `flex-start`：默认值。左对齐。
- `flex-end`：右对齐。
- `center`：居中对齐。
- `space-between`：两端对齐，项目之间的间隔相等。
- `space-around`：使每个元素的左右空间相等。
- `space-evenly`：每个项目两边的空白空间完全相等。
### 作用在项目上的属性  
#### order属性  
`order`属性可以改变某个项目的排序位置。  
```css
  .item{order: <integer>; /* 整数值，默认值是 0 */}
``` 
`order`属性的默认值为0， 数字越小，排序位置就越靠前。如果要将某个项目排到最前面，可以设置一个小于0的整数。 
#### flex-grow属性  
`flex-grow`属性沿主轴方向放大项目，以填满容器主轴方向上的空间。
```css
  .item{flex-grow: <number>; /* 数值，可以是小数，默认值是 0 */}
```  
`flex-grow` 属性可以按比例分配空间。如果第一个元素 `flex-grow` 值为2， 其他元素值为1，则第一个元素将占有2/4（上例中，即为 `200px` 中的 `100px`）, 另外两个元素各占有1/4（各`50px`）。   
#### flex-shrink属性  
`flex-shrink`属性沿主轴方向缩小项目，当主轴方向空间不足时，单个项目的收缩比例。  
```css
  .item{flex-shrink: <number>; /* 数值，默认值是 1 */}  
```  
flex-shrink不支持负值，默认值是1，也就是默认所有的flex子项都会收缩。如果设置为0，则表示不收缩。   
#### flex-basis属性  
`flex-basis`属性定义了在分配剩余空间之前项目的默认大小，如果浏览器根据该属性来确定主轴方向是否有多余的空间。
```css
  .item{flex-basis: <length> | auto; /* 默认值是 auto */}
```  
#### flex属性
`flex`是`flex-grow`、`flex-shrink`和`flex-basis`的简写。  
```css
  .item{flex: none | auto | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]} 
```  
其中第2和第3个参数（`flex-shrink`和`flex-basis`）是可选的。默认值为`0 1 auto`。  
#### align-self属性
`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。  
```css
  .item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
```  
除了`auto`，其他值都与`align-items`属性的值完全一致。  
