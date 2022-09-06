import Link from "next/link";
import React from "react";
import HomeLayout from "../components/HomeLayout";

const FocusCard = ({ name }: any) => {
  return (
    <button className="mx-2 py-8 bg-stone-100 font-bold text-3xl">
      {name}
    </button>
  );
};

function About() {
  return (
    <HomeLayout>
      <div className="flex flex-col mx-auto max-w-2xl">
        <p className="text-6xl font-bold mt-20 mx-auto flex mb-48 ">About</p>

        <div className="flex flex-col mx-auto max-w-3xl">
          <div className="mb-8 text-5xl mr-auto font-bold text-center flex ">
            Who We Are
          </div>
          <div className="mx-auto mb-40 flex flex-col">
            <p className="my-4 text-xl">
              We are a group of students who seek to empower others to enact
              change in their local community
            </p>
          </div>
        </div>

        <div className="flex flex-col mx-auto max-w-3xl">
          <div className="mb-8 text-5xl mr-auto font-bold text-center flex ">
            Focus Areas
          </div>
          <div className="mx-auto mb-40 flex flex-col">
            <div className="grid-cols-3 pag-4 grid">
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
