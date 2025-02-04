
const LS_KEY_THEME = 'theme';
const LS_KEY_SEARCH_PARAMS = 'search-params';

const API_URLS = {
  users_service: {
    loginWithCredentials: '/login',
    loginWithCookie: '/login-with-cookie',
    loginWithSaml: '/login-with-saml',
    logout: '/logout',
    users: '/users',
  },
};

const toastDefaultProps = {
  defaultDuration: 3000,
  defaultPosition: 'top-right'
};

export { API_URLS, LS_KEY_SEARCH_PARAMS, LS_KEY_THEME, toastDefaultProps };
