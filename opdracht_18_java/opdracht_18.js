// Deel 1 checking if number is big

const controleNum = function (num) {

    if (num > 100) {
        return true;

    } else if (num < 100) {
        return false;
    }
};

console.log(controleNum(88));
console.log(controleNum(500));
console.log(controleNum(388));
console.log(controleNum(4));

//this function does something 


// Deel 2 Bouncer at a club

const aiBouncer = function (maxAmount, amount, age) {

    if (maxAmount == amount || maxAmount < amount) {
        return 'It is too busy now, come back later'

    } else if (amount < maxAmount && age >= 18) {
        return 'Come in'

    } else if (amount < maxAmount && age < 18) {
        return 'This is a club for adults'

    }
}
//this function does something

console.log(aiBouncer(500, 50, 16));
console.log(aiBouncer(500, 501, 18));
console.log(aiBouncer(500, 499, 20));
console.log(aiBouncer(500, 500, 18));
console.log(aiBouncer(500, 500, 35));
console.log(aiBouncer(501, 500, 35));
console.log(aiBouncer(550, 500, 17));




// Deel 3 Calculating the average

const average = function (nums) {
    const result = nums.reduce((total, any) => (total += any));
    return Math.round(result / nums.length)
}


console.log(average([44, 235, 104, 09, 567]));
console.log(average([243, 53467, 657, 5, 90]));

//this function produces something