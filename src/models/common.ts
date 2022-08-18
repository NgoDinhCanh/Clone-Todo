export interface ResponseLogin {
  accessToken: string;
  expiresAt: string;
}

export interface ResponseSignup {
  accessToken: string;
  message: string;
}
export interface AlertProps {
  severity: 'success' | 'error';
  children: string;
}
