/*
    类的prototype属性和__proto__属性
    每一个对象都有__ptoto__属性,指向对应的构造函数的prototype函数.

    (1)、子类的__proto__属性,表示构造函数的继承,总是指向父类
    (2)、子类prototype属性的__proto__属性,表示方法的继承,
    总是指向父类的prototype属性
*/

class A{}

class B extends A{}

console.log(B.__proto__===A);
console.log(B.prototype.__proto__===A.prototype);

console.log(B.__proto__);
console.log(B.prototype.__proto__);
