
//Problem-01: New Price for Eid Sale

function newPrice(currentPrice , discount ) {
    if(typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount > 100 || currentPrice <= 0) {
        return "Invalid";
    }

    const newPrice = currentPrice - (currentPrice * (discount / 100));
    return newPrice.toFixed(3);
}


// Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
          if(typeof otp !=="string") {
                return "Invalid";
          }
          else if(otp.length !==8 || !otp.startsWith("ph-")) {
                return false;
    }
    return true;
}

 
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


// Problem-04: Upcoming Gono Vote

function gonoVote(array){
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount=0;
    let naCount=0;

    for(let i=0; i<array.length; i++) {
        if(array[i] === "ha") {
            haCount += 1;
        } else if(array[i] === "na") {
            naCount += 1;
        }
    }

    if(haCount > naCount) {
        return true;
    } else if(haCount === naCount) {
        return "equal";
    }
    else {
        return false;
    }
}


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
