import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from 'jwt-decode';
import {Login} from "@/services/Login";

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
                const res = await Login(email, password, userAgent);
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
            const decoded = jwt_decode(token.accessToken);

            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.account = decoded.account;
            return session
        }
    },
});
