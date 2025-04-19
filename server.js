const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static('public'));

// Endpoint untuk menyimpan gambar
app.post('/upload', (req, res) => {
    const imgData = req.body.image; // Ambil data gambar dari request
    const base64Data = imgData.replace(/^data:image\/png;base64,/, ""); // Hapus header base64
    const filePath = path.join(__dirname, 'uploads', `photo-${Date.now()}.png`);

    // Simpan gambar ke file
    fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
            return res.status(500).send('Error saving image');
        }
        res.send('Image saved successfully');
    });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});