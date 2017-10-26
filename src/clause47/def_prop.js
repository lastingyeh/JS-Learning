Object.prototype.allKeys = function() {
	var result = [];
	for (var key in this) {
		result.push(key);
	}
	return result;
};

// 排除 allKeys from for-in
Object.defineProperty(Object.prototype, 'allKeys', {
	value: function() {
		var result = [];
		for (var key in this) {
			result.push(key);
		}
		return result;
	},
	writable: true,
	enumerable: false, // for-in 無法列舉 allKeys
	configurable: true
});
