import React from "react";

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
      <div className=" flex flex-col">
        <div className="mx-auto my-8 text-4xl font-semibold">Our Mission</div>
        <div className="mx-auto mb-40">
          <p className="text-xl font-light card max-w-xl mb-8 text-center px-4 py-12 rounded-xl border-4 border-stone-100">
            The Lotus Foundation provides a platform for students to engage in
            community service projects in neighboring communities and advocate
            issues with local leaders.
          </p>
          <p className="underline">Learn More</p>
        </div>
        <div className="mx-auto my-8 text-4xl font-semibold">Services</div>
        <div className="mx-auto mb-32">
          <p className="text-xl font-light mb-8 text-center">
            Here&apos;s how we can help
          </p>
          <div className="grid grid-rows-2 md:grid-cols-2 gap-8 ">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">Inclusivity</h2>
                <p>
                  One of our main priorities is keeping Boulder Colorado an
                  inclusive place.
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">Equality</h2>
                <p>
                  It is essential to us to provide services for equal chance
                  world.
                </p>
              </div>
            </div>
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
