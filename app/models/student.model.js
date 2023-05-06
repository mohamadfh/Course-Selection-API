module.exports = (mongoose,User) => {
    const options = { discriminatorKey: 'userType' };
    const Student = User.discriminator('Student',
        new mongoose.Schema(
            {
                degree: String,
                entry_year: Number,
                entry_term: Number,
                gpa: Number,
                department: String,
                major: String
            },
            options
        )
    );
    return Student;
};
