precision mediump float;

uniform vec3 uLightDirection;
uniform vec3 uCameraPosition;
uniform sampler2D uTexture;

varying vec2 vTexcoords;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main(void) {
    // todo - diffuse contribution
    // 1. normalize the light direction and store in a separate variable
	vec3 normalizedLightPos = normalize(uLightDirection);
    // 2. normalize the world normal and store in a separate variable
	vec3 normalizedWorldNormal = normalize(vWorldNormal);
    // 3. calculate the lambert term
	float lambertTerm = max(dot(normalizedLightPos, normalizedWorldNormal), 0.0);
    // todo - specular contribution
    // 1. in world space, calculate the direction from the surface point to the eye (normalized)
	vec3 normalizedeyeVector = normalize(uCameraPosition - vWorldPosition);
    // 2. in world space, calculate the reflection vector (normalized)
	vec3 reflectionVector = 2.0 * dot(normalizedWorldNormal,normalizedLightPos) * normalizedWorldNormal - normalizedLightPos;
    // 3. calculate the phong term
	float phongTerm = pow(max(dot(reflectionVector,normalizedeyeVector), 0.0), 64.0);
	
    vec3 albedo = texture2D(uTexture, vTexcoords).rgb;
	
	const vec3 lightColor = vec3(1.0, 1.0, 1.0);
    const vec3 colorSpec = vec3(0.3, 0.3, 0.3);
	
    // todo - combine
    // 1. apply light and material interaction for diffuse value by using the texture color as the material
	// vec3 diffuseColor = todo;
	vec3 ambient = albedo * 0.1;
	vec3 diffuseColor = lightColor * albedo * lambertTerm;
    // 2. apply light and material interaction for phong, assume phong material color is (0.3, 0.3, 0.3)
	// vec3 specularColor = todo;
	vec3 specularColor = colorSpec * phongTerm;
    
    //vec3 finalColor = ambient; // + diffuseColor + specularColor;
	vec3 finalColor = ambient + diffuseColor + specularColor;
	
    gl_FragColor = vec4(finalColor, 1.0);
}