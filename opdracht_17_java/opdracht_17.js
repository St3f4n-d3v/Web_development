let paintWall = function (color) {
    console.log("The wall has been painted red");
    console.log("The wall has been painted " + color);
}

paintWall("Black");
paintWall("Purple");
paintWall();
//The wall has been painted undefined

let wallSide = function (side, color) {
    console.log("The " + side + " wall has been painted " + color);
};

wallSide("North", "orange");
wallSide("grey", "South-east");

wallSide();
paintWall();
// the order of the arguments matter. When the order is changed, the outcome will change: the wall is painted a direction on the colour. :P