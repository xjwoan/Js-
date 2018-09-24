/*
Set新的数据结构Set.类似于数组没有重复的值
可以用来进行数组去重
*/
//1、Set();
const s = new Set();
[1,1,2,2,4,4,6,6].forEach(x => s.add(x));
for(let i of s) {
    console.log(i);
}

const s=new Set([1,2,4,4,4,5,5,5,]);
[...s];
