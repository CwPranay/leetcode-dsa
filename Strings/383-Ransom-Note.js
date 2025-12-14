var canConstruct = function (ranSomNote, magazine) {
    let freq = {}
    for (let ch of magazine) {
        ferq[ch] = (freq[ch] || 0) + 1
    }
    for (let ch of ranSomNote) {
        if (!freq[ch]) {
            return false

        }
        freq[ch]--;
    }
    return true
}