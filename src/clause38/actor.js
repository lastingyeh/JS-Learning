import Scene from './scene';

function Actor(scene, x, y) {
	this.scene = scene;
	this.x = x;
	this.y = y;
	scene.register(this);

	// for clause39 used
	this.actorID = ++Actor.nectID;
}

Actor.prototype.moveTo = function(x, y) {
	this.x = x;
	this.y = y;
	this.scene.draw();
};

Actor.prototype.exit = function() {
	this.scene.unregister(this);
	this.scene.draw();
};

Actor.prototype.draw = function() {
	let image = this.scene.images[this.type];
	this.scene.context.drawImage(image, this.x, this.y);
};

Actor.prototype.width = function() {
	return this.scene.images[this.type].width;
};

Actor.prototype.height = function() {
	return this.scene.images[this.type].height;
};

Actor.nextID = 0;

export default Actor;
