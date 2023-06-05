import {useSession} from "next-auth/react";
import Router from "next/router";
import {useEffect} from "react";
import {Col, Row, Skeleton} from "antd";

const Home = () => {
    const {status, data} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            Router.replace("/auth/signin");
        }
    }, [status]);

    if (status === "authenticated")
        return (
            <Row style={{
                minHeight: '100%',
                maxWidth: '100%'
            }}>
                <Col span={6} style={{
                    border: 'solid 1px #aaa',
                }}>
                    1
                </Col>
                <Col span={18} style={{
                    border: 'solid 1px #aaa',
                }}>
                    2
                </Col>
            </Row>
        );

    return <Skeleton/>

};

export default Home;
