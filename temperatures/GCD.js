function gCommonDivisor (a,b){
    let c =[]
    for(let i = 2; i<=Math.ceil(a/2);i++){
        let d = a % i
        if (d === 0){
            c.push(a)
        }   
    }     
    
    let e = [];
    
    for(let i = 2;i<=Math.ceil(b / 2);i++){
        let f = b % i
        if (f === 0){
            e.push(b)
        }
    }
    let x = c.reverse()
    console.log( x )
    for ( let i = 0; i < x.length; x++ ) {
        if ( e.includes( x[i] ) ) {
            return x[i]
        }

    }
}   
