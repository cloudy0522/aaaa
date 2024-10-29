//Number of Cases Calculating Module

function factorial(n){
    if( n == 0 || n == 1)
        return 1;

    var k = 1;
    for (var i = 2; i <= n; i++){
        k *= i;
    }
    return k;
}


const permutation = function (n, r) {return factorial(n)/factorial(n-r)}
const combination = function (n, r) {return factorial(n)/(factorial(n-r) * factorial(r))}
const multiPermutation = function(n, r) {return n ** r}
const multiCombination = function(n, r) {return combination(n + r - 1, r)}


module.exports= {
    permutation,
    combination,
    multiCombination,
    multiPermutation,
    };