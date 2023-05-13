module.exports = mongoose => {
    const options = { discriminatorKey: 'userType' };
    const userSchema = new mongoose.Schema({
            name: String,
            user_id: {
                type: String,
                unique: true,
            },
            password: String,
            email: String,
            phone_no: String
        },
        options
    );
    const User = mongoose.model("User", userSchema);
    return User
};
