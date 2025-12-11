var intersection = function(nums1, nums2) {
    let map=new Map()
    let arr=[]
    for(let i=0;i<nums1.length;i++)
    {
        map.set(nums1[i],true)
    }
    for(let i=0;i<nums2.length;i++)
    {
        if(map.has(nums2[i])){
             arr.push(nums2[i])
        }
    }
    return [...new Set(arr)]
};