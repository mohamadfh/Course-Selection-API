import mongoose from 'mongoose';
import ApprovedCourse from './approvedCourse.model';
import Professor from './professor.model';
const options = { discriminatorKey: 'courseType' };

const {Schema} = mongoose;
const TermCourse = ApprovedCourse.discriminator('TermCourse',
    new mongoose.Schema(
        {
            class_time: Date,
            exam_time: Date,
            exam_location: String,
            professor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Professor'
            },
            capacity: Number,
            term: String
        },
        options
    )
);

module.exports = TermCourse;