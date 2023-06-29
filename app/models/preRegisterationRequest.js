module.exports = (mongoose) => {
    const PreRegisterationRequestSchema = new mongoose.Schema({
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
    const PreRegisterationRequest = mongoose.model("PreRegisterationRequest", PreRegisterationRequestSchema);
    return PreRegisterationRequest;
};
