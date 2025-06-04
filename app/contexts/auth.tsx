import { createContext, useContext, useState } from 'react';
import Parse from '../config/parse';

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, avatar: string) => Promise<void>;
  signOut: () => Promise<void>;
  user: Parse.User | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Parse.User | null>(null);

  async function signIn(email: string, password: string) {
    try {
      const user = await Parse.User.logIn(email, password);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error: any) {
      if (error.code === Parse.Error.OBJECT_NOT_FOUND) {
        throw new Error('Email ou senha incorretos');
      }
      throw new Error(error.message);
    }
  }

  async function signUp(email: string, password: string, name: string, avatar: string) {
    try {
      // Criar um novo usuário
      const user = new Parse.User();
      user.setUsername(email);
      user.setEmail(email);
      user.setPassword(password);
      user.set('name', name);
      user.set('avatar', avatar);

      // Tentar cadastrar o usuário
      await user.signUp();

      // Se o cadastro for bem sucedido, fazer login
      const loggedUser = await Parse.User.logIn(email, password);
      setUser(loggedUser);
      setIsAuthenticated(true);
    } catch (error: any) {
      if (error.code === Parse.Error.USERNAME_TAKEN) {
        throw new Error('Este email já está em uso');
      } else if (error.code === Parse.Error.INVALID_EMAIL_ADDRESS) {
        throw new Error('Email inválido');
      } else if (error.code === Parse.Error.PASSWORD_MISSING) {
        throw new Error('A senha é obrigatória');
      }
      throw new Error('Erro ao criar conta: ' + error.message);
    }
  }

  async function signOut() {
    try {
      await Parse.User.logOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

export { useAuth };
export default AuthProvider; 