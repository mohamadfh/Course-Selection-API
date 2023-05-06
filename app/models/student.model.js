import mongoose from 'mongoose';
import User from './user.model';

const options = { discriminatorKey: 'kind' };

const {Schema} = mongoose;
const Student = User.discriminator('Student',
    new mongoose.Schema(
        {
            degree: String,
            entry_year: Number,
            entry_term: Number,
            gpa: Number,
            department: String,
            major: String
        },
        options
    )
);

module.exports = Student;