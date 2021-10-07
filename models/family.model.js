const mongoose = require('mongoose');

const { Schema } = mongoose;

const { FAMILY } = require('../constants/models.constant');
const { GENDER_ARRAY } = require('../constants/gender.constant');

const familySchema = new Schema(
    {
        familyName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        familyHeadPersonName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        gender: {
            type: String,
            enum: GENDER_ARRAY
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model(FAMILY, familySchema);
