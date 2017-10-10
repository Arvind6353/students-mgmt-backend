module.exports = function(req, res, next) {
    
        var authheader = req.headers.authorization;
        console.log(authheader)
        if (!authheader) {
            res.writeHead(401, {
                'Content-Type': 'text/html',
                'WWW-Authenticate': 'Basic'
            })
    
            res.end('<h1> not authenticated </h1>')
            return;
    
        }
        var cred = new Buffer(authheader.split(' ')[1], 'base64').toString().split(':')
        var uname = cred[0]
        var pwd = cred[1]
        if (uname === 'admin' && pwd === 'admin') {
            next();
        } else {
            res.writeHead(401, {
                'Content-Type': 'text/html',
                'WWW-Authenticate': 'Basic'
            })
            res.end('<h1> not authenticated </h1>')
            return;
        }
    }