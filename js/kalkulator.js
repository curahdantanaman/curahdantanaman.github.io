function hitungPupuk() {
    let luas = document.getElementById("luas").value;
    let dosis = document.getElementById("dosis").value;

    if (luas === "" || dosis === "") {
        document.getElementById("hasil").innerText = "Isi semua data!";
        return;
    }

    let total = luas * dosis;
    document.getElementById("hasil").innerText =
        "Total pupuk yang dibutuhkan: " + total + " kg";
}