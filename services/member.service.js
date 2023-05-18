const { MEMBER_MESSAGES } = require('../constants/messages.constant');

const Member = require('../models/member.model');

const createMember = async (body) => {
    try {
        const memberInstance = new Member(body);
        return await memberInstance.save();
    } catch (error) {
        throw Error(MEMBER_MESSAGES.CREATE_ERROR);
    }
};

const deleteMultipleMembers = async (query = {}) => {
    try {
        return await Member.deleteMany(query);
    } catch (error) {
        throw Error(MEMBER_MESSAGES.DELETE_MULTIPLE_ERROR);
    }
};

const getAllMembers = async (query = {}) => {
    try {
        return await Member.find(query).populate('parentMemberRef');
    } catch (error) {
        throw Error(MEMBER_MESSAGES.GET_ALL_ERROR);
    }
};

module.exports = {
    createMember,
    deleteMultipleMembers,
    getAllMembers
};