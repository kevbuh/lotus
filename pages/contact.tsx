import React from "react";
import HomeLayout from "../components/HomeLayout";

function Contact() {
  return (
    <HomeLayout>
      <div className="flex flex-col mx-auto max-w-2xl">
        <p className="text-6xl font-bold mt-20 mx-auto flex mb-32 ">
          Contact Information
        </p>

        <div className="flex flex-col mx-auto max-w-3xl">
          <div className="mx-auto mb-40 flex flex-col">
            <div className="flex flex-col mx-auto text-center text-sm md:text-xl">
              <a className="link link-hover">720-468-9539</a>
              <a className="link link-hover">sudarshand@lotuscolorado.org</a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Contact;
