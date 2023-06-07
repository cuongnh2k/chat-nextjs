import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Layout, Menu, Skeleton} from 'antd';
import {createStructuredSelector} from 'reselect';
import * as selector from '@/redux/reselect/GetListChannelReselect.js';
import {UploadOutlined} from "@ant-design/icons";
import * as actions from "@/redux/actions/GetListChannelAction";
import {helpers} from "@/helpers/common";

const {Header, Sider, Content} = Layout;
const SiderComponent = ({collapsed}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.requestGetListChannel());
    }, [dispatch])

    const {loading, error, data} = useSelector(createStructuredSelector({
        loading: selector.getLoading,
        error: selector.getError,
        data: selector.getData
    }))

    if (loading && data.length === 0) {
        return <Skeleton active/>
    }

    if (!helpers.isEmptyObject(error)) {
        return (
            <Alert
                message="Error message"
                description={error.mess}
                type="error"
                closable
            />
        )
    }

    return <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical"/>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            // items={[
            //     {
            //         key: '1',
            //         icon: <UserOutlined/>,
            //         label: 'nav 1',
            //     },
            //     {
            //         key: '2',
            //         icon: <VideoCameraOutlined/>,
            //         label: 'nav 2',
            //     },
            //     {
            //         key: '3',
            //         icon: <UploadOutlined/>,
            //         label: 'nav 3',
            //     },
            // ]}
            items={data.map((items, index) => ({key: index, icon: <UploadOutlined/>, label: items.title}))}
        />
    </Sider>
}
export default SiderComponent