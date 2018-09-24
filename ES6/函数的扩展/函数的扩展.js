/*
	1、函数参数的默认值
	 (1)、基本用法
*/

function aa(name,age){
	name=name||'薛蓝宇';
	age=age||'20';
	console.log(name,age);
}

aa();
aa('吴永鑫');
aa('吴永鑫','200');

/*
		(1)、基本的用法
*/
function Point(x=0,y=0){
	this.x=x;
	this.y=y;
}


/*
	(2)、与解构赋值默认值结合使用
*/

function foo({x,y=5}){
	console.log(x,y);
};

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined


/*
	另一个解构例子
*/
function fetch(url,{body='',method='GET',headers={}}){
	console.log(method);
	console.log(url);
}
fetch('http://example.com',{});



/*
	写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
	写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
*/

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]