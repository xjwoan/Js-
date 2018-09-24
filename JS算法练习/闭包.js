function A() {
  var x = 1;
  return function() {
    x++;
    console.log(x);
  }
}

var m1 = A();
m1();
m1();
var m2 = A();
m2();
m2();