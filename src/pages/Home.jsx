import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Courses } from "../components/Courses";
import { Project } from "../components/Project";
import { Testimonial } from "../components/Testimonial";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Project />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
