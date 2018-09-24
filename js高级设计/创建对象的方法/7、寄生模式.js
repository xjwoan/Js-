/*
	该函数的作用仅仅是封装创建对象的代码，
	然后再返回新创建的对象；
	但从表面上看，这个函数又很像是典型的构造函数。
*/

function Person(name,age){
	var o=new Object();
	o.name=name;
	o.age=age;
	o.sayName=function(){
		console.log(this.name);
	}
	return o;
}

var friend=new Person('mlxg',20);
friend.sayName();