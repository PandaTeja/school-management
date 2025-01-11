const express = require('express');
const router = express.Router({ mergeParams: true });
const classroomController = require('../managers/controllers/classroomController');
const authMiddleware = require('../mws/authMiddleware');
const rbacMiddleware = require('../mws/rbacMiddleware');

router.post('/', authMiddleware, rbacMiddleware('admin'), classroomController.createClassroom);
router.get('/', authMiddleware, rbacMiddleware('admin'), classroomController.getAllClassrooms);
router.get('/:classroomId', authMiddleware, rbacMiddleware('admin'), classroomController.getClassroomById);
router.put('/:classroomId', authMiddleware, rbacMiddleware('admin'), classroomController.updateClassroom);
router.delete('/:classroomId', authMiddleware, rbacMiddleware('admin'), classroomController.deleteClassroom);

module.exports = router;
