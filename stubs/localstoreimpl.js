var getPayload = require('../stubs/Student')
var store = require('store')

exports.getStudentsList = function() {
   if(!store.get('studentsList') ) {
       store.set('studentsList', [])
   }
    new Promise( (resolve , reject) =>  {     
        setTimeout( () =>resolve(store.get('studentsList'), 2000))
       }
    )
}

exports.createStudent = function(student) {
    var student = getPayload(student.name, student.age, student.address, student.hobbies);
    console.log('student', student)
    var studentList = store.get('studentsList') || [];
    console.log(studentList)
     store.set('studentsList', studentList.push(student));
     console.log('after',store.get('studentsList'))
     new Promise( (resolve , reject) =>  {     
        setTimeout( () =>resolve('success', 2000))
       }
    )
}

