import mongoose from 'mongoose';
import User from './user.model';

const options = { discriminatorKey: 'userType' };

const {Schema} = mongoose;
const Professor = User.discriminator('Professor',
    new mongoose.Schema(
        {
            department: String,
            major: String,
            rank: String
        },
        options
    )
);

module.exports = Professor;