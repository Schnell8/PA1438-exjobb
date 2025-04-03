import mongoose from 'mongoose';

// Create schema for avatar
const avatarSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    image: {
        type: String,
        default: 'default_avatar_image_url' // Set a default avatar image URL
    }
});

const Avatar = mongoose.model('Avatar', avatarSchema);

export default Avatar;
