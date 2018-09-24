/*
  promise对象相当于一个容器，里面保存着某个未来才会结束的事件
  两个特点:
  (1)、对象的状态不受外界影响。有三种状态：
  Pending(进行中)、fulfilled(已成功)、rejected(以失败)
  (2)、一旦状态改变，就不会在变，任何时候都可以得到这个结果。
  promise对象的状态改变，只有两种可能:
    ((1))、pending--->fulfilled();
    ((2))、pending--->rejected();

    resolved是已固定
*/


/*
    基本用法:
    resolve函数的作用是，
    将Promise对象的状态从“未完成”变为“成功”
    （即从 pending 变为 resolved），
    在异步操作成功时调用，并将异步操作的结果，
    作为参数传递出去；

    reject函数的作用是，
    将Promise对象的状态从“未完成”变为“失败”
    （即从 pending 变为 rejected），
    在异步操作失败时调用，并将异步操作报出的错误，
    作为参数传递出去。
*/
const promise=new Promise(function(resolve,reject){
  //......some code
  if(/* 异步操作成功 */){
    resolve(value);
  }else{
    reject(value);
  }
});



/*
    简单例子:
*/

function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,ms,'done');
  });
}

timeout(100).then((value)=>{
  console.log(value);
})

/*
  Promise新建后就会立刻执行
*/
let promise=new Promise((resolve,reject)=>{
  console.log('promise');
  resolve();
});

promise.then(()=>{
  console.log('resolve');
});

console.log('Hi!');

/*
  异步加载图片的例子
*/
    function loadImageAsync(url){
      return new Promise(function(resolve,reject){
        const image=new Image();

        image.onload=function(){
          resolve(image);
        };
        image.onerror=function(){
          reject(new Error('Could not load image at'+url));
        };
        image.src=url;
      });
    }

/*
    Promise对象实现的Ajax操作
*/

const getJson=function(url){
  const promise=new Promise(function(resolve,reject){
    const handler=function(){
      if(this.readyState!==4){
        return;
      }
      if(this.status===200){
        resolve(this.response);
      }else {
        reject(new Error(this.statusText));
      }
    };
    const client=new XMLHttpRequest();
    client.open("GET",url);
    client.onreadystatechange=handler;
    client.responseType="json";
    client.setRequestHeader("Accept","application/json");
    client.send();
  });
  return promise;
}

getJson("/posts.json").then(function(json){
  console.log("Contents:"+json);
},function(error){
  console.log("出错了",error);
});



/*

*/

const p1=new Promise(function(resolve,reject){
  setTimeout(()=>reject(new Error('fail')),2000);
})

const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve(p1),1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))


/*
    resolve和reject并不会终结Promise的参数函数的执行
*/

new Promise((resolve,reject)=>{
  resolve(1);
  console.log(2);
}).then(r=>{
  console.log(r);
});
