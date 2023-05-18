const { BAD_REQUEST } = require('../constants/http-status-code.constant');
const { MEMBER_MESSAGES, COMMON_MESSAGES } = require('../constants/messages.constant');
const apiHelper = require('../helpers/api.helper');
const memberService = require('../services/member.service');

const createMember = async (req, res) => {
    try {
        const { body, fileValidationError, file } = req;
        if (fileValidationError) {
            return apiHelper.failure(res, COMMON_MESSAGES.FILE_FORMAT_REQUIRED, [], BAD_REQUEST);
        }
        const parseBody = JSON.parse(JSON.stringify(body));
        if (file) {
            const { destination, filename } = file;
            const index = destination.indexOf('/');
            const destinationPath = destination.substring(index + 1);
            const filePath = `${destinationPath}/${filename}`;
            parseBody['profilePhoto'] = filePath;
        }
        const member = await memberService.createMember(parseBody);
        if (member && Object.keys(member).length) {
            return apiHelper.success(res, MEMBER_MESSAGES.CREATE, { member });
        }
        return apiHelper.failure(res, MEMBER_MESSAGES.CREATE_ERROR, [], BAD_REQUEST);
    } catch (error) {
        return apiHelper.failure(res, error.message);
    }
};

module.exports = {
    createMember,
};
