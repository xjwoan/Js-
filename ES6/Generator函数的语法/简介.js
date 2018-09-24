/*
  1、Generator函数是一个状态机,封装了多个内部状态
  2、 还是一个遍历器对象生成函数

  普通函数  有两个特征:
  1、function关键字与函数名之间有一个星号;
  2、函数体内部使用yield表达式,定义不同的内部状态(yield)
*/
function* helloWorldGenerator(){
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw=helloWorldGenerator();

/*
  调用Generator函数,返回一个遍历对象,对象Generator函数的内部指针.

*/
