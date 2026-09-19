# BinusStudyCase — GitReady 2.0

Project kolaborasi Git & GitHub untuk mensimulasikan workflow tim developer menggunakan branch, commit, pull request, code review, dan merge.

## Visualisasi
Project ini berupa halaman **Profile Card** yang menampilkan profil anggota tim.

> Tambahkan screenshot hasil akhir website di bagian ini setelah semua branch selesai di-merge.

## Tech Stack
- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Fitur Utama
- Navigasi profil untuk berpindah antara Anggota 1, Anggota 2, dan Anggota 3.
- Dark Mode / Light Mode.
- Like Counter pada profile card.
- Informasi nama, role, deskripsi, dan skill setiap anggota.
- Responsive styling untuk tampilan yang rapi pada berbagai ukuran layar.

## Contribution

### Project Initiator
- Membuat repository project.
- Menyiapkan struktur awal `index.html`.
- Mengatur akses collaborator.
- Mengelola integrasi branch ke `main`.

### Styling Engineer
- Membuat branch `styling`.
- Membuat `style.css`.
- Menghubungkan `style.css` ke `index.html`.
- Mengatur layout, typography, button, navigation, profile card, dan responsive design.

### Script Engineer
- Membuat branch `scripting`.
- Membuat `script.js`.
- Menghubungkan `script.js` ke `index.html`.
- Membuat fitur pergantian data profil antar anggota.
- Membuat Dark Mode / Light Mode.
- Membuat Like Counter.
- Mengelola state tombol navigasi anggota.

## What I Learned
Melalui project ini, kami mempelajari bagaimana bekerja secara kolaboratif menggunakan Git dan GitHub, termasuk:
- Membuat dan menggunakan branch untuk pekerjaan terpisah.
- Melakukan commit dengan perubahan yang terstruktur.
- Melakukan push dan pull dari remote repository.
- Menggunakan Pull Request untuk menggabungkan perubahan.
- Melakukan code review sebelum merge.
- Menangani kemungkinan merge conflict ketika beberapa anggota mengubah file yang sama.
- Membagi tanggung jawab project berdasarkan role masing-masing anggota.

## Feature Improvement
Beberapa pengembangan yang dapat ditambahkan ke project ini:
- Menyimpan jumlah like menggunakan `localStorage`.
- Menyimpan pilihan dark mode agar tetap aktif setelah halaman direfresh.
- Menambahkan animasi saat berganti profil.
- Menambahkan link GitHub / LinkedIn setiap anggota.
- Mengganti data profil statis menjadi data dari file JSON atau API.
- Menambahkan validasi dan aksesibilitas yang lebih lengkap.

## Project Structure

```text
BinusStudyCase/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Git Workflow

```text
main
├── styling
└── scripting
```

Setiap fitur dikembangkan pada branch terpisah, kemudian digabungkan ke `main` melalui Pull Request dan code review.

---

GitReady 2.0 Study Case
