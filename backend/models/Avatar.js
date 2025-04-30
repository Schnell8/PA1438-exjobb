import mongoose from 'mongoose';

// Create schema for avatar
const avatarSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seed: { type: String, required: true },
    level: { type: Number, default: 1 },
});

const Avatar = mongoose.model('Avatar', avatarSchema);

export default Avatar;
