const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UrlSchema = new Schema({
    url:{
        type:"String",
        required: true
    },
    shortUrl:{
        type:"String",
    },
    friendlyUrl:{
        type:"String",
    }
})

const Url = model('Url', UrlSchema);

module.exports = Url;