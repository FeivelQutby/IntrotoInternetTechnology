const hari = {
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat"
}

let hariMahasiswa = [];
let jumlahKehadiran = (counter) => {
    let result = "";
    for (let i = 0; i < counter; i++) {
        result += "X";
    }
    document.write("<br>");
    return result;
}

document.write("Grafik Jumlah Kehadiran Mahasiswa");
for (let i = 1; i <= 5; i++) {
    hariMahasiswa.push(parseInt(prompt(`Masukan Mahasiswa yang masuk hari ${hari[i]}`)));
    document.write(`${hari[i]}: ${jumlahKehadiran(hariMahasiswa[i - 1])}`);
}