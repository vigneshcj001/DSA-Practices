function oddOrEven(number){
    if (number % 2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
let result = oddOrEven(2);
console.log(result);

// Differences Between == and ===
//  == (Double Equals) ::  '5' == 5 returns true (because it converts '5' to 5).
// === (Triple Equals) ::  5' === 5 returns false (different types: string vs number).

//  true == 1 returns true (because true is converted to 1).
// true === 1 returns false (different types: boolean vs number).

// null == undefined returns true.
// null === undefined returns false.