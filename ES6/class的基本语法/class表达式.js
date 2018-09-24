/*
  和函数一样，类也可以使用表达式的形式定义
*/

const Myclass=class Me{
  getClassName(){
    return Me.name;
  }
};
let inst=new Myclass();
inst.getClassName();//Me
Me.name//ReferenceError:Me is not define




/*
  采用Class表达式，可以写出立即执行的Class
*/

let person=new class{
  constructor(name){
    this.name=name;
  }
  sayName(){
    console.log(this.name);
  }
}('薛蓝宇')

person.sayName();//薛蓝宇


/*
   类不存在变量提升(hoist)
*/
new Foo();//ReferenceError
class Foo{}

{
  let Foo=class{};
  class Bar extends Foo{

  }
}
