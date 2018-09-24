function aa(index1, index2) {
  var newArr = [];
  while (index1 <= index2) {
    var aa = index1;
    var arr = aa.toString().split("");
    if (arr.reverse().join("") == aa.toString()) {
      newArr.push(aa);
    }
    index1++;
  }
  var newArr1 = [];
  newArr.forEach(function(value, index, newArr) {
    if (value < 2) {} else if (value == 2) {} else {
      for (var i = 0; i < value; i++) {
        if (value % i == 0) {} else {
          newArr1.push(value);
        }
      }
    }
  })
  return newArr1;
}
aa(100, 150);