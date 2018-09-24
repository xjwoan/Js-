/*
    新的数据结构Set,它类似于数组，但是成员的值都是唯一的
    ，没有重复的值.
*/
const s=new Set();
var a=[2,1,5,5,5,5,6,7,7,7,8,8,8];
a.forEach(x=>s.add(x));

for(let i of s){
  console.log(i);
}



/*
  Set函数可以一个接受一个数组
*/
//例一
const set=new Set([1,2,4,5,6]);
[...set];

//例二
const items=new Set([1,2,,4,4,4,4,5,5,5,5,]);
console.log(items.size);
console.log(items);

//例三
const set=new Set(document.querySelectorAll('div'));
set.size

//类似于
const set=new Set();
document
  .querySelectorAll('div')
  .forEach(div=>set.add(div));
  set.size


/*
  属性有：
  Set.prototype.constructor:构造函数,默认为Set函数
  Set.prototype.size:返回Set实例的成员总数
*/

/*
  4个操作方法:
    (1)、add(value):添加某个值，返回Set结构本身.
    (2)、delete(value):删除某个值,返回一个布尔值,
    表示删除是否成功
    ()、has(value):返回一个布尔值，表示该值是否为Set成员
    (4)、clear():清除所有成员，没有返回值.
*/



/*
  4个遍历方法
    (1)、keys():返回键名的遍历器
    (2)、values():返回键值的遍历器
    ()、entries():返回键值对的遍历器
    (4)、forEach():使用回调函数遍历每个成员
*/
