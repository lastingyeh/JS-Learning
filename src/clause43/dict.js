var dict = { alice: 34, bob: 24, chris: 62 };
var people = [];

for (let name in dict) {
	people.push(name + ':' + dict[name]);
}

export default people;
