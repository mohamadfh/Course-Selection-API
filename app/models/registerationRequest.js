module.exports = (mongoose) => {
    const RegisterationRequestSchema = new mongoose.Schema({
            student: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            },
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'TermCourse'
            },
        },
    );
    const RegisterationRequest = mongoose.model("RegisterationRequest", RegisterationRequestSchema);
    return RegisterationRequest;
};
