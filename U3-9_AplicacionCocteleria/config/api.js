import axios from 'axios';
import { COCKTAIL_API_URL } from '@env';

const cocktailApi = axios.create({
  baseURL: COCKTAIL_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { cocktailApi };