// src/services/UserService.js
const API_URL = 'http://localhost:8080/api/v1/users';

export const registerUser = async (formData) => {
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

  return response.json();
};

export const loginUser = async (credentials) => {
  const AUTH_URL = 'http://localhost:8080/api/v1/auth/authenticate';
  const response = await fetch(`${AUTH_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (response.ok) {
    console.log('login exitoso!');
    return response.json();
  }else{
    const errorText = await response.text();
    throw new Error(`Failed to login: ${errorText}`);
  }
};