function uniq(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
var aa = [1, 2, "2", 4, 9, "a", "a", 2, 3, 5, 6, 5];
console.log(uniq(aa));