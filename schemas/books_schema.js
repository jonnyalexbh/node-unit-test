var BookSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            required: true
        },
        author: {
            type: 'string',
            required: true
        },        
        year: {
            type: 'string',
            required: true
        },
        edition: {
            type: 'string',
            required: true
        } 		
    }
};

module.exports = BookSchema