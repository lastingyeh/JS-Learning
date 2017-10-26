if (typeof Array.prototype.map !== 'function') {
	Array.prototype.map = function(f, thisArgs) {
		var result = [];

		for (let i = 0, n = this.length; i < n; i++) {                              
			result[i] = f.call(thisArgs, this[i], i); // (item,index)=>{} to map result[i]
		}
		return result; // return result
  };
}


