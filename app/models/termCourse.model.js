module.exports = (mongoose,ApprovedCourse) => {
    const options = { discriminatorKey: 'courseType' };
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
    return TermCourse
};
