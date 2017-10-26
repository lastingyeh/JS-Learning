import Dir from './dir';

const entries = [1, 3, 5, 7, 9];

let d1 = new Dir('', entries);

let newArr = [];

d1.forEach(function(item, index) {
	newArr.push(item);
}, d1);

export { d1, newArr };
