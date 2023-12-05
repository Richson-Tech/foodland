import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="">
      {/* BOX  */}
      <div className="">
        {/* IMAGE CONTAINER  */}
        <div className="relative">
          <Image src="/loginBg.png" alt="login image" fill />
        </div>
        {/* FROM CONTAINER  */}
        <div className="">
          <h1>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt="google image"
              height={20}
              width={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt="facebook image"
              height={20}
              width={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
