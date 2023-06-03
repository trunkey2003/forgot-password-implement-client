import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'

export default function ResetPasswordErrorPage() {
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
            <div className='mt-6'>
                <p>The link is invalid or broken. Please try again</p>
                <Link to='/forgot-password' className='text-blue-600 hover:underline'>Forgot password</Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
