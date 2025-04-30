import { useEffect, useState } from 'react';
import { getUserAvatar, getAvatarUrl } from '../services/avatarService';
import Loading from './Loading'

import "../styles/Avatar.css"

const AvatarDisplay = () => {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAvatar = async () => {
            try {
                const data = await getUserAvatar();
                const personalUrl = getAvatarUrl(data.seed, data.level);
                setAvatarUrl(personalUrl);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getAvatar();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='avatar'>
            <img src={avatarUrl} alt="avatar" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AvatarDisplay;
