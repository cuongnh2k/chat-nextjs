import axios from "axios";
import jwt_decode from "jwt-decode";
import {useSession} from "next-auth/react";

export const refreshToken = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {status, data, update} = useSession();
    const response = await axios({
        method: 'patch',
        url: `${process.env.COMMON_API}/auth/refresh-token`,
        headers: {
            'Authorization': data.refreshToken,
            'Content-Type': 'application/json',
            'User-Agent': window.navigator.userAgent,
        }
    });

    if (response.data.success) {
        const decoded = jwt_decode(response.data.data.accessToken);

        await update({
            accessToken: response.data.data.accessToken,
            refreshToken: response.data.data.refreshToken,
            account: decoded.account,
        })
        return true
    }
    return false;
}