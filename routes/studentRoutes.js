const express = require('express');
const router = express.Router({ mergeParams: true });
const studentController = require('../managers/controllers/studentController');
const authMiddleware = require('../mws/authMiddleware');
const rbacMiddleware = require('../mws/rbacMiddleware');

router.post('/', authMiddleware, rbacMiddleware('admin'), studentController.enrollStudent);
router.get('/', authMiddleware, rbacMiddleware('admin'), studentController.getAllStudents);
router.get('/:studentId', authMiddleware, rbacMiddleware('admin'), studentController.getStudentById);
router.put('/:studentId', authMiddleware, rbacMiddleware('admin'), studentController.updateStudent);
router.patch('/:studentId/transfer', authMiddleware, rbacMiddleware('admin'), studentController.transferStudent);
router.delete('/:studentId', authMiddleware, rbacMiddleware('admin'), studentController.deleteStudent);

module.exports = router;
