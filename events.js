import a from "events";

const c = new a();
c.addListener('onmotorfull',()=>{
    setTimeout(() => {
        console.log('motor is full g.');
        
    }, 3000);
})
c.emit('onmotorfull');
console.log('motor start.');

