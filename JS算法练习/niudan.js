var arr = []; //执行方式数组
var x = 0;

function a(niudan) {
  while (x < niudan) {
    x = 2 * x + 1;
    arr.push(2);
    if (x == niudan) {
      return arr.join("");
    }
  }
  arr = [];
  x = 0;
  while (x < niudan) {
    x = 2 * x + 2;
    arr.push(3);
    if (x == niudan) {
      return arr.join("");
    }
  }
  arr = [2, 3];
  x = 0;
  while (x < niudan) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 2) {
        x = 2 * x + 1;
      } else {
        x = 2 * x + 2;
      }
    }
    if (x == niudan) {
      return arr.join("");
    }
    if (arr[0] == 3) {

    }
  }
}

while (read_line()) {
  var str = read_line();
  a(str.split("")[0]);
}