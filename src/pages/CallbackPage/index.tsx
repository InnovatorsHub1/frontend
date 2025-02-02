
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CallbackPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getQueryParams = () => {
        return new URLSearchParams(location.search);
    };

    useEffect(() => {
        const params = getQueryParams();
        const code = params.get('code');
        const state = params.get('state');
        const error = params.get('error');

        async function authenticate() {
            const response = await axios.post('/api/auth', { code, state });
            if (response.status === 200) {
                console.log('Authentication success:', response.data);
                navigate('/dashboard');
            } else {
                console.error('Authentication failed:', response.data);
            }
        }
        if (error) {
            console.error('Error received from SSO provider:', error);
            return;
        }
        if (code) {
            authenticate();
        }
    }, [location, navigate]);

    return (
        <div>
            <p>Please wait, authenticating...</p>
        </div>
    );
};

export default CallbackPage;
