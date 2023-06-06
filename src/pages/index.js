import {useSession} from "next-auth/react";
import Router from "next/router";
import {useEffect, useState} from "react";
import {Button, Layout, Skeleton, theme} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import SiderComponent from "@/components/SiderComponent";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {SpinLoader} from "@/components/common/SpinLoader";
import {configStore} from "@/redux/store";

const {Header, Content} = Layout;
const {store, persistor} = configStore();

const Home = () => {
    const {status, data} = useSession();

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    useEffect(() => {
        if (status === "unauthenticated") {
            Router.replace("/auth/signin");
        }
    }, [status]);

    if (status === "authenticated")
        return (
            <Provider store={store}>
                <PersistGate loading={<SpinLoader/>} persistor={persistor}>
                    <Layout>
                        <SiderComponent collapsed={collapsed}/>
                        <Layout style={{minHeight: '100vh'}}>
                            <Header
                                style={{
                                    padding: 0,
                                    background: colorBgContainer,
                                }}
                            >
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 64,
                                        height: 64,
                                    }}
                                />
                            </Header>
                            <Content
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    background: colorBgContainer,
                                }}
                            >
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </PersistGate>
            </Provider>
        );

    return <Skeleton/>

};

export default Home;
