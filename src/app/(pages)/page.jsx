import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import AdvantagesSection from "@components/sections/Advantages";
import HowWeWorkSection from "@components/sections/HowWeWork";
import LatestPostsSection from "@components/sections/LatestPosts";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      <HeroOneSection />
      {/* <PartnersSlider /> */}
      <AboutSection />

      <ServicesSection />
      <AdvantagesSection />
      <HowWeWorkSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
    </>
  );
}
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}