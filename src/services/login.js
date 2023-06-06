import axios from "axios";

export const login = async (email, password) => {
    const response = await axios({
        method: 'post',
        url: `${process.env.COMMON_API}/auth/login`,
        data: {
            email: email,
            password: password
        },
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
}