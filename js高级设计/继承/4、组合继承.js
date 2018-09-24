/*
	组合继承
	通过构造函数来实现对实例属性的继承
	通过原型链方法实现函数的复用
*/
function SuperType(name){
	this.name=name;
	this.colors=['red','blue'];
}

SuperType.prototype.sayName=function(){
	console.log(this.name);
}

function SubType(name,age){
	SuperType.call(this);
	this.age=age;
}

SubType.prototype=new SuperType();
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function(){
	console.log(this.name);
};

var instance1=new SubType('薛蓝宇',20);
instance1.colors.push('aa');
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();


