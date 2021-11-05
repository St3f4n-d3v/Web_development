const identAge = (age) => {
    return age >= 18
}


const identAdult = function (age) {
    const getidentAdult = identAge(age);
    if (getidentAdult) {
        return "Hello there";
    } else {
        return "Hey kiddo"
    }
}


console.log(identAdult(30));
console.log(identAdult(18));
console.log(identAdult(6));
console.log(identAdult(17));

