// extends Array
function Dir(path, entries) {
	this.path = path;
	this.entries = entries;
}

Dir.prototype.forEach = function(f, thisArgs) {
	// 若物件不傳入綁定，則自行傳入(thisArgs = this)
	if (typeof thisArgs === 'undefined') {
		thisArgs = this; // point to Dir instance
	}
  // 利用 傳入的陣列物件進行 forEach 操作
	this.entries.forEach(f, thisArgs);
};

export default Dir;
