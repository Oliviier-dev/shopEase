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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await verifyUser();

        setIsAuthenticated(true);
        setUserData(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUserData(null);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, setIsAuthenticated, setUserData }}
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
