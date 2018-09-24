 var url = "http://vip.qq.com/a.php?a=1&b=3&c=4&d=5";

 var str = url.split("?")[1];

 var arr = str.split("&");

 console.log(arr);
 var newarr = [],
   json = {};

 for (var i = 0; i < arr.length; i++) {
   newarr = arr[i].split("=");
   json[newarr[0]] = newarr[1];
 }

 console.log(json);