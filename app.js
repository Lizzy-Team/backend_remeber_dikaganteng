const express = require('express');
const bodyParser = require('body-parser');
const Detail = require('./models/detail');

const app = express();
const PORT = process.env.PORT || 4500;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Selamat datang di Aplikasi CRUD'));

// Mendapatkan semua details
app.get('/details', (req, res) => {
  Detail.getAlldetailtim((err, details) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(details);
    }
  });
});

// Menambahkan detail baru
app.post('/details', (req, res) => {
  const newDetail = req.body;
  Detail.createDetail(newDetail, (err, insertId) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: insertId });
    }
  });
});

// Mendapatkan detail berdasarkan ID
app.get('/details/:id', (req, res) => {
  const { id } = req.params;
  Detail.getDetailById(id, (err, detail) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!detail) {
      res.status(404).json({ message: 'Detail tidak ditemukan' });
    } else {
      res.json(detail);
    }
  });
});

// Memperbarui detail berdasarkan ID
app.put('/details/:id', (req, res) => {
  const { id } = req.params;
  const updatedDetail = req.body;
  Detail.updateDetail(id, updatedDetail, (err) => {
    if (err) {
        res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Detail berhasil diperbarui' });
    }
  });
});

// Menghapus detail berdasarkan ID
app.delete('/details/:id', (req, res) => {
  const { id } = req.params;
  Detail.deleteDetail(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Detail berhasil dihapus' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
