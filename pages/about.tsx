import Link from "next/link";
import React from "react";
import HomeLayout from "../components/HomeLayout";

const FocusCard = ({ name }: any) => {
  return (
    <button className="mx-2 px-4 py-8 bg-stone-100 font-bold text-2xl">
      {name}
    </button>
  );
};

function About() {
  return (
    <HomeLayout>
      <div className="flex flex-col mx-auto max-w-2xl">
        {/* <p className="text-6xl font-bold mt-20 mx-auto flex mb-48 ">About</p> */}

        <div className="flex flex-col mx-auto max-w-3xl">
          <div className="mx-auto mb-40 flex flex-col">
            <p className="mb-4 mt-40 mx-4 sm:mx-0 text-4xl text-center">
              Our mission is to seek to empower others to enact change in their
              local community.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:mx-auto max-w-3xl mx-3">
          <div className="mb-8 text-5xl mr-auto font-bold text-center flex ">
            How We Work
          </div>
          <div className="mx-auto mb-40 flex flex-col">
            <p className="text-2xl">
              We strive to connect people to temporary housing, resources, and
              specialized support in times of crisis.
            </p>
            <br />
            <p className="text-2xl">
              Our programs are aligned with our commitment to advancing equity
              in communities.
            </p>
            <br />
            <p className="text-2xl">
              We aim to improving psychosocial wellbeing, alleviating financial
              burden, and strengthening community and belonging for everyone.
            </p>
          </div>
          <div className="mx-auto mb-40 flex flex-col">
            <div className="mb-8 text-5xl mr-auto font-bold text-center flex ">
              Focus Areas
            </div>
            <div className="sm:grid-cols-3 grid-cols-1 gap-4 grid">
              <FocusCard name="Sustainability" />
              <FocusCard name="Unhoused Populations" />
              <FocusCard name="Education" />
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default About;
