/*
	其基本思想是利用原型使一个引用类型
	继承另一个引用类型的属性和方法
*/
function SuperType(){
	this.protype=true;
}

SuperType.prototype.getSuperValue=function(){
	return this.protype;
}

function SubType(){
	this.subprotype=false;
}

SubType.prototype=new SuperType();

SubType.prototype.getSubValue=function(){
	return this.subprotype;
}

var person=new SubType();
console.log(person.getSuperValue());


/*
	自我练习
*/


function aa(){
	this.job='前端';
}

aa.prototype.getJob=function(){
	return this.job;
}

function bb(){
	this.job1='后台';
}

bb.prototype=new aa();

bb.prototype.getJob1=function(){
	return this.job1;
}

var person=new bb();
console.log(person.getJob());
console.log(person.getJob1());
