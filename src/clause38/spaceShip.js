import Actor from './actor';

function SpaceShip(scene, x, y) {
	Actor.call(this, scene, x, y);
	this.point = 0;
}

// extends by Actor
SpaceShip.prototype = Object.create(Actor.prototype);

SpaceShip.prototype.type = 'spaceShip';

SpaceShip.prototype.scorePoint = function() {
	this.point++;
};

SpaceShip.prototype.left = function() {
	this.moveTo(Math.max(this.x - 10, 0), this.y);
};

SpaceShip.prototype.right = function() {
	let maxWidth = this.scene.width - this.width();
	this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
};

export default SpaceShip;
