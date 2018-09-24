/*
  super虽然代表父类A的构造函数,但是返回的是子类B的实例,
  即super内部的this指的是B,因此super()在这里相当于
  A.prototype.constructor.call(this)
*/
class A{
  constructor{
    console.log(new.target.name);
  }
}

class B extends A{
  constructor(){
    super();//A.prototype.constructor.call(this)
  }
}
new A();
new B();


/*
    super()只能用在构造函数中
*/

/*
    另一种情况,super作为对象时,在普通方法中,指向父类的原型对象;
    在静态方法中，指向父类
*/

class A{
  p(){
    return 2;
  }
}

class B extends A{
  constructor(){
    super();
    console.log(super.p());//2
  }
}

let b=new B();
