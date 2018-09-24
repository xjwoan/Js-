while (line = readline()) {
  let line1 = readline()

  function ans(line1) {
    let ans = 0;
    let row_arr = line1.split(' ')
    let nums_arr = line1.split(' ').sort((a, b) => {
      return a - b
    }).map((num, i) => {
      if (num !== row_arr[i]) ans++
    })
    return ans
  }
  print(ans(line1))
}

function aa(n) {
  var value1 = 1;
  var value2 = 1;
  var temp = 0;
  if (n == 1 || n == 2) {
    return 1;
  }
  for (var i = 2; i < n; i++) {
    temp = value1 + value2;
    value1 = value2;
    value2 = temp;
  }
  return temp;
}
var a = 3;
while (a <= 10) {
  console.log(aa(a));
  a++;
}