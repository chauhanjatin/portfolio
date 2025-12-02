import React from "react";
import learnbud from "../assets/images/learnbud-ai.png";
import { Link } from "react-router-dom";
import learnbud1 from "../assets/images/learnbud1.png";
import learnbud2 from "../assets/images/learnbud2.png";
import learnbud3 from "../assets/images/learnbud3.png";
import learnbud4 from "../assets/images/learnbud4.png";
import learnbud5 from "../assets/images/learnbud5.png";
import learnbud6 from "../assets/images/learnbud6.png";
import learnbud7 from "../assets/images/learnbud7.png";
import learnbud8 from "../assets/images/learnbud8.png";
import learnbud9 from "../assets/images/learnbud9.png";
import learnbud10 from "../assets/images/learnbud10.png";
import learnbud11 from "../assets/images/learnbud11.png";
import learnbud12 from "../assets/images/learnbud12.png";
import learnbud13 from "../assets/images/learnbud13.png";
import learnbud14 from "../assets/images/learnbud14.png";
import Cta from "../components/Cta";
import Testimonial from "../components/Testimonial";

export default function Projectdetails1() {
  return (
    <div>
      <div className="containerX relative z-10">
        <h2 className="text-center mt-[150px]">LearnBud AI</h2>

        <div className="my-[60px]">
          <img src={learnbud} alt="" className="w-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="border-[10px] border-white rounded-[40px] p-[30px] sticky top-[50px]">
              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Project</h4>
                <h4 className="mt-[10px] font-medium">LearnBud AI</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Category</h4>
                <h4 className="mt-[10px] font-medium">Mobile Application</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Industry</h4>
                <h4 className="mt-[10px] font-medium">AI Learning</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Role</h4>
                <h4 className="mt-[10px] font-medium">UI/UX Designer</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Tasks</h4>
                <h4 className="mt-[10px] font-medium">
                  User Research & Testing, UI Design, Design Strategy
                </h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Year</h4>
                <h4 className="mt-[10px] font-medium">2025</h4>
              </div>

              <div className="bg-[#8CD565] py-3 px-6 border-[#8CD565] border border-1 rounded-[40px] text-center transition-all duration-300 hover:bg-transparent hover:border-black">
                <Link to="/">
                  <h4 className="font-light">View Figma</h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="mb-[20px] font-medium">Introduction</h3>

            <h4 className="text-[#1E1E1E80] font-normal mb-4">
              <span className="text-black">LearnBud AI</span> is a modern mobile
              learning application designed to help students study smarter with
              the support of artificial intelligence. The app provides a
              complete digital learning experience where users can access
              courses, watch video lessons, generate AI-powered notes, attempt
              quizzes, track progress, and communicate with teachers — all
              within a sleek, futuristic dark-mode interface. The goal of the
              project is to create an intuitive, visually immersive, and highly
              functional platform that makes learning easier, faster, and more
              engaging for students of all level.
            </h4>

            <h4 className="text-[#1E1E1E80]">
              The goal of the project is to create an intuitive, visually
              immersive, and highly functional platform that makes learning
              easier, faster, and more engaging for students of all level.
            </h4>

            <div className="my-[60px]">
              <h3 className="font-medium">Primary Goals</h3>
              <ul className="list-disc text-[18px] ms-[30px]">
                <li className="mt-[10px]">
                  Create a seamless learning experience
                </li>
                <li className="mt-[10px]">Build an easy and fast login flow</li>
                <li className="mt-[10px]">
                  Present lessons, quizzes, and assignments clearly
                </li>
                <li className="mt-[10px]">Provide AI-based note generation</li>
                <li className="mt-[10px]">
                  Include a social/interactive element (profiles, chats,
                  progress tracking)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Core Features</h3>
              <ul className="list-disc text-[18px] ms-[30px]">
                <li className="mt-[10px]">AI-generated notes</li>
                <li className="mt-[10px]">Video learning</li>
                <li className="mt-[10px]">Interactive quizzes</li>
                <li className="mt-[10px]">Assignment management</li>
                <li className="mt-[10px]">Personal progress tracking</li>
                <li className="mt-[10px]">Student–teacher chat</li>
                <li className="mt-[10px]">Profile & achievements</li>
                <li className="mt-[10px]">Notifications</li>
                <li className="mt-[10px]">Dark theme interface</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="logos my-[80px]">
        <div className="logo_items">
          <img src={learnbud1} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud2} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud3} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud4} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud5} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud6} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud7} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud8} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud9} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud10} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud11} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud12} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud13} alt="" />
        </div>
        <div className="logo_items">
          <img src={learnbud14} alt="" />
        </div>
      </div>

      <div className="containerX">
        <div className=" startConversation_img border-[10px] border-white rounded-[40px] p-[50px]">
          <div className="flex items-center gap-[60px] justify-between">
            <h2 className="font-medium">
              Start a Conversation That <br /> Brings Ideas to Life
            </h2>
            <div className="bg-[#8CD565] py-3 px-6 border-[#8CD565] border border-1 rounded-[40px] text-center inline-block transition-all duration-300 hover:bg-transparent hover:border-black">
              <Link to="/">
                <h4 className="font-light text-nowrap">Say "Hello Jatin"</h4>
              </Link>
            </div>
          </div>
        </div>

        <Testimonial></Testimonial>
      </div>

      <Cta></Cta>

    </div>
  );
}