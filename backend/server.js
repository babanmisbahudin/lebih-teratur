// 1. Impor library express yang sudah kita instal
const express = require('express');

// 2. Buat instance dari aplikasi express
const app = express();

// 3. Tentukan port di mana server akan berjalan
//    Kita gunakan port 3000 untuk backend
const PORT = 3000;

// 4. Buat sebuah API endpoint sederhana untuk testing
//    Ini akan merespon jika ada yang mengakses http://.../api/test
app.get('/api/test', (req, res) => {
  // Mengirim kembali data dalam format JSON
  res.json({ message: "Halo dari Backend! Data berhasil diambil." });
});

// 5. Jalankan server dan biarkan ia "mendengarkan" permintaan yang masuk
app.listen(PORT, () => {
  console.log(`Server backend berjalan di port ${PORT}`);
});