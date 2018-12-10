precision mediump float;
//uniform variables communicate with vertex fragment shader from outside.
//uniform variables are read only and are same value after processing.
uniform sampler2D uTexture;
uniform float uAlpha;

//Todo 3 receive the texture coordinates in the frament shader and verify
varying vec2 vTexcoords;

void main(void) {
    gl_FragColor = texture2D(uTexture, vTexcoords);
    gl_FragColor.a = uAlpha;//using a to access vector representing rgba color
}
