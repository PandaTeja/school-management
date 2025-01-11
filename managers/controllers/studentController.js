const Student = require('../models/student');

exports.enrollStudent = async (req, res, next) => {
  try {
    const student = new Student({ ...req.body, schoolId: req.params.schoolId });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find({ schoolId: req.params.schoolId });
    res.json(students);
  } catch (error) {
    next(error);
  }
};

exports.getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    next(error);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.studentId, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    next(error);
  }
};

exports.transferStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.studentId, { schoolId: req.body.newSchoolId }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    next(error);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    next(error);
  }
};
