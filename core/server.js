var http = require('http');
var emp = require('../controller/employee');
var settings = require('../settings');


http.createServer(function (req,res){
    switch(req.method){
        case "GET":
        if(req.url==="/employees"){
            emp.getList(req,res);
        }
        break;
        case "POST":
        break;
        case "PUT":
        break;
        case "Delete":
        break;

        default:
        break;
     }



}).listen(settings.webPort,function(){
        console.log("listening at the port 9000");
    });