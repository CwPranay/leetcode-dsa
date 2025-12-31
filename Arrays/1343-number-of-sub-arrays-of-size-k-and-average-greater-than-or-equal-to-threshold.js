var numOfSubarrays = function(arr, k, threshold) {
    let count=0
    let windowSum =0
    for(let i =0;i<k;i++)
    {
        windowSum+=arr[1]
    } 
     if((windowSum/k)>=threshold)
        {
          count++
        }
    
    for(let i=k;i<arr.length;i++)
    {
        windowSum+=arr[i]
        windowSum-=arr[i-k]
        
        if((windowSum/k)>=threshold)
        {
          count++
        }
    }
    return count
};

let arr = [2,2,2,2,5,5,5,8,2,3,4,4], k = 3, threshold = 4
console.log(numOfSubarrays(arr,k,threshold))

