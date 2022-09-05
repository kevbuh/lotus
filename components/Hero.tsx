import Link from "next/link";
import React from "react";
import Image from "next/image";

const InvolvedCard = ({ title, caption, buttonTitle }: any) => {
  return (
    <div className="h-80">
      <div className="h-40">
        <p className="my-2 font-bold text-3xl">{title}</p>
        <p className="my-2 text-xl">{caption}</p>
      </div>
      <Link href={`${buttonTitle.toLowerCase()}`}>
        <button className="bg-red-50 rounded-xl py-3 text-xl font-bold mt-auto max-w-sm w-full">
          {buttonTitle}
        </button>
      </Link>
    </div>
  );
};

const TeamCard = ({ name, caption, image }: any) => {
  return (
    <div className="h-80 mt-4">
      <div className={`h-16 sm:h-28 md:h-40 bg-stone-100`}>
        <img src={image} alt={name} width={300} height={400} />
      </div>
      <div className="h-40 pt-20">
        <p className="my-2 font-bold text-2xl ">{name}</p>
        <p className="my-2 text-xl">{caption}</p>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <>
      <div className="grid gap-8 pb-64 pt-40 bg-[url('https://images.squarespace-cdn.com/content/v1/5fa1ea8264297e61cafdeed9/1604453251605-MNNOBV4IJS8DAJVLJEH8/image-asset.jpeg')] ">
        <div className=" mx-auto flex flex-col rounded-xl">
          <p className="text-5xl md:text-7xl  mx-auto font-bold text-center flex mb-8 md:mb-16">
            LOTUS FOUNDATION
          </p>
          <p className="text-center md:text-xl max-w-sm flex mx-auto">
            Engage in community service projects and advocate issues with local
            leaders.
          </p>
        </div>
        {/* <div className="flex my-auto">
          <img
            src="http://bldrfly.com/wp-content/uploads/2020/07/flatiron-winter-headerr.jpg"
            alt="Boulder Flatirons"
            width={600}
          />
        </div> */}
      </div>
      <div className="flex flex-col mt-24 mx-6 md:mx-0">
        <div className="flex flex-col mx-auto max-w-3xl">
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

        <div className="flex flex-col  mx-auto pt-16">
          <p className="mb-8 text-5xl mr-auto font-bold">Get Involved</p>
          <div className="grid grid-cols-3 gap-8 mx-auto max-w-3xl">
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

        <div className="flex flex-col mx-auto pt-16 pb-32">
          <p className="mb-8 text-5xl mr-auto font-bold">Team Members</p>
          <div className="grid grid-cols-3 gap-8 mx-auto max-w-3xl">
            <TeamCard
              name="Sudarshan Damodharan"
              caption="Co-Founder"
              image="https://media-exp1.licdn.com/dms/image/C4D03AQHfsrLS1r5pgw/profile-displayphoto-shrink_400_400/0/1637940455159?e=1668038400&v=beta&t=LindApAp-spoexnufpKKDJSukgnmvaQAOlSV8TUjSWE"
            />
            <TeamCard
              name="Aaditya Pore"
              caption="Co-Founder"
              image="https://media-exp1.licdn.com/dms/image/C5603AQFUpurxT4BF3w/profile-displayphoto-shrink_200_200/0/1637351765929?e=2147483647&v=beta&t=w2kp5nu9TeHNLJT0NBJUIEo8l_NJRKux8lcvQwf-Gdo"
            />

            <TeamCard
              name="Nihal Pandra"
              caption="Co-Founder"
              image="IMG_8929 2.jpg"
            />

            <TeamCard
              name="Kevin Buhler"
              caption="CTO"
              image="https://pbs.twimg.com/profile_images/1537269080419274752/sfuDdauh_400x400.jpg"
            />
            <TeamCard
              name="Ian von Pechmann"
              caption="CTO"
              image="https://media-exp1.licdn.com/dms/image/C5603AQE3vhcq3wB7KQ/profile-displayphoto-shrink_200_200/0/1657408058664?e=1665014400&v=beta&t=BP3DfOUXA550FgoIq1EMpoY4nvkUrMhD9ooVkvC_RUk"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
