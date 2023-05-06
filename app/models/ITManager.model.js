import mongoose from 'mongoose';
import User from './user.model';

const options = { discriminatorKey: 'userType' };

const {Schema} = mongoose;
const ITManager = User.discriminator('ITManager',
    new mongoose.Schema(
        {
        },
        options
    )
);

module.exports = ITManager;