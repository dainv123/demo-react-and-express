var fs = require("fs"),
  tmpl = require("blueimp-tmpl"),
  express = require("express");
var app = express();

/**
 * Path buplic
 */
app.use("/dist", express.static("public/dist"));

/**
 * Api
 */
app.get("/api/products", (req, res) => {
  res.json({
    data: [{ id: 1, name: "Quan HT11" }, { id: 2, name: "Quan HT12" }]
  });
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/contact/:id/send/:content", function (req, res) {
  res.send("Result__ id:" + req.params.id + " __content:" + req.params.content);
});

app.get("/:content", function (req, res) {
  var data = {
    title: "JavaScript Templates",
    url: "https://github.com/",
    features: ["lightweight & fast", "powerful", "zero dependencies"]
  };

  tmpl.load = function (id) {
    var filename = './public/page/' + id + ".html";
    return fs.readFileSync(filename, "utf8");
  };

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(tmpl(req.params.content, data));
});

/**
 * Socket io
 */
var server = app.listen(process.env.PORT || 5000);
var io = require('socket.io').listen(server);
var listHV = [];

io.on('connection', function (socket) {
  console.log("Chao mung: " + socket.id);
  socket.emit('sendsv', { hello: 'server' });
  socket.on('disconnect', function () {
    console.log(socket.id + ' ________ is Leave, :((');
  });

  socket.on('Send data to server', function (data) {
    console.log('Mess from ' + socket.id + ': ' + data.sms);
    var post_mess = { "userid": socket.id, "sms": data.sms };
    // socket.emit('Send data to client', post_mess);
    // socket.broadcast.emit('Send data to client', post_mess);
    // io.to.emit(____socket.id____);
    io.sockets.emit('Send data to client', post_mess);
  });

  socket.on('Send background to server', function (data) {
    var post_mess = { "userid": socket.id, "background": data.sms };
    io.sockets.emit('Send background to client', post_mess);
  });


  socket.on('Client send info', function (data) {
    let hv = new Hocvien(data.hoten, data.email, data.phone);
    listHV.push(hv);
    io.sockets.emit('Server send info', listHV);
  })
});

/**
 * Models
 * @param {*} hoten 
 * @param {*} email 
 * @param {*} phone 
 */
function Hocvien(hoten, email, phone) {
  this.HoTen = hoten;
  this.Email = email;
  this.Phone = phone;
}
