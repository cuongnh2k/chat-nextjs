import {signIn} from "next-auth/react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import {Button, Form, Input} from 'antd';
import {useState} from "react";

const SignIn = () => {
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        setLoading(true)
        signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        }).then(({ok, error}) => {
            setLoading(false)
            if (ok) {
                Router.replace("/");
            } else {
                toast.error(error, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    };

    const onFinishFailed = () => {
    };

    return (<Form
        name="basic"
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 20,
        }}
        style={{
            maxWidth: 600,
            margin: '100px auto',
            border: '1px solid #ccc',
            padding: '20px 20px 0px 20px',
            backgroundColor: 'whitesmoke'
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <ToastContainer/>
        <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập email của bạn!',
                },
                {
                    max: 50,
                    message: 'Vui lòng nhập tối đa 50 ký tự!',
                },
                {
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Vui lòng nhập đúng định dạng email!',
                },
            ]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu của bạn!',
                },
                {
                    min: 8,
                    message: 'Vui lòng nhập tối thiểu 8 ký tự!',
                },
                {
                    max: 16,
                    message: 'Vui lòng nhập tối đa 16 ký tự!',
                },
                {
                    pattern: /\d/,
                    message: 'Mật khẩu chứa ít nhất 1 ký tự số!',
                },
                {
                    pattern: /[A-Z]/,
                    message: 'Mật khẩu chứa ít nhất 1 ký tự chữ hoa!',
                },
                {
                    pattern: /[a-z]/,
                    message: 'Mật khẩu chứa ít nhất 1 ký tự chữ thường!',
                },
                {
                    pattern: /[\W\_]/,
                    message: 'Mật khẩu chứa ít nhất 1 ký tự đặc biệt!',
                },
            ]}
        >
            <Input.Password/>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 0,
                span: 24,
            }}
            style={{
                textAlign: 'center'
            }}
        >
            <Button
                type="primary"
                htmlType="submit"
                loading={loading}
            >
                Đăng nhập
            </Button>
        </Form.Item>
    </Form>);
};

export default SignIn;
