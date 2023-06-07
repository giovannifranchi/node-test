const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'lastname is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email has to be unique'],
        match: /^\S+@\S+\.\S+$/,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'guest'],
        required: [true, 'role must be provided']
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
    UpdatedAt: {
        type: Date,
        default: ()=>  Date.now()
    }
})


module.exports = UserSchema;