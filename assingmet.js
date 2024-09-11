


function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input"
    }else{
        let result = (income - expenses) *0.20
    return result;
    }
    
}

 



function sendNotification(email) {
    if (email.includes("@")){
        userName = email.split("@")[0];
        domainName = email.split("@")[1];

    return `${userName} sent you an email from ${domainName}`;
    
    }else{
        return "Invalid Email"
    }
    
}




function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input"
    }
    for( i = 0; i < name.length; i++){
        if(!isNaN(name[i])){
            return true
        }
    }
    return false
}







function calculateFinalScore(obj) {
        
    if (typeof obj.name !== "string" || typeof obj.testScore !== "number" || obj.testScore > 50  || typeof obj.schoolGrade !== "number" || obj.schoolGrade > 30 || typeof obj.isFFamily !== "boolean"){
        return "Invalid Input";
    }
    let result = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily === true){
        result +=20;
    }
    if(result >=80){
        return "true"
    }else{
        return "false"
    }
   
}






function  waitingTime(waitingTimes, serialNumber) {
    if(!waitingTimes == "Array.isArray" || !serialNumber == "number"){
        return "Invalid Input"
    }
    let sum = 0;
    for(let array of waitingTimes){
        sum += array;
    }
    const average = Math.round(sum / waitingTimes.length);
     const esRatBefore = serialNumber - 1;
    const remainingEsRat = esRatBefore - waitingTimes.length;
    let esRatWaitingTime = remainingEsRat * average;
    return{average, esRatBefore, remainingEsRat, esRatWaitingTime} ;
}

