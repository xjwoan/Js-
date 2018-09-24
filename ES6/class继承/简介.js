/*
  class可以通过extends关键字实现继承
*/
class Point{

}
class ColorPoint extends Point{

}

/*
  具体实现
*/
class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  toString(){
    return this.x+','+this.y;
  }
}

class ColorPoint extends Point{
  constructor(x,y,color){
    super(x,y);//调用父类的constructor(x,y)
    this.color=color;
  }

  toString(){
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

var p=new ColorPoint(1,2,'蓝色');
p.toString();

/*
    如果子类没有定义constructor方法,这个方法会被默认添加
    也就是说不管有没有显式定义，任何一个子类都有constructor方法
*/
class ColorPoint extends Point(){
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

class ColorPoint extends Point(){
}

// 等同于

class ColorPoint extends Point(){
  constructor(...args){
    super(...args);
  }
}

//

let cp=new ColorPoint(25,8,'green');
console.log(cp instanceof ColorPoint);//true
console.log(cp instanceof Point);//true


//Object.getPrototypeof 方法可以用来从子类上获取父类
Object.getPrototypeof(ColorPoint)===Point //true
Object.getPrototypeof(ColorPoint)===Point //true


/*
    静态方法也会被子类继承
*/

class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  // hello world
