const regl = require('regl')();
const glslify = require('glslify');


const bgCol = [Math.random(), Math.random(), Math.random(), 1.0];
const triangleCol = [Math.random(), Math.random(), Math.random(), 1.0];





const drawBG = regl({
    frag: glslify('./bg.frag.glsl'),
    vert: glslify('./bg.vert.glsl'),

attributes: {
    position: [[-1,-1], [1, -1], [1, 1],[-1,1]]
},

uniforms: {

    color: bgCol,
},

count: 4,
primitive: "triangle fan",
})

const drawTriangle = regl({
    frag: glslify('./triangle.frag.glsl'),
    vert: glslify('./triangle.vert.glsl'),

attributes: {
    position: [[-Math.random(), Math.random()], [Math.random(), -Math.random()], [Math.random(), Math.random()]]
},

uniforms: {
    // color: (context) => randomColor(context, bgCol),
    color: triangleCol,
},

count: 3,
primitive: "triangle fan",
})





regl.frame((context) => {
    drawBG();
    // drawTriangle();
})
















