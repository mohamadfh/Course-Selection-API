module.exports = (mongoose,User) => {
    const options = { discriminatorKey: 'userType' };
    const EducationalManager = User.discriminator('EducationalManager',
        new mongoose.Schema(
            {
                department: String
            },
            options
        )
    );
    return EducationalManager;
};
