const loadscript= (src)=>
    {
        return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src= src;
        document.body.appendChild(script);
        script.onload= ()=>{
            resolve('script loaded')
        }
        script.onerror=()=>{
            reject('not loaded')
        }
        
        }
    )

    }

loadscript('https://cdWn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')

.then(  
    (d)=>{console.log('ressolve11 ' + d); }
)
.catch(  
    (d)=>{console.log('reject11 ' + d); }
)
