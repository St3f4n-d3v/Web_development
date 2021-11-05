const payVat = percent => {
    return (percent / 100) + 1;
}

const getBasePrice = function (price, percent) {
    var vatAmount = payVat(percent);
    var basePrice = price / vatAmount;
    return basePrice.toFixed(2)
}

const vatPercentAmount = function (price, percent) {
    var priceWithoutVat = getBasePrice(price, percent);
    var getPercent = percent / 100;
    var result = priceWithoutVat * getPercent
    return result.toFixed(2);
}

const getPrice = function (price, percent) {
    var vat = payVat(percent);
    var basePrice = getBasePrice(price, percent);
    var vatAmount = vatPercentAmount(price, percent);
    var endResult = [];
    endResult.push(basePrice, vatAmount);
    return endResult
}


console.log(getPrice(1210, 21));
console.log(getPrice(2.18, 9));
console.log(getPrice(150, 10));
console.log(getPrice(2300, 21));