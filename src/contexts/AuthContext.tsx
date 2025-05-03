
import { createContext, useContext, ReactNode } from "react";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type UserRole = 'user' | 'barber' | 'admin';

interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  role: UserRole;
  avatar_url?: string;
  phone?: string;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, role?: UserRole) => Promise<void>;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
}

// Create mock data for bypassing authentication
const mockUser = {
  id: 'mock-user-id',
  email: 'user@example.com',
} as User;

const mockProfile = {
  id: 'mock-user-id',
  email: 'user@example.com',
  full_name: 'Test User',
  role: 'user' as UserRole,
  phone: '555-1234',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  
  // Mock authentication functions
  async function signIn(email: string, password: string) {
    toast({
      title: "Login successful",
      description: "Welcome back!",
    });
    navigate('/');
  }

  async function signUp(email: string, password: string, role: UserRole = 'user') {
    toast({
      title: "Registration successful",
      description: "Account created successfully.",
    });
  }

  async function signOut() {
    navigate('/auth');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  }

  async function updateProfile(profileUpdate: Partial<UserProfile>) {
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  }

  const value = {
    session: null,
    user: mockUser,
    profile: mockProfile,
    loading: false,
    signIn,
    signOut,
    signUp,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
