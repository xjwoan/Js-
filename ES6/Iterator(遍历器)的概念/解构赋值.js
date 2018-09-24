/*
  (1)、解构赋值
*/

let set=new Set().add('a').add('b').add('c');

let [x,y]=set;
console.log([x,y]);

let [first,...rest]=set;
console.log(first);
console.log(rest);


/*
    (2)、扩展运算符




*/
//例一
var str='hello';
var aa=[...str];
console.log(aa);
//例二
let arr=['b','c'];
var bb=['a',...arr,'d'];
console.log(bb);

/*
    (3)、yield*
*/
let generator=function*(){
  yield 1;
  yield *[2,4,5];
  yield 6;
};
var iterator=generator();
console.log(iterator.next());
