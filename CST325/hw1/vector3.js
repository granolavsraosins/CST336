/*
 * CST 325
 *
 * John Coffelt, Raul Ramirez
 *
 * An object representing a 3d vector to make operations simple and concise.
 */

// todo - make sure to set a default value in case x, y, or z is not passed in
var Vector3 = function(x, y, z) {
	this.x = x != null ? x : 0;
	this.y = y != null ? y : 0;
	this.z = z != null ? z : 0;

	this.set = function(x, y, z) {
		//todo set this' values to those from x, y, and z
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.copy = function(other) {
		// copy the values from other into this
		this.x = other.x;
		this.y = other.y;
		this.z = other.z;
		return this;
	}

	this.add = function(v) {
		// todo - add v to this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	};

	this.subtract = function(v) {
		// todo - subtract v from this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	};

	this.negate = function() {
		// multiply this vector by -1 (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
    	this.x = -this.x;
    	this.y = -this.y;
    	this.z = -this.z;
		return this;
	};

	this.multiplyScalar = function(scalar) {
		// multiply this vector by "scalar" (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	};

	this.length = function() {
		// todo - return the magnitude (a.k.a length) of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	};

	this.lengthSqr = function() {
		// todo - return the squared magnitude of this vector ||v||^2 (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return this.x * this.x + this.y * this.y + this.z * this.z;
	};

	this.normalized = function() {
		// todo - return a new vector that is a normalized version of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		// Should return a new vector that is not this
		
	};

	this.normalize = function() {
		// todo - Change the components of this vector so that its magnitude will equal 1. (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
    	var n = Math.sqrt(x*x + y*y + z*z);
    		if(n>0.0){
        		var leng = 1/n;
        		this.x *= leng;
        		this.y *= leng;
        		this.z *= leng;
    		} else {
        		this.x = 0;
        		this.y = 0;
        		this.z = 0;
    	}
		return this;
	};

	this.dot = function(other) {
		// todo - return the dot product betweent this vector and "other" (5pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return this.x * other.x + this.y * other.y + this.z * other.z;
	};

	this.cross = function(other) {
		// todo - return the cross product (as a new vector) betweent this vector and "other" (3pt)
		// This should NOT change the values of this.x, this.y, and this.z
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var vx = other.x;
		var vy = other.y;
		var vz = other.z;
		this.x = y * vz - z * vy;
		this.y = z * vx - x * vz;
		this.z = x * vy - y * vx;
		return this;
	}
};
