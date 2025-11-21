function kategoriHujan(mm) {
    if (mm == 0) return "Tidak Hujan";
    if (mm <= 20) return "Hujan Ringan";
    if (mm <= 50) return "Hujan Sedang";
    return "Hujan Lebat";
}

document.getElementById("rainForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let tanggal = document.getElementById("tanggal").value;
    let mulai = document.getElementById("mulai").value;
    let selesai = document.getElementById("selesai").value;
    let mm = parseInt(document.getElementById("mm").value);

    let kategori = kategoriHujan(mm);

    let table = document.getElementById("rainTable");
    let row = table.insertRow();

    row.insertCell(0).textContent = tanggal;
    row.insertCell(1).textContent = mulai;
    row.insertCell(2).textContent = selesai;
    row.insertCell(3).textContent = mm;
    row.insertCell(4).textContent = kategori;

    document.getElementById("rainForm").reset();
});

// ====================
// DOWNLOAD CSV FEATURE
// ====================
document.getElementById("downloadBtn").addEventListener("click", function () {
    let table = document.getElementById("rainTable");
    let rows = table.rows;

    if (rows.length === 0) {
        alert("Belum ada data untuk di-download!");
        return;
    }

    let csv = "Tanggal,Mulai,Selesai,Curah Hujan (mm),Kategori\n";

    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].cells;
        csv += `${cols[0].textContent},${cols[1].textContent},${cols[2].textContent},${cols[3].textContent},${cols[4].textContent}\n`;
    }

    let blob = new Blob([csv], { type: "text/csv" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "data_curah_hujan.csv";
    a.click();

    URL.revokeObjectURL(url);
});