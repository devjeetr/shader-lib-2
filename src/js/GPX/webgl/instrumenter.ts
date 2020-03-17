
export interface InstrumentedContext extends WebGL2RenderingContext {
    
}

export const instrumentContext = (gl: WebGL2RenderingContext): InstrumentedContext => {
    const instrumented = {};
    let glCallCount = 0;
    Object.keys(gl).forEach(key => {
        // @ts-ignore
        instrumented[key] = gl[key];
    });

    let currentProgram: WebGLProgram = null;
    let currentVAO: WebGLVertexArrayObject = null;
    Object.keys(Object.getPrototypeOf(gl)).forEach(key => {
        // @ts-ignore
        if (gl[key] instanceof Function) {
            if (key === "useProgram") {
                
                // @ts-ignore
                instrumented[key] = (program: WebGLProgram) => {
                    if (currentProgram === program) {
                        console.log("prevented useProgram");
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
                        console.log("prevented useVAO");
                        return;
                    }
                    currentVAO = vao;
                    glCallCount += 1;
                    // @ts-ignore
                    return gl.bindVertexArray(vao);
                };
            } else {
                // @ts-ignore
                instrumented[key] = (...args) => {
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
    instrumented.getInstrumenter = () => ({
        callCount: () => glCallCount,
        log: () => {

        },
        reset: () => {
            glCallCount = 0;
        }
    })

    return instrumented as InstrumentedContext;
}