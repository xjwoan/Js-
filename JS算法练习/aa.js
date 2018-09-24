/*
3.   给定任意字符串，返回所有叠字的数组。示例
输入：“独坐常忽忽，情怀何悠悠。山腰云缦缦，谷口风飕飕。”
输出：[“忽忽”,”悠悠”,”缦缦”,”飕飕”]
*/

function aa(str) {
  var newarr1 = [],
    newarr2 = [];

  var arr = str.split("");

  arr.forEach(function(value, index, arr) {
    if (value == '，' || value == '。') {} else {
      if (newarr1.indexOf(value) == -1) {
        newarr1.push(value);
      } else {
        newarr2.push(value + value);
      }
    }
  })
  return newarr2;
}
var str = '独坐常忽忽，情怀何悠悠。山腰云缦缦，谷口风飕飕。';
console.log(aa(str));