import Actor from '../clause38/actor';

function Alien(scene, x, y, direction, speed, strength) {
	Actor.call(this, scene, x, y);

	this.direction = direction;
	this.speed = speed;
	this.strength = strength;

	this.damage = 0;
	this.alienID = ++Alien.nextID;
}

Alien.nextID = 0;

export default Alien;
