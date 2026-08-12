const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
    {
        packageId: {
            type: String,
            required: true,
            unique: true
        },

        fromName: {
            type: String,
            default: ""
        },

        toName: {
            type: String,
            default: ""
        },

        title: {
            type: String,
            default: ""
        },

        message: {
            type: String,
            default: ""
        },

        theme: {
            type: String,
            default: "garden"
        },

        contents: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Package",
    packageSchema
);