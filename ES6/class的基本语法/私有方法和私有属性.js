/*
    在命名上加以区别
*/
class Widget{
  //公有方法
  foo(baz){
    this._baz(baz);
  }

  //私有方法
  _bar(baz){
    return this.snaf=baz;
  }
}


/*
  将私有方法移出模块,因为模块内部的所有方法都是对外可见的
*/
class Widget{
  foo(baz){
    bar.call(this,baz);
  }
}
function bar(baz){
  return this.snaf=baz;
}

/*

*/
