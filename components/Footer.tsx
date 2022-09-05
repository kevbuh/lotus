import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-20 md:px-16 font-semibold flex mx-auto flex-col border-t-2">
      <div className="footer grid-cols-2 lg:grid-cols-4 mb-2 text-xl ">
        <div className="flex flex-col mx-auto">
          <a className="link link-hover text-2xl text-center">
            LOTUS FOUNDATION
          </a>
        </div>
        <div className="flex flex-col mx-auto text-center text-sm md:text-xl">
          <a className="link link-hover"> &copy; 2022 Lotus Foundation</a>
          <a className="link link-hover">720-1168-9539</a>
          <a className="link link-hover">sudarshand@lotuscolorado.org</a>
        </div>
        <div className="flex flex-col mx-auto text-center">
          <Link href="/volunteer">
            <a className="link link-hover">Join Us</a>
          </Link>
          <a className="link link-hover">Advocacy</a>
          <a className="link link-hover">Volunteer</a>
          <a className="link link-hover">Donate</a>
        </div>
        <div className="flex flex-col mx-auto text-center">
          <a className="link link-hover">Info </a>
          <a className="link link-hover">About </a>
        </div>
      </div>

      <p className="text-sm max-w-xl text-center flex mb-8 mt-16 mx-auto">
        The Lotus Foundation is a Non-Profit Corporation created under the
        Colorado Secretary of State. At this time all donations are not
        tax-deductible.
      </p>
    </footer>
  );
}

export default Footer;
