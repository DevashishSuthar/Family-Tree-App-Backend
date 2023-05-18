const express = require('express');
const router = express.Router();

const { BODY } = require('../../constants/request-properties.constant');
const { createMember } = require('../../controllers/member.controller');
const { imageUploadMiddleware } = require('../../middlewares/file-upload.middleware');
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const { createMemberSchema } = require('../../validators/member.validator');

router.post('/', imageUploadMiddleware, requestValidatorMiddleware([createMemberSchema], [BODY]), createMember);

module.exports = router;