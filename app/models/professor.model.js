module.exports = (mongoose,User) => {
    const options = { discriminatorKey: 'userType' };
    const Professor = User.discriminator('Professor',
        new mongoose.Schema(
            {
                department: String,
                major: String,
                rank: String
            },
            options
        )
    );
    return Professor
};
