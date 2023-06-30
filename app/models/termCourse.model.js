module.exports = (mongoose,ApprovedCourse) => {
    const options = { discriminatorKey: 'courseType' };
    const TermCourse = ApprovedCourse.discriminator('TermCourse',
        new mongoose.Schema(
            {
                class_time: String,
                exam_time: String,
                exam_location: String,
                professor: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Professor'
                },
                capacity: Number,
                term: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Term'
                }
            },
            options
        )
    );
    return TermCourse
};
