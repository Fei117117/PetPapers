"use client";
import { useRef } from "react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FeaturesSection() {
  // Create a ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Function to scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -270, // Adjust this value to control the scroll distance
        behavior: "smooth",
      });
    }
  };
  // Function to scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 270, // Adjust this value to control the scroll distance
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
      {/* Section Header */}
      <div
        className="mx-auto max-w-3xl"
        data-aos="zoom-y-out"
        data-aos-delay={600}
      >
        <div className="relative rounded-2xl bg-orange-100 px-5 py-8 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.orange.300),transparent)1]">
          <div className="relative mb-8">
            <span className="text-[20px] font-semibold text-orange-800">
              How to Use This Website
            </span>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-300 text-white rounded-full p-1 shadow-md hover:bg-orange-400 lg:hidden" // lg:hidden hides the button on large screens
            onClick={scrollLeft}
          >
            {"<"}
          </button>

          <div className="font-mono text-gray-700">
            {/* Flex container with horizontal scroll on mobile */}
            <div
              className="flex flex-nowrap justify-around items-center space-x-8 overflow-x-auto scrollbar-hide"
              ref={scrollContainerRef}
            >
              {/* Step 1 */}
              <div className="text-center min-w-[250px]">
                <img
                  src={`${basePath}/images/one.png`}
                  alt="Number One Icon"
                  style={{ width: "40px", height: "40px" }}
                  className="mx-auto"
                />
                <span className="block mt-5 text-orange-800">
                  Tell your pet’s marvelous life story and upload your favorite
                  photos with our simple, easy-to-use online tool!
                </span>
              </div>

              {/* Step 2 */}
              <div className="text-center min-w-[250px]">
                <img
                  src={`${basePath}/images/two.png`}
                  alt="Number Two Icon"
                  style={{ width: "40px", height: "40px" }}
                  className="mx-auto"
                />
                <span className="block mt-5 text-orange-800">
                  Heal at your own pace, with full flexibility. Simply let us
                  know when you’re finished.
                </span>
              </div>

              {/* Step 3 */}
              <div className="text-center min-w-[250px]">
                <img
                  src={`${basePath}/images/three.png`}
                  alt="Number Three Icon"
                  style={{ width: "40px", height: "40px" }}
                  className="mx-auto"
                />
                <span className="block mt-5 text-orange-800">
                  Sit back while we deliver a beautiful keepsake book full of
                  your stories and photos to cherish forever.
                </span>
              </div>
              {/* Right Scroll Button (visible only on mobile) */}
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-300 text-white rounded-full p-1 shadow-md hover:bg-orange-400 lg:hidden" // lg:hidden hides the button on large screens
                onClick={scrollRight}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
