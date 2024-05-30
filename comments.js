//Create web server
var http = require('http');
var fs = require('fs');

// Create a server
http.createServer(function (req, res) {
    // Read the file
    fs.readFile('comments.html', function(err, data) {
        // Write the file to the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// Display a message
console.log('Server is running at http://localhost:8080');
// Path: comments.html
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <form action="/submit" method="post">
        <textarea name="comment" placeholder="Leave your comment"></textarea>
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>