//all the crud operations will be available in this one..

var db = require('../core/db');

exports.getList = function(req,res){
    db.executeSql("select * from dbo.Interrogatories", function(data,err){
        if(err){
            res.writeHead(500, "Internal Error Occured",{"Content-Type":"text/html"});
        }else{
            res.writeHead(200, {"Content-Type": "application/json"});
            resp.write(JSON.stringify(data));
        }
        res.end();
    })
};

exports.get = function(req,res){

};

exports.add = function(req,res,reqBody){

};

exports.add = function(req,res,reqBody){

};

exports.delete = function(req,res,reqBody){

};