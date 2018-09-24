/*
	1.splice()方法
*/

function removeWithoutCopy(arr, item) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
}


/*
	2.
*/

function removeWithoutCopy(arr, item) {
	while (arr.indexOf(item) != -1) {
		arr.splice(arr.indexOf(item), 1);
	}
	return arr;
}
