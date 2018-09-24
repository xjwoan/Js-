/*
	1、扩展运算符
*/
function push(array,...items){
	array.push(...items);
}

function add(x,y){
	return x+y;
}

const numbers=[4,28,51,51];
add(...numbers);


