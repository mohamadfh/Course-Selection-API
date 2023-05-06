module.exports = (mongoose,User) => {
    const options = { discriminatorKey: 'userType' };
    const ITManager = User.discriminator('ITManager',
        new mongoose.Schema(
            {
            },
            options
        )
    );
    return ITManager;
};
