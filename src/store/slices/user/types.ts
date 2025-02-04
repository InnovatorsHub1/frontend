export enum LoginTypes {
  credentials = 'credentials',
  cookie = 'cookie',
  saml = 'saml',
  oauth = 'oauth',
}

export type CredentialsLogin = {
  loginType: LoginTypes.credentials;
  params: {
    username: string;
    password: string;
  };
};

export type CookieLogin = {
  loginType: LoginTypes.cookie;
  params: {
    cookie: string;
  };
};

export type SamlLogin = {
  loginType: LoginTypes.saml;
  params: {
    idp: string;
  };
};

export interface UserState {
  isLogged: boolean;
  isLoading: boolean;
  data: any;
}


