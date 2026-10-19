document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 4);
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}

function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function (item) {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;

  daftarMenu.forEach(function (item) {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function hitungNilai() {
  const tugas = 85;
  const uts = 78;
  const uas = 88;

  const akhir = hitungNilaiAkhir(tugas, uts, uas);

  document.getElementById("nilaiAkhir").textContent =
    "Nilai akhir: " + akhir.toFixed(2);

  document.getElementById("predikat").textContent =
    "Predikat: " + tentukanPredikat(akhir);

  document.getElementById("status").textContent =
    "Status: " + (akhir >= 60 ? "Lulus" : "Belum lulus");
}

function eksperimenOperasiPrompt() {
  const inputA = prompt("Masukkan angka pertama:");
  const inputB = prompt("Masukkan angka kedua:");

  if (
    inputA === null ||
    inputA.trim() === "" ||
    inputB === null ||
    inputB.trim() === ""
  ) {
    alert("Kedua angka wajib diisi.");
    return;
  }

  const a = Number(inputA);
  const b = Number(inputB);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    alert("Masukkan angka yang valid.");
    return;
  }

  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak bisa dibagi nol");
  console.log("Sisa bagi:", b !== 0 ? a % b : "Tidak bisa dibagi nol");
}

function tampilkanPerkalianTujuh() {
  for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
  }
}

function cekGenap(angka) {
  return Number.isInteger(angka) && angka % 2 === 0;
}

function ujiCekGenap() {
  const angka = 8;

  console.log("Angka:", angka);
  console.log("Apakah genap?", cekGenap(angka));
}

function validasiFormEksperimen() {
  const nama = document.getElementById("namaEksperimen").value.trim();
  const nilaiInput = document.getElementById("nilaiEksperimen").value;
  const hasil = document.getElementById("hasilValidasi");

  if (nama === "" || nilaiInput.trim() === "") {
    hasil.textContent = "Nama dan nilai wajib diisi.";
    return false;
  }

  const nilai = Number(nilaiInput);

  if (!Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai harus berada di antara 0 sampai 100.";
    return false;
  }

  hasil.textContent = "Form berhasil divalidasi.";
  return false;
}

function ubahVisibilitas() {
  const teks = document.getElementById("teksEksperimen");

  if (teks.style.display === "none") {
    teks.style.display = "block";
  } else {
    teks.style.display = "none";
  }
}
