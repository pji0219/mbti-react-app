const connnection = require('../dbConnect');

const db = {
  getCounts: (cb) => {
    connnection.query('SELECT counts FROM mydb.visitor', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  incCounts: (cb) => {
    connnection.query(
      'UPDATE mydb.visitor SET counts = counts + 1 WHERE id = 1;',
      (err) => {
        if (err) throw err;
        cb(JSON.stringify('업데이트 성공'));
      }
    );
  },
};

module.exports = db;
