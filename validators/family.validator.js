const Joi = require('joi');

const { GENDER_ARRAY } = require('../constants/gender.constant');

const createFamilySchema = Joi.object().keys({
    familyName: Joi.string().required(),
    familyHeadPersonName: Joi.string().required(),
    gender: Joi.string().valid(...GENDER_ARRAY).required()
});

module.exports = {
    createFamilySchema
};