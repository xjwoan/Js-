//1、递归

function sum(arr) {
	var len = arr.length;
	if (len == 0) {
		return 0
	} else if (len == 1) {
		return arr[0];
	} else {
		return arr[0] + sum(arr.slice(1));
	}
}

//2、常规方法

function sum1(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

//3、forEach()遍历

function sum2(arr) {
	var sum = 0;
	//forEach()方法中的function回调有三个参数：第一个是遍历的数组内容，第二个参数是对应的数组索引，第三个是数组本身
	arr.forEach(function (val, idx, arr) {
		sum += val;
	})
	return sum;
}
