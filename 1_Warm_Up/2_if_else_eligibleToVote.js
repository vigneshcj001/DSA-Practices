// Create a function which accepts the age and tests whether a person is eligible to vote or not

function eligibleToVote(age){
    if (age < 0){
        console.log("Invalid Input")
    }
    else if (age < 18){
        console.log("You are ineligible to vote.");

    }
    else{
        console.log("You are eligible to vote.")
    }

}
eligiblity = eligibleToVote(1)