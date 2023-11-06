let jam = parseInt(prompt("Jam Sekarang"));
console.log(jam);

if (jam % 24 >= 6 && jam % 24 <= 10) {
    alert("Selamat Pagi");
}
else if (jam % 24 >= 11 && jam % 24 <= 14) {
    alert("Selamat Siang");
}
else if (jam % 24 >= 15 && jam % 24 <= 17) {
    alert("Selamat Sore");
}
else if (jam % 24 >= 18 && jam % 24 <= 22) {
    alert("Selamat Malam");
}
else if (jam % 24 >= 23 || jam % 24 <= 5) {
    alert("Selamat Tidur");
}