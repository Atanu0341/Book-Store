import React from "react";
import AuthBgImg from "../../assets/auth-bg.jpg";
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authform/AuthForm";

const Login = () => {
  return (
    <>
      <Navbar darkText={true} />
      <section className="flex justify-between items-center gap-8">
        <div className="w-2/4 overflow-hidden">
          <img
            src={AuthBgImg}
            alt="authentication-background"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="w-2/4">
          <div className="w-11/12 m-auto">
            <h2 className="font-bold text-2xl pb-4">Login</h2>
            <p>Signin with Email and Password</p>
            <AuthForm buttonName="Login" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
