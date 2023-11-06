let input = "";
let panjang = prompt("Panjang");
let lebar = prompt("Lebar");
let jawaban;

do {
    input = prompt("Menghitung Luas Atau Keliling?")
} while (input.toLowerCase() !== "luas" && input.toLowerCase() !== "keliling");

if (input.toLowerCase() === "keliling") {
    jawaban = 2 * panjang + 2 * lebar;
    alert(`Keliling adalah: ${jawaban}`);
} else if (input.toLowerCase() === "luas") {
    jawaban = panjang * lebar;
    alert(`Luas adalah: ${jawaban}`);
}
