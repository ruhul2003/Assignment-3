// Problem-05: Text Analyzer for an AI Company

function analyzeText(str) {
    if(typeof str !== "string") {
        return "Invalid"
    }
    const words = str.split(" ")
    let longest="";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    const token = str.split(" ").join("").length;
    return { longest, token };
}
