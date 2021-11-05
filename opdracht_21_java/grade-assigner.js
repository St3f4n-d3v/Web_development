function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else if (score > 60) {
        return "E";
    } else { (score < 59) }
    return "F";
}

for (let score = 1; score <= 100; score++) {

    let scoreGrade = assignGrade(score);
    console.log("For scoring " + `${score}` + " points, you get an " + scoreGrade);

};
