/*
	构造函数用于定义实例属性
	而原型模式用于定义方法和共享的属性
*/

function Person(name,age){
	this.name=name;
	this.age=age;
	this.friends=['uzi','letme','ming'];
}

Person.prototype={
	sayName:function(){
		console.log(this.name);
	},
	sayAge:function(){
		console.log(this.age);
	}
}

var person1=new Person('mlxg',20);
var person2=new Person('xiaohu',21);
/*
	共享方法 但是不共享属性
*/

person1.friends.push('zzitai');

console.log(person1.friends);
console.log(person2.friends);

console.log(person1.friends==person2.friends);
console.log(person1.sayName==person2.sayName);
