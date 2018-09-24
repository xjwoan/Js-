/*
	ES6 允许使用"箭头"(=>) 定义函数
*/



var f=(v,k)=>(v+k);

//等同于
var f=function(v){
	return v;
};

f(2);

/*

*/

let getTempItem=id=>({id:id,name:"Temp"});


const full=({first,last})=>first+' '+last;


/*
	正常函数写法
*/
[1,2,4,5,6,7,8].map(function(x){
	return x*x;
});

[1,2,4,5,6,7,8].map(x=>x*x);


/*
	rest参数和箭头函数结合
*/

const numbers=(...nums)=>nums;
numbers(1,2,4,5,6);

const headAndTail=(head,...tail)=>[head,tail];
headAndTail(1,2,4,5,6);


/*
	setTimeout的参数是一个箭头函数,
	这个箭头函数定义生效是在foo函数
	如果是普通函数，执行时this应该指向全局对象window，
	这时应该输出21。但是，
	箭头函数导致this总是指向函数定义生效时所在的对象
	（本例是{id: 42}），所以输出的是42。
*/


function foo(){
	setTimeout(()=>{
		console.log('id',this.id);
	},100);
}

var id=21;
foo.call({id:42});//42



function foo(){
	setTimeout(function(){
		console.log('id',this.id);
	},100);
}
var id=21;
foo.call({id:42});