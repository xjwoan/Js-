/*
  Promise.prototype.catch()方法是
  .then(null,rejection)的别名
  用于指定发生错误时的回调函数.
*/
p.then((val)=>console.log('fulfilled:',val))
  .catch((err)=>console.log('rejected',err));

  //等同于
p.then((val)=>console.log('fulfilled',val))
  .then(null,(err)=>console.log("rejected",err));



/*
    reject方法的作用，等同于抛出错误
*/
//写法一
const promise =new Promise((resolve,reject){
  try{
    throw new Error('test');
}catch(e){
    reject(e);
}
});
promise.catch(function(error){
  console.log(error);
});

//写法二
const promise=new Promise((resolve,reject)=>{
  reject(new Error('test'));
});

promise.catch((error)=>{
  console.log(error);
})
