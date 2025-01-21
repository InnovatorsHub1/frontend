import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SSOLoginButton, { SSOLoginProps } from '../src/components/auth/ssoLogin/index.tsx';


describe('SSOLoginButton', () => {
    // Mock window.location.href
    const { location } = window;

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { href: '' }
        });
    });

    afterAll(() => {
        window.location = location;
    });


    const defaultProps: SSOLoginProps = {
        authEndpoint: 'https://mock-auth-endpoint.com/oauth',
        clientId: 'mock-client-id',
        redirectUri: 'http://localhost:3000/callback',
        scope: 'mock-scope',
        state: 'mock-state',
        responseType: 'code'
    };

    beforeEach(() => {
        // Clear mock before each test
        window.location.href = '';
    });

    it('renders button with buttonText prop', () => {
        render(
            <SSOLoginButton
                {...defaultProps}
                buttonText="Login with SSO"
            />
        );

        expect(screen.getByText('Login with SSO')).toBeVisible();
    });

    it('renders button with children content', () => {
        render(
            <SSOLoginButton {...defaultProps}>
                <span>custom content</span>
            </SSOLoginButton>
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('prefers buttonText over children when both are provided', () => {
        render(
            <SSOLoginButton {...defaultProps} buttonText="button text">
                <span>child content</span>
            </SSOLoginButton>
        );

        expect(screen.getByText('button text')).toBeInTheDocument();
        expect(screen.queryByText('child content')).not.toBeInTheDocument();
    });

    it('constructs correct auth URL with default parameters', () => {
        render(<SSOLoginButton {...defaultProps} />);

        fireEvent.click(screen.getByRole('button'));

        const expectedUrl = new URL(window.location.href);
        expect(expectedUrl.origin + expectedUrl.pathname).toBe(defaultProps.authEndpoint);
        expect(expectedUrl.searchParams.get('client_id')).toBe(defaultProps.clientId);
        expect(expectedUrl.searchParams.get('redirect_uri')).toBe(defaultProps.redirectUri);
        expect(expectedUrl.searchParams.get('response_type')).toBe(defaultProps.responseType);
        expect(expectedUrl.searchParams.get('scope')).toBe(defaultProps.scope);
        expect(expectedUrl.searchParams.get('state')).toBe(defaultProps.state);
    });

    it('includes extra parameters in auth URL', () => {
        const extraParams = {
            prompt: 'consent',
            access_type: 'offline'
        };

        render(
            <SSOLoginButton
                {...defaultProps}
                extraParams={extraParams}
            />
        );

        fireEvent.click(screen.getByRole('button'));

        const expectedUrl = new URL(window.location.href);
        expect(expectedUrl.searchParams.get('prompt')).toBe(extraParams.prompt);
        expect(expectedUrl.searchParams.get('access_type')).toBe(extraParams.access_type);
    });

    it('uses custom response type when provided', () => {
        render(
            <SSOLoginButton
                {...defaultProps}
                responseType="token"
            />
        );

        fireEvent.click(screen.getByRole('button'));

        const expectedUrl = new URL(window.location.href);
        expect(expectedUrl.searchParams.get('response_type')).toBe('token');
    });

    it('handles special characters in parameters correctly', () => {
        const propsWithSpecialChars: SSOLoginProps = {
            ...defaultProps,
            scope: 'read write email+profile',
            state: 'state with spaces',
            extraParams: {
                'custom param': 'value with & and ='
            }
        };

        render(<SSOLoginButton {...propsWithSpecialChars} />);

        fireEvent.click(screen.getByRole('button'));

        const expectedUrl = new URL(window.location.href);
        expect(expectedUrl.searchParams.get('scope')).toBe(propsWithSpecialChars.scope);
        expect(expectedUrl.searchParams.get('state')).toBe(propsWithSpecialChars.state);
        expect(expectedUrl.searchParams.get('custom param')).toBe(propsWithSpecialChars.extraParams?.['custom param']);
    });
});