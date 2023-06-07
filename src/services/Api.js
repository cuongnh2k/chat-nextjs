import axios from 'axios';
import {useSession} from "next-auth/react";

const getListChannel = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {status, data} = useSession();
    const response = await axios({
        method: 'patch',
        url: `${process.env.COMMON_API}/auth/refresh-token`,
        headers: {
            'Authorization': data.accessToken,
            'Content-Type': 'application/json',
            'User-Agent': window.navigator.userAgent,
        }
    });
    return response.data

}

export const Api = {
    getListChannel,
}