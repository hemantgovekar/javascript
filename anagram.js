function isAnagram(s, t) {
    if (s.length != t.length) {
        return false;
    }

    const anagramObj = {}

    for (let i = 0; i < s.length; i++) {

        const charS = s[i];
        const charT = t[i];

        anagramObj[charS] = (anagramObj[charS] || 0) + 1;
        anagramObj[charT] = (anagramObj[charT] || 0) - 1;
    }

    for (const count in anagramObj) {
        if (anagramObj[count] !== 0) {
            return false;
        }
    }

    return true;

}

// Example usage:
const s = "cata";
const t = "taca";
console.log(isAnagram(s, t));