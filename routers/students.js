var express = require('express')

var studentRouter = express.Router()
var studentController = require('../controllers').studentContoller

studentRouter.route('/')
.all(function(req,res,next) {
    console.log(' inside student router call')
    next();
})
.get(studentController.getStudentsList)
.post(studentController.createStudent)
.delete(studentController.deleteAllStudents)

studentRouter.route('/:studentId')
.all(function(req,res,next) {
    console.log(' inside student router with student id param')
    next();
})
.get(studentController.getStudentById)
.delete(studentController.deleteStudentById)
.put(studentController.updateStudentById)


studentRouter.route('/:studentId/subjects')
.all(function(req,res,next) {
    console.log(' inside student-subjects router with student id param for handling subjects ')
    next();
})
.get(studentController.getAllSubjectsForStudent)
.post(studentController.createSubjectForStudent)
.delete(studentController.deletAllSubjectsForStudent)


studentRouter.route('/:studentId/subjects/:subjectId')
.all(function(req,res,next) {
    console.log(' inside student-subjects router with student id param and subject Id param for handling single subject ')
    next();
})
.get(studentController.getSubjectDetailsForStudent)
.put(studentController.updateSubjectDetailsForStudent)
.delete(studentController.deletSubjectFromSubjectsList)


module.exports = studentRouter;