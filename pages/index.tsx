import type { NextPage } from "next";
import Hero from "../components/Hero";
import HomeLayout from "../components/HomeLayout";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Hero />
    </HomeLayout>
  );
};

export default Home;
