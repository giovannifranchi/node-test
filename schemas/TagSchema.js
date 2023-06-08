const mongoose = require('mongoose');

    const TagSchema = mongoose.Schema({
        createdAt: {
            type: Date,
            default: Date.now(),
            immutable: true,
        },
        UpdatedAt: {
            type: Date,
            default: ()=>  Date.now()
        }
    });

module.exports = TagSchema;
    