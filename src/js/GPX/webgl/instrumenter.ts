export interface Instrumenter {
    log: () => void;
    callCount: () => number;
    reset: () => void;
}

export interface InstrumentedContext extends WebGL2RenderingContext {
    getInstrumenter: () => Instrumenter;
}

export const instrumentContext = (gl: WebGL2RenderingContext): InstrumentedContext => {
    const instrumented = {};
    let glCallCount = 0;
    let prevented = 0;
    const callDistributions: any = {};

    Object.keys(gl).forEach(key => {
        // @ts-ignore
        instrumented[key] = gl[key];
    });

    let currentProgram: WebGLProgram = null;
    let currentVAO: WebGLVertexArrayObject = null;
    let currentBuffer: any = {};
    let currentFrameBuffer: any = {};

    Object.keys(Object.getPrototypeOf(gl)).forEach(key => {
        // @ts-ignore
        if (gl[key] instanceof Function) {
            if (key === "useProgram") {
                
                // @ts-ignore
                instrumented[key] = (program: WebGLProgram) => {
                    if (currentProgram === program) {
                        prevented++;
                        return;
                    }
                    currentProgram = program;
                    glCallCount += 1;
                    // @ts-ignore
                    return gl.useProgram(program);
                };
            } else if (key === "bindVertexArray") {
                // @ts-ignore
                instrumented[key] = (vao: any) => {
                    if (currentVAO === vao) {
                        prevented++;
                        return;
                    }
                    currentVAO = vao;
                    glCallCount += 1;
                    // @ts-ignore
                    return gl.bindVertexArray(vao);
                };
            } else if (key === "bindBuffer") {
                // @ts-ignore
                instrumented[key] = (target: GLenum, buffer: WebGLBuffer) => {
                    if (currentBuffer[target] && currentBuffer[target] === buffer) {
                        prevented++;
                        return;
                    }
                    currentBuffer[target] = buffer;
                    glCallCount += 1;
                    // @ts-ignore
                    return gl.bindBuffer(target, buffer);
                };
            } else if (key === "bindFramebuffer") {
                // @ts-ignore
                instrumented[key] = (target: GLenum, fbo: WebGLFramebuffer) => {
                    if (currentFrameBuffer[target] && currentFrameBuffer[target] === fbo) {
                        prevented++;
                        return;
                    }

                    currentFrameBuffer[target] = fbo;
                    glCallCount++;
                    return gl.bindFramebuffer(target, fbo);
                }
            } else {
                // @ts-ignore
                instrumented[key] = (...args) => {
                    if(key in callDistributions) {
                        callDistributions[key] = callDistributions[key] + 1;
                    } else {
                        callDistributions[key] = 1;
                    }
                    glCallCount += 1;
                    // @ts-ignore
                    return gl[key](...args);
                };
            }
            
        } else {
            // @ts-ignore
            instrumented[key] = gl[key];
        }
    });

    // @ts-ignore
    instrumented.getInstrumenter = (): Instrumenter => ({
        callCount: () => glCallCount,
        log: () => {
            console.log(`Total gl calls: ${glCallCount}`);
            console.log(`Calls prevented: ${prevented}`);
            console.log(callDistributions);
            
        },
        reset: () => {
            glCallCount = 0;
        }
    })

    return instrumented as InstrumentedContext;
}