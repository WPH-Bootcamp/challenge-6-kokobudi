"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookManager_1 = require("./functions/bookManager");
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
// 1. Tambahkan beberapa data buku untuk testing
console.log("\n[TEST] Menambahkan Buku...");
(0, bookManager_1.addBook)({
    title: "Belajar TypeScript dari Nol",
    author: "Henry Rivardo",
    publicationYear: 2023
});
(0, bookManager_1.addBook)({
    title: "Membangun Web dengan React",
    author: "Budi Santoso",
    publicationYear: 2022
});
(0, bookManager_1.addBook)({
    title: "Panduan Karir Web Developer",
    author: "Jane Doe",
    publicationYear: 2024
});
// 2. Uji fungsi listBooks untuk melihat semua data
console.log("\n[TEST] Menampilkan Semua Buku...");
(0, bookManager_1.listBooks)();
// 3. Uji fungsi searchBook DENGAN parameter
console.log("\n[TEST] Mencari Buku (Parameter: 'React')...");
(0, bookManager_1.searchBook)("React");
// 4. Uji fungsi searchBook mencari buku yang tidak ada
console.log("\n[TEST] Mencari Buku (Parameter: 'Golang')...");
(0, bookManager_1.searchBook)("Golang");
// 5. Uji fungsi searchBook TANPA parameter (untuk ngetes optional parameter '?')
console.log("\n[TEST] Mencari Buku (Tanpa Parameter)...");
(0, bookManager_1.searchBook)();
console.log("\n=====================================");
console.log("Testing Selesai!");
