module.exports = (mongoose) => {
    const courseSchema = new mongoose.Schema({
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
        }
    );
    const ApprovedCourse = mongoose.model("ApprovedCourse", courseSchema);
    return ApprovedCourse;
};
