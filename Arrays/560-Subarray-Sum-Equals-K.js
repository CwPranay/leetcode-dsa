var subarraySum = function(nums, k) {
   let map = { 0:1}
   let sum = 0
   let count = 0
   for ( let n of nums)
   { 
    sum=sum+n
    if(map[sum-k])
    {
        count+=map[sum-k]
    }
    map[sum] = (map[sum] || 0)+1
   }
   return count
};

let nums = [1,1,1], k = 2
console.log(subarraySum(nums,k))