module.exports = (mongoose) => {
    const RegisterationRequestSchema = new mongoose.Schema({
            validate: Boolean,
            student: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            },
            courses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'TermCourse'
            }],
        },
    );
    const RegisterationRequest = mongoose.model("RegisterationRequest", RegisterationRequestSchema);
    return RegisterationRequest;
};
