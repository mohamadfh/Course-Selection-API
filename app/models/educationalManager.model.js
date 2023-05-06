import mongoose from 'mongoose';
import User from './user.model';

const options = { discriminatorKey: 'userType' };

const {Schema} = mongoose;
const EducationalManager = User.discriminator('EducationalManager',
    new mongoose.Schema(
        {
            department: String
        },
        options
    )
);

module.exports = EducationalManager;