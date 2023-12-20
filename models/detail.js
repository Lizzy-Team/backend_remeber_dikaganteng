const db = require('../config/db');

// Model data
const Detail = {
  getAlldetailtim: (callback) => {
    const sql = 'SELECT * FROM detailtim';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  createDetail: (newDetail, callback) => {
    const { nama, iconcal, des, ttg, ketua, tim, progressbarmin } = newDetail;
    const sql = 'INSERT INTO detailtim (nama, iconcal, des, ttg, ketua, tim, progressbarmin) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nama, iconcal, des, ttg, ketua, tim, progressbarmin], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },

  getDetailById: (id, callback) => {
    const sql = 'SELECT * FROM detailtim WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  },

  updateDetail: (id, updatedDetail, callback) => {
    const { nama, iconcal, des, ttg, ketua, tim, progressbarmin } = updatedDetail;
    const sql = 'UPDATE detailtim SET nama = ?, iconcal = ?, des = ?, ttg = ?, ketua = ?, tim = ?, progressbarmin = ? WHERE id = ?';
    db.query(sql, [nama, iconcal, des, ttg, ketua, tim, progressbarmin, id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  },

  deleteDetail: (id, callback) => {
    const sql = 'DELETE FROM detailtim WHERE id = ?';
    db.query(sql, [id], (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  },
};

module.exports = Detail;
