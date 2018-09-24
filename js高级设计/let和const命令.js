/*
let var 
let命令只在所在的代码块内有效
*/



/*
//里面的i都会指向同全局的i，因此，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值
var a=[];
for(var i=0;i<10;i++){
	a[i]=function(){
		console.log(i);
	};
}
a[6]();//10
*/




/*
//变量i是let声明的，当前的i只在别论循环有效，所有每一次的i其实都是一个新的变量，所有最后的输出为6
var a=[];
for(let i=0;i<10;i++){
	a[i]=functlion(){
		console.log(i);
	};
}
a[6]();//输出6
*/


/*

for(let i=0;i<3;i++){
	let i='abc';
	console.log('abc');
	//abc
	//abc
	//abc
}
*/

//1、不存在变量提升--即变量必须先声明才能使用,不像var，可以在生命之前使用，值为undefined.



/*//死区 1、前面使用过let定义的变量
//     2、

function bar(x = y, y = 2) {
	return [x, y];
}
bar(); //报错


function bar(x = 2, y = x) {
	return [x, y];
}
bar(); //[2,2]*/






/*//1、let不允许在相同作用域内，重复声明同一个变量
 function func(arg){
	 let arg;//报错
 }*/
