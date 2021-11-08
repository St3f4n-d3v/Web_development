function toggleNav() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (getSidebarUl.style.visibility === "visible") {
        getSidebarUl.style.visibility = "hidden";
    } else {
        getSidebarUl.style.visibility = "visible";
    }
}



document.querySelector("#li-home").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f1f1f1";
    toggleNav();

});

document.querySelector("#li-red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    toggleNav();

});

document.querySelector("#li-magenta").addEventListener("click", function () {
    document.body.style.backgroundColor = "magenta";
    toggleNav();

});

document.querySelector("#li-purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();

});

document.querySelector("#li-blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    toggleNav();

});




document.querySelector("#li-home").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "#f1f1f1";
});

document.querySelector("#li-red").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "red";
});

document.querySelector("#li-magenta").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "magenta";
});

document.querySelector("#li-purple").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "purple";
});

document.querySelector("#li-blue").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "blue";
});



document.querySelector("#ra-home").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f1f1f1";

});

document.querySelector("#ra-red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";

});

document.querySelector("#ra-magenta").addEventListener("click", function () {
    document.body.style.backgroundColor = "magenta";

});

document.querySelector("#ra-purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";

});

document.querySelector("#ra-blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";

});