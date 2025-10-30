import { apiPost } from './api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  isAdmin: boolean;
}

export const authService = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return apiPost<AuthResponse>('/api/auth/login', credentials);
  },

  async register(data: RegisterRequest): Promise<AuthResponse> {
    return apiPost<AuthResponse>('/api/auth/register', data);
  },

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  },

  getToken(): string | null {
    return localStorage.getItem('authToken');
  },

  removeToken() {
    localStorage.removeItem('authToken');
  },

  saveUser(user: { email: string; isAdmin: boolean }) {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getUser(): { email: string; isAdmin: boolean } | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  removeUser() {
    localStorage.removeItem('user');
  },

  logout() {
    this.removeToken();
    this.removeUser();
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
};
