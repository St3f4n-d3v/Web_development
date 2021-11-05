const payVat = procent => {
    return procent / 100
}

const priceInclusiveVat = function (price, procent) {
    const percentVat = payVat(procent);
    return (price * percentVat) + price
}


console.log(priceInclusiveVat(1000, 21));
console.log(payVat(21));
console.log(priceInclusiveVat(2.18, 10));
console.log(payVat(10));
