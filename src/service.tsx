import axios from 'axios';
import { API_URL } from './config/constant';

export const fetchSuggestions = async (filter: string) => {
  try {
    const response = await axios.get(`${API_URL}/suggestion/?filter=${filter}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
