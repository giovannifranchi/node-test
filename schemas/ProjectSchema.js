const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        max: 200,
        required: [true, 'title is required'],
    },
    description: {
        type: String,
        max: 500,
    },
    image: {
        type: String,
        validate: {
          validator: function (value) {
            // Use a regular expression to check if the image ends with .jpg, .png, or .svg
            return /\.(jpg|png|svg)$/.test(value);
          },
          message: 'Image must be in JPG, PNG, or SVG format',
        },
    },
})

module.exports = ProjectSchema;