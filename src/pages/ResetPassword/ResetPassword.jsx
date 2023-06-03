import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { Button, Checkbox, Form, Input, message } from "antd";
import Axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [data, setData] = useState(useLoaderData());
  const [form] = Form.useForm();
  const [isChangePWSucces, setIsChangePWSucces] = useState(false);
  const [loadingChangePW, setLoadingChangePW] = useState(false);
  const navigate = useNavigate();

  const onFinish = async ({ email, password }) => {
    setLoadingChangePW(true);
    try {
      await Axios.post("/api/v1/auth/reset-password", {
        password,
        userID: data.userID,
        token: data.token,
      });
      message.success("Reset password successfully");
      navigate("/reset-password/success");
      setIsChangePWSucces(true);
    } catch {
      message.error("Something went wrong, please try again later");
      setIsChangePWSucces(false);
    } finally {
      setLoadingChangePW(false);
    }
  };

  return (
    <MainLayout>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(
                  /images/forgot-password-bg.jpg
                )`,
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
            <img
              alt="app-logo"
              src="/images/app-logo.png"
              className="w-1/2 mx-auto mb-8"
            />
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl">
              Change Password
            </h2>
            <Form
              onFinish={onFinish}
              form={form}
              requiredMark={false}
              layout="vertical"
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
                initialValue={data.email}
              >
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                  defaultValue={data.email}
                  disabled
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters!",
                  },
                  {
                    validator: (_, value) => {
                      const confirmPassword = form.getFieldValue("cfpassword");
                      if (confirmPassword && value !== confirmPassword) {
                        console.log(confirmPassword, value);
                        return Promise.reject("Password does not match!");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  maxLength={30}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </Form.Item>
              <Form.Item
                label="Confirmed Password"
                name="cfpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters!",
                  },
                  {
                    validator: (_, value) => {
                      const password = form.getFieldValue("password");
                      if (password && value !== password) {
                        return Promise.reject("Password does not match!");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  maxLength={30}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </Form.Item>
              <Button
                htmlType="submit"
                size="large"
                loading={loadingChangePW}
                type="primary"
                className="w-full flex items-center justify-center font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              >
                Reset password
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
