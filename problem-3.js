 
 // Problem-03: BCS Final Score Calculator

function finalScore (result) {
    if(typeof result !== "object" || typeof result.right !== "number" || typeof result.wrong !=="number" || typeof result.skip !== "number") {
        return "Invalid"
    }
    else if(result.right + result.wrong + result.skip !== 100) {
        return "Invalid"
    }
    const score = result.right * 1 - result.wrong * 0.5 ;
    return  Math.round(score);
}


