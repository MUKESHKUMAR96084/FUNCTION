function hypotenuse(a, b)
{
    function square(x) 
    { 
        return x*x; 
    }
    
    return Math.sqrt(square(a) + square(b));
}
var stored = hypotenuse(6,6)
console.log("the value of no are "+stored);