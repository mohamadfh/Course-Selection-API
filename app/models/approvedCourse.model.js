import mongoose from 'mongoose';
const {Schema} = mongoose;

const courseSchema = new Schema({
        name: String,
        unit_No: Number,
        prerequisites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ApprovedCourse'
            }
        ],
        corequisite: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ApprovedCourse'
            }
        ]
    },
    {
        discriminatorKey: 'userType',
        methods: {
        }
    }
);

const ApprovedCourse = mongoose.model("ApprovedCourse", courseSchema);
module.exports = ApprovedCourse;