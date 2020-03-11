# GPX

```
    import * as GPX from 'gpx';

    const gl = canvas.getContext("webgl2");
    const app = gpx.createApp({
        gl,
        vertexShader: '...',
        fragmentShader: '...',
        attributes: [
            {
                name: '..',
                type: gl.Float
            }
        ],
    })

    app.updateAttribute('[attrName]', data);
    app.reconcile()

    app.draw({ rebind=false });
```