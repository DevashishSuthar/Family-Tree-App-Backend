const mongoose = require('mongoose');

const { Types, Schema } = mongoose;
const { ObjectId } = Types;

const { FAMILY, MEMBER } = require('../constants/models.constant');
const { GENDER_ARRAY } = require('../constants/gender.constant');

const memberSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            enum: GENDER_ARRAY
        },
        profilePhoto: {
            type: String
        },
        familyRef: {
            type: ObjectId,
            ref: FAMILY
        },
        parentMemberRef: {
            type: ObjectId,
            ref: MEMBER,
            default: null
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model(MEMBER, memberSchema);