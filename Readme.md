# Praktikum 5 — JavaScript Dasar dan Manipulasi HTML

## Identitas Mahasiswa

- **Nama:** Raisyal Fauzi Ghazali
- **NIM:** 312510279
- **Kelas:** I251C
- **Program Studi:** Teknik Informatika
- **Fakultas:** Teknik
- **Universitas:** Universitas Pelita Bangsa
- **Mata Kuliah:** Pemrograman Web
- **Dosen Pengampu:** Agung Nugroho, S.Kom., M.Kom.
- **Pertemuan:** 5

---

## Deskripsi Praktikum

Praktikum ini membahas dasar-dasar JavaScript dan cara menggunakannya untuk membuat halaman web menjadi lebih interaktif. Materi yang dipelajari meliputi output, variabel, operator, function, percabangan, perulangan, manipulasi DOM, form, dan validasi input.

## Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menghubungkannya dengan HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui Console, alert, prompt, dan elemen HTML.
4. Mengubah konten dan tampilan halaman menggunakan DOM.
5. Membuat form sederhana dan melakukan validasi input.
6. Mendokumentasikan hasil praktikum melalui screenshot.

## Perangkat yang Digunakan

- Laptop atau komputer.
- Visual Studio Code.
- Browser Google Chrome.
- HTML dan JavaScript.
- Ekstensi Live Server (opsional).

## Struktur Folder

```text
Lab5Web/
├── index.html
├── script.js
├── README.md
└── screenshots/
    ├── latihan-1.png
    ├── latihan-2.png
    ├── latihan-3.png
    ├── latihan-4.png
    ├── latihan-5.png
    ├── latihan-6.png
    ├── latihan-7.png
    ├── latihan-8.png
    └── mini-project.png
```

Folder `screenshots` digunakan untuk menyimpan dokumentasi hasil setiap latihan dan mini project.

---

## Langkah Kerja Praktikum

### 1. Latihan 1 — Menampilkan Output

**Tujuan:** Menampilkan teks pada halaman web dan Console.

**Langkah kerja:**

1. Membuka file `index.html`.
2. Menyiapkan elemen HTML dengan id `pesan`.
3. Menggunakan `textContent` untuk mengubah teks menjadi "Hello World".
4. Menggunakan `console.log()` untuk menampilkan pesan pada Console.
5. Menjalankan halaman melalui browser.

**Hasil:** Teks Hello World tampil pada halaman dan pesan dapat diperiksa melalui Console.

**Screenshot:**

![Hasil Latihan 1](screenshots/latihan-1.png)

### 2. Latihan 2 — Alert dan Prompt

**Tujuan:** Meminta nama pengguna dan menampilkan pesan.

**Langkah kerja:**

1. Menggunakan `prompt()` untuk meminta nama.
2. Memeriksa apakah nama sudah diisi.
3. Menampilkan sapaan menggunakan `alert()`.
4. Mengubah teks pada halaman menggunakan `textContent`.
5. Menguji input kosong dan tombol Cancel.

**Hasil:** Program menampilkan sapaan jika nama diisi dan pesan jika input kosong atau dibatalkan.

**Screenshot:**

![Hasil Latihan 2](screenshots/latihan-2.png)

### 3. Latihan 3 — Function dan Operasi Aritmetika

**Tujuan:** Menggunakan function untuk melakukan operasi matematika.

**Langkah kerja:**

1. Membuat function `operasiDasar(a, b)`.
2. Menghitung penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi.
3. Memanggil function dengan nilai 9 dan 4.
4. Memeriksa hasil melalui Console browser.

**Hasil pengujian:**

- Penjumlahan: 13
- Pengurangan: 5
- Perkalian: 36
- Pembagian: 2.25
- Sisa bagi: 1

**Screenshot:**

![Hasil Latihan 3](screenshots/latihan-3.png)

### 4. Latihan 4 — Seleksi Kondisi if–else

**Tujuan:** Menentukan status kelulusan berdasarkan nilai.

**Langkah kerja:**

1. Meminta input nilai menggunakan `prompt()`.
2. Mengubah input menjadi tipe number.
3. Memvalidasi nilai agar berada pada rentang 0–100.
4. Menggunakan `if–else` untuk menentukan status kelulusan.
5. Menampilkan hasil menggunakan `alert()`.

**Hasil:** Nilai minimal 60 dinyatakan lulus, sedangkan nilai di bawah 60 dinyatakan belum lulus. Input di luar rentang 0–100 perlu ditolak sebagai nilai tidak valid.

**Screenshot:**

![Hasil Latihan 4](screenshots/latihan-4.png)

### 5. Latihan 5 — Seleksi Kondisi switch

**Tujuan:** Menampilkan nama bilangan berdasarkan pilihan pengguna.

**Langkah kerja:**

1. Meminta input angka 1–5.
2. Menggunakan `switch` untuk memeriksa pilihan.
3. Menampilkan nama bilangan menggunakan `alert()`.
4. Menampilkan pesan jika pilihan tidak tersedia.

**Hasil:** Program menampilkan nama bilangan sesuai pilihan yang dimasukkan. Jika pilihan tidak sesuai, program menampilkan pesan bahwa pilihan tidak tersedia.

**Screenshot:**

![Hasil Latihan 5](screenshots/latihan-5.png)

### 6. Latihan 6 — Bilangan Genap atau Ganjil

**Tujuan:** Memeriksa apakah suatu bilangan termasuk genap atau ganjil.

**Langkah kerja:**

1. Membuat input bilangan pada HTML.
2. Membuat tombol Periksa.
3. Mengambil input menggunakan `document.getElementById()`.
4. Memvalidasi input menggunakan `Number.isInteger()`.
5. Menggunakan operator `%` untuk menentukan bilangan genap atau ganjil.
6. Menampilkan hasil pada halaman.

**Hasil:** Program menampilkan bilangan genap, bilangan ganjil, atau pesan input tidak valid.

Pengujian dilakukan menggunakan angka positif, angka negatif, nol, bilangan desimal, dan input kosong.

**Screenshot:**

![Hasil Latihan 6](screenshots/latihan-6.png)

### 7. Latihan 7 — Mengubah Warna Halaman

**Tujuan:** Mengubah warna latar halaman menggunakan satu function dengan parameter.

**Langkah kerja:**

1. Membuat function `ubahWarnaLatar(warna)`.
2. Menggunakan `document.body.style.backgroundColor`.
3. Membuat tiga tombol untuk warna hijau, putih, dan kuning.
4. Menguji setiap tombol melalui browser.

**Hasil:** Warna latar halaman berubah sesuai tombol yang dipilih pengguna.

**Screenshot:**

![Hasil Latihan 7](screenshots/latihan-7.png)

### 8. Latihan 8 — DOM dan Checkbox Menu Makanan

**Tujuan:** Menghitung total harga makanan secara otomatis.

**Langkah kerja:**

1. Membuat daftar menu menggunakan checkbox.
2. Memberikan nilai harga pada setiap menu.
3. Mengambil elemen checkbox menggunakan `querySelectorAll()`.
4. Menggunakan event listener `change`.
5. Menghitung harga menu yang dipilih.
6. Menampilkan total menggunakan `textContent`.

**Hasil:** Total harga berubah secara otomatis ketika menu dicentang atau dilepas.

**Screenshot:**

![Hasil Latihan 8](screenshots/latihan-8.png)

---

## Mini Project — Kalkulator Nilai Mahasiswa

**Tujuan:** Menghitung nilai akhir, menentukan predikat, dan menampilkan status kelulusan mahasiswa.

**Langkah kerja:**

1. Menentukan bobot tugas sebesar 30%, UTS 30%, dan UAS 40%.
2. Membuat function `hitungNilaiAkhir()`.
3. Membuat function `tentukanPredikat()`.
4. Menghitung nilai akhir berdasarkan bobot.
5. Menentukan predikat A, B, C, D, atau E.
6. Menentukan status lulus jika nilai akhir minimal 60.
7. Menampilkan hasil pada halaman HTML.
8. Menguji minimal tiga skenario nilai yang berbeda.

### Rumus Nilai Akhir

```text
Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)
```

### Kriteria Predikat

- **A:** Nilai akhir 85 atau lebih.
- **B:** Nilai akhir 75 sampai kurang dari 85.
- **C:** Nilai akhir 60 sampai kurang dari 75.
- **D:** Nilai akhir 50 sampai kurang dari 60.
- **E:** Nilai akhir di bawah 50.

Mahasiswa dinyatakan lulus apabila memperoleh nilai akhir minimal 60.

### Contoh Pengujian

- Nilai tugas: 85
- Nilai UTS: 78
- Nilai UAS: 88

Perhitungan:

```text
Nilai Akhir = (85 × 0.30) + (78 × 0.30) + (88 × 0.40)
Nilai Akhir = 25.50 + 23.40 + 35.20
Nilai Akhir = 84.10
```

**Hasil:**

- Nilai akhir: 84,10
- Predikat: B
- Status: Lulus

**Screenshot:**

![Hasil Mini Project](screenshots/mini-project.png)

---

## Cara Menjalankan Program

1. Buka folder `Lab5Web` menggunakan Visual Studio Code.
2. Pastikan file `index.html` dan `script.js` berada dalam folder yang sama.
3. Pastikan file HTML sudah terhubung dengan JavaScript melalui tag berikut:

   ```html
   <script src="script.js"></script>
   ```

4. Letakkan tag script sebelum penutup `</body>` agar elemen HTML tersedia ketika JavaScript dijalankan.
5. Buka file `index.html` menggunakan browser atau ekstensi Live Server.
6. Jalankan setiap latihan dan periksa hasilnya.
7. Gunakan Inspect → Console atau tekan `F12` untuk melihat output JavaScript.
8. Simpan screenshot hasil pengujian ke folder `screenshots` sesuai nama yang tercantum di atas.

## Kesimpulan

Melalui praktikum ini, saya mempelajari penggunaan JavaScript untuk mengatur perilaku halaman web. Saya juga mempraktikkan function, percabangan, operasi matematika, validasi input, dan manipulasi DOM. Dengan JavaScript, halaman web dapat memberikan respons terhadap tindakan pengguna dan menampilkan hasil secara dinamis.

## Referensi

1. Flanagan, D. (2020). _JavaScript: The Definitive Guide_ (7th ed.). O'Reilly Media.
2. MDN Web Docs. [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
3. MDN Web Docs. [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML).
4. Modul Praktikum Pemrograman Web, Praktikum 5: JavaScript Dasar dan Manipulasi HTML, Pertemuan 6.

---

**Catatan:** Gambar screenshot pada README akan tampil jika file gambar benar-benar tersedia di folder `screenshots` dengan nama yang sesuai. Sesuaikan isi laporan dengan hasil program yang benar-benar kamu kerjakan.
