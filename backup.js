function getData(){
    return new Promise( 

            (a, b)=>{
                    setTimeout(  ()=>{ b('ok');}  , 1000); 
             }

     );

}

getData()
.then(
    p=>{console.log(p);}

)
.catch(

    q=>{console.error(q);}

)
