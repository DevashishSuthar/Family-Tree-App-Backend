const express = require('express');
const router = express.Router();

const { BODY, PARAMS } = require('../../constants/request-properties.constant');
const {
    createFamily,
    deleteFamily,
    getMembersOfFamily,
    getFamily,
    getAllFamilies
} = require('../../controllers/family.controller');
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const { idParam } = require('../../validators/common.validator');
const { createFamilySchema } = require('../../validators/family.validator');

router.post('/', requestValidatorMiddleware([createFamilySchema], [BODY]), createFamily);

router.delete('/:id', requestValidatorMiddleware([idParam], [PARAMS]), deleteFamily);

router.get('/:id/members', requestValidatorMiddleware([idParam], [PARAMS]), getMembersOfFamily);

router.get('/:id', requestValidatorMiddleware([idParam], [PARAMS]), getFamily);

router.get('/', getAllFamilies);

module.exports = router;