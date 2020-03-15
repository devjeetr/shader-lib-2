
export interface InstrumentedContext extends WebGL2RenderingContext {
    
}



export const instrumentContext = (gl: WebGL2RenderingContext): InstrumentedContext => {
    const instrumented = {};
    let glCallCount = 0;
    Object.keys(gl).forEach(key => {
        // @ts-ignore
        instrumented[key] = gl[key];
    });

    Object.keys(Object.getPrototypeOf(gl)).forEach(key => {
        // @ts-ignore
        if (gl[key] instanceof Function) {
            console.log(`${key} is a function`)
            // @ts-ignore
            instrumented[key] = (...args) => {
                glCallCount += 1;
                console.log(`Calling gl.${key}`)
                // @ts-ignore
                return gl[key](...args);
            };
        } else {
            console.log("other")
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