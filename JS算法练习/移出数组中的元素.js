//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

/*1、splice()函数
   	 splice()函数有如下几个功能:
	 (1).删除-用于删除元素，两个参数，第一个参数(要删除第一项的位置),第二个参数(要删除的项数)
	 (2).插入-向数组指定位置插入任意项元素。三个参数，第一个参数（起始位置），第二个参数（0），第三个参数（插入的项数） 
	 (3).替换-向数组指定位置插入任意项元素，同时删除任意数量的项，三个参数。第一个参数（起始位置），第二个参数（删除的项数），第三个参数（插入任意数量的项）*/

function remove(arr, item) {
	var new_arr = arr.slice(0);
	for (var i = 0; i < new_arr.length; i++) {
		if (new_arr[i] == item) {
			new_arr.splice(i, 1);
			i--;
		}
	}
	return new_arr;
}

//2、slice() 函数
/*
	当slice()的参数有两个的时候，第一个参数表示开始截取的位置，第二个参数表示截取结束的位置，把起始位置之间的值取出来变成数组作为返回值（包括开始位置的值，不包括结束位置的值），因此slice()是不会改变原数组的。
		
	当slice()的参数只有一个的时候，参数表示开始截取的位置，然后从这个位置把后面的值全部截取下来。
*/


function remove(arr, item) {
	var new_arr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != item) {
			new_arr.push(arr[i]);
		}
	}
	return new_arr;
}
