import axios from "axios";
import {session} from "next-auth/core/routes";
import jwt_decode from "jwt-decode";

export const RefreshToken = async () => {
    const response = await axios({
        method: 'patch',
        url: `${process.env.COMMON_API}/auth/refresh-token`,
        headers: {
            'Authorization': session.user.refreshToken
        }
    });
    const {message, errorCode, success, data} = response.data
    if (success) {
        session.user.accessToken = data.accessToken;
        const decoded = jwt_decode(data.accessToken);
        session.user.account = decoded.account;
        return true
    }
    return false;
}