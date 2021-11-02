
const age = 35;

if (age < 18) {

    console.log("Helaas, u bent te jong...");

} else if (age === 17) {

    console.log("Op dit moment bent u te jong, tot volgend jaar!");


} else if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!");


};







const firstName = 'Sara';


if (firstName == 'Sarah' || firstName == 'Abraham' || firstName == 'Bram' || firstName == 'Sara') {

    console.log('Van harte gefeliciteerd! Een gratis biertje!');

} else {
    console.log('Welkom!');
};



const totalAmount = 120;

if (totalAmount >= 25 && totalAmount < 50) {

    console.log('Voor een bestelling van 25 euro aan drankjes. Krijgt u gratis vegabiterballen!');

} else if (totalAmount >= 50 && totalAmount < 100) {

    console.log('50 jaar is voor 50 euro voor drankjes een gratis bakje nachos!!!');

} else if (totalAmount >= 100) {

    console.log('100 jaar duurt nog een tijdje maar voor 100 euro of meer voor drankjes krijgt u gratis fles champagne!');
};