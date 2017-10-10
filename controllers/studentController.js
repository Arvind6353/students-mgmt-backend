const Students = require('../models').Student 

exports.getStudentsList = function(req,res,next) {
    Students.find({}).exec()
    .then( data => { res.json(data)} )
    .catch(err => next(err));
}

exports.createStudent = function(req, res,next) {
    Students.create(req.body)
    .then( data => {res.json(data) })
    .catch(err => next(err));
}

exports.deleteAllStudents = function(req,res,next) {
    Students.remove({}).exec()
    .then( data => {res.send(`deleted all students succesfully`) })
    .catch(err => next(err));
}


exports.getStudentById = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( data => { res.json(data) })
    .catch(err => next(err));
}

exports.updateStudentById = function(req,res,next) {
    Students.findByIdAndUpdate(req.params.studentId,{$set :req.body}, {new :true})
    .then( data => {res.send(`updated succesfully ${req.body.name}`) })
    .catch(err => next(err));
}

exports.deleteStudentById = function(req,res,next) {
    Students.findByIdAndRemove(req.params.studentId).exec()
    .then( data => { res.send(`deleted succesfully`) })
    .catch(err => next(err));  
}

exports.getAllSubjectsForStudent = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( data => { res.json(data.subjects) })
    .catch(err => next(err));
}

exports.createSubjectForStudent = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( data => { 
        console.log('subjects', data.subjects)
        data.subjects.push(req.body)
        data.save(function(err, doc){
            if(err) next(err);
            res.send(`subject created succesfully ${req.body.name}`) 
        })
     } )
    .catch(err => next(err));
}

exports.deletAllSubjectsForStudent = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( student => { 
        var data = student || []
        for(var i = data.subjects.length-1; i >= 0; i--) {
            data.subjects.id(data.subjects[i]._id).remove()
        }
        data.save(function (err, docs){
            if(err) next(err);
            res.send('deleted all subjects for the student');
        })
     })
    .catch(err => next(err));
}

exports.getSubjectDetailsForStudent = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( data => { res.json(data.subjects.id(req.params.subjectId)) })
    .catch(err => next(err));
}

exports.updateSubjectDetailsForStudent = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( data => { 
        data.subjects.id(req.params.subjectId).remove()
        data.subjects.push(req.body)
        data.save(function(err,docs){
            if(err) next(err)
            res.end(`updated succesfully ${req.body.name}`)
        })
    })
    .catch(err => next(err));
}

exports.deletSubjectFromSubjectsList = function(req,res,next) {
    Students.findById(req.params.studentId).exec()
    .then( data => { 
        data.subjects.id(req.params.subjectId).remove()
        data.save(function(err,docs){
            if(err) next(err)
            res.send(`deleted subject details `)
        }) 
    })
    .catch(err => next(err));
}
