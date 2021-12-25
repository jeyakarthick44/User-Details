import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    email: String,
    username: String,
    password: Number,
    city: String

})



autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const postUser = mongoose.model('user', userSchema);

export default postUser;