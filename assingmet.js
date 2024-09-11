// Problem 1


function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input"
    }else{
        let result = (income - expenses) *0.20
    return result;
    }
    
}

 

// problem 2


function sendNotification(email) {
    if (email.includes("@")){
        userName = email.split("@")[0];
        domainName = email.split("@")[1];

    return `${userName} sent you an email from ${domainName}`;
    
    }else{
        return "Invalid Email"
    }
    
}

// problem 3


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




// problem 4


function calculateFinalScore(obj) {
    
}



// problem 5


function  waitingTime(waitingTimes  , serialNumber) {
    
}

