/*
    函数的作用是为Promise实例添加状态改变时的回调函数，
    then方法的
    第一个参数是resolved状态的回调函数，
    第二个参数是rejected状态的回调函数,
*/

getJSON("/posts.json").then(function(json){
  return json.post;
}).then(function(post){
  //....
});
