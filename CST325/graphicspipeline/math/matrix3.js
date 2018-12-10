/*
 * An object representing a 3x3 matrix
 */

var Matrix3 = function() {

	// Stores a matrix in a flat array, see the "set" function for an example of the layout
	// This format will be similar to what we'll eventually need when feeding this to WebGL
	this.elements = new Float32Array(9);

	// todo
	// this.elements should be initialized with values equal to the identity matrix
	for(var i = 0; i < this.elements.length; i++) {
		this.elements[i] = (i % 4 == 0) ? 1 : 0;
	}
	// -------------------------------------------------------------------------
	this.clone = function() {
		// todo
		// create a new Matrix3 instance that is an exact copy of this one and return it
		
		var m3 = new Matrix3();
		
		m3.copy(this);
		
		return m3 /* should be a new Matrix instance*/;
	};

	// -------------------------------------------------------------------------
	this.copy = function(other) {
		// todo
		// copy all of the elements of other into the elements of 'this' matrix
		
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i] = other.elements[i];
		}
		
		return this;
	};

	// -------------------------------------------------------------------------
	this.set = function (e11, e12, e13, e21, e22, e23, e31, e32, e33) {
		// todo
		// given the 9 elements passed in as argument e-row#col#, use
		// them as the values to set on 'this' matrix
		this.elements[0] = e11;
		this.elements[1] = e12;
		this.elements[2] = e13;
		this.elements[3] = e21;
		this.elements[4] = e22;
		this.elements[5] = e23;
		this.elements[6] = e31;
		this.elements[7] = e32;
		this.elements[8] = e33;
		
		return this;
	};

	// -------------------------------------------------------------------------
	this.getElement = function(row, col) {
		// todo
		// use the row and col to get the proper index into the 1d element array and return it
		// return this.elements[/*index computed from row and col*/];
		return this.elements[(3 * row) + col];
	};

	// -------------------------------------------------------------------------
	this.identity = function() {
		// todo
		// reset every element in 'this' matrix to make it the identity matrix
		
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i] = (i % 4 == 0) ? 1 : 0;
		}
		
		return this;
	};

	// -------------------------------------------------------------------------
	this.setRotationX = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the X axis
		return this;
	};

	// -------------------------------------------------------------------------
	this.setRotationY = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the Y axis
		return this;
	};


	// -------------------------------------------------------------------------
	this.setRotationZ = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the Z axis
		return this;
	};

	// -------------------------------------------------------------------------
	this.multiplyScalar = function(s) {
		// todo
		// multiply every element in 'this' matrix by the scalar argument s
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i] = this.elements[i] * s;
		}
		return this;
	};

	// -------------------------------------------------------------------------
	this.multiplyRightSide = function(otherMatrixOnRight) {
		// todo
		// multiply 'this' matrix (on the left) by otherMatrixOnRight (on the right)
		// the results should be applied to the elements on 'this' matrix
		var mL = this.clone();
		
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i] =
			mL.elements[(Math.floor(i / 3) * 3)] * otherMatrixOnRight.elements[(i % 3)]
			+ mL.elements[(Math.floor(i / 3) * 3 + 1)] * otherMatrixOnRight.elements[((i % 3) + 3)]
			+ mL.elements[(Math.floor(i / 3) * 3 + 2)] * otherMatrixOnRight.elements[((i % 3) + 6)];
		}
	
		return this;
	};

	// -------------------------------------------------------------------------
	this.determinant = function() {
		// todo
		// compute and return the determinant for 'this' matrix
		//a(ei - fh) - b(di - fg) + c(dh - eg)
		var a = this.elements[0];
		var b = this.elements[1];
		var c = this.elements[2];
		var d = this.elements[3];
		var e = this.elements[4];
		var f = this.elements[5];
		var g = this.elements[6];
		var h = this.elements[7];
		var i = this.elements[8];
		
		return (a*(e*i - f*h) - b*(d*i - f*g) + c*(d*h - e*g)); // should be the determinant
	};

	// -------------------------------------------------------------------------
	this.transpose = function() {
		// todo
		// modify 'this' matrix so that it becomes its transpose
		var matrix = this.clone();
		
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i] = matrix.elements[((i % 3) * 3 + Math.floor(i/3))]
		}
		
		return this;
	};

	// -------------------------------------------------------------------------
	this.inverse = function() {
		// todo
		// modify 'this' matrix so that it becomes its inverse
		var matrix = this.clone();
		
		matrix.set(
			((this.elements[4] * this.elements[8]) - (this.elements[5] * this.elements[7])),
		   -((this.elements[3] * this.elements[8]) - (this.elements[5] * this.elements[6])), 
		    ((this.elements[3] * this.elements[7]) - (this.elements[4] * this.elements[6])),
		   -((this.elements[1] * this.elements[8]) - (this.elements[2] * this.elements[7])),
		    ((this.elements[0] * this.elements[8]) - (this.elements[2] * this.elements[6])),
		   -((this.elements[0] * this.elements[7]) - (this.elements[1] * this.elements[6])),
			((this.elements[1] * this.elements[5]) - (this.elements[2] * this.elements[4])),
		   -((this.elements[0] * this.elements[5]) - (this.elements[2] * this.elements[3])),
			((this.elements[0] * this.elements[4]) - (this.elements[1] * this.elements[3]))
		);
		
		matrix.transpose();
		matrix.multiplyScalar((1/this.determinant()));
		
		return this.copy(matrix);
	};

	// -------------------------------------------------------------------------
	this.log = function() {
		var e = this.elements;
		console.log('[ '+
					'\n ' + e[0]  + ', ' + e[1]  + ', ' + e[2]  +
			        '\n ' + e[4]  + ', ' + e[5]  + ', ' + e[6]  +
			        '\n ' + e[8]  + ', ' + e[9]  + ', ' + e[10] +
			        '\n ' + e[12] + ', ' + e[13] + ', ' + e[14] +
			        '\n]'
		);

		return this;
	};
};