const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
