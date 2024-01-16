import axios from 'axios';

export const getUser = async (nickname: string) => {
    try {
        const response: any = await axios.get(`https://api.github.com/users/${nickname}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getReposUser = async (repos_url: string) => {
    try {
        const response: any = await axios.get(repos_url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getLanguageReposUser = async (nickname: string, nameRepos: string) => {
    try {
        const response: any = await axios.get(`https://api.github.com/repos/${nickname}/${nameRepos}/languages`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}