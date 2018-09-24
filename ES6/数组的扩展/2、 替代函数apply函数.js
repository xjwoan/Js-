/*
	替代函数的apply方法
*/
//ES5
function f(x,y,z){

}
var args=[0,1,2];
f.apply(null,args);

//ES6

function f(x,y,z){

}
let args=[0,1,2];
f(...args);



/*
	扩展运算符的应用
	(1)、复制数组
*/

const a1=[1,2];
const a2=a1;

a2[0]=2;
console.log(a1);

/*

*/

const a1=[1,2];
const a2=a1.concat();

a2[0]=2;
console.log(a1);


const cart={
	_wheels:4,

	get _wheels(){
		return this._wheels;
	},
	set _wheels(value){
		if(value<this._wheels){
			throw new Error('数值太小了！');
		}
		this._wheels=value;
	}
}