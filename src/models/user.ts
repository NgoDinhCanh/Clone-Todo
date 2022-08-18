export interface UserLogin {
  email: string;
  password: string;
  checked: boolean;
}
export interface UserRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export interface User {
  id: number;
  email: string;
  name_rendered?: string;
  full_name?: string;
  name_suffix?: string;
  employeeid?: string;
  first_name: string;
  last_name: string;
  address?: string;
  phone?: string;
  featured_image?: string;
  time_keeping_type?: string;
  user_type?: string;
  workplace?: string;
  category?: string;
  date_of_birth?: string;
  first_date?: string;
  last_date?: string;
  title?: string;
  position_prefix?: string;
  position_1?: string;
  position_2?: string;
  position_3?: string;
  position_rendered?: string;
  role?: string;
  discipline?: string;
  department?: string;
  show_on_beta?: number;
  resigned?: string;
  viewpost_uids?: string;
  leaf_uids?: number;
  email_verified_at?: string;
  created_at?: Date;
  updated_at?: Date;
  guid?: number;
  domain?: string;
}
