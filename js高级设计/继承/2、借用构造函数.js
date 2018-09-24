/*
	也叫做伪造对象或经典继承
	在子类型构造函数的内部调用超类型构造函数
*/

function SuperType(){
	this.colors=["red","blue","green"];
}
function SubType(){
	SuperType.call(this);
}

var instance1=new SubType();
instance1.colors.push("black");
console.log(instance1.colors);

var instance2=new SubType();
console.log(instance2.colors);


/*
	call() 还可以传递参数
*/

function SuperType(name){
	this.name=name;
}

function SubType(){
	SuperType.call(this,"Nilasda");
	this.age=29;
}

var instance=new SubType();
console.log(instance.name);
console.log(instance.age);