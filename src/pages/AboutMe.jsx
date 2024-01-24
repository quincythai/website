import React from "react";
import Divider from "../components/Divider";
import portrait from "/pfp.jpeg";

const AboutMe = () => {
  return (
    <>
      <h1 className="py-6 text-center text-5xl font-bold">About Me</h1>
      <div className="mt-4 px-24 text-lg">
        <div className="float-right my-4 ml-4 mr-20">
          <img
            className="w-56 rounded-full"
            src={portrait}
            alt="Portrait of myself"
          />
        </div>
        <p className="mb-4">
          Hi! I am Quincy and I am a junior at UC Berkeley studying
          Computer Science with a minor in data science.
        </p>
        <p className="mb-4">
          I am fascinated by design, and how to create applications that has a seamless, aesthetic user experience. I love to challenge myself through working on projects, and my greatest strength is my devotion to learning the in's and out's of things I am interested in.
        </p>
        <p className="mb-4">
          Prior to Berkeley, I was studying at{" "}
          <a href="https://www.chabotcollege.edu/">Chabot College</a>, and was
          an active member of MESA, a program that helped underrepresented students succeed in transfering to a 4 year university. As a first-gen college student, I
          strongly believe that community college is a fundamental chapter in my life, and I would love to talk more about it if you are interested in my journey.
        </p>
        <p className="mb-4">
          I am also a member of{" "}
          <a href="https://www.instagram.com/barbellberkeley/">
            Barbell at Berkeley
          </a>
          , and have been weightlifting and powerlifting for 2 years.
        </p>
        <p className="mb-4">
          Asides from academics, I love lifting, hanging
          out with friends, playing video games, admiring fashion, and enjoying the simple things
          in life.
        </p>
        <p className="mb-4">
          Reach out if you ever wanted to talk!
        </p>
      </div>
    </>
  );
};

export default AboutMe;
