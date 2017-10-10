var mongoose = require('mongoose')

const subjectsSchema = mongoose.Schema({
    'name' : { type :'string' , required:true , unique: true},
    'description' : {type :'string'}
})


const studentSchema = mongoose.Schema({
    'name' : {type:'string' , required : true , unique :true},
    'age': {type:'number'},
    'address' : { type: 'string'},
    'hobbies' : {type : 'string'},
    'gender':{type:'string'},
    subjects:[subjectsSchema]
})

module.exports = mongoose.model('student',studentSchema,'students')