import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import api from '../../services/api';

const SSOCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const handleCallback = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');

            if (code) {
                try {
                    const response: AxiosResponse = await api.post('/auth/callback', { code });
                    if (response.status === 200) {
                        navigate('/');
                    }
                } catch (error) {
                    console.error('Authentication error:', error);
                    navigate('/login');
                }
            }
        };

        handleCallback();
    }, [location, navigate]);

    return <div>Loading...</div>;
};

export default SSOCallback;