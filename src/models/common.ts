export interface ResponseLogin {
  accessToken: string;
  expiresAt: string;
}

export interface ResponseSignup {
  accessToken?: string;
  message: string;
}
