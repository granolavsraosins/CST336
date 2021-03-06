<<<<<<< HEAD
/*
 * An object representing a 3d vector to make operations simple and concise.
 */

var Vector3 = function(x, y, z) {
	this.x = x; this.y = y; this.z = z;

	if (this.x == undefined) {
		this.x = this.y = this.z = 0;
	}

	this.set = function(x, y, z) {
		this.x = x; this.y = y; this.z = z;
	}

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.copy = function(other) {
		this.x = other.x; this.y = other.y; this.z = other.z;
		return this;
	}

	this.add = function(v) {		
		this.x += v.x; this.y += v.y; this.z += v.z;
		return this;
	};
	this.add3 = function(a,b,c){
		return{
			x: a.x + b.x + c.x,
        	y: a.y + b.y + c.y,
        	z: a.z + b.z + c.z
		};
	};

	this.subtract = function(v) {
		this.x -= v.x; this.y -= v.y; this.z -= v.z;
		return this;
	};

	this.negate = function() {
		this.x = -this.x; this.y = -this.y; this.z = -this.z;
		return this;
	};

	this.length = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	};
	this.reflectThrough = function(a, normal) {
    	var d = Vector3.multiplyScalar(normal, Vector3.dot(a, normal));
    	return Vector3.subtract(Vector3.multiplyScalar(d, 2), a);
	};

	this.lengthSqr = function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	this.multiplyScalar = function(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	};

	this.normalized = function() {		
		return new Vector3(this.x, this.y, this.z).multiplyScalar(1 / this.length());
	};

	this.normalize = function() {
		var magnitude = this.length();
		this.x = this.x / magnitude;
		this.y = this.y / magnitude;
		this.z = this.z / magnitude;
		return this;
	};

	this.dot = function(other) {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	};

	this.cross = function(other) {
		return new Vector3(
			this.y * other.z - this.z * other.y, 
			this.z * other.x - this.x * other.z,
			this.x * other.y - this.y * other.x
		);
	};

	this.mulitplyVector = function(other) {
		this.x *= other.x;
		this.y *= other.y;
		this.z *= other.z;
	}
};
=======
/*
 * An object representing a 3d vector to make operations simple and concise.
 */

var Vector3 = function(x, y, z) {
	this.x = x; this.y = y; this.z = z;

	if (this.x == undefined) {
		this.x = this.y = this.z = 0;
	}

	this.set = function(x, y, z) {
		this.x = x; this.y = y; this.z = z;
	}

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.copy = function(other) {
		this.x = other.x; this.y = other.y; this.z = other.z;
		return this;
	}

	this.add = function(v) {		
		this.x += v.x; this.y += v.y; this.z += v.z;
		return this;
	};
	this.add3 = function(a,b,c){
		return{
			x: a.x + b.x + c.x,
        	y: a.y + b.y + c.y,
        	z: a.z + b.z + c.z
		};
	};

	this.subtract = function(v) {
		this.x -= v.x; this.y -= v.y; this.z -= v.z;
		return this;
	};

	this.negate = function() {
		this.x = -this.x; this.y = -this.y; this.z = -this.z;
		return this;
	};

	this.length = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	};
	this.reflectThrough = function(a, normal) {
    	var d = Vector3.multiplyScalar(normal, Vector3.dot(a, normal));
    	return Vector3.subtract(Vector3.multiplyScalar(d, 2), a);
	};

	this.lengthSqr = function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	this.multiplyScalar = function(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	};

	this.normalized = function() {		
		return new Vector3(this.x, this.y, this.z).multiplyScalar(1 / this.length());
	};

	this.normalize = function() {
		var magnitude = this.length();
		this.x = this.x / magnitude;
		this.y = this.y / magnitude;
		this.z = this.z / magnitude;
		return this;
	};

	this.dot = function(other) {
		return this.x * other.x + this.y * other.y + this.z * other.z;
	};

	this.cross = function(other) {
		return new Vector3(
			this.y * other.z - this.z * other.y, 
			this.z * other.x - this.x * other.z,
			this.x * other.y - this.y * other.x
		);
	};

	this.mulitplyVector = function(other) {
		this.x *= other.x;
		this.y *= other.y;
		this.z *= other.z;
	}
};
>>>>>>> 759cb6121d29a9eb1c48bd10f8cbb20b65488633
