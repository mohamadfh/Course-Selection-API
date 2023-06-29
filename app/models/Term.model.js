module.exports = (mongoose) => {
    const termSchema = new mongoose.Schema({
            name: String,
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
            ]
        },
    );
    const Term = mongoose.model("Term", termSchema);
    return Term;
};
