// Problem-05: Text Analyzer for an AI Company

function textAnalyzer(text) {
    if(typeof text !== "string") {
        return "Invalid"
    }
    const words = text.split(" ")
    let longest="";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    const token = text.split(" ").join("").length;
    return { longest, token };
}

console.log(textAnalyzer("I love programming"));