import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from 'jwt-decode';
import {login} from "@/services/login";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const {email, password, userAgent} = credentials;
                const res = await login(email, password, userAgent);
                const {message, errorCode, success, data} = res
                if (!success) {
                    throw new Error(message);
                }
                return data
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        // error: '/auth/error',
        // signOut: '/auth/signout'
    },
    callbacks: {
        async jwt({token, user, account}) {
            if (user && account) {
                return {
                    ...token,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken
                }
            }
            return token
        },
        async session({session, token}) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            const decoded = jwt_decode(token.accessToken);
            session.user.account = decoded.account;
            return session
        }
    },
});
