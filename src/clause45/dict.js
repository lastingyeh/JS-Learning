function Dict(elements) {
	this.elements = elements || {};
	this.hasSpecialProto = false;
	this.specialoProto = undefined;
}

Dict.prototype.has = function(key) {
	if (key === '__proto__') {
		return this.hasSpecialProto;
	}
	return {}.hasOwnProperty.call(this.elements, key);
};

Dict.prototype.get = function(key) {
	if (key === '__proto__') {
		return this.specialoProto;
	}
	return this.has(key) ? this.elements[key] : undefined;
};

Dict.prototype.set = function(key, val) {
	if (key === '__proto__') {
		this.hasSpecialProto = true;
		this.specialoProto = val;
	} else {
		this.elements[key] = val;
	}
};

Dict.prototype.remove = function(key) {
	if (key === '__proto__') {
		this.hasSpecialProto = false;
		this.specialoProto = undefined;
	} else {
		delete this.elements[key];
	}
};

var dict = new Dict({ alice: 34, bob: 24, chris: 62 });

dict.has('alice'); // true
dict.get('bob'); // 24
dict.has('valueOf'); // false

for(let i in dict){
  console.log(i)
}

export default dict;
