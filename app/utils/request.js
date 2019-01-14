import axios from 'axios';
import Config from 'react-native-config';

const apiHost = Config.RN_API_HOST || 'https://api.hiitide.com';

const instance = axios.create({
  baseURL: `${apiHost}/api/v1/`,
});

export default instance;
