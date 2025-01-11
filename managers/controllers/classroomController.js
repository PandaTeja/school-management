const Classroom = require('../models/classroom');

exports.createClassroom = async (req, res, next) => {
  try {
    const classroom = new Classroom({ ...req.body, schoolId: req.params.schoolId });
    await classroom.save();
    res.status(201).json(classroom);
  } catch (error) {
    next(error);
  }
};

exports.getAllClassrooms = async (req, res, next) => {
  try {
    const classrooms = await Classroom.find({ schoolId: req.params.schoolId });
    res.json(classrooms);
  } catch (error) {
    next(error);
  }
};

exports.getClassroomById = async (req, res, next) => {
  try {
    const classroom = await Classroom.findById(req.params.classroomId);
    if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
    res.json(classroom);
  } catch (error) {
    next(error);
  }
};

exports.updateClassroom = async (req, res, next) => {
  try {
    const classroom = await Classroom.findByIdAndUpdate(req.params.classroomId, req.body, { new: true, runValidators: true });
    if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
    res.json(classroom);
  } catch (error) {
    next(error);
  }
};

exports.deleteClassroom = async (req, res, next) => {
  try {
    const classroom = await Classroom.findByIdAndDelete(req.params.classroomId);
    if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
    res.json({ message: 'Classroom deleted successfully' });
  } catch (error) {
    next(error);
  }
};
