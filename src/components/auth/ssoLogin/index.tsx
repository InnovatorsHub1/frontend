import React from 'react';

export type SSOLoginProps = {
    authEndpoint: string;
    clientId: string;
    redirectUri: string;
    scope: string;
    state: string;
    responseType?: string;
    extraParams?: Record<string, string>;
    buttonText?: string;
    children?: React.ReactNode;
}

const SSOLoginButton: React.FC<SSOLoginProps> = ({
    authEndpoint,
    clientId,
    redirectUri,
    scope,
    state,
    responseType = 'code',
    extraParams = {},
    buttonText = '',
    children
}) => {
    const handleLogin = () => {

        const params: Record<string, string> = {
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: responseType,
            scope: scope,
            state: state,
            ...extraParams
        };


        const urlParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            urlParams.append(key, value);
        });


        const authUrl = `${authEndpoint}?${urlParams.toString()}`;

        window.location.href = authUrl;
    };

    return (
        <button onClick={handleLogin}>
            {buttonText || children}
        </button>
    );
};

export default SSOLoginButton;
