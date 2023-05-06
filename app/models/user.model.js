import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
        name: String,
        user_id: BigInt(),
        password: String,
        email: String,
        phone_no: String
    },
    {
        discriminatorKey: 'userType',
        methods: {
        }
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;