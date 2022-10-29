const mongoose = require('mongoose');
const userModel = require('../schema/user');

const serverUrl = process.env.MONGODB_URL || 'localhost';
const db_name = process.env.MONGODB_NAME || 'none';

const mongo = {

    connect: async() => {
        let endpoint = `${serverUrl}${db_name}`;
        console.log(`Connecting to host: ${endpoint}`);
        try {
            const conStatus = await mongoose.connect(endpoint);
            console.log(`Connection Opens: ${conStatus.connection._hasOpened}`);
        }catch (e) {
            console.log(e);
        }
    },

    update: async() => {
        var isUpdated = await userModel.user_auth.create({
            "_id": mongoose.Types.ObjectId(),
            "id": "a6d635cd4348a731de668195",
            "name": "customer1",
            "phone": "30624700",
            "credit": 1000.00,
            "married": false,
            "email": "funny@joke.com"
        })

        console.log(isUpdated);
    }

};


module.exports = mongo;