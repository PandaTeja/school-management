const express = require('express');
const router = express.Router();
const schoolController = require('../managers/controllers/schoolController');
const authMiddleware = require('../mws/authMiddleware');
const rbacMiddleware = require('../mws/rbacMiddleware');

router.post('/', authMiddleware, rbacMiddleware('superadmin'), schoolController.createSchool);
router.get('/', authMiddleware, rbacMiddleware('superadmin'), schoolController.getAllSchools);
router.get('/:schoolId', authMiddleware, schoolController.getSchoolById);
router.put('/:schoolId', authMiddleware, rbacMiddleware('superadmin'), schoolController.updateSchool);
router.delete('/:schoolId', authMiddleware, rbacMiddleware('superadmin'), schoolController.deleteSchool);

module.exports = router;
