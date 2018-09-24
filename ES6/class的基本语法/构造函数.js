// Copyright (c) 2018 by your name. All Rights Reserved.
    基本构造函数
*/
function Point(x,y){
  this.x=x;
  this.y=y;
}
Point.prototype.toString=function(){
  return '('+this.x+','+this.y+')';
}
var p=new Point(2,3);

/*
   用es6 class方法改写
*/
class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  toString(){
    return '('+this.x+','+this.y+')';
  }
}

/*
  类的数据类型就是函数，类本身就指向构造函数
*/
class Point{

}
typeof Point //"function"
Point ===Point.prototype.constructor //true


/*
  使用的时候，对类使用new命令,跟构造函数的用法完全一致
*/
class Bar{
    doStuff(){
      console.log('doStuff');
    }
}
var p=new Bar();
p.doStuff();

/*
  class的方法等同于 .prototype.原型链上的方法
*/

class Point{
  constructor(){
    console.log('constructor');
  }
  toString(){
    console.log('toString');
  }
  toValue(){
    console.log('toValue');
  }
}

//等同于
Point.prototype={
  constructor(){console.log('constructor');};
  toString(){console.log('toString');};
  toValue(){console.log('toValue');};
}

/*
  实例属性除非显式定义在其本身(即定义的this对象上),否则都是定义在原型上
*/
class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  toString(){
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point=new Point(2,3);
console.log(point.toString);
/*
  hasOwnProperty()方法会放回一个布尔值,
  指示对象自身属性中是否具有指定的属性
 */
console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__.hasOwnProperty('toString'));


/*
  实例可以通过__proto__为原型添加方法
*/

var p1=new Point(2,3);
var p2=new Point(2,3);

p1.__proto__.printName=function(){return 'Oops'};
console.log(p1.printName());
console.log(p2.printName());

var p3=new Point(1,4);
console.log(p3.printName());
