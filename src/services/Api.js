import axios from 'axios';

const getAllProducts = async () => {
    const url = 'https://dummyjson.com/products';
    const response = await axios.get(url);
    return response.status === 200 ? response.data : {};
}

export const Api = {
    getAllProducts,
}