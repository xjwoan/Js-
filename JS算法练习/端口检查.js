var str = '48-2048';
var maxlength = 0;

function aa(str) {
  var arr = str.split(',');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var aa = arr[i].split('-');
    if (aa.length > 1) {
      if (aa[1] > aa[2]) {
        maxlength += aa[1] - aa[0];
      } else {
        return false;
      }
    }
    newArr = newArr.concat(aa);
  }

  var flag = true;

  if (maxlength <= 1024) {
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i] <= 1 || newArr[i] >= 65535) {
        return false;
        break;
      }
    }

    if (flag == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
aa(str);