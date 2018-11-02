//1. Array operations
//------------------------------------------
//Head
//------------------------------------------
const head=['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
let resultado=head => head[0];
console.log(resultado(head));

//------------------------------------------
//tail
//------------------------------------------
const tail=['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
var tailfun = arr=> arr.slice(1);
console.log(tailfun(tail)); 

//------------------------------------------
//init
//------------------------------------------
const init=['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
var initfun = arr=> arr.slice(-arr.length,-1);
console.log(initfun(init)); 

//------------------------------------------
//last
//------------------------------------------
const last=['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
var lastFun= arr =>   arr.splice(arr.length-1);
console.log(lastFun(last));  

