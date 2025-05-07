const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    const { token, user } = response.data;
    
    setToken(token);
    setUser(user);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

const register = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
    const { token, user } = response.data;
    
    setToken(token);
    setUser(user);
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}; 