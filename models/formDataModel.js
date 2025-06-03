const mongoose = require('mongoose');

const formItemsSchems = mongoose.Schema({

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
    },
    mail: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
    },
    discription: {
        type: String,
        require: true
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("formDataModel", formItemsSchems);