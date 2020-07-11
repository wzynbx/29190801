const http = require('http');//内置模块
const server = http.createServer(function (req, res) {
    res.write('hello world7\n');
    res.write(req.url);
    res.write(JSON.stringify(req.headers,null,2));
    res.end();
});
server.listen(3000)
