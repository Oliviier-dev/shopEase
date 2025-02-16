import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { verifyUser } from "../services/authServices";

interface AuthContextType {
  isAuthenticated: boolean;
  userData: { id: string; email: string; role: string } | null;
  loading: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUserData: (
    userData: { id: string; email: string; role: string } | null,
  ) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    id: string;
    email: string;
    role: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await verifyUser();
        setIsAuthenticated(true);
        setUserData(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, loading, setIsAuthenticated, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
