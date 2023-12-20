const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan nama pengguna MySQL Anda
  password: '', // Ganti dengan kata sandi MySQL Anda
  database: 'remember', // Ganti dengan nama database yang Anda inginkan
});

connection.connect((err) => {
  if (err) {
    console.error('Koneksi MySQL gagal: ', err);
  } else {
    console.log('Terhubung ke MySQL');
  }
});

module.exports = connection;
