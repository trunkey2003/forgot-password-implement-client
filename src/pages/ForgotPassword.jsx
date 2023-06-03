import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Form, Input, message } from "antd";
import Axios from "../api/axios";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [isSentSuccess, setIsSentSuccess] = useState(false);

  const onFinish = async ({ email }) => {
    try {
      setLoading(true);
      await Axios.post("/api/v1/auth/forgot-password", { email });
      message.success("Sent email to reset password, please check your email");
      setIsSentSuccess(true);
    } catch {
      message.error("Something went wrong, please try again later");
      setIsSentSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MainLayout>
      <div className="h-screen bg-blue-100 flex items-center">
        <div className="flex justify-center px-6 w-full">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg"
              style={{
                backgroundImage: `url(
                  /images/forgot-password-bg.jpg
                )`,
              }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              {!isSentSuccess && (
                <div aria-label="step-1">
                  <div className="px-8 mb-4 text-center">
                    <h3 className="pt-4 mb-2 text-2xl">
                      Forgot Your Password?
                    </h3>
                    <p className="mb-4 text-sm text-gray-700">
                      We get it, stuff happens. Just enter your email address
                      below and we'll send you a link to reset your password!
                    </p>
                  </div>
                  <Form
                  requiredMark={false}
                    onFinish={onFinish}
                    layout="vertical"
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  >
                    <Form.Item
                      name={"email"}
                      label={"Email"}
                      className="mb-4"
                      rules={[
                        { required: true, message: "Please enter an email" },
                      ]}
                    >
                      <Input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                        placeholder="Enter Email Address..."
                      />
                    </Form.Item>
                    <Form.Item className="mb-6 text-center">
                      <Button
                        htmlType="submit"
                        size="large"
                        loading={loading}
                        className="w-full flex items-center justify-center font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                      >
                        Reset Password
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}
              {isSentSuccess && (
                <div aria-label="step-2" className="py-16">
                  <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-16 h-16 mx-auto my-6"
                  >
                    <path
                      fill="currentColor"
                      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                    ></path>
                  </svg>
                  <div className="text-center">
                    <h3 className="md:text-2xl text-base text-blue-900 font-semibold text-center">
                      Email Sent
                    </h3>
                    <p className="text-blue-600 my-2 font-bold">
                      Please check your inbox to reset password
                    </p>
                    <p> Have a great day! </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
