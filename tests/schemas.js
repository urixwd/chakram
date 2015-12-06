var schemas = {
    generalSchema: {
        "type": "object",
        required: ["code", "data"],
        properties: {
            code: {
                type: "number"
            },
            data: {
                type: "object"
            }
        }
    }
};

module.exports = schemas;