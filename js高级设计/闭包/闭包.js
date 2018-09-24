let obj = {
	name: 'll',
	age: 20,
	friend: {
		name: 'cc',
		age: 20
	}
};

let copyObj = JSON.parse(JSON.stringify(obj));

obj.name = 'xxxx';
obj.age = '222';

console.log(obj);
console.log(copyObj);


var a = [1, 2];

if (Array.isArray(a)) {
	console.log("是数组");
} else {
	console.log("不是数组");
}
