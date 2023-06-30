module.exports = (mongoose) => {
    const termSchema = new mongoose.Schema({
            name: String,
            preRegisteredCourses: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'TermCourse'
                }
            ],
            registeredCourses: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'TermCourse'
                }
            ],
            registeredUsers: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                }
            ],
            registerationRequests: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'RegisterationRequest'
                }
            ],
            preRegisterationRequests: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'PreRegisterationRequest'
                }
            ],
        },
    );
    const Term = mongoose.model("Term", termSchema);
    return Term;
};

