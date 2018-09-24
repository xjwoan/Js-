/*
	在构造函数中初始化 原型
*/

function Person(name,age){
	this.name=name;
	this.age=age;

	if(typeof this.sayName!='function'){
		Person.prototype.sayName=function(){
			console.log(this.name);
		}
	}
}

var person=new Person('mlxg',20);
person.sayName();
