/*
    map可以将 对象设置为键
*/
const m=new Map();
const o={p:'Hello World'};

m.set(o,'content');
m.get(o);

m.has(o);
m.delete(o);
m.has(o);

//可以接收数组作为参数

const map=new Map([
  ['name','张三'],
  ['title','Author']
])
console.log(map.size);
console.log(map.has('name'));
console.log(map.get('name'));
console.log(map.has('title'));
console.log(map.get('title'));


//

const items=[
  ['name','薛蓝宇'],
  ['age','20']
]
const bb=new Map();

items.forEach(
  ([key,value])=>map.set(key,value)
);


//Set和Map都可以用来生成新的 Map。

const set=new Set([
  ['foo',1],
  ['bar',2]
]);

const m1=new Map(set);
m1.get('foo');

const m2=new Map([['baz',4]]);
const m4=new Map(m2);
m4.get('baz');
