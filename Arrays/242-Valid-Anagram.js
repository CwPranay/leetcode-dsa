var isAnagram = function(s, t) {
    let map = {}
    if(s.length!=t.length) return false;
    for( let ch of s)
    {
        map[ch]=(map[ch] || 0) +1
    }
    for( let ch of s)
    {
        if(!map[ch]) return false;
        map[ch]--;
    }
    return true
};

let s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))

