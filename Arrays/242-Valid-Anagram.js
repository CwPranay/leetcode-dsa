var isAnagram = function(s, t) {
    let freq = {}
    for ( let ch of s)
    {
      freq[ch]=(freq[ch] || 0) +1
    }
    for(let ch of t)
    {
        if(freq[ch])
        {return true}
        
        
    }
    
    return false
};
let  s = "anagram", t = "naapgram";
console.log(isAnagram(s,t))