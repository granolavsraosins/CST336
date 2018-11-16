<<<<<<< HEAD

var Ray = function(origin, direction) {
	this.origin = origin;
	this.direction = direction.normalized();

	this.clone = function() {
		return new Ray(this.origin.clone(), this.direction.clone());
	};
=======

var Ray = function(origin, direction) {
	this.origin = origin;
	this.direction = direction.normalized();

	this.clone = function() {
		return new Ray(this.origin.clone(), this.direction.clone());
	};
>>>>>>> 759cb6121d29a9eb1c48bd10f8cbb20b65488633
};