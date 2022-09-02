import Link from "next/link";
import React from "react";

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
      <div className="hero my-56">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <div
              className="text-6xl font-semibold mb-4
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-lotus via-pink-400 to-red-400
            animate-text"
            >
              Lotus Foundation{" "}
            </div>
            <p className="mb-5">A Non-Profit Company based in Boulder, CO.</p>
            {/* <button className="btn btn-ghost  font-bold  bg-stone-100">
            Learn More
          </button> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto mt-16 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
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
