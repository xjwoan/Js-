/*
    三个作用：
      1、为各种数据结构，提供一个统一的，简便的访问接口；
      2、是使得数据结构的成员能够按某种次序排序；
      3、ES6创造了一种新的遍历命令for...of循环
      Iterator接口主要供for...of消费
*/
/*
    模拟next方法返回值
*/
function makeIterator(array){
  var nextIndex=0;
  return{
    next:function(){
      return nextIndex<array.length?
      {value:array[nextIndex++],done:false}:
      {value:undefined,done:true};
    }
  };
}
var it =makeIterator(['a','b']);

console.log(it.next());
console.log(it.next());


/*
    简写模式
*/
function makeIterator(array){
  var nextIndex=0;
  return{
    next:function(){
      return nextIndex<array.length?
      {array[nextIndex++]}:
      {done:true};
    }
  };
}


/*
  Symbol.itarator属性
*/
let arr=['a','b','c'];
let iter=arr[Symbol.iterator]();

iter.next();
