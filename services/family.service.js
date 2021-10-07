const { FAMILY_MESSAGES } = require('../constants/messages.constant');

const Family = require('../models/family.model');

const createFamily = async (body) => {
    try {
        const familyInstance = new Family(body);
        return await familyInstance.save();
    } catch (error) {
        throw Error(FAMILY_MESSAGES.CREATE_ERROR);
    }
};

const getFamily = async (query) => {
    try {
        return await Family.findOne(query);
    } catch (error) {
        throw Error(FAMILY_MESSAGES.GET_ERROR);
    }
};

const getAllFamilies = async (query = {}) => {
    try {
        return await Family.find(query);
    } catch (error) {
        throw Error(FAMILY_MESSAGES.GET_ALL_ERROR);
    }
};

const aggregate = async (query = []) => {
    try {
        return await Family.aggregate(query);
    } catch (error) {
        throw Error(FAMILY_MESSAGES.GET_ALL_ERROR);
    }
};

const deleteFamily = async (query = {}) => {
    try {
        return await Family.findOneAndDelete(query);
    } catch (error) {
        throw Error(FAMILY_MESSAGES.DELETE_ERROR);
    }
};

module.exports = {
    createFamily,
    deleteFamily,
    getFamily,
    getAllFamilies,
    aggregate
};
