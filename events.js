const q = require("./export.js");
const e = require ("events");


const a = new e();

a.on('onmotorfull',()=>{
    setTimeout(() => {
        console.log('motor is full g.');
        
    }, 3000);
})
a.emit('onmotorfull');
console.log('motor start.');


q.hello('ttt');
console.log(module);
 