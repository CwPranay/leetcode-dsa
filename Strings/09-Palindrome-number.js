var isPalindrome = function(x) {
    let reverse = x.toString().split("").reverse().join("")
    console.log(reverse)
    if(x==reverse)
    {
        return true
    }
    else
    {
        return false
    }

};
let x =121
console.log(isPalindrome(x))