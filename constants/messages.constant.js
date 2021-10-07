const FAMILY_MESSAGES = {
    CREATE: 'Family created successfully!',
    CREATE_ERROR: 'Unable to create family!',
    GET: 'Family fetched successfully!',
    GET_ERROR: 'Unable to fetch requested family!',
    GET_ALL: 'All families fetched successfully!',
    GET_ALL_ERROR: 'Unable to fetch all families!',
    DELETE: 'Family deleted successfully!',
    DELETE_ERROR: 'Unable to delete family!',
};

const MEMBER_MESSAGES = {
    CREATE: 'Member created successfully!',
    CREATE_ERROR: 'Unable to create member!',
    GET_ALL: 'All members fetched successfully!',
    GET_ALL_ERROR: 'Unable to fetch all members!',
    DELETE_MULTIPLE: 'Members deleted successfully!',
    DELETE_MULTIPLE_ERROR: 'Unable to delete multiple members!',
};

const COMMON_MESSAGES = {
    ROUTE_NOT_EXISTS: 'Requested route does not exists!',
    VALIDATION_ERROR: 'Data validation failed!',
    FILE_FORMAT_REQUIRED: 'Only .jpg, .jpeg & .png format allowed!',
    FILE_REQUIRED: 'File required!',
    UNKNOWN_ERROR: 'Something went wrong, please try again later!',
    NO_DATA_FOUND: 'No data found!',
};

module.exports = {
    FAMILY_MESSAGES,
    MEMBER_MESSAGES,
    COMMON_MESSAGES,
};
