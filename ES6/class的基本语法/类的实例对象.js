/*
  类的实例对象
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

point.toString();

console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__.hasOwnProperty('toString'));


/*
    原型方法
*/

var p1=new Point(2,3);
var p2=new Point(3,2);

console.log(p1.__proto__===p2.__p roto__);

p1.__proto__.printName=function(){
  return 'aaaa';
}

console.log(p1.printName());
console.log(p2.printName());
