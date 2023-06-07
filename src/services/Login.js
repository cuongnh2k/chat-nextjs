import axios from "axios";

export const Login = async (email, password, userAgent) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.COMMON_API}/auth/login`,
        data: {
            email: email,
            password: password
        },
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': userAgent
        }
    });
    return response.data;
}