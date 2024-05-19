let script = document.createElement('script');
script.type = 'text/javascript';
document.body.appendChild(script);


function loadscript(src) {
    script.src = src;
    return new Promise((resolve, reject) => {
         script.onload = () => {
            resolve('script loaded')
        }
        script.onerror = () => {
            reject('not loaded')
        }

    }
    )

}

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')

.then(  
    (d)=>{console.log('ressolve11 ' + d); }
)
.catch(  
    (d)=>{console.log('reject11 ' + d); }
)
