/*
	1、工厂模式是软件工程领域   一种设计模式
	该方法抽象了创建具体对象的过程
	用函数来封装以特定接口创建对象的细节
*/

function createPerson(name,age,sex){
	var o=new Object();

	o.name=name;
	o.age=age;
	o.sex=sex;

	o.sayName=function(){
		alert(this.name);
	}
	return o;
}

var person=createPerson('薛蓝宇',20,'男');
var person1=createPerson('薛蓝宇1',21,'男');

person.sayName();
