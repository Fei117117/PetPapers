"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FeaturesSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
      {/* Section Header */}
      <div
        className="mx-auto max-w-3xl"
        data-aos="zoom-y-out"
        data-aos-delay={600}
      >
        <div className="relative rounded-2xl bg-white-100 px-5 py-8 shadow-xl before:pointer-events-none before:absolute before:-inset-5  before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.orange.300),transparent)1]">
          <div className="relative mb-8">
            <h3 className="text-xl text-gray-800 font-bold">How It Works</h3>
          </div>

          <div className="text-gray-700">
            {/* Flex container with horizontal scroll on mobile */}
            <div className="features-container flex flex-wrap justify-center md:flex-nowrap items-top4 space-x-0 md:space-x-8 md:overflow-x-auto">
              {/* Step 1 */}
              <div className="text-center min-w-[250px]">
                <img
                  src={`${basePath}/images/touch.png`}
                  alt="Number One Icon"
                  style={{ width: "40px", height: "40px" }}
                  className="mx-auto"
                />
                <span className="block mt-4 text-gray-800 mb-6">
                  Tell your pet’s marvelous life story and upload your favorite
                  photos with our easy-to-use online tool!
                </span>
              </div>

              {/* Step 2 */}
              <div className="text-center min-w-[250px]">
                <img
                  src={`${basePath}/images/relax.png`}
                  alt="Number Two Icon"
                  style={{ width: "40px", height: "40px" }}
                  className="mx-auto"
                />
                <span className="block mt-4 text-gray-800 mb-6">
                  Heal at your own pace with full flexibility. Simply let us
                  know when you’re finished
                </span>
              </div>

              {/* Step 3 */}
              <div className="text-center min-w-[250px]">
                <img
                  src={`${basePath}/images/reading-book.png`}
                  alt="Number Three Icon"
                  style={{ width: "40px", height: "40px" }}
                  className="mx-auto"
                />
                <span className="block mt-4 text-gray-800">
                  Sit back & relax while we deliver a beautiful keepsake book
                  full of your stories and photos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
