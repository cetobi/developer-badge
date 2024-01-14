import axios from 'axios';

export const getUser = async () => {
    try {
        const response: any = await axios.get('https://api.github.com/users/cetobi');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}