export const loadShader = (
  gl: WebGL2RenderingContext,
  type: GLenum,
  source: string
): WebGLShader => {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log("error occured during compiling shader:");
    console.log(gl.getShaderInfoLog(shader));

    if (source) {
      source.split("\n").forEach((line, i) => {
        console.log(`${i}: ${line}`);
      });
    }

    gl.deleteShader(shader);
    return null;
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
    console.log(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(program)
    );
    return null;
  }

  return program;
};
