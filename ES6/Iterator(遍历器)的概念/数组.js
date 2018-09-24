/*
  type of 遍历数组
*/

const arr=['red','green','blue'];

for(let v of arr){
  console.log(v);
}

const obj={};
obj[Sysbol.iterator]=arr[Symbol.iterator].bind(arr);

for(let v of obj){
  console.log(v);
}

/*
  for...of循环可以代替实例的forEach方法
*/
const arr1=['red','green','blue'];

arr1.forEach((element,index)=>{
  console.log(element);
  console.log(index);
})

/*
    for in循环
*/
var arr=['a','b','c','d'];

for(let a in arr){
  console.log(a);
}

for(let a of arr){
  console.log(a);
}
