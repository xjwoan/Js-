var arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];

function uniq(n) {
  var set = new Set(n);
  return set;
}
uniq(arr);



//Set去重

function uniq(arr) {
  var set = new Set(arr);
  var newArr = Array.from(set);
  return newArr;
}
var aa = [1, 2, 2, 3, 5, 3, 6, 5];
console.log(uniq(aa));

//

function uniq(array) {
  var temp = [];
  for (var i = 0; i < array.length; i++) {
    if (temp.indexOf(array[i]) == -1) {
      temp.push(array[i]);
    }
  }
  return temp;
}
var aa = [1, 2, "2", 4, 9, "a", "a", 2, 3, 5, 6, 5];
console.log(uniq(aa));