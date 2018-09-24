/*
	const 声明一个只读的常量。
	一旦声明，常量的值就不能改变。

	const实际上保证的，并不是变量的值不得改动
	而是变量指向的内存地址所保存的数据不得改动
*/

/*
	1、
*/
const foo={};

foo.prop=11;

console.log(foo.prop);

/*
	2、
*/

const a=[];
a.push('Hello');
console.log(a.length);
console.log(a);
a.length=0;
console.log(a);