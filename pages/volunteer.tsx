import React from "react";
import HomeLayout from "../components/HomeLayout";

function Volunteer() {
  return (
    <HomeLayout>
      <div className="flex flex-col mx-auto max-w-2xl">
        <p className="text-6xl font-bold mt-20 mx-auto flex mb-32 ">
          Volunteer
        </p>

        <div className="flex flex-col max-w-3xl">
          <p className="text-4xl mb-4 ">Who You'll Help</p>
          <p className="text-xl mb-24 ">
            We help a broad range of people all throughout the Boulder area.
            From the unhoused population, to the brightest young learners, we
            are there to help.
          </p>

          <p className="text-4xl mb-4 ">What would I be doing?</p>
          <p className="text-xl mb-24 ">
            We have several upcoming projects to be announced. Check back, or
            contact sudarshand@lotuscolorado.org to figure out what we are
            working on.
          </p>

          <div className="mb-40 flex flex-col">
            <div className="flex flex-col text-sm md:text-xl bg-red-50 px-4 py-8 rounded">
              <p className="text-2xl mb-4 mx-auto">
                Interested? Contact below to start helping.
              </p>
              <a className="link link-hover mx-auto">720-468-9539</a>
              <a className="link link-hover mx-auto">
                sudarshand@lotuscolorado.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Volunteer;
