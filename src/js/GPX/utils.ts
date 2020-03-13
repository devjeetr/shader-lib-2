export const loadShader = (
  gl: WebGL2RenderingContext,
  type: GLenum,
  source: string
): WebGLShader => {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("error occured during compiling shader:");
    console.error(gl.getShaderInfoLog(shader));

    if (source) {
      source.split("\n").forEach((line, i) => {
        console.error(`${i}: ${line}`);
      });
    }

    gl.deleteShader(shader);

    throw new Error("Shader compilation failed.");
    
  }

  return shader;
};

export const createProgramWithShaders = (
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string
): WebGLProgram => {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = loadShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(program)
    );
    return null;
  }

  return program;
};

export const resize = (gl: WebGL2RenderingContext) => {
  const realToCSSPixels = window.devicePixelRatio;
  
  // Lookup the size the browser is displaying the canvas in CSS pixels
  // and compute a size needed to make our drawingbuffer match it in
  // device pixels.
  const displayWidth = Math.floor(
    (gl.canvas as HTMLCanvasElement).clientWidth * realToCSSPixels
  );
  const displayHeight = Math.floor(
    (gl.canvas as HTMLCanvasElement).clientHeight * realToCSSPixels
  );
  
  // Check if the canvas is not the same size.
  if (gl.canvas.width !== displayWidth || gl.canvas.height !== displayHeight) {
    // Make the canvas the same size
    gl.canvas.width = displayWidth;
    gl.canvas.height = displayHeight;
  }
};


export const getItemsToUpdate = (item: { [key: string]: any }): Set<string> => {
  return new Set(
    Object.keys(item).filter(key => item[key] instanceof Function)
  );
};