// a is represented as X1  and b is represented as X2
// and c is represented as Y1 and d is represented as Y2
function distance (a ,b ,c, d){
    d = Math.sqrt(Math.pow((a - b),2) + Math.pow((c - d),2))
    return d
}