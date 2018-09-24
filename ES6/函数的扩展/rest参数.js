/*
	rest参数
	用于获取函数的多余参数,不需要arguments对象
*/

function add(...value){
	let sum=0;

	for(var val of value){
		sum+=val;
	}
	return sum;
}
add(2,4,5);









/*
	用rest参数改写数组push()
*/

function push(array,...items){
	items.forEach(function(item){
		array.push(item);
		console.log(item);
	})
}
var a=[];
push(a,2,4,5);
console.log(a);