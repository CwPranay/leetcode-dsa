/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let A =  0
  let B = 0
  let r =[]
  while(A<m && B<n){
      if(nums1[A]<=nums2[B]){
          r.push(nums1[A])
          A++
      }
      else{
          r.push(nums2[B])
          B++
      }
  }
 while(A<m){
     r.push(nums1[A])
     A++
 }
 while(B<n){
     r.push(nums2[B])
     B++
 }
  return nums1.splice(0, nums1.length, ...r);
};

