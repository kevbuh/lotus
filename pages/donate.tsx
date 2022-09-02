import React from "react";
import HomeLayout from "../components/HomeLayout";

function Donate() {
  return (
    <HomeLayout>
      <div className="flex flex-col mx-auto max-w-2xl">
        <p className="text-6xl font-bold mt-20 mx-auto flex mb-16">Donate</p>
        <div className="flex flex-col mx-auto">
          <div className="my-t mb-16">
            <p className="text-4xl font-bold text-center mb-4">Who We Are</p>
            <p className="text-center">
              We are a group of students who seek to empower others to enact
              change in their local community
            </p>
          </div>
          <div className="mx-auto flex flex-col mb-40">
            <p className="text-4xl font-bold text-center mb-4">Focus Areas</p>
            <div>
              <p>Sustainability</p>
              <p>Unhoused Populations</p>
              <p>Education</p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Donate;
