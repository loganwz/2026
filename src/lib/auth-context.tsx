'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserTier } from './types';

interface AuthContextType {
  user: User | null;
  login: (tier: UserTier) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    name: 'Visitante',
    email: 'visitante@exemplo.com',
    tier: 'free'
  });

  const login = (tier: UserTier) => {
    setUser({
      name: tier === 'prime' ? 'Membro Prime' : 'Membro Gratuito',
      email: 'usuario@exemplo.com',
      tier
    });
  };

  const logout = () => {
    setUser({
      name: 'Visitante',
      email: 'visitante@exemplo.com',
      tier: 'free'
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
