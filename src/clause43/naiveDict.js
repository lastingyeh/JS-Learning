function NaiveDict() {}

NaiveDict.prototype.count = function() {
	var i = 0;
	for (var name in this) {
		i++;
	}
	return i;
};

NaiveDict.prototype.toString = function() {
	return '[Object NaiveDict]';
};

var dict = new NaiveDict();

dict.alice = 34;
dict.bob = 24;
dict.chris = 62;

const total_count = dict.count(); // 5 使用 for-in 會將 count,toString 計算輸出

export { total_count, dict };
