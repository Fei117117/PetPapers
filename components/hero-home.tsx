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
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              // className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              {/* <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div> */}
            </div>
            <h1
              className="mb-6 text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              It's hard to cope with pet loss <br className="max-lg:hidden" />
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                And it's tough to remember the small things.{" "}
                <br className="max-lg:hidden" />
                PetPapers helps you heal by keeping your stories together,
                forever.
              </p>
              {/* Email subscription form */}
              <div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.8),transparent)1]">
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
                    className="w-full sm:w-auto px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-300 shadow-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="btn group w-full sm:w-auto bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-600"
                  >
                    Notify Me
                  </button>
                </form>
                <p className="text-center mt-4 text-gray-600">{message}</p>
              </div>

              {/* <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
