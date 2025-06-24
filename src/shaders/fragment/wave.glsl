uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Create a wave pattern
  float wave = sin(uv.x * 10.0 + uTime) * 0.1;
  wave += sin(uv.y * 10.0 + uTime * 1.5) * 0.1;
  
  // Color based on position and wave
  vec3 color = uColor + vec3(wave);
  
  gl_FragColor = vec4(color, 1.0);
}