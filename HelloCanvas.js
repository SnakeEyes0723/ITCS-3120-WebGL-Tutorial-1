// HelloCanvas.js (c) 2012 matsuda
function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('webgl');
  
    // Get the rendering context for WebGL
    var gl = getWebGLContext(canvas);
    if (!gl) {
      console.log('Failed to get the rendering context for WebGL');
      return;
    }
    console.log('GLContext has been successfully created')
  
    // Set clear color
    gl.clearColor(Math.random(), Math.random(), Math.random(), Math.random());
  
    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
  }