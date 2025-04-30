const API_URL = 'http://localhost:5000/avatar';

export const getUserAvatar = async () => {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch(`${API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch avatar');
        }

        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

const levelColors = {
    default: 'dddddd',   // Light gray
    bronze: 'cd7f32',    // Bronze
    silver: 'c0c0c0',    // Silver
    gold: 'ffd700',      // Gold
    diamond: 'b9f2ff'    // Diamond
};

export const getColorByLevel = (level) => {
    return level < 10 ? levelColors.default :
        level < 20 ? levelColors.bronze :
        level < 30 ? levelColors.silver :
        level < 50 ? levelColors.gold :
        levelColors.diamond;
};

export const getAvatarUrl = (seed, level) => {
    const backgroundColor = getColorByLevel(level);
    return `https://api.dicebear.com/9.x/initials/svg?seed=${seed}&backgroundColor=${backgroundColor}`;
};
