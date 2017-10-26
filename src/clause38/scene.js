function Scene(context, width, height, images) {
	this.context = context;
	this.width = width;
	this.height = height;
	this.images = images;
	this.actors = [];
}

Scene.prototype.register = function(actor) {
	this.actors.push(actor);
};

Scene.prototype.unregister = function(actor) {
	let index = this.actors.indexOf(actor);

	if (index >= 0) {
		this.actors.splice(index, 1);
	}
};

Scene.prototype.draw = function() {
	this.context.clearRect(0, 0, this.width, this.height);

	for (let a = this.actors, i = 0, n = a.length; i < n; i++) {
		a[i].draw();
	}
};

export default Scene;
