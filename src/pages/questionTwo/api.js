import axios from 'axios';

const getCardDetails = () => {
    return axios.get('http://localhost:3001/example');
};

export { getCardDetails };
