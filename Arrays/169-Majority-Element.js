var majorityElement = function (nums) {
    let freq = {}
    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1
    }
    for (let n in freq) {
        if (freq[n] > (nums.length / 2)) {
            return Number(n)
        }

    }
};


let nums = [3, 2, 2, 3, 3, 2, 3, 2, 2,3,3]
console.log(majorityElement(nums))