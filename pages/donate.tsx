import Link from "next/link";
import React from "react";
import HomeLayout from "../components/HomeLayout";

function Donate() {
  return (
    <HomeLayout>
      <div className="flex flex-col mx-auto max-w-2xl">
        <p className="text-6xl font-bold mt-20 mx-auto flex mb-32 ">
          Donatations
        </p>

        <div className="flex flex-col mx-auto max-w-3xl">
          <div className="mx-auto mb-40 flex flex-col">
            <div className="flex flex-col mx-auto text-center text-sm md:text-xl">
              <p>Make a Donation to the Lotus Foundation to help our cause!</p>
              <Link href="https://donate.stripe.com/test_9AQcPB60h9yO46YdQQ">
                <button className="mx-auto bg-red-50 rounded-xl py-3 text-xl font-bold mt-8 max-w-sm w-full hover:bg-red-200 ">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Donate;
