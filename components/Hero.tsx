import Link from "next/link";
import React from "react";
import Image from "next/image";

const InvolvedCard = ({ title, caption, buttonTitle }: any) => {
  return (
    <div className="h-80">
      <div className="h-32">
        <p className="m-2 font-bold text-3xl">{title}</p>
        <p className="m-2 text-xl">{caption}</p>
      </div>
      <button className="bg-red-100 rounded-xl p-3 text-xl font-bold mt-auto">
        {buttonTitle}
      </button>
    </div>
  );
};

function Hero() {
  return (
    <>
      <div className="grid  gap-8 pb-64 pt-40 bg-[url('http://bldrfly.com/wp-content/uploads/2020/07/flatiron-winter-headerr.jpg')]">
        <div className="p-8 bg-white mx-auto flex flex-col rounded-xl">
          <p className="mb-8 text-6xl mx-auto font-bold text-center flex">
            Lotus Foundation
          </p>
          <p className="text-center text-lg">Boulder Based Non-Profit</p>
        </div>
        {/* <div className="flex my-auto">
          <img
            src="http://bldrfly.com/wp-content/uploads/2020/07/flatiron-winter-headerr.jpg"
            alt="Boulder Flatirons"
            width={600}
          />
        </div> */}
      </div>
      <div className="flex flex-col mt-24">
        <div className="flex flex-col mx-auto max-w-4xl">
          <div className="mb-8 text-5xl mr-auto font-bold text-center flex ">
            Our Mission
          </div>
          <div className="mx-auto mb-40 flex flex-col">
            <p className="my-4 text-xl">
              The Lotus Foundation provides a platform for students to engage in
              community service projects in neighboring communities and advocate
              issues with local leaders.
            </p>
            <Link href="/about">
              <p className="bg-red-100 rounded-xl py-3 text-xl font-bold max-w-xs text-center mt-4 cursor-pointer">
                Learn More
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mx-auto">
          <p className="mb-8 text-5xl mr-auto font-bold">Get Involved</p>
          <div className="grid grid-cols-3 gap-4 mx-auto max-w-4xl">
            <InvolvedCard
              title="Volunteer Opportunities"
              caption="We need volunteers to"
              buttonTitle="Volunteer"
            />
            <InvolvedCard
              title="Make a Donation"
              caption="With your contributions, blha"
              buttonTitle="Donate"
            />

            <InvolvedCard
              title="Advocate"
              caption="Join our advocacy group"
              buttonTitle="Advocate"
            />
          </div>
        </div>

        <div className="mx-auto mb-8 text-4xl font-semibold">Team</div>
        <div className="mx-auto mb-64">
          <p className="text-xl font-light mb-8 text-center mx-auto">
            Get to know the team members of this organization
          </p>
          <div className="flex">
            <div className="avatar flex items-center mx-auto flex-wrap gap-4">
              <div className="md:w-24 w-16 rounded-full bg-stone-100"></div>
              <div className="md:w-24 w-16 rounded-full bg-stone-100"></div>
              <div className="md:w-24 w-16 rounded-full bg-stone-100"></div>
              <div className="md:w-24 w-16 rounded-full bg-stone-100"></div>
              <div className="md:w-24 w-16 rounded-full bg-stone-100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
