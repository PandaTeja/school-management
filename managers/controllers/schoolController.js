const School = require('../models/school');

exports.createSchool = async (req, res, next) => {
  try {
    const school = new School(req.body);
    await school.save();
    res.status(201).json(school);
  } catch (error) {
    next(error);
  }
};

exports.getAllSchools = async (req, res, next) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    next(error);
  }
};

exports.getSchoolById = async (req, res, next) => {
  try {
    const school = await School.findById(req.params.schoolId);
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json(school);
  } catch (error) {
    next(error);
  }
};

exports.updateSchool = async (req, res, next) => {
  try {
    const school = await School.findByIdAndUpdate(req.params.schoolId, req.body, { new: true, runValidators: true });
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json(school);
  } catch (error) {
    next(error);
  }
};

exports.deleteSchool = async (req, res, next) => {
  try {
    const school = await School.findByIdAndDelete(req.params.schoolId);
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json({ message: 'School deleted successfully' });
  } catch (error) {
    next(error);
  }
};
