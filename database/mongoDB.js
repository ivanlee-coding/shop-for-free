const mongoose = require('mongoose');
const userModel = require('../schema/user');

const serverUrl = process.env.MONGODB_URL || 'localhost';
const db_name = process.env.MONGODB_NAME || 'test';

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
            "id": mongoose.Types.ObjectId(),
            "name": "customer2",
            "phone": "20624700",
            "credit": 120.54,
            "married": false,
            "email": "fy@outlook.com"
        })

        console.log(isUpdated);
    }

};


module.exports = mongo;