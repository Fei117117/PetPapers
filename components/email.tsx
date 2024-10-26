"use client";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { SetStateAction, useState } from "react";
import emailjs from "emailjs-com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// import Avatar01 from "@/public/images/avatar-01.jpg";
// import Avatar02 from "@/public/images/avatar-02.jpg";
// import Avatar03 from "@/public/images/avatar-03.jpg";
// import Avatar04 from "@/public/images/avatar-04.jpg";
// import Avatar05 from "@/public/images/avatar-05.jpg";
// import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailPattern.test(email)) {
      const templateParams = {
        user_email: email,
      };

      emailjs
        .send(
          "service_s1zycp3", // Replace with your EmailJS service ID
          "template_54o2e5v", // Replace with your EmailJS template ID
          templateParams,
          "JlpmbJo_CxRsT0bcV" // Replace with your EmailJS user ID
        )
        .then(
          (response: { status: any; text: any }) => {
            console.log(
              "Email successfully sent!",
              response.status,
              response.text
            );
            setMessage("Email sent successfully!");
          },
          (err: any) => {
            console.log("Failed to send email. Error: ", err);
            setMessage("Failed to send email. Please try again.");
          }
        );
    } else {
      alert("Please enter a valid email address.");
    }
  };
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}

        {/* Section header */}
        <div className="pb-12 text-center md:pb-16">
          <div className="mx-auto max-w-3xl">
            {/* Email subscription form */}
            <div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.blue.300/.8),transparent)1]">
              <form
                className="mx-auto max-w-lg sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="zoom-y-out"
                data-aos-delay={450}
                onSubmit={handleEmailSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full sm:w-auto px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300 shadow-lg"
                  required
                />
                <button
                  type="submit"
                  className="btn group w-full sm:w-auto bg-gradient-to-r from-blue-300 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-600"
                >
                  Notify Me
                </button>
              </form>
              <p className="text-center mt-4 text-gray-600">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
