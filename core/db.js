
//
var sqlDB = require('mssql');
var settings = require('../settings');

//to execute the sql
exports.executeSql = function (sql, callback) {
    var conn = new sqlDB.connection(settings.dbConfig);
    conn.connect().then(function () {
        var request = new sqlDB.Request(conn);
        request.query(sql).then(function (recordset) {
            callback(recordset);
        }).catch(function (err) {
            console.log(err);
        })
    }).catch(function (err) {
        console.log(err);
        callback(null, err);
    }
    );
};