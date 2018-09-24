//在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

//1.slice+unshift

function prepend(arr, item) {
	var new_arr = arr.slice(0);

	new_arr.unshift(item);

	return new_arr;
}

//2.concat

function prepend(arr, item) {
	return [item].concat(arr);
}

//3.push.apply()

function prepend(arr, item) {
	var newArr = [item];
	[].push.apply(newArr, arr);
	return newArr;
}
