const express = require('express');
const router = express.Router();

const { BODY } = require('../../constants/request-properties');
const { createMember } = require('../../controllers/member');
const { imageUploadMiddleware } = require('../../middlewares/file-upload');
const requestValidatorMiddleware = require('../../middlewares/request-validator');
const { createMemberSchema } = require('../../validators/member');

router.post('/', imageUploadMiddleware, requestValidatorMiddleware([createMemberSchema], [BODY]), createMember);

module.exports = router;