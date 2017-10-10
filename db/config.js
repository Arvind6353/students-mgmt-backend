(function() {
        var mongoose = require('mongoose')
        mongoose.connect('mongodb://127.0.0.1:27017/sample')
    
        var db = mongoose.connection
    
        db.on('error', function(err) {
    
            console.log('error in connection',err)
        })
    
        db.once('open', function() {
            console.log('succesful');
    
        })


     
    
    })();