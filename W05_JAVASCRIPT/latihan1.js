let nilai = prompt("Nilai");
let grade;

if (nilai >= 85) {
    grade = "A";
}
else if (nilai >= 80) {
    grade = "A-";
}
else if (nilai >= 75) {
    grade = "B+";
}
else if (nilai >= 70) {
    grade = "B";
}
else if (nilai >= 65) {
    grade = "B-";
}
else if (nilai >= 60) {
    grade = "C+";
}
else if (nilai >= 55) {
    grade = "C";
}
else if (nilai >= 45) {
    grade = "D";
}
else {
    grade = "E";
}

alert(`grade ${grade}`);