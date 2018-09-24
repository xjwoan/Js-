//1.forEach循环

function count(arr, item) {
	var count = 0;
	arr.forEach(function (e) {
		e == item ? count++ : 0;
	});
	return count;
}
