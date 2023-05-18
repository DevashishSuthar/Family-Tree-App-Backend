const Joi = require('joi');

const { GENDER_ARRAY } = require('../constants/gender.constant');

const createMemberSchema = Joi.object().keys({
    name: Joi.string().required(),
    gender: Joi.string().valid(...GENDER_ARRAY).required(),
    familyRef: Joi.string().length(24).required(),
    parentMemberRef: Joi.string().length(24).required()
});

module.exports = {
    createMemberSchema
};