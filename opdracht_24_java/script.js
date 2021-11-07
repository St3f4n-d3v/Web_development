
let button = document.querySelector("#mybutton");

button.addEventListener('click', function () {
    alert("button clicked");

});

let secondButton = document.querySelector("#secondButton");

/*
secondButton.addEventListener('click', function changeColor() {
     document.body.classList.add('red-background');
});
*/

secondButton.addEventListener('click', function toggleColor() {
    document.body.classList.toggle('red-background');

})