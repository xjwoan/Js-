/*
	2、构造函数
	Object和Array会自动出现在执行环境中

	和工厂模式的区别
	 (1)、没有显式地创建对象;
	 (2)、直接将属性和方法赋给了this对象
	 (4)、没哟return语句
*/
function Person(name,age,sex){
	this.name=name;
	this.age=age;
	this.sex=sex;
	this.sayName=function(){
		console.log('Hi');
	}
}

var person=new Person('薛蓝宇',20,'男');
var person1=new Person('薛蓝宇1',22,'男');