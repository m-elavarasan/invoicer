const BASE_URL = 'http://localhost:3000/v1/api';

const getDefaultHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
  return headers;
};

const API = {
  async get(path) {
    try {
      const response = await fetch(`${BASE_URL}/${path}`, {
        headers: getDefaultHeaders(),
      });
      if (response.status >= 200 && response.status < 300) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  async post(path, data) {
    try {
      const response = await fetch(`${BASE_URL}/${path}`, {
        method: 'POST',
        headers: getDefaultHeaders(),
        body: JSON.stringify(data),
      });
      if (response.status >= 200 && response.status < 300) {
        const responseBody = await response.text();
        if (!responseBody) {
          return {};
        }
        return JSON.parse(responseBody);
      } else {
        throw new Error('Failed to post data');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  },

  async put(path, data) {
    try {
      const response = await fetch(`${BASE_URL}/${path}`, {
        method: 'PUT',
        headers: getDefaultHeaders(),
        body: JSON.stringify(data),
      });
      if (response.status >= 200 && response.status < 300) {
        return await response.json();
      } else {
        throw new Error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  },

  async delete(path) {
    try {
      const response = await fetch(`${BASE_URL}/${path}`, {
        method: 'DELETE',
        headers: getDefaultHeaders(),
      });
      if (response.status >= 200 && response.status < 300) {
        return await response.json();
      } else {
        throw new Error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  },
};

export default API;
