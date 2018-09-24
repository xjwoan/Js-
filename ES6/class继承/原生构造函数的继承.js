/*
    ES6 允许继承原生构造函数定义子类，
    因为 ES6 是先新建父类的实例对象this，
    然后再用子类的构造函数修饰this，
    使得父类的所有行为都可以继承。下面是一个继承Array的例子。
*/
class MyArray extends Array{
  constructor(...args){
    super(...args);
  }
}

var arr=new MyArray();
arr[0]=12;
console.log(arr.length);

arr.length=0;
console.log(arr[0]);
