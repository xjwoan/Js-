/*
	1、每个函数都有一个prototype(原型)属性
	这个属性是一个指针，指向一个对象.
	使用原型对象的好处是可以让所有对象实例
	共享它所包含的属性和方法
*/

function Person(){}

Person.prototype.name="Ni";
Person.prototype.age=20;
Person.prototype.job='SoftWare Engineer';
Person.prototype.sayName=function(){
	console.log(this.name);
}

var person1=new Person();
person1.sayName();

var person2=new Person();
person2.sayName();


/*
	更简单的原型语法
*/
function Person(){}

Person.prototype={
	name:"Nicholas",
	age:20,
	job:'工作',
	sayName:function(){
		console.log("aaa");
	}
}
var person=new Person();

console.log(person.name);






function Person(){}

Person.prototype={
	name:'薛蓝宇',
	age:20,
	job:'前端',
	sayName:function(){
		console.log(this.name);
	},
	hanshu:function(){
		console.log('1+1='+2);
	}
}

var person1=new Person();
console.log(person1.name);
person1.sayName();
person1.hanshu();
