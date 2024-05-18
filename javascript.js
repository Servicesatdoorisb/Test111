var i=1;
function executor(resolve,reject){
    i++;
    if(i==4)
        {
    resolve(i);
        }
else
{
reject(i);
        }
    
}


function getData(){
    return new Promise(executor);
}

getData()
.then(  
    (d)=>{console.log('ressolve11 ' + d);
        return new Promise(executor);
    }
)
.catch(  
    (d)=>{console.log('reject11 ' + d);
        return new Promise(executor);
    }
)
.then(  
    (d)=>{console.log('ressolve22 ' + d);
        return new Promise(executor);
    }
)
.catch(  
    (d)=>{console.log('reject22 ' + d);
        return new Promise(executor);
    }
).then
(  
    (d)=>{console.log('ressolve33 ' + d);
        return new Promise(executor);
    }
)
.catch(  
    (d)=>{console.log('reject33 ' + d);
    console.log('ended ctaches');;
    }
)
