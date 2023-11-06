let banyakMahasiswa = prompt("Banyak Mahasiswa");


function kalkulasi(i) {
    let nama = prompt("Nama Mahasiswa");

    let tugas = prompt("Nilai Tugas");
    let uts = prompt("Nilai UTS");
    let uas = prompt("Nilai UAS");
    let result = tugas * 0.3 + uts * 0.3 + uas * 0.4;

    let grade;
    if (result >= 85) {
        grade = "A";
    }
    else if (result >= 80) {
        grade = "A-";
    }
    else if (result >= 75) {
        grade = "B+";
    }
    else if (result >= 70) {
        grade = "B";
    }
    else if (result >= 65) {
        grade = "B-";
    }
    else if (result >= 60) {
        grade = "C+";
    }
    else if (result >= 55) {
        grade = "C";
    }
    else if (result >= 45) {
        grade = "D";
    }
    else {
        grade = "E";
    }

    document.write(`${i + 1}. ${nama} <br>`);
    document.write(`Tugas: ${tugas} <br>`);
    document.write(`UTS: ${uts} <br>`);
    document.write(`UAS: ${uas} <br>`);
    document.write(`Nilai Akhir: ${result} <br>`);
    document.write(`Grade: ${grade} <br>`);
    document.write(`<br>`);

}


for (let i = 0; i < banyakMahasiswa; i++) {
    kalkulasi(i);
}

