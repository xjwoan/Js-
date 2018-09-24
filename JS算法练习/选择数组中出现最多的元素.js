function findMost(arr) {
  if (!arr.length) return;
  if (arr.length === 1) return 1;

  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (!res[arr[i]]) {
      res[arr[i]] = 1;
    } else {
      res[arr[i]]++;
    }
  }
  console.log(res);

  var maxcount = 0,
    maxvalue;

  var keys = Object.keys(res);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    if (res[keys[i]] > maxcount) {
      maxcount = res[keys[i]];
      maxvalue = keys[i];
    }
  }
  return '出现最多的次数:    ' + maxcount + '出现的数字:   ' + maxvalue;
}

var arr = [3, 5, 6, 5, 9, 8, 10, 5, 7];
findMost(arr);