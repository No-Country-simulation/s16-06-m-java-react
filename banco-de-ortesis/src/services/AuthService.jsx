const API_URL = 'http://pasos_firmes:8080/api/v1/users';

export const registerUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to register: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  const AUTH_URL = 'http://pasos_firmes:8080/api/v1/auth/authenticate';
  try {
    const response = await fetch(`${AUTH_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to login: ${errorText}`);
    }

    console.log('Login exitoso!');
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const fetchUser = async (credentials) => {
  const AUTH_URL = 'http://pasos_firmes:8080/api/v1/auth/getUser';
  try {
    const response = await fetch(`${AUTH_URL}?jwt=${encodeURIComponent(credentials)}`);
    if (!response.ok) {
      throw new Error(`Error fetching user data, status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
