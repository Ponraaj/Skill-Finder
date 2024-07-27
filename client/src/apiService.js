// src/apiService.js
export const login = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      return data; // Return the data to the caller
    } else {
      throw new Error('Login failed'); // Throw an error if login fails
    }
  };
  