var majorityElement = function(nums) {
    let freq = {};

    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1;
    }

    let limit = nums.length / 2;

    for (let key in freq) {
        if (freq[key] > limit) {
            return Number(key);
        }
    }
};


let nums = [3, 2, 2, 3, 3, 2, 3, 2, 2]
console.log(majorityElement(nums))