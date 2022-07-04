import axios from 'axios';

export const useAxiosServices = () => {

    const callAxios = async (method: string, url:string) => {
        const response = await axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data;
    }

    return { callAxios } as const;
}
