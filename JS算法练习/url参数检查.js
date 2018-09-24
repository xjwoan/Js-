var url = "http://www.google.com/?q=sangfor"
var str = 'son'

function a(url, item) {
  var arr = url.split("?")[1];

  var arr1 = arr.split("=");

  if (item == arr1[1]) {
    return true;
  } else {
    return false;
  }
}
a(url, str)