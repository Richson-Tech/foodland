import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
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
          <p>
            Have a problem? <Link href="/"></Link>Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
