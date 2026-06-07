const express = require('express');
const router = express.Router();

const { BODY, PARAMS } = require('../../constants/request-properties');
const {
    createFamily,
    deleteFamily,
    getMembersOfFamily,
    getFamily,
    getAllFamilies
} = require('../../controllers/family');
const requestValidatorMiddleware = require('../../middlewares/request-validator');
const { idParam } = require('../../validators/common');
const { createFamilySchema } = require('../../validators/family');

router.post('/', requestValidatorMiddleware([createFamilySchema], [BODY]), createFamily);

router.delete('/:id', requestValidatorMiddleware([idParam], [PARAMS]), deleteFamily);

router.get('/:id/members', requestValidatorMiddleware([idParam], [PARAMS]), getMembersOfFamily);

router.get('/:id', requestValidatorMiddleware([idParam], [PARAMS]), getFamily);

router.get('/', getAllFamilies);

module.exports = router;