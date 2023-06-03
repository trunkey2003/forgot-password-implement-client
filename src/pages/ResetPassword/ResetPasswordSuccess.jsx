import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function ResetPasswordSuccess() {
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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-center">
          <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
            <img
              alt="app-logo"
              src="/images/app-logo.png"
              className="w-1/2 mx-auto mb-8"
            />
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl">
              Change Password
            </h2>
            <div aria-label="step-2" className="pt-0">
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
                    Password Reset Successfully
                </h3>
                <p className="text-blue-600 my-2 font-bold">
                    Please login with your new password
                </p>
                <div> You can close this tab now </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
