function isAnagram(s, t) {
    if (s.length != t.length) {
        return false;
    }

    const charCount = {}

    for (let i = 0; i < s.length; i++) {

        const charS = s[i];
        const charT = t[i];

        charCount[charS] = (charCount[charS] || 0) + 1;
        charCount[charT] = (charCount[charT] || 0) - 1;
    }

    for (const count in charCount) {
        if (charCount[count] !== 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));