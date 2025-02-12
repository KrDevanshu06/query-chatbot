import axios from 'axios';

interface ApiResponse {
  result: string;
}

const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your backend URL
});

export const sendQuery = async (query: string): Promise<ApiResponse> => {
  // Mock response for testing
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        result: `Mock response for: "${query}"`,
      });
    }, 1000); // Simulate a 1-second delay
  });
};