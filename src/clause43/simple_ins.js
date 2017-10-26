var dict = {};

dict.alice = 34;
dict.bob = 24;
dict.chris = 62;

var names = [];

for (var name in dict) {
	names.push(name);
}

var len = names.length;

export { len, names };
