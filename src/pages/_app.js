import "../styles/globals.css";
import {SessionProvider} from "next-auth/react";

const MyApp = ({Component, pageProps}) => (
    <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
    </SessionProvider>
);

export default MyApp;
