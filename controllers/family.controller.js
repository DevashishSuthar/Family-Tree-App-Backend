const { BAD_REQUEST } = require('../constants/http-status-code.constant');
const { FAMILY_MESSAGES, MEMBER_MESSAGES, COMMON_MESSAGES } = require('../constants/messages.constant');
const apiHelper = require('../helpers/api.helper');
const familyService = require('../services/family.service');
const memberService = require('../services/member.service');

const createFamily = async (req, res) => {
    try {
        const { body } = req;
        const family = await familyService.createFamily(body);
        if (family && Object.keys(family).length) {
            const { _id: familyRef, familyHeadPersonName: name, gender } = family;
            const memberDetailObj = {
                name,
                gender,
                familyRef,
            };
            await memberService.createMember(memberDetailObj);
            return apiHelper.success(res, FAMILY_MESSAGES.CREATE, { family });
        }
        return apiHelper.failure(res, FAMILY_MESSAGES.CREATE_ERROR, [], BAD_REQUEST);
    } catch (error) {
        return apiHelper.failure(res, error.message);
    }
};

const deleteFamily = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const family = await familyService.deleteFamily({ _id },);
        if (family && Object.keys(family).length) {
            await memberService.deleteMultipleMembers({ familyRef: _id });
            return apiHelper.success(res, FAMILY_MESSAGES.DELETE, { family });
        }
        return apiHelper.failure(res, FAMILY_MESSAGES.DELETE_ERROR, [], BAD_REQUEST);
    } catch (error) {
        return apiHelper.failure(res, error.message);
    }
};

const getFamily = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const family = await familyService.getFamily({ _id });
        if (family && Object.keys(family).length) {
            return apiHelper.success(res, FAMILY_MESSAGES.GET, { family });
        }
        return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, { family: {}, });
    } catch (error) {
        return apiHelper.failure(res, error.message);
    }
};

const getMembersOfFamily = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const members = await memberService.getAllMembers({ familyRef: _id });
        if (members && members.length) {
            return apiHelper.success(res, MEMBER_MESSAGES.GET_ALL, { members });
        }
        return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, { members: [], });
    } catch (error) {
        return apiHelper.failure(res, error.message);
    }
};

const getAllFamilies = async (req, res) => {
    try {
        const queryArr = [
            {
                $lookup: {
                    from: 'members',
                    localField: '_id',
                    foreignField: 'familyRef',
                    as: 'membersArr'
                }
            },
            { $addFields: { totalMembers: { $size: '$membersArr' } } },
            { $project: { membersArr: 0 } }
        ];
        const families = await familyService.aggregate(queryArr);
        if (families && families.length) {
            return apiHelper.success(res, FAMILY_MESSAGES.GET_ALL, { families });
        }
        return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, { families: [], });
    } catch (error) {
        return apiHelper.failure(res, error.message);
    }
};

module.exports = {
    createFamily,
    deleteFamily,
    getFamily,
    getMembersOfFamily,
    getAllFamilies,
};
