import Link from "next/link";
import React from "react";
import Image from "next/image";

const InvolvedCard = ({ title, caption, buttonTitle }: any) => {
  return (
    <div className="">
      <div className="">
        <p className="my-2 font-bold text-lg md:text-3xl">{title}</p>
        <p className="mt-2 mb-4 md:text-xl">{caption}</p>
      </div>
      <Link href={`${buttonTitle.toLowerCase()}`}>
        <button className="bg-red-50 rounded-xl py-3 text-xl font-bold mt-4 max-w-sm w-full hover:bg-red-200">
          {buttonTitle}
        </button>
      </Link>
    </div>
  );
};

const TeamCard = ({ name, caption, image, linkedin }: any) => {
  return (
    <Link href={linkedin}>
      <div className="my-4 hover:bg-stone-100 hover:p-3 cursor-pointer">
        <div>
          {/* <img src={image} alt={name} width={300} height={400} /> */}
          <Image
            src={image}
            alt="Picture of the author"
            width="300px"
            height="300px"
          />
        </div>
        <div>
          <p className="my-2 font-bold sm:text-2xl ">{name}</p>
          <p className="my-2 sm:text-xl">{caption}</p>
        </div>
      </div>
    </Link>
  );
};

function Hero() {
  return (
    <>
      <div className="py-40 max-w-8xl bg-[url('https://raw.githubusercontent.com/kevbuh/lotus/main/public/flatirons-hd.jpg')] ">
        <div className="mx-auto flex flex-col rounded-xl">
          <svg
            width="132"
            height="81"
            viewBox="0 0 132 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-8"
          >
            <path
              d="M59.9671 5.25638C57.2096 8.18617 54.4522 11.4606 53.7628 12.4947C52.4703 14.4766 52.5564 14.6489 55.8309 17.5787C57.7266 19.3021 60.5703 22.6628 62.1213 24.9894C63.7586 27.316 65.3096 29.2979 65.5681 29.2979C65.9128 29.2979 67.1192 27.833 68.3256 26.0234C69.4458 24.2138 72.2894 20.9394 74.4437 18.6989C78.149 15.0798 78.4075 14.4766 77.4596 12.7532C76.2532 10.4266 66.3437 0 65.3958 0C65.0511 0 62.6383 2.3266 59.9671 5.25638Z"
              fill="black"
            />
            <path
              d="M25.9298 10.599C24.2926 14.8213 23.1724 22.232 23.4309 26.1958L23.6894 30.4181L28.0841 31.883C30.4107 32.7447 33.599 34.0373 35.0639 34.7266L37.649 36.1053L39.4586 28.6947C40.4926 24.6447 41.5266 21.1117 41.699 20.9394C41.9575 20.6809 43.3362 21.3702 44.8011 22.4043C46.783 23.8692 47.3862 24.8171 47.0415 26.1958C46.783 27.1437 46.1798 30.6766 45.6628 34.0373L44.7149 40.0692L50.5745 46.1011C56.4341 52.2192 61.6043 60.6639 63.7586 67.6436C64.2756 69.5394 64.9649 71.6936 65.2235 72.383C65.3958 73.0724 66.6022 70.6596 67.7224 67.0404C70.2213 59.199 76.6841 49.0309 82.4575 43.9468L86.5075 40.4139L85.3873 33.7788C84.7841 30.1596 84.2671 26.4543 84.1809 25.5926C84.0947 24.7309 85.1288 23.3522 86.766 22.3181L89.4373 20.5947L90.816 24.7309C91.5054 26.9713 92.3671 30.5043 92.7117 32.4862L93.2288 36.1053L95.9862 34.7266C97.4511 33.9511 100.812 32.6585 103.397 31.7968L108.136 30.3319L108.05 25.5926C107.964 23.0075 107.275 18.182 106.413 14.7351C104.776 7.84153 105.551 8.10004 96.8479 11.3745C82.3713 16.7171 70.049 30.5043 66.7745 45.0671L65.8266 49.3756L63.5 42.3096C60.7426 33.8649 57.0373 27.833 50.833 21.8011C46.1798 17.2341 35.9256 11.2883 29.8937 9.6511C26.8777 8.7894 26.533 8.87557 25.9298 10.599Z"
              fill="black"
            />
            <path
              d="M3.69793 35.0713C-0.610584 35.5021 -0.782924 36.1915 1.28516 44.2053C4.81814 57.8202 14.7277 69.7979 27.3947 75.9159C33.2543 78.7596 42.3883 81 47.8171 80.9138H51.2639L46.9554 78.6734C36.8735 73.417 27.8256 64.283 22.5692 53.8564C19.8979 48.5138 17.6575 41.534 18.3469 40.7585C18.6054 40.5862 20.0703 40.6723 21.7075 40.9308C24.2926 41.4479 24.8958 42.0511 26.1883 45.7564C29.9798 56.2691 39.8894 67.0404 50.4022 72.1245C53.6766 73.6755 56.8649 74.9681 57.382 74.9681C59.0192 74.9681 57.2958 68.85 53.6766 61.784C47.1277 48.7723 33.6852 38.7766 18.7777 35.7606C12.2288 34.4681 11.0224 34.4681 3.69793 35.0713Z"
              fill="black"
            />
            <path
              d="M116.753 34.9851C115.805 35.1575 112.876 35.7606 110.29 36.2777C97.1064 38.8628 83.6639 49.2894 77.2873 62.0426C73.8405 68.85 72.2894 74.9681 73.9266 74.9681C75.9947 74.9681 84.267 70.7457 88.6617 67.3851C95.1245 62.4734 99.6915 56.7862 103.483 48.6C106.757 41.7926 107.964 40.5862 111.928 40.5C115.03 40.5 108.826 55.5798 102.277 63.8521C97.4511 69.7979 92.1947 74.2787 85.1288 78.0702L79.7 81H83.6639C92.9702 81 105.982 76.0021 114.34 69.1947C119.08 65.4032 125.284 56.6138 127.955 50.2372C130.11 44.8085 131.919 36.3638 131.057 35.8468C130.11 35.2436 118.563 34.5543 116.753 34.9851Z"
              fill="black"
            />
          </svg>

          <p className="text-5xl md:text-6xl mx-auto font-bold text-center flex mb-6">
            LOTUS FOUNDATION
          </p>
          <p className="text-center md:text-xl max-w-sm flex mx-auto">
            Engage in community service projects and advocate issues with local
            leaders.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-24 px-3 md:mx-0">
        <div className="flex flex-col mx-auto max-w-3xl">
          <div className="mb-4 text-5xl mr-auto font-bold text-center flex ">
            Our Mission
          </div>
          <div className="mx-auto mb-16 flex flex-col">
            <p className="my-4 text-xl">
              The Lotus Foundation provides a platform for students to engage in
              community service projects in neighboring communities and advocate
              issues with local leaders.
            </p>
            <Link href="/about">
              <p className="bg-red-50 hover:bg-red-100 rounded-xl py-3 text-xl font-bold max-w-xs text-center mt-4 cursor-pointer">
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
              caption="We need volunteers to help expand our impact. We depend on them for continued support of our mission in Boulder."
              buttonTitle="Volunteer"
            />
            <InvolvedCard
              title="Make a Donation"
              caption="Your contributions will help provide vital support toward advocating local issues for the local Boulder area."
              buttonTitle="Donate"
            />

            <InvolvedCard
              title="Advocate &nbsp; Today"
              caption="Join our advocacy group so you can learn and act on how you can help create change in our community. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
              buttonTitle="Advocate"
            />
          </div>
        </div>

        <div className="flex flex-col mx-auto pt-32 pb-32">
          <p className="mb-8 text-5xl mr-auto font-bold">Team Members</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-3xl">
            <TeamCard
              name="Sudarshan Damodharan"
              caption="Co-Founder"
              linkedin="https://www.linkedin.com/in/sudarshan-damodharan/"
              image="https://www.colorado.edu/cusg/sites/default/files/styles/large_square_thumbnail/public/callout/Sudarshan_0.jpg?itok=b_RsDZRf"
            />
            <TeamCard
              name="Aaditya Pore"
              caption="Co-Founder"
              linkedin="https://www.linkedin.com/in/aadityapore/"
              image="https://media.licdn.com/dms/image/D5603AQHRJVUcRMXJuw/profile-displayphoto-shrink_800_800/0/1674782202961?e=2147483647&v=beta&t=t52SG8eHupZ0M7_AmqilYqS2jiT1Ms37WhPYTzSyBiI"
            />

            <TeamCard
              name="Nihal Pandra"
              caption="Co-Founder"
              linkedin="https://www.lotuscolorado.org/"
              image="https://www.lotuscolorado.org/IMG_0299%204.jpg"
            />

            <TeamCard
              name="Kevin Buhler"
              caption="Chief Technology Officer"
              linkedin="https://www.linkedin.com/in/kevin-buhler/"
              image="https://media.licdn.com/dms/image/D5603AQHmCeGif69IMg/profile-displayphoto-shrink_400_400/0/1677097124279?e=1682553600&v=beta&t=loeNWYL8ikyuCBKvVYwFhK29xb52hH0WKebZg6By8WM"
            />
            <TeamCard
              name="Sydney Strecker"
              caption="Chief Financial Officer"
              linkedin="https://www.linkedin.com/in/sydneystrecker/"
              image="https://media.licdn.com/dms/image/D5603AQEHVo6kaWbZOA/profile-displayphoto-shrink_800_800/0/1672696125274?e=2147483647&v=beta&t=y8tokPUC8wjmxO41BYwNTYEBoPxAdFJrnhK9epwXDi8"
            />
            <TeamCard
              name="Ian von Pechmann"
              caption="Tech Lead"
              linkedin="https://www.linkedin.com/in/ianvonpechmann/"
              image="https://media.licdn.com/dms/image/C5603AQE3vhcq3wB7KQ/profile-displayphoto-shrink_200_200/0/1657408058664?e=1681344000&v=beta&t=2CgtfgURNaahHshbl-8qrFhk6oX5sFGIpFhTg8PREYM"
            />
            <TeamCard
              name="Ahmed Zahid"
              caption="Project Manager "
              linkedin="https://www.linkedin.com/in/ahmedzahid8/"
              image="https://www.lotuscolorado.org/IMG_0301%204.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
